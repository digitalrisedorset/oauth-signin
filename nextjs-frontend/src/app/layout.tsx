import AuthProvider from "@/components/SessionProvider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Next.js OAuth App",
    description: "OAuth authentication with NextAuth.js",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
        </body>
        </html>
    );
}
