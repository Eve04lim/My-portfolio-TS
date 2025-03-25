// src/components/Projects.tsx
import React, { useEffect, useState } from 'react';
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
        image: "/images/IDEAL.jpg",
        description: 'ReactとNodeJSを用いた、採用代行企業様のWebサイトです。お問い合わせ機能からサイト内のアニメーションも使用し制作しました。',
        technologies: ['React', 'TypeScript', 'Firebase', 'NodeJS'],
        link: 'https://idealrecruit-bata.web.app',
        featured: true
      },
      {
        id: 2,
        title: 'EC商品自動追跡app',
        category: 'app',
        image: '/images/EC-tool_hp.png',
        description: 'Amazon,楽天,yahoo等のECサイトから自動で追跡したい商品を追加し、その後は自動で目的の商品を追跡するようになっています。',
        technologies: ['Python', 'Flask', 'Supabase', 'Heroku'],
        link: 'https://ec-price-tracker-a5bd86819ce4.herokuapp.com/',
        featured: true
      },
      {
        id: 3,
        title: 'AI自動要約ツール',
        category: 'web',
        image: '/images/ai-summary-tool.jpeg',
        description: 'AI自動要約ツールは、Google Gemini APIを活用した革新的な文書要約アプリケーションです。テキスト、PDF、Word、Excelなど、多様なファイル形式の文書を瞬時に要約し、ビジネスや研究における情報処理を効率化します。',
        technologies: ['Python', 'Streamlit', 'Google Generative AI', 'Supabase', 'Streamlit Community Cloud'],
        link: 'https://ai-summary-tool-tu8jravhdfk9bmymulh2eg.streamlit.app/'
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