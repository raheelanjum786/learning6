import React, { useEffect, useRef } from "react";

const CursorWaveAnimation = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const wavesRef = useRef([]);

  // Color palette from App.css
  const colors = [
    "#172039",
    "#1d2a49",
    "#212f52",
    "#eee6db",
    "#efe8de",
    "#f3ede5",
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Wave class
    class Wave {
      constructor(x, y, color, size = 1) {
        this.x = x;
        this.y = y;
        this.originalX = x;
        this.originalY = y;
        this.color = color;
        this.size = size;
        this.opacity = 1;
        this.radius = 1;
        this.maxRadius = Math.random() * 800 + 200;
        this.speed = Math.random() * 0.02 + 0.01;
        this.angle = Math.random() * Math.PI * 2;
        this.frequency = Math.random() * 0.02 + 0.01;
        this.amplitude = Math.random() * 30 + 20;
        this.life = 1;
        this.decay = Math.random() * 0.005 + 0.002;
      }

      update(mouseX, mouseY) {
        // Follow cursor with smooth interpolation
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        this.x += dx * 0.05;
        this.y += dy * 0.05;

        // Wave motion
        this.angle += this.frequency;
        this.radius += this.speed;

        // Create wavy effect
        const waveX = Math.sin(this.angle) * this.amplitude;
        const waveY = Math.cos(this.angle * 1.5) * this.amplitude * 0.7;

        this.x += waveX * 0.1;
        this.y += waveY * 0.1;

        // Fade out over time
        this.life -= this.decay;
        this.opacity = Math.max(0, this.life);

        return this.life > 0;
      }

      draw(ctx) {
        if (this.opacity <= 0) return;

        ctx.save();
        ctx.globalAlpha = this.opacity * 0.6;

        // Create gradient for wave
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius
        );

        gradient.addColorStop(0, this.color + "80");
        gradient.addColorStop(0.5, this.color + "40");
        gradient.addColorStop(1, this.color + "00");

        ctx.fillStyle = gradient;

        // Draw wavy circle
        ctx.beginPath();
        const points = 32;
        for (let i = 0; i <= points; i++) {
          const angle = (i / points) * Math.PI * 2;
          const waveOffset = Math.sin(angle * 4 + this.angle * 2) * 10;
          const radius = this.radius + waveOffset;
          const x = this.x + Math.cos(angle) * radius;
          const y = this.y + Math.sin(angle) * radius;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        ctx.fill();

        // Add inner glow
        ctx.globalAlpha = this.opacity * 0.3;
        ctx.fillStyle = this.color + "60";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 0.3, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      // Create new waves at cursor position
      if (Math.random() < 0.3) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const wave = new Wave(e.clientX, e.clientY, color);
        wavesRef.current.push(wave);

        // Limit number of waves
        if (wavesRef.current.length > 15) {
          wavesRef.current.shift();
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw waves
      wavesRef.current = wavesRef.current.filter((wave) => {
        const alive = wave.update(mouseRef.current.x, mouseRef.current.y);
        if (alive) {
          wave.draw(ctx);
        }
        return alive;
      });

      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    document.addEventListener("mousemove", handleMouseMove);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("mousemove", handleMouseMove);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
      style={{
        mixBlendMode: "screen",
        opacity: 0.8,
      }}
    />
  );
};

export default CursorWaveAnimation;
