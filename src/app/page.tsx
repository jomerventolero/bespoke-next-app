import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MyStaffButtons from "@/components/MyStaffButtons";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import WhyChooseBespoke from "@/components/WhyChooseBespoke";

export default function Home() {
  return (
    <main className="flex flex-col justify-between sm:overflow-x-auto overflow-x-hidden overflow-y-clip">
      <Navbar />
      <HeroSection />
      <MyStaffButtons />
      <WhyChooseBespoke />
      <Testimonials />
      <Footer />
    </main>
  );
}
