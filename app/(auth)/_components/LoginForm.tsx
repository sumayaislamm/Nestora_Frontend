"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { loginActions } from "../_actions/authActions";

const LoginForm = () => {
  return (
    <form 
    action={loginActions}
    className="w-full space-y-6">   
      <Card className="p-5 space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-muted-foreground"
          >
            Your Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground pointer-events-none" />
            <Input
              name="email"
              type="email"
              placeholder="you@example.com"
              className="pl-10 h-11"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-muted-foreground"
          >
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground pointer-events-none" />
            <Input
              name="password"
              type="password"
              placeholder="••••••••"
              className="pl-10 h-11"
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full h-11 rounded-full font-semibold gap-2"
        >
          {" "}
          Sign In
          <ArrowRight className="h-4 w-4" />
        </Button>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href={"/register"}
              className="text-primary hover:underline font-medium"
            >
              Register here
            </Link>{" "}
          </p>
        </div>
      </Card>
    </form>
  );
};

export default LoginForm;
