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
import { ImagePlus } from "lucide-react";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const RegisterForm = () => {
  const [role, setRole] = useState("TENANT");
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };



  return (
     <form className="space-y-4">
   
      <Card className="p-5 ">
        {/* Profile Image */}
        <div className="flex flex-col items-center space-y-2">
          <label
            htmlFor="profileImage"
            className="relative flex h-15 w-15 cursor-pointer items-center justify-center rounded-full border border-dashed bg-muted overflow-hidden"
          >
            {previewImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={previewImage}
                alt="Profile preview"
                className="h-full w-full object-cover"
              />
            ) : (
              <ImagePlus className="h-6 w-6 text-muted-foreground" />
            )}
          </label>
          <input
            id="profileImage"
            name="profileImage"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          <span className="text-xs text-muted-foreground">
            Upload profile photo
          </span>
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium text-muted-foreground"
          >
            Full Name
          </label>
          <Input
            name="name"
            type="text"
            placeholder="Enter Your Name Here"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-medium text-muted-foreground"
          >
            Email
          </label>
          <Input
            name="email"
            type="email"
            placeholder="Enter Your Email Here"
            required
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-medium text-muted-foreground"
          >
            Phone Number
          </label>
          <Input
            name="phone"
            type="tel"
            placeholder="Enter Your Phone Number Here"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-xs font-medium text-muted-foreground"
          >
            Password
          </label>
          <Input
            name="password"
            type="password"
            placeholder="Enter Your Password Here"
            required
          />
        </div>

        <div>
          <label
            htmlFor="role"
            className="block text-xs font-medium text-muted-foreground"
          >
            Register As
          </label>
          <Select name="role" value={role} onValueChange={setRole}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="TENANT">Tenant</SelectItem>
              <SelectItem value="LANDLORD">Landlord</SelectItem>
              <SelectItem value="ADMIN">Admin</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="w-full">
          Register
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
