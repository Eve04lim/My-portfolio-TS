// src/components/Footer.tsx
import { useEffect, useState } from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,154.7C1248,181,1344,203,1392,213.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      
      <div className="container">
        <div className="footer-top">
          <div className="footer-info">
            <div className="footer-logo">
              <a href="#hero">
                <span className="logo-text">My<span className="text-gradient">Portfolio</span></span>
              </a>
            </div>
            <p className="footer-description">
              Web開発とUIデザインを専門とするフリーランサー。
              使いやすく美しいデジタル体験の創造に情熱を持っています。
            </p>
            <div className="footer-social">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-links-container">
            <div className="footer-links">
              <h3 className="footer-links-title">ナビゲーション</h3>
              <ul>
                <li><a href="#hero">ホーム</a></li>
                <li><a href="#about">自己紹介</a></li>
                <li><a href="#skills">スキル</a></li>
                <li><a href="#projects">プロジェクト</a></li>
                <li><a href="#contact">お問い合わせ</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h3 className="footer-links-title">サービス</h3>
              <ul>
                <li><a href="#services">Webデザイン</a></li>
                <li><a href="#services">UI/UXデザイン</a></li>
                <li><a href="#services">Webアプリ開発</a></li>
                <li><a href="#services">モバイルアプリ開発</a></li>
                <li><a href="#services">CMS構築</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h3 className="footer-links-title">お問い合わせ</h3>
              <ul className="contact-list">
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  <span>東京都渋谷区</span>
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  <span>example@portfolio.com</span>
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i>
                  <span>03-1234-5678</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} MyPortfolio. All Rights Reserved.
          </p>
          <div className="footer-legal">
            <a href="#privacy">プライバシーポリシー</a>
            {/* 縦線を削除して縦並びに変更 */}
            <a href="#terms">利用規約</a>
          </div>
        </div>
      </div>
      
      {showScrollTop && (
        <button 
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="トップへスクロール"
        >
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      )}
    </footer>
  );
};

export default Footer;