"use server";
import User from "./models/user";
import Album from "./models/album";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connectToDatabase } from "./mongoDB";
import { LoginInputs, SignUpInputs, Status, UploadAlbum } from "./types";
import { cookies } from "next/headers";

export const signUpAction = async (data: SignUpInputs) => {
  await connectToDatabase();
  try {
    const { username, email, password } = data;

    if (!username || !email || !password) {
      throw new Error("All fields are required");
    }

    if (await User.findOne({ email: email })) {
      throw new Error("Email is already in use");
    }
    if (await User.findOne({ username: username })) {
      throw new Error("Username is already in use");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({ username, email, hashedPassword });
    const newUser = await user.save();
    if (newUser) {
      return {
        status: "success",
        message: "Successfully signed up.Log in again",
        data: newUser.username,
      } as Status;
    }
  } catch (error: any) {
    return { status: "error", message: error.message } as Status;
  }
};
export const signInAction = async (data: LoginInputs) => {
  await connectToDatabase();
  try {
    const { username, password } = data;

    if (!username || !password) {
      throw new Error("All fields are required");
    }
    const isUserExists = await User.findOne({ username: username });

    if (!isUserExists) {
      throw new Error("Invalid username");
    }

    const isPasswordCorrect =
      isUserExists &&
      (await bcrypt.compare(password, isUserExists.hashedPassword));

    if (!isPasswordCorrect) {
      throw new Error("Invalid password");
    }

    if (isUserExists && isPasswordCorrect) {
      const token = jwt.sign(
        {
          id: isUserExists._id,
          username: isUserExists.username,
          email: isUserExists.email,
        },
        process.env.JWT_SECRET || "12345678",
        { expiresIn: "5h" }
      );

      const cookieStore = cookies();
      cookieStore.set("authToken", token, {
        httpOnly: true,
        secure: true,
        maxAge: 21600,
        path: "/upload-album",
      });
      return {
        status: "success",
        message: `Welcome! ${isUserExists.username}`,
        data: isUserExists.username,
      } as Status;
    }
  } catch (error: any) {
    return { status: "error", message: error.message } as Status;
  }
};
export const uploadAlbumAction = async (data: UploadAlbum) => {
  await connectToDatabase();
  try {
    const {
      albumTitle,
      albumDescription,
      facebookAlbumLink,
      imageLinks,
      photographers,
    } = data;

    if (
      !albumTitle ||
      !albumDescription ||
      !facebookAlbumLink ||
      !imageLinks ||
      !photographers
    ) {
      throw new Error("All fields are required");
    }
    const isAlbumExists = await Album.findOne({ albumTitle });

    if (isAlbumExists) {
      throw new Error("Album with the same title already exists");
    }

    if (!isAlbumExists) {
      const album = new Album({ ...data });
      const newAlbum = await album.save();
      return {
        status: "success",
        message: `Successfully created album ${newAlbum.albumTitle}`,
      } as Status;
    }
  } catch (error: any) {
    return { status: "error", message: error.message } as Status;
  }
};
export const getAllAlbums = async () => {
  try {
    await connectToDatabase();
    const albums = await Album.find({});
    return albums;
  } catch (error) {
    console.error('Failed to fetch albums:', error);
    throw new Error('Failed to fetch albums');
  }
};