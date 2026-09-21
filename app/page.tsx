import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BackgroundBlob from "@/components/BackgroundBlob";

import About from "@/components/About";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main>
      {/* Cục nền chạy theo chuột đặt trên cùng */}
      <BackgroundBlob />
      
      <Navbar />
      <Hero />

      <About />
      <TechStack />
      {/* Vẫn giữ div tạm này để cuộn màn hình nhé */}
      <div style={{ height: "1500px" }}></div>
    </main>
  );
}