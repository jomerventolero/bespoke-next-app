import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LiveChat from "@/components/LiveChat";
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
      {/*<LiveChat /> */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var service1=document.createElement("script"), service0=document.getElementsByTagName("script")[0];
              service1.async=true;
              service1.src='https://embed.tawk.to/643cedfe31ebfa0fe7f8b26b/1gu703ag0';
              service1.charset='UTF-8';
              service1.setAttribute('crossorigin','*');
              service0.parentNode.insertBefore(service1,service0);
            })();
          `,
        }}
      />
    </main>
  );
}
