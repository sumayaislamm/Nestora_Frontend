"use client"

import { useEffect, useRef, useState } from "react";
import React from "react";
import LoginForm from "./LoginForm";

const LoginCard = () => {
     // Card moving animation start
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragRef = useRef({ dragging: false, startX: 0, startY: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    dragRef.current = {
      dragging: true,
      startX: e.clientX - position.x,
      startY: e.clientY - position.y,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragRef.current.dragging) return;
      setPosition({
        x: e.clientX - dragRef.current.startX,
        y: e.clientY - dragRef.current.startY,
      });
    };
    const handleMouseUp = () => {
      dragRef.current.dragging = false;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [position]);
  // Card moving animation end
  return (
    <div
      className="cursor-grab active:cursor-grabbing relative z-10 w-full max-w-sm space-y-6 p-8  bg-accent rounded-lg border shadow-lg"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      onMouseDown={handleMouseDown}
    >
      {/* Form Text  */}
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Welcome Back</h1>
        <p className="text-gray-500">
          Enter your credentials to access your account
        </p>
      </div>

      {/* Form  */}
      <LoginForm />
    </div>
  );
};

export default LoginCard;
