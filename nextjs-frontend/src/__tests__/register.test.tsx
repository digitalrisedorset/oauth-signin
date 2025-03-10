import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RegisterPage from "@/app/auth/register/page";
import { useRouter } from "next/navigation";

// Mock Next.js router
jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
}));

describe("Register Page", () => {
    let mockPush: jest.Mock;

    beforeEach(() => {
        jest.useFakeTimers(); // ✅ Initialize Fake Timers before each test
        mockPush = jest.fn();
        (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    });

    it("submits the form successfully and calls router.push", async () => {
        render(<RegisterPage />);

        fireEvent.change(screen.getByPlaceholderText("Enter your name"), { target: { value: "John" } });
        fireEvent.change(screen.getByPlaceholderText("Enter your email"), { target: { value: "john@example.com" } });
        fireEvent.change(screen.getByPlaceholderText("Enter your password"), { target: { value: "password123" } });
        fireEvent.change(screen.getByPlaceholderText("Confirm your password"), { target: { value: "password123" } });
    });
});
