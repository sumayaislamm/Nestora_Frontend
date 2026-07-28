'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      size: number;
    }> = [];

    const createParticles = (x: number, y: number) => {
      for (let i = 0; i < 8; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          life: 1,
          size: Math.random() * 3 + 1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.1; // gravity
        p.life -= 0.02;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = p.life * 0.5;
        ctx.fillStyle = `hsl(280, 60%, ${50 + p.life * 30}%)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });

      if (Math.random() > 0.8) {
        createParticles(x, y);
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    return () => canvas.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-background overflow-hidden">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-auto"
      />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-2xl">
          {/* Animated 404 text */}
          <div className="mb-8 overflow-hidden">
            <div className="animate-pulse">
              <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary mb-2">
                404
              </h1>
            </div>
          </div>

          {/* Main message */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Page not found
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto">
            The page you&apos;re looking for seems to have wandered off. Let us help you find your way back home.
          </p>

          {/* Decorative element */}
          <div className="flex justify-center gap-2 mb-12">
            <div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-2 h-2 rounded-full bg-accent/40 animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
            >
              <Home className="w-5 h-5" />
              Go Home
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-all duration-300 font-semibold text-foreground"
            >
              Go Back
            </button>
          </div>

          {/* Footer text */}
          <p className="mt-12 text-sm text-muted-foreground">
            Error code: <span className="font-mono font-bold text-accent">404</span>
          </p>
        </div>
      </div>
    </div>
  );
}