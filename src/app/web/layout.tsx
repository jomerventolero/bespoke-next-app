import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <div className="w-full flex-none md:w-64">
        <Navbar />
      </div>
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}