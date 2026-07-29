import RegisterForm from "../_components/RegisterForm";

function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-primary">
      <div className="w-full max-w-lg space-y-2 pt-4 rounded-lg border bg-accent shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create an Account</h1>
          <p className="text-gray-500">
            Fill in your details to get started
          </p>
        </div>

        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;