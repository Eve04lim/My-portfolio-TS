// src/components/Skills.tsx
import React, { useState } from 'react';
import '../styles/Skills.css';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('frontend');
  
  const skillCategories: Record<string, SkillCategory> = {
    frontend: {
      title: 'フロントエンド',
      skills: [
        { name: 'HTML/CSS', level: 90, icon: 'fa-brands fa-html5' },
        { name: 'JavaScript', level: 80, icon: 'fa-brands fa-js' },
        { name: 'TypeScript', level: 80, icon: 'fa-solid fa-code' },
        { name: 'React', level: 80, icon: 'fa-brands fa-react' },
        { name: 'Vue.js', level: 70, icon: 'fa-brands fa-vuejs' },
        { name: 'Tailwind CSS', level: 70, icon: 'fa-solid fa-wind' },
      ]
    },
    backend: {
      title: 'バックエンド',
      skills: [
        { name: 'Node.js', level: 50, icon: 'fa-brands fa-node-js' },
        { name: 'Python', level: 80, icon: 'fa-brands fa-python' },
        { name: 'MySQL', level: 60, icon: 'fa-solid fa-database' },
        { name: 'Firebase', level: 70, icon: 'fa-solid fa-fire' },
        { name: 'AWS', level: 70, icon: 'fa-solid fa-database' }
      ]
    },
    design: {
      title: 'デザイン',
      skills: [
        { name: 'Figma', level: 90, icon: 'fa-brands fa-figma' },
        { name: 'UI/UX Design', level: 88, icon: 'fa-solid fa-palette' },
      ]
    },
    tools: {
      title: '開発ツール',
      skills: [
        { name: 'Git/GitHub', level: 90, icon: 'fa-brands fa-git-alt' },
        { name: 'VS Code', level: 90, icon: 'fa-solid fa-code' },
        { name: 'Cursor', level: 90, icon: 'fa-solid fa-code' },
        { name: 'Vite', level: 70, icon: 'fa-solid fa-bolt' },
        { name: 'Docker', level: 40, icon: 'fa-brands fa-docker' },
      ]
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">スキル</h2>
        <p className="section-subtitle">
          私が持っているスキルセットをご紹介します。常に新しいテクノロジーを学び、
          スキルを磨いています。
        </p>
        
        <div className="skills-category-tabs">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button 
              key={key}
              className={`category-tab ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              {key === 'frontend' && <i className="fa-solid fa-code tab-icon"></i>}
              {key === 'backend' && <i className="fa-solid fa-server tab-icon"></i>}
              {key === 'design' && <i className="fa-solid fa-palette tab-icon"></i>}
              {key === 'tools' && <i className="fa-solid fa-toolbox tab-icon"></i>}
              {category.title}
            </button>
          ))}
        </div>
        
        <div className="skills-content">
          {Object.entries(skillCategories).map(([key, category]) => (
            <div 
              key={key}
              className={`skills-category ${activeCategory === key ? 'active' : ''}`}
            >
              <div className="skills-grid">
                {category.skills.map((skill, index) => (
                  <div 
                    className="skill-card" 
                    key={index}
                    style={{ 
                      animationDelay: `${0.1 * index}s`,
                      opacity: 0
                    }}
                  >
                    <div className="skill-icon">
                      <i className={skill.icon}></i>
                    </div>
                    <div className="skill-info">
                      <h3 className="skill-name">{skill.name}</h3>
                      <div className="skill-level-container">
                        <div className="skill-level-bar">
                          <div 
                            className="skill-level-progress"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className="skill-level-text">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;