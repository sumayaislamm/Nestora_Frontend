import LoginCard from "../_components/LoginCard";
import NestoraBackground from "../_components/NestoraBackground";

function LoginPage() {
  // console.log(process.env.BACKEND_API_URL);

  return (
    <>
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <NestoraBackground />
        <LoginCard></LoginCard>
      </div>
    </>
  );
}

export default LoginPage;
