"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { KeyRound, Mail, Phone, UserRoundPen } from "lucide-react";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { registerActions } from "../_actions/authActions";
import { toast } from "sonner";


const RegisterForm = () => {
  const [role, setRole] = useState("TENANT");

  const [state, action, pending] = useActionState(registerActions, false);

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success("Account created successfully!");

      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
    }
    if (!state.success) {
      toast.error(state.message || "Registration Failed!");
    }
  }, [state]);

  return (
    <form action={action} className="space-y-4">
      <Card className="p-5 ">
        {/* Name  */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-muted-foreground"
          >
            Full Name
          </label>

          <div className="relative">
            <UserRoundPen className="absolute left-3 top-3 h-5 w-5 text-muted-foreground pointer-events-none" />
            <Input
              name="name"
              type="text"
              placeholder="Your Name "
              className="pl-10 h-11"
              required
            />
          </div>
        </div>
        {/* Email  */}
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

        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block text-xs font-medium text-muted-foreground"
          >
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground pointer-events-none" />
            <Input
              name="phone"
              type="tel"
              placeholder="123456789"
              className="pl-10 h-11"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-xs font-medium text-muted-foreground"
          >
            Password
          </label>

          <div className="relative">
            <KeyRound className="absolute left-3 top-3 h-5 w-5 text-muted-foreground pointer-events-none" />
            <Input
              name="password"
              type="password"
              placeholder="••••••••"
              className="pl-10 h-11"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="role"
            className="block text-xs font-medium text-muted-foreground"
          >
            Role
          </label>
          <div className="relative ">
            <Select name="role" value={role} onValueChange={setRole}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="TENANT">Tenant</SelectItem>
                <SelectItem value="LANDLORD">Landlord</SelectItem>
                {/* <SelectItem value="ADMIN">Admin</SelectItem> */}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Submiting..." : "Register"}
        </Button>

        <p className="items-center justify-center text-xs mx-auto mt-[-10]">
          Already have an account?{" "}
          <Link href={"/login"} className="text-primary">
            Go for Login
          </Link>{" "}
        </p>
      </Card>
    </form>
  );
};

export default RegisterForm;
