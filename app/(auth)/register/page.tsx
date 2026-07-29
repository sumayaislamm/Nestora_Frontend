"use client"

import { useEffect, useRef, useState } from "react";
import RegisterForm from "../_components/RegisterForm";
import NestoraBackground from "../_components/NestoraBackground";

function RegisterPage() {
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
    <div className="flex min-h-screen items-center justify-center bg-primary">
        <NestoraBackground />
        <div
          className=" space-y-2 pt-4 rounded-lg border bg-accent shadow-lg cursor-grab active:cursor-grabbing relative z-10 lg:w-125 lg:p-8 p-3 "
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
          onMouseDown={handleMouseDown}
        >
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