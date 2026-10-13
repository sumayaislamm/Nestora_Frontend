
import LoginCard from "../_components/LoginCard";
import NestoraBackground from "../_components/NestoraBackground";

function LoginPage() {
  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-primary px-4">
      <NestoraBackground />
      <LoginCard />
    </main>
  );
}

export default LoginPage;
