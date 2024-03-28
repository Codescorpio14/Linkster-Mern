import { z } from "zod";

export const registerSchema = z
  .object({
    fName: z.string().trim(),
    lName: z.string().trim(),
    email: z.string().email(),
    country: z.string().trim().min(3),
    password: z.string().min(8),
    confPass: z.string().min(8),
    checked: z.boolean(),
  })
  .refine((data) => data.confPass === data.password, {
    path: ["confPass"],
    message: "Password must match",
  });

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const linkSchema = z.object({
  site: z.enum(["github", "youtube", "linkedin", "facebook"]),
  link: z.string().url(),
});
