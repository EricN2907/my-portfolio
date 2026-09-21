export default function Hero() {
  return (
    <section className="mega-typo">
      <div className="mega-top">
        <span className="mega-name">NGUYEN HOANG NAM</span>
        <span className="mega-year">
          <svg className="deco-sparkle" viewBox="0 0 40 40">
            {/* Chú ý: stroke-width đổi thành strokeWidth, stroke-linecap thành strokeLinecap */}
            <path d="M20,15 L20,0 M10,15 L0,5 M30,15 L40,5" stroke="#E63946" strokeWidth="4" strokeLinecap="round" fill="none"/>
          </svg>
          2026
        </span>
      </div>
      
      <h1 className="mega-center">
        PORTFOLIO
        <svg className="deco-arrow" viewBox="0 0 80 50">
          <path d="M10,40 Q40,10 70,40" stroke="#E63946" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <polygon points="65,35 75,45 70,40" fill="#E63946"/>
        </svg>
      </h1>

      <div className="mega-bottom">
        <span className="mega-role">IT DEVELOPER</span>
      </div>
    </section>
  );
}