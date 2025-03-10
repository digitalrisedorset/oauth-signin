import nextJest from "next/jest";

const createJestConfig = nextJest({
    dir: "./",
});

const customJestConfig = {
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/jest.setup.ts"], // ✅ Only one setup file
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    testMatch: ["**/__tests__/**/*.test.tsx"],
    roots: ["<rootDir>/src"],
};

export default createJestConfig(customJestConfig);
