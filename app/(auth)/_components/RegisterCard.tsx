
"use client";

import { motion } from "framer-motion";
import RegisterForm from "./RegisterForm";

const RegisterCard = () => {
  return (
    <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Create your account
          </h1>
          <p className="mt-2 text-sm ">
            Join Nestora and find your next space.
          </p>
        </div>

        <div className="rounded-2xl border border-border/70 bg-background/95 p-5 shadow-xl shadow-black/5 backdrop-blur-md sm:p-7">
          <RegisterForm />
        </div>

        <p className="mt-5 text-center text-xs ">
          Your next space starts here.
        </p>
      </motion.div>
    </div>
  );
};

export default RegisterCard;
