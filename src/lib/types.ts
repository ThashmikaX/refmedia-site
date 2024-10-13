import { z } from "zod";
import { loginSchema, signUpSchema, uploadAlbumSchema } from "./schemas";

export type LoginInputs = z.infer<typeof loginSchema>;
export type UploadAlbumInputs = z.infer<typeof uploadAlbumSchema>;
export type UploadAlbum = z.infer<typeof uploadAlbumSchema> & {
  images: File[] | undefined;
  imageLinks?: string[] | undefined;
  photographers: string[] | undefined;
  _id?: string;
};
export type SignUpInputs = z.infer<typeof signUpSchema>;

export type Status = {
  status: "default" | "success" | "error";
  message: string;
  data?: object;
};

export type RefreshTokenResponse = {
  newAccessToken: string;
  newRefreshToken: string;
  newAccessTokenExpiresIn: string;
  newRefreshTokenExpiresIn: string;
  message: string;
};
