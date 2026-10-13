
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  UserRoundPen,
  Mail,
  Phone,
  KeyRound,
  SquareAsterisk,
  Eye,
  EyeOff,
  Check,
  X,
} from "lucide-react";

import { FcGoogle } from "react-icons/fc";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { registerActions } from "../_actions/authActions";
import { toast } from "sonner";

const RegisterForm = () => {
  const [role, setRole] = useState("TENANT");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [state, action, pending] = useActionState(
    registerActions,
    false
  );

  const passwordsMatch =
    confirmPassword.length > 0 && password === confirmPassword;

  const passwordsMismatch =
    confirmPassword.length > 0 && password !== confirmPassword;

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success("Account created successfully!");

      const timeout = setTimeout(() => {
        window.location.href = "/login";
      }, 1000);

      return () => clearTimeout(timeout);
    }

    toast.error(state.message || "Registration failed!");
  }, [state]);

  const handleSocialLogin = (provider: string) => {
    toast.info(
      `${provider} sign-in is not configured yet.`
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (password !== confirmPassword) {
      e.preventDefault();
      toast.error("Passwords do not match!");
    }
  };

  return (
    <form
      action={action}
      onSubmit={handleSubmit}
      className="w-full space-y-6"
    >
      {/* Form Fields */}
      <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">

        {/* Full Name */}
        <div className="min-w-0 space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium"
          >
            Full Name
          </label>

          <div className="relative">
            <UserRoundPen
              size={18}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />

            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              className="h-12 pl-10"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="min-w-0 space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium"
          >
            Email Address
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
              className="h-12 pl-10"
              required
            />
          </div>
        </div>

        {/* Phone */}
        <div className="min-w-0 space-y-2">
          <label
            htmlFor="phone"
            className="text-sm font-medium"
          >
            Phone Number
          </label>

          <div className="relative">
            <Phone
              size={18}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />

            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter phone number"
              autoComplete="tel"
              className="h-12 pl-10"
              required
            />
          </div>
        </div>

        {/* Role */}
        <div className="min-w-0 space-y-2">
          <label
            htmlFor="role"
            className="text-sm font-medium"
          >
            Register As
          </label>

          <Select
            name="role"
            value={role}
            onValueChange={setRole}
          >
            <SelectTrigger id="role" className="h-12 w-full">
              <SelectValue placeholder="Choose your role" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="TENANT">Tenant</SelectItem>
              <SelectItem value="LANDLORD">Landlord</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Password */}
        <div className="min-w-0 space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium"
          >
            Password
          </label>

          <div className="relative">
            <KeyRound
              size={18}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />

            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              autoComplete="new-password"
              className="h-12 pl-10 pr-11"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="min-w-0 space-y-2">
          <label
            htmlFor="confirmPassword"
            className="text-sm font-medium"
          >
            Confirm Password
          </label>

          <div className="relative">
            <SquareAsterisk
              size={18}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />

            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter your password"
              autoComplete="new-password"
              className="h-12 pl-10 pr-11"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              aria-invalid={passwordsMismatch}
              required
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label={
                showConfirmPassword
                  ? "Hide confirm password"
                  : "Show confirm password"
              }
            >
              {showConfirmPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

          {passwordsMatch && (
            <p className="flex items-center gap-1 text-xs text-green-600">
              <Check size={14} />
              Passwords match
            </p>
          )}

          {passwordsMismatch && (
            <p className="flex items-center gap-1 text-xs text-destructive">
              <X size={14} />
              Passwords do not match
            </p>
          )}
        </div>
      </div>

      {/* Social Sign Up */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />

          <span className="shrink-0 text-xs text-muted-foreground">
            Or continue with
          </span>

          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button
            type="button"
            variant="outline"
            className="h-11 gap-2"
            onClick={() => handleSocialLogin("Google")}
          >
            <FcGoogle size={19} />
            Google
          </Button>

          <Button
            type="button"
            variant="outline"
            className="h-11 gap-2"
            onClick={() => handleSocialLogin("Facebook")}
          >
            <FaFacebookF
              size={16}
              className="text-[#1877F2]"
            />
            Facebook
          </Button>

          <Button
            type="button"
            variant="outline"
            className="h-11 gap-2"
            onClick={() => handleSocialLogin("Instagram")}
          >
            <FaInstagram
              size={18}
              className="text-[#E4405F]"
            />
            Instagram
          </Button>

          <Button
            type="button"
            variant="outline"
            className="h-11 gap-2"
            onClick={() => handleSocialLogin("LinkedIn")}
          >
            <FaLinkedinIn
              size={17}
              className="text-[#0A66C2]"
            />
            LinkedIn
          </Button>
        </div>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        className="h-12 w-full font-semibold"
        disabled={pending}
      >
        {pending ? "Creating account..." : "Create Account"}
      </Button>

      {/* Login */}
      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-primary underline-offset-4 hover:underline"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
