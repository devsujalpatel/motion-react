import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
      className="bg-neutral-950 h-screen w-full flex items-center justify-center flex-col gap-4 [perspective::1000px] [transform-style:preserve-3d] "
    >
      <Button />
    </div>
  );
}
