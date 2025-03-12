// src/components/Contact.tsx
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import '../styles/Contact.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  submitted: boolean;
  error: boolean;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false,
    error: false,
    message: ''
  });

  const [isFocused, setIsFocused] = useState<{
    name: boolean;
    email: boolean;
    subject: boolean;
    message: boolean;
  }>({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const formRef = useRef<HTMLFormElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const subjectInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFocus = (field: keyof typeof isFocused) => {
    setIsFocused(prev => ({
      ...prev,
      [field]: true
    }));
  };

  const handleBlur = (field: keyof typeof isFocused) => {
    if (!formData[field]) {
      setIsFocused(prev => ({
        ...prev,
        [field]: false
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    // バリデーション
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: '必須項目を入力してください。'
      });
      
      // 最初の空のフィールドにフォーカスを当てる
      if (!formData.name && nameInputRef.current) {
        nameInputRef.current.focus();
      } else if (!formData.email && emailInputRef.current) {
        emailInputRef.current.focus();
      } else if (!formData.message && messageInputRef.current) {
        messageInputRef.current.focus();
      }
      
      return;
    }

    // メールアドレスの簡易バリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: '有効なメールアドレスを入力してください。'
      });
      
      if (emailInputRef.current) {
        emailInputRef.current.focus();
      }
      
      return;
    }

    // フォーム送信の模擬（実際のAPIと置き換えてください）
    // 成功ケースをシミュレート
    setFormStatus({
      submitted: true,
      error: false,
      message: 'メッセージが送信されました。ありがとうございます！'
    });
    
    // フォームをリセット
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setIsFocused({
      name: false,
      email: false,
      subject: false,
      message: false
    });
    
    // 実際の実装では、ここでデータをAPIに送信します
  };

  const resetForm = (): void => {
    setFormStatus({
      submitted: false,
      error: false,
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-decoration">
        <div className="decoration-shape shape-1"></div>
        <div className="decoration-shape shape-2"></div>
      </div>
      
      <div className="container">
        <h2 className="section-title">お問い合わせ</h2>
        <p className="section-subtitle">
          プロジェクトの依頼やご質問がありましたら、お気軽にご連絡ください。
          24時間以内に返信いたします。
        </p>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-card">
              <div className="card-content">
                <div className="card-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="card-text">
                  <h3>所在地</h3>
                  <p>大阪市城東区</p>
                </div>
              </div>
            </div>
            
            <div className="info-card">
              <div className="card-content">
                <div className="card-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="card-text">
                  <h3>メール</h3>
                  <p>youtaimuxie31@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="info-card">
              <div className="card-content">
                <div className="card-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="card-text">
                  <h3>電話番号</h3>
                  <p>070-9031-4618</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <h3>ソーシャルメディア</h3>
              <div className="social-icons">
                <a href="https://x.com/Nagi_silence26" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://github.com/Eve04lim" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/w_eve_k/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            {formStatus.submitted ? (
              <div className="success-message">
                <div className="success-icon">
                  <i className="fa-solid fa-check-circle"></i>
                </div>
                <h3>送信完了!</h3>
                <p>{formStatus.message}</p>
                <button onClick={resetForm} className="btn btn-secondary">
                  新しいメッセージを送信
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                {formStatus.error && (
                  <div className="error-message">
                    <i className="fa-solid fa-exclamation-circle error-icon"></i>
                    {formStatus.message}
                  </div>
                )}
                
                <div className="form-grid">
                  <div className="form-group">
                    <div className={`input-container ${isFocused.name || formData.name ? 'focused' : ''} ${formStatus.error && !formData.name ? 'error' : ''}`}>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        ref={nameInputRef}
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={() => handleBlur('name')}
                        required
                      />
                      <label htmlFor="name">お名前 *</label>
                      <i className="fa-solid fa-user input-icon"></i>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <div className={`input-container ${isFocused.email || formData.email ? 'focused' : ''} ${formStatus.error && !formData.email ? 'error' : ''}`}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        ref={emailInputRef}
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={() => handleBlur('email')}
                        required
                      />
                      <label htmlFor="email">メールアドレス *</label>
                      <i className="fa-solid fa-envelope input-icon"></i>
                    </div>
                  </div>
                  
                  <div className="form-group full-width">
                    <div className={`input-container ${isFocused.subject || formData.subject ? 'focused' : ''}`}>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        ref={subjectInputRef}
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => handleFocus('subject')}
                        onBlur={() => handleBlur('subject')}
                      />
                      <label htmlFor="subject">件名</label>
                      <i className="fa-solid fa-bookmark input-icon"></i>
                    </div>
                  </div>
                  
                  <div className="form-group full-width">
                    <div className={`input-container textarea ${isFocused.message || formData.message ? 'focused' : ''} ${formStatus.error && !formData.message ? 'error' : ''}`}>
                      <textarea
                        id="message"
                        name="message"
                        ref={messageInputRef}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={() => handleBlur('message')}
                        rows={5}
                        required
                      ></textarea>
                      <label htmlFor="message">メッセージ *</label>
                      <i className="fa-solid fa-message input-icon"></i>
                    </div>
                  </div>
                </div>
                
                <div className="form-footer">
                  <p className="required-note">* 必須項目</p>
                  <button type="submit" className="btn btn-primary submit-btn">
                    送信する
                    <i className="fa-solid fa-paper-plane btn-icon"></i>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;