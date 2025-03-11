import {passwordSchema} from "@/validation/passwordSchema";
import {z} from "zod";

export const passwordMatchSchema = z.object({
    password: passwordSchema,
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});