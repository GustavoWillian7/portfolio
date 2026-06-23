import { useEffect, useRef } from "react";

const FONT_SIZE = 14;
const CHARS =
  "ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789@#%&";
const FPS_INTERVAL = 1000 / 18;

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let drops: number[] = [];
    let speeds: number[] = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const cols = Math.floor(canvas.width / FONT_SIZE);
      drops = Array.from({ length: cols }, () =>
        Math.floor(Math.random() * -(canvas.height / FONT_SIZE))
      );
      speeds = Array.from(
        { length: cols },
        () => 0.4 + Math.random() * 0.8
      );
    };

    let lastTime = 0;

    const draw = (time: number) => {
      animId = requestAnimationFrame(draw);
      if (time - lastTime < FPS_INTERVAL) return;
      lastTime = time;

      // Slow fade to create trailing glow effect
      ctx.fillStyle = "rgba(10, 10, 10, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${FONT_SIZE}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const y = Math.floor(drops[i]) * FONT_SIZE;

        if (drops[i] >= 0 && y < canvas.height) {
          const char = CHARS[Math.floor(Math.random() * CHARS.length)];
          // Head of the stream: bright, slightly white-tinted green
          ctx.fillStyle = "rgba(180, 255, 195, 0.55)";
          ctx.fillText(char, i * FONT_SIZE, y);
        }

        drops[i] += speeds[i];

        // Random reset when column exits the screen
        if (drops[i] * FONT_SIZE > canvas.height && Math.random() > 0.975) {
          drops[i] = Math.random() * -(canvas.height / FONT_SIZE);
        }
      }
    };

    init();
    window.addEventListener("resize", init);
    animId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", init);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default MatrixRain;
