// src/components/About.tsx
import React from 'react';
import '../styles/About.css';


const About: React.FC = () => {
  // 経験と実績のデータ
  const stats = [
    { number: '2+', label: '年の経験', icon: 'fa-solid fa-code' },
    { number: '50+', label: 'プロジェクト完了', icon: 'fa-solid fa-briefcase' },
    { number: '20+', label: '満足いただいたクライアント', icon: 'fa-solid fa-users' },
    { number: '10+', label: '受賞歴', icon: 'fa-solid fa-trophy' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">自己紹介</h2>
        <p className="section-subtitle">
          私のバックグラウンド、スキル、そして情熱についてお話しします。
        </p>
        
        <div className="about-content">
          <div className="about-image-container">
            <div className="about-image">
              <img src="/images/parasitedejavu-my.jpg" alt="自己紹介画像" className="main-image" />
              <div className="image-pattern"></div>
              <div className="image-badge">2年の<br />経験</div>
            </div>
          </div>
          
          <div className="about-text">
            <div className="about-heading">
              <span className="about-greeting">こんにちは！</span>
              <h3 className="about-name">
                私は <span className="text-gradient">木脇優太</span> です
              </h3>
              <p className="about-position">
                <span className="position-icon">
                  <i className="fa-solid fa-laptop-code"></i>
                </span>
                Webデベロッパー & UI/UXデザイナー
              </p>
            </div>
            
            <div className="about-description">
              <p>
                <span className="highlight">2年以上の経験</span>を持つフロントエンド開発者として、使いやすく美しいウェブサイトやアプリケーションの制作に情熱を持っています。
              </p>
              <p>
                ReactやVueなどのモダンなフレームワークを活用し、ユーザーが直感的に操作できるインターフェースを設計・実装することを得意としています。常に新しい技術を学び、トレンドに敏感であることを心がけています。
              </p>
              <p>
                趣味は読書と旅行で、新しい場所や文化に触れることで、デザインのインスピレーションを得ることもあります。チームでの協力や、クライアントとの密なコミュニケーションを大切にし、プロジェクトを成功に導くことに喜びを感じています。
              </p>
            </div>
            
            <div className="about-buttons">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                履歴書をダウンロード
                <i className="fa-solid fa-download btn-icon"></i>
              </a>
              <a href="#contact" className="btn btn-secondary">
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
        
        <div className="about-stats">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <div className="stat-icon">
                <i className={stat.icon}></i>
              </div>
              <div className="stat-content">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="about-extra">
          <div className="about-education">
            <div className="section-header">
              <h3 className="subsection-title">
                <i className="fa-solid fa-graduation-cap section-icon"></i>
                学歴
              </h3>
            </div>
            
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-date">2022 - 2026</div>
                  <h4 className="timeline-title">法学士</h4>
                  <p className="timeline-institution">摂南大学</p>
                  <p className="timeline-description">
                    民法、刑法、憲法と日本の法律のあらゆる分野を学習し単位取得。その中でも民法に焦点を多く当てて研究を行い法学部の学士号を取得。
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-date">2026 - 今後</div>
                  <h4 className="timeline-title">未定</h4>
                  <p className="timeline-institution">未定</p>
                  <p className="timeline-description">
                    未定
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-experience">
            <div className="section-header">
              <h3 className="subsection-title">
                <i className="fa-solid fa-briefcase section-icon"></i>
                職歴
              </h3>
            </div>
            
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-date">2022 - 現在</div>
                  <h4 className="timeline-title">フロントエンド開発者</h4>
                  <p className="timeline-institution">合同会社IDEAL RECRUIT</p>
                  <p className="timeline-description">
                    モダンなWebアプリケーションの設計と開発をリード。React、TypeScript、Next.jsを使用したプロジェクトを担当し、ユーザー体験の向上とパフォーマンスの最適化に貢献。
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-date">2022 - 現在</div>
                  <h4 className="timeline-title">バックエンドエンジニア</h4>
                  <p className="timeline-institution">合同会社IDEAL RECRUIT</p>
                  <p className="timeline-description">
                    EC事業者向けに業務効率化ツールの作成・運用を担当。Python、HTML、CSS、JavaScriptを使用した開発に従事
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;