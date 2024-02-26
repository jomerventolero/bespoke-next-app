import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-dot-black/[0.2]">
      <Navbar />
    </main>
  );
}
