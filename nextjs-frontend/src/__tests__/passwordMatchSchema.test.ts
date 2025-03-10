import { passwordMatchSchema } from "@/validation/passwordMatchSchema";
import { z } from "zod";

describe("Password Validation Schema", () => {
    it("should pass when passwords match and meet length requirements", () => {
        expect(() =>
            passwordMatchSchema.parse({
                password: "StrongPass123!",
                confirmPassword: "StrongPass123!",
            })
        ).not.toThrow();
    });

    it("should fail when passwords do not match", () => {
        try {
            passwordMatchSchema.parse({
                password: "StrongPass123!",
                confirmPassword: "WrongPass123!",
            });
        } catch (error) {
            if (error instanceof z.ZodError) {
                expect(error.errors[0].message).toBe("Passwords do not match");
            }
        }
    });

    it("should fail when password is too short", () => {
        try {
            passwordMatchSchema.parse({
                password: "123",
                confirmPassword: "123",
            });
        } catch (error) {
            if (error instanceof z.ZodError) {
                expect(error.errors[0].message).toBe("Password must be at least 6 characters");
            }
        }
    });

    it("should fail when confirmPassword is empty", () => {
        try {
            passwordMatchSchema.parse({
                password: "StrongPass123!",
                confirmPassword: "",
            });
        } catch (error) {
            if (error instanceof z.ZodError) {
                expect(error.errors[0].message).toBe("Passwords do not match");
            }
        }
    });
});
