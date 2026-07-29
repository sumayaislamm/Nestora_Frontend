"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";
import RegisterForm from "./RegisterForm";

const RegisterCard = () => {
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
      className=" rounded-lg border bg-accent shadow-lg cursor-grab active:cursor-grabbing relative z-10 lg:w-125 w-90 lg:px-8 p-3 "
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      onMouseDown={handleMouseDown}
    >
      <div className=" text-center">
        <h1 className="text-3xl font-bold">Create an Account</h1>
        <p className="text-gray-500 mb-2">Fill in your details to get started</p>
      </div>

      <RegisterForm />
    </div>
  );
};

export default RegisterCard;
