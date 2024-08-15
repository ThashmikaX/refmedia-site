import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address")
    .optional(),
  username: z.string().min(1, "Username is required"),
  password: z.string().min(8, "Password is too short"),
});

export const signUpSchema = loginSchema
  .extend({
    confirmPassword: z.string().min(8, "Password is too short"),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "Passwords must match!",
      path: ["confirmPassword"],
    }
  );
export const uploadAlbumSchema = z.object({
  albumTitle: z.string().min(1, "Album title is required"),
  eventDate: z.string().min(1, "Event date is required"),
  albumDescription: z.string().min(1, "Album description is required"),
  facebookAlbumLink: z.string().url("Please enter a valid URL"),
});
