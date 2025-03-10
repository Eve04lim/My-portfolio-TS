// src/components/Hero.tsx
import '../styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg-elements">
        <div className="hero-shape shape-1"></div>
        <div className="hero-shape shape-2"></div>
        <div className="hero-shape shape-3"></div>
        <div className="hero-particles"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">こんにちは、私は</p>
            <h1 className="hero-title">
              <span className="text-gradient">木脇優太</span>です
            </h1>
            <h2 className="hero-subtitle">
              Webデベロッパー & UI/UXデザイナー
            </h2>
            <p className="hero-description">
              クリエイティブなソリューションで、あなたのアイデアを形にします。
              使いやすく美しいウェブサイトとアプリケーションを制作することに情熱を持っています。
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                プロジェクトを見る
                <i className="fa-solid fa-arrow-right btn-icon"></i>
              </a>
              <a href="#contact" className="btn btn-secondary">
                お問い合わせ
              </a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/Eve04lim" target="_blank" rel="noopener noreferrer" 
                 aria-label="GitHub" className="social-icon">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://x.com/Nagi_silence26" target="_blank" rel="noopener noreferrer" 
                 aria-label="Twitter" className="social-icon">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" 
                 aria-label="LinkedIn" className="social-icon">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/w_eve_k/" target="_blank" rel="noopener noreferrer" 
                 aria-label="Instagram" className="social-icon">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="hero-image-container">
            <div className="hero-image">
              <div className="image-wrapper">
                <img src="/src/assets/img/my-profile-img.jpg" alt="プロフィール画像" className="profile-image" />
                <div className="image-backdrop"></div>
              </div>
              <div className="floating-card card-experience">
                <span className="card-icon"><i className="fa-solid fa-code"></i></span>
                <div className="card-content">
                  <span className="card-number">2+</span>
                  <span className="card-text">年の経験</span>
                </div>
              </div>
              <div className="floating-card card-projects">
                <span className="card-icon"><i className="fa-solid fa-briefcase"></i></span>
                <div className="card-content">
                  <span className="card-number">50+</span>
                  <span className="card-text">プロジェクト</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <span className="scroll-text">スクロールして詳細を見る</span>
          <span className="scroll-icon">
            <i className="fa-solid fa-chevron-down"></i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;