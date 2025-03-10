import {passwordSchema} from "@/validation/passwordSchema";
import {z} from "zod";

export const passwordMatchSchema = z.object({
    password: passwordSchema,
    passwordConfirm: z.string()
}).superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirm) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["passwordConfirm"],
            message: "Passwords do no match"
        })
    }
})