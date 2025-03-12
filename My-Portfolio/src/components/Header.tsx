// src/components/Header.tsx
import React, { useEffect, useState } from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // スクロール検出
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <a href="#hero">
            <span className="logo-text">My<span className="text-gradient">Portfolio</span></span>
          </a>
        </div>
        
        <div 
          className={`menu-icon ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#hero" onClick={() => setIsMenuOpen(false)}>ホーム</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>自己紹介</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>スキル</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>プロジェクト</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>お問い合わせ</a></li>
            <li className="nav-button">
              <a 
                href="#contact" 
                className="btn btn-primary contact-btn"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;