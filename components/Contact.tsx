export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <p style={{ textAlign: "center", color: "var(--text-muted)", marginBottom: "40px", marginTop: "-20px" }}>
        Để lại lời nhắn và mình sẽ phản hồi sớm nhất có thể!
      </p>
      
      <div className="contact-form-container">
        <form className="contact-form" action="mailto:nemnguyenhoang2907@gmail.com" method="POST" encType="text/plain">
          <div className="input-group">
            <input type="text" name="Name" placeholder="Tên của bạn" required />
          </div>
          <div className="input-group">
            <input type="email" name="Email" placeholder="Email của bạn" required />
          </div>
          <div className="input-group">
            <textarea name="Message" rows={5} placeholder="Lời nhắn của bạn..." required></textarea>
          </div>
          <button type="submit" className="submit-btn form-submit-btn">
            Gửi Lời Nhắn <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </section>
  );
}