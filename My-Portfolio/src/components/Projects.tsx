// src/components/Projects.tsx
import { useEffect, useState } from 'react';
import '../styles/Projects.css';

interface Project {
  id: number;
  title: string;
  category: 'web' | 'app' | 'design';
  image: string;
  description: string;
  technologies: string[];
  link: string;
  featured?: boolean;
}

type FilterType = 'all' | 'web' | 'app' | 'design';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // プロジェクトデータ
  useEffect(() => {
    // 実際のプロジェクト：通常はAPIからフェッチするか、ローカルJSONから読み込む
    const projectsData: Project[] = [
      {
        id: 1,
        title: '企業サイト',
        category: 'web',
        image: "/src/assets/img/IDEAL.jpg",
        description: 'ReactとNodeJSを用いた、採用代行企業様のWebサイトです。お問い合わせ機能からサイト内のアニメーションも使用し制作しました。',
        technologies: ['React', 'TypeScript', 'Firebase', 'NodeJS'],
        link: 'https://idealrecruit-bata.web.app',
        featured: true
      },
      {
        id: 2,
        title: 'レストラン予約アプリ',
        category: 'app',
        image: '/project2-placeholder.jpg',
        description: 'レストランの予約管理を効率化するモバイルアプリケーション。予約の作成、編集、キャンセル機能に加え、空席状況のリアルタイム表示や自動リマインダー機能を実装しています。',
        technologies: ['React Native', 'TypeScript', 'Firebase', 'Google Maps API'],
        link: 'https://example.com/project2',
        featured: true
      },
      {
        id: 3,
        title: 'コーポレートサイトリニューアル',
        category: 'web',
        image: '/project3-placeholder.jpg',
        description: '企業のブランディングを強化する、モダンで高速なウェブサイト。パフォーマンス最適化、SEO対策、アクセシビリティ改善を行い、ページ読み込み速度を従来の半分以下に短縮しました。',
        technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Netlify'],
        link: 'https://example.com/project3'
      },
      {
        id: 4,
        title: 'ポートフォリオデザインシステム',
        category: 'design',
        image: '/project4-placeholder.jpg',
        description: 'クリエイティブな専門家向けのポートフォリオテンプレート。再利用可能なコンポーネントとカスタマイズ可能なテーマを備えたデザインシステムを構築しました。',
        technologies: ['Figma', 'Adobe XD', 'Illustrator', 'Design Systems'],
        link: 'https://example.com/project4'
      },
      {
        id: 5,
        title: 'タスク管理ウェブアプリ',
        category: 'web',
        image: '/project5-placeholder.jpg',
        description: 'シンプルで使いやすいタスク管理ツール。ドラッグ&ドロップによるタスクの並べ替え、フィルタリング、タグ付け、リマインダー機能などを実装しています。',
        technologies: ['React', 'Redux', 'TypeScript', 'Firebase', 'Material UI'],
        link: 'https://example.com/project5'
      },
      {
        id: 6,
        title: 'フィットネスアプリUIデザイン',
        category: 'design',
        image: '/project6-placeholder.jpg',
        description: 'フィットネストラッカーアプリのUIデザイン。ユーザーの運動習慣を視覚的に分かりやすく表示し、モチベーション向上につながるデザインを目指しました。',
        technologies: ['Figma', 'Prototyping', 'UI/UX', 'Animation'],
        link: 'https://example.com/project6'
      },
      {
        id: 7,
        title: '旅行写真共有アプリ',
        category: 'app',
        image: '/project7-placeholder.jpg',
        description: '旅行者向けの写真共有アプリ。位置情報と連携した写真のマッピング、旅程管理、他のユーザーとの共有機能を実装しています。',
        technologies: ['React Native', 'Firebase', 'Google Maps API', 'Image Processing'],
        link: 'https://example.com/project7'
      },
      {
        id: 8,
        title: '音楽ストリーミングサービス',
        category: 'web',
        image: '/project8-placeholder.jpg',
        description: '独立アーティスト向けの音楽ストリーミングプラットフォーム。楽曲のアップロード、再生、プレイリスト作成、アーティスト分析ダッシュボードなどの機能を提供しています。',
        technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'Web Audio API'],
        link: 'https://example.com/project8',
        featured: true
      }
    ];
    
    setProjects(projectsData);
    setIsLoading(false);
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
    
  const featuredProjects = projects.filter(project => project.featured);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">プロジェクト</h2>
        <p className="section-subtitle">
          これまでに手がけた代表的なプロジェクトをご紹介します。
          各プロジェクトをクリックすると、詳細をご覧いただけます。
        </p>
        
        {/* フィーチャープロジェクト */}
        {featuredProjects.length > 0 && (
          <div className="featured-projects">
            <h3 className="featured-title">注目のプロジェクト</h3>
            <div className="featured-grid">
              {featuredProjects.map(project => (
                <div 
                  className="featured-card" 
                  key={project.id}
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="featured-image">
                    <img src={project.image} alt={project.title} />
                    <div className="featured-overlay">
                      <span className="view-details">詳細を見る</span>
                    </div>
                  </div>
                  <div className="featured-info">
                    <div className="featured-category">{project.category === 'web' ? 'ウェブ開発' : project.category === 'app' ? 'アプリ開発' : 'デザイン'}</div>
                    <h4 className="featured-title">{project.title}</h4>
                    <p className="featured-description">{project.description.substring(0, 100)}...</p>
                    <div className="featured-technologies">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span className="tech-tag" key={index}>{tech}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="tech-tag more">+{project.technologies.length - 3}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* フィルター */}
        <div className="filter-container">
          <div className="filter-label">プロジェクトを絞り込む:</div>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              すべて
              <span className="filter-count">{projects.length}</span>
            </button>
            <button 
              className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
              onClick={() => setFilter('web')}
            >
              ウェブ
              <span className="filter-count">{projects.filter(p => p.category === 'web').length}</span>
            </button>
            <button 
              className={`filter-btn ${filter === 'app' ? 'active' : ''}`}
              onClick={() => setFilter('app')}
            >
              アプリ
              <span className="filter-count">{projects.filter(p => p.category === 'app').length}</span>
            </button>
            <button 
              className={`filter-btn ${filter === 'design' ? 'active' : ''}`}
              onClick={() => setFilter('design')}
            >
              デザイン
              <span className="filter-count">{projects.filter(p => p.category === 'design').length}</span>
            </button>
          </div>
        </div>
        
        {/* プロジェクトグリッド */}
        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>プロジェクトを読み込んでいます...</p>
          </div>
        ) : (
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div className="project-card" key={project.id} onClick={() => handleProjectClick(project)}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <span className="view-details">詳細を見る</span>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description.substring(0, 80)}...</p>
                  <div className="project-technologies">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span className="tech-tag" key={index}>{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag more">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* もっと見るボタン */}
        <div className="view-more-container">
          <a href="https://github.com/Eve04lim?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            GitHubで他のプロジェクトを見る
            <i className="fa-brands fa-github btn-icon"></i>
          </a>
        </div>
        
        {/* プロジェクト詳細モーダル */}
        {modalOpen && selectedProject && (
          <div className="project-modal-overlay" onClick={closeModal}>
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <i className="fa-solid fa-times"></i>
              </button>
              
              <div className="modal-content">
                <div className="modal-image">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                </div>
                
                <div className="modal-info">
                  <span className="modal-category">
                    {selectedProject.category === 'web' ? 'ウェブ開発' : 
                     selectedProject.category === 'app' ? 'アプリ開発' : 'デザイン'}
                  </span>
                  <h3 className="modal-title">{selectedProject.title}</h3>
                  <p className="modal-description">{selectedProject.description}</p>
                  
                  <div className="modal-technologies">
                    <h4>使用技術：</h4>
                    <div className="tech-tags">
                      {selectedProject.technologies.map((tech, index) => (
                        <span className="tech-tag" key={index}>{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary modal-link"
                  >
                    プロジェクトを見る
                    <i className="fa-solid fa-external-link-alt btn-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;