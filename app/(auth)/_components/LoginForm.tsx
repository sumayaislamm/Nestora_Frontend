"use client";

import { useActionState, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Lock, Mail, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginActions } from "../_actions/authActions";
import { toast } from "sonner";
import {
  FaGoogle,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const LoginForm = () => {
  const [state, action, pending] = useActionState(loginActions, false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message || "Login successful!");
    } else {
      toast.error(state.message || "Login failed!");
    }
  }, [state]);

  const handleSocialLogin = (provider: string) => {
    toast.info(
      `${provider} sign-in is not configured yet. Please use your email and password.`,
    );
  };

  return (
    <div className="w-full">
      <form action={action} className="space-y-5">
        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email address
          </label>

          <div className="relative">
            <Mail
              size={18}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              className="h-12 rounded-xl pl-10 transition-shadow focus-visible:ring-2 focus-visible:ring-primary/20"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>

          <div className="relative">
            <Lock
              size={18}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              autoComplete="current-password"
              className="h-12 rounded-xl pl-10 pr-11 transition-shadow focus-visible:ring-2 focus-visible:ring-primary/20"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="h-12 w-full gap-2 rounded-xl font-semibold shadow-sm transition-transform hover:-translate-y-0.5"
          disabled={pending}
        >
          {pending ? "Signing in..." : "Sign in"}
          <ArrowRight size={18} />
        </Button>
      </form>

      {/* Divider */}
      <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">OR CONTINUE WITH</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* Social login buttons */}
      <div className="grid grid-cols-2 gap-3">
          <Button
            type="button"
            variant="outline"
            className="h-11 gap-2 rounded-xl"
            onClick={() => handleSocialLogin("Google")}
          >
            <FaGoogle className="h-4 w-4 text-[#4285F4]" />
            Google
          </Button>

          <Button
            type="button"
            variant="outline"
            className="h-11 gap-2 rounded-xl"
            onClick={() => handleSocialLogin("Facebook")}
          >
            <FaFacebookF className="h-4 w-4 text-[#1877F2]" />
            Facebook
          </Button>

          <Button
            type="button"
            variant="outline"
            className="h-11 gap-2 rounded-xl"
            onClick={() => handleSocialLogin("Instagram")}
          >
            <FaInstagram className="h-4 w-4 text-[#E4405F]" />
            Instagram
          </Button>

          <Button
            type="button"
            variant="outline"
            className="h-11 gap-2 rounded-xl"
            onClick={() => handleSocialLogin("LinkedIn")}
          >
            <FaLinkedinIn className="h-4 w-4 text-[#0A66C2]" />
            LinkedIn
          </Button>
      </div>

      {/* Register link */}
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-semibold text-primary underline-offset-4 hover:underline"
        >
          Create account
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
