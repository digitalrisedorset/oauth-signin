import AuthButton from "@/components/AuthButton";

export default function Home() {
  return (
      <main className="flex flex-col items-center justify-center min-h-screen p-6">
        <h1 className="text-3xl font-bold">Next.js OAuth Authentication</h1>
        <AuthButton />
      </main>
  );
}
