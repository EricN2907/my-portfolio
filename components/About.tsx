export default function About() {
  return (
    <>
      <section className="hero-profile">
        {/* Nhớ thẻ img phải có /> ở cuối */}
        <img src="https://avatars.githubusercontent.com/u/136496226?v=4" alt="Hoang Nam Profile" className="profile-pic" />
        <div className="action-buttons">
          {/* File PDF của bạn đã nằm trong thư mục public, nên href cứ để tên file là được */}
          <a href="/Nguyen-Hoang-Nam-CV.pdf" target="_blank" className="btn btn-outline">Download CV</a>
          <a href="#contact" className="btn btn-outline">Contact</a>
        </div>
        
        {/* Chú ý cách viết inline style trong React */}
        <div className="social-icons" style={{ marginTop: "20px" }}>
          <a href="https://github.com/EricN2907" target="_blank"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.facebook.com/Nemsadboiz2907" target="_blank"><i className="fa-brands fa-facebook"></i></a>
          <a href="mailto:nemnguyenhoang2907@gmail.com"><i className="fa-solid fa-envelope"></i></a>
        </div>
      </section>

      <section id="about" className="quotes-section">
        <h2 className="section-title">My Philosophy</h2>
        <div className="quotes-grid">
          <div className="quote-card primary-quote">
            <i className="fa-solid fa-quote-left quote-icon"></i>
            <p className="bio-text">&quot;Cuộc sống không phải lúc nào cũng màu hồng, muốn thấy cầu vồng phải chấp nhận những cơn mưa.&quot;</p>
          </div>
          <div className="quote-card secondary-quote">
            <i className="fa-solid fa-bolt quote-icon-small"></i>
            <p>Hãy chơi code và đừng để code chơi</p>
          </div>
          <div className="quote-card secondary-quote">
            <i className="fa-solid fa-wand-magic-sparkles quote-icon-small"></i>
            <p>If ur life didn&apos;t create a miracle, then create ones</p>
          </div>
        </div>
      </section>
    </>
  );
}