"use server";
import {
  LoginInputs,
  RefreshTokenResponse,
  SignUpInputs,
  Status,
  UploadAlbum,
} from "./types";
import { axiosPublic } from "./axios";
import { isAxiosError } from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth-options";

export const signUpAction = async (data: SignUpInputs) => {
  try {
    const response = await axiosPublic.post("/auth/register", data);
    return {
      status: "success",
      data: response.data,
      message: response.status === 201 && "Successfully registered.",
    } as Status;
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        status: "error",
        message: error.response?.data.message,
      } as Status;
    }
  }
};

export const signInAction = async (data: LoginInputs) => {
  try {
    const response = await axiosPublic.post("/auth/login", data);
    return {
      status: "success",
      data: response.data,
      message: response.status === 200 && "Login successful! Welcome back.",
    } as Status;
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        status: "error",
        message: error.response?.data.message,
      } as Status;
    }
  }
};

export const refreshAccessToken = async (refreshToken: string) => {
  try {
    const response = await axiosPublic.get("/auth/refresh", {
      headers: {
        Cookie: `refreshToken=${refreshToken}`,
      },
    });

    const data = response.data as RefreshTokenResponse;
    return {
      data,
      message: response.data.message,
      status: "success",
    } as Status;
  } catch (error) {
    console.error(error);
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "Failed to refresh token"
      );
    }
    throw error;
  }
};

export const uploadAlbumAction = async (formData: FormData) => {
  const session = await getServerSession(authOptions);

  try {
    // Send the formData via Axios
    const response = await axiosPublic.post("/album/create", formData, {
      headers: {
        Cookie: `accessToken=${session?.tokenInfo.accessToken}; refreshToken=${session?.tokenInfo.refreshToken}`,
        "Content-Type": "multipart/form-data", // Important for file uploads
      },
    });

    return {
      status: "success",
      data: response.data,
      message: response.status === 201 && "Successfully created a new album.",
    } as Status;
  } catch (error) {
    console.error(error);
    if (isAxiosError(error)) {
      return {
        status: "error",
        message: error.response?.data.message,
      } as Status;
    }
  }
};

export const fetchAllAlbums = async (data: {
  year: number;
  month: number;
}): Promise<Status> => {
  try {
    const response = await axiosPublic.get(
      `/album/get-all?year=${data.year}&month=${data.month}`
    );
    console.log(response);
    return {
      status: "success",
      data: response.data.albums as UploadAlbum[],
      message: response.status === 201 && "Successfully created a new album.",
    } as Status;
  } catch (error) {
    console.log(error);
    if (isAxiosError(error)) {
      return {
        status: "error",
        message: error.response?.data.message,
      } as Status;
    }
    return {
      status: "error",
      message: "An unknown error occurred",
    };
  }
};
