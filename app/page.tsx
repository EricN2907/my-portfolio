import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      
      <div style={{ height: "2000px", padding: "100px" }}>
        {/* Div này mình tạo tạm để làm dài trang web ra, cho bạn cuộn thử xem Navbar có nổi (floating) như cũ không thôi */}
        <h1>Website Portfolio Next.js của EricN2907</h1>
        <p>Bên dưới sẽ là các phần Hero, Projects... mình làm sau nhé.</p>
      </div>
    </main>
  );
}