import Navbar from "@/components/Navbar";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <Navbar />
      </div>
      <div className="">{children}</div>
    </div>
  );
}