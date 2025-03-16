import { z } from "zod";

export const registerSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Email must be a string.",
    })
    .trim()
    .min(1, "Email is required.")
    .max(255, "Maximum 255 characters allowed.")
    .email("Enter a valid email address."),
  password: z
    .string({
      invalid_type_error: "Password must be a string.",
    })
    .min(1, "Password is required.")
    .max(72, "Maximum 72 characters allowed."),
  confirmPassword: z
    .string({
      invalid_type_error: "Confirm password must be a string.",
    })
    .min(1, "Confirm password is required.")
    .max(72, "Maximum 72 characters allowed."),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
