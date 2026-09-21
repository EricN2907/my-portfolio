export default function Footer() {
  return (
    <footer className="footer-new">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-item">
            <i className="fa-solid fa-location-dot"></i>
            <span>Ho Chi Minh City, Vietnam</span>
          </div>
          <div className="footer-item">
            <i className="fa-solid fa-phone"></i>
            <span>0825 561 297</span>
          </div>
          <div className="footer-item">
            <i className="fa-solid fa-envelope"></i>
            <span>nemnguyenhoang2907@gmail.com</span>
          </div>
        </div>
        
        <div className="footer-right">
          <h3>About Me</h3>
          <p>I am a passionate Backend Developer focused on building robust APIs, clean system architecture, and scalable server-side solutions. Always eager to learn and take on new challenges.</p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/Nemsadboiz2907" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/EricN2907" target="_blank"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; All Rights Reserved | EricN</p>
      </div>
    </footer>
  );
}