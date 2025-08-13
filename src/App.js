import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <img src="arco logo.jpg" alt="CAMPO ARCOBALENO Logo" className="nav-logo" />
            <span className="nav-brand-text">CAMPO ARCOBALENO</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#credits">Legacy</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="floating-element">🎨</div>
        <div className="floating-element">✨</div>
        <div className="floating-element">🌈</div>
        <div className="floating-element">🎭</div>
        <div className="floating-element">🖌️</div>
        <div className="floating-element">🎪</div>
        <div className="floating-element">🌟</div>
        <div className="floating-element">💫</div>
        
        <div className="hero-content">
          <div className="hero-logo">
            <img src="arco logo.jpg" alt="CAMPO ARCOBALENO Logo" className="hero-logo-img" />
          </div>
          <h1 className="hero-title artistic-text animate-float">
            CAMPO ARCOBALENO
          </h1>
          <p className="hero-subtitle">
            "Rainbow Camp" - Where Diversity Meets Creativity
          </p>
          <p className="hero-description">
            Empowering OCCians through art, creativity, and colorful memories since 2022
          </p>
          <div className="hero-illustrations">
            <div className="art-illustration">🎨</div>
            <div className="diversity-illustration">🌈</div>
            <div className="creativity-illustration">✨</div>
          </div>
          <a 
            href="https://web.facebook.com/profile.php?id=100088095993837" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button"
          >
            🌟 Join Us on Facebook
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title artistic-text">Our Story</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="about-grid">
            <div>
              <div className="about-card">
                <div className="card-illustration">🎯</div>
                <h3>Our Mission</h3>
                <p>
                  To help students be involved with creativity and art, creating colorful memories 
                  in every school festivity through diverse artistic activities.
                </p>
              </div>
              
              <div className="about-card">
                <div className="card-illustration">💫</div>
                <h3>Our Philosophy</h3>
                <p>
                  "Diversity with one view" - We celebrate uniqueness and encourage everyone 
                  to embrace their artistic journey at their own pace.
                </p>
              </div>
            </div>
            
            <div className="about-card">
              <div className="card-illustration">📈</div>
              <h3>Our Growth</h3>
              <div className="growth-timeline">
                <div className="timeline-item">
                  <span className="timeline-year">2022</span>
                  <span className="timeline-text">Started with 15 members, DIY henna tattoos</span>
                </div>
                <div className="timeline-item">
                  <span className="timeline-year">2023</span>
                  <span className="timeline-text">Growing support, successful henna booth</span>
                </div>
                <div className="timeline-item">
                  <span className="timeline-year">2024</span>
                  <span className="timeline-text">CSG-SBO funding, temporary tattoo stickers</span>
                </div>
                <div className="timeline-item">
                  <span className="timeline-year">2025</span>
                  <span className="timeline-text">Expanding membership, thriving community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section gallery">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title artistic-text">Our Creative Journey</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="gallery-main">
            <img 
              src={images[currentImage]} 
              alt={`Gallery ${currentImage + 1}`}
              className="gallery-image"
            />
            <div className="gallery-overlay"></div>
            <div className="gallery-info">
              <h3>Creative Memories</h3>
              <p>Capturing the colorful moments of our artistic journey</p>
            </div>
            
            <div className="gallery-nav">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`gallery-dot ${index === currentImage ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
          
          <div className="gallery-thumbnails">
            {images.map((image, index) => (
              <div 
                key={index}
                className="gallery-thumbnail"
                onClick={() => setCurrentImage(index)}
              >
                <img 
                  src={image} 
                  alt={`Thumbnail ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="section activities">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title artistic-text">Our Activities</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-icon">🎨</div>
              <h3>DIY Henna Tattoos</h3>
              <p>Our signature activity featuring homemade henna solutions and creative designs</p>
              <div className="activity-illustrations">
                <span>🖌️</span>
                <span>🌿</span>
                <span>✨</span>
              </div>
            </div>
            
            <div className="activity-card">
              <div className="activity-icon">✨</div>
              <h3>Temporary Tattoos</h3>
              <p>Popular temporary tattoo stickers for quick artistic expression</p>
              <div className="activity-illustrations">
                <span>🎭</span>
                <span>💫</span>
                <span>🌟</span>
              </div>
            </div>
            
            <div className="activity-card">
              <div className="activity-icon">🎭</div>
              <h3>Art Events</h3>
              <p>Participating in school festivities and art culmination programs</p>
              <div className="activity-illustrations">
                <span>🎪</span>
                <span>🎨</span>
                <span>🌈</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diversity Section */}
      <section className="section diversity">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title artistic-text">Celebrating Diversity</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="diversity-content">
            <div className="diversity-illustrations">
              <div className="diversity-item">🎨</div>
              <div className="diversity-item">🌈</div>
              <div className="diversity-item">✨</div>
              <div className="diversity-item">🎭</div>
              <div className="diversity-item">🖌️</div>
              <div className="diversity-item">🌟</div>
              <div className="diversity-item">💫</div>
              <div className="diversity-item">🎪</div>
            </div>
            <div className="diversity-text">
              <h3>Unity in Diversity</h3>
              <p>We believe that every individual brings unique creativity and perspective to our artistic community. Together, we create a beautiful mosaic of talent, culture, and expression.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credits Section */}
      <section id="credits" className="section credits">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title artistic-text">Our Legacy</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="credits-content">
            <div className="credits-history">
              <div className="history-card">
                <div className="history-header">
                  <img src="OCC logo.png" alt="OCC Logo" className="history-logo" />
                  <h3>Our Journey Since 2022</h3>
                </div>
                <div className="history-text">
                  <p>
                    CAMPO ARCOBALENO was founded in 2022 with the vision of Dr. Arao, who recognized the need for a creative outlet 
                    that would help students be involved with art and creativity. What started as a small group of 15 passionate members 
                    has grown into a thriving community that celebrates diversity and artistic expression.
                  </p>
                  <p>
                    From our humble beginnings with DIY henna tattoos and acrylic body paint (though not recommended!), 
                    to our current success with professional henna solutions and temporary tattoo stickers, 
                    we've come a long way thanks to the unwavering support of our OCC community.
                  </p>
                  <p>
                    Special thanks to our first SAS Coordinator, Sir Glenn Roa, whose keen eye for arts and literacy 
                    helped every club within OCC be known, and to the CSG-SBO for their continued funding and support.
                  </p>
                </div>
              </div>
            </div>

            <div className="credits-people">
              <div className="credits-grid">
                <div className="credit-card founder">
                  <div className="credit-image">
                    <img 
                      src="doc dee.jpg" 
                      alt="Dr. Arao" 
                      className="credit-img clickable-image"
                      onClick={() => setSelectedImage({src: "doc dee.jpg", alt: "Dr.Dolorita Nacua Arao"})}
                    />
                  </div>
                  <div className="credit-info">
                    <h4>Dr.Dolorita Nacua Arao</h4>
                    <p className="credit-role">Club Founder & Mentor</p>
                    <p className="credit-description">
                      The visionary behind CAMPO ARCOBALENO who saw the need for creative expression 
                      and helped establish our artistic community.
                    </p>
                  </div>
                </div>

                <div className="credit-card president">
                  <div className="credit-image">
                    <img 
                      src="althea.jpg" 
                      alt="Althea Marie P. Baron" 
                      className="credit-img clickable-image"
                      onClick={() => setSelectedImage({src: "althea.jpg", alt: "Althea Marie P. Baron"})}
                    />
                  </div>
                  <div className="credit-info">
                    <h4>Althea Marie P. Baron</h4>
                    <p className="credit-role">Former President (AY 2023-2025)</p>
                    <p className="credit-description">
                      Appointed by Dr. Arao, she led the club through its formative years, 
                      overseeing our growth from a small group to a thriving community. 
                      Her dedication to DIY henna solutions and creative activities 
                      helped establish our signature artistic identity.
                    </p>
                  </div>
                </div>

                <div className="credit-card coordinator">
                  <div className="credit-image">
                    <img 
                      src="glenn.jpg" 
                      alt="Sir Glenn Roa" 
                      className="credit-img clickable-image"
                      onClick={() => setSelectedImage({src: "glenn.jpg", alt: "Sir Glenn L. Roa"})}
                    />
                  </div>
                  <div className="credit-info">
                    <h4>Sir Glenn L. Roa</h4>
                    <p className="credit-role">First SAS Coordinator</p>
                    <p className="credit-description">
                      Our very first SAS Coordinator who helped every club within OCC be known. 
                      With his keen eye for arts and literacy, he supported our growth and 
                      even invited our club to judge his classes' Art Culmination Program.
                    </p>
                  </div>
                </div>
              </div>

              <div className="credits-message">
                <div className="message-card">
                  <h4>🌟 The Original Members</h4>
                  <div className="og-members">
                    <img 
                      src="the og.jpg" 
                      alt="Original CAMPO ARCOBALENO Members" 
                      className="og-image clickable-image"
                      onClick={() => setSelectedImage({src: "the og.jpg", alt: "Original CAMPO ARCOBALENO Members"})}
                    />
                    <div className="og-text">
                      <p>
                        Our founding members who started this beautiful journey in 2022. 
                        From a small group of 15 passionate individuals, we've grown into a thriving community 
                        that celebrates creativity, diversity, and artistic expression.
                      </p>
                      <p>
                        These original members laid the foundation for what CAMPO ARCOBALENO has become today - 
                        a place where every OCCian can find their creative voice and make colorful memories together.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="credits-reminder">
                <div className="reminder-card">
                  <h4>🌟 Our Philosophy</h4>
                  <p>
                    <strong>CAMPO ARCOBALENO</strong> (English: Rainbow Camp) means <strong>"Diversity with one view"</strong>. 
                    Let us be reminded to not rush ourselves and to not compare it with others as we are unique in our own time. 💕❤️
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="section-container">
          <div className="contact-container">
            <div className="section-header">
              <h2 className="section-title artistic-text">Join Our Creative Family</h2>
              <div className="section-divider"></div>
            </div>
            
            <div className="contact-card">
              <div className="contact-logo">
                <img src="arco logo.jpg" alt="CAMPO ARCOBALENO Logo" className="contact-logo-img" />
              </div>
              <p className="contact-description">
                Ready to add some color to your college life? Join CAMPO ARCOBALENO and be part of our artistic journey!
              </p>
              
              <div className="contact-buttons">
                <a 
                  href="https://web.facebook.com/profile.php?id=100088095993837" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-button facebook"
                >
                  <span>📘</span>
                  <span>Follow us on Facebook</span>
                </a>
                
                <div className="contact-button join">
                  <span>🎨</span>
                  <span>Join Our Club</span>
                </div>
              </div>
            </div>
            
            <div className="supporters">
              <p className="supporters-title">Special thanks to our supporters:</p>
              <div className="supporters-tags">
                <span className="supporter-tag">Doc. Arao</span>
                <span className="supporter-tag">Sir Glenn Roa</span>
                <span className="supporter-tag">CSG-SBO</span>
                <span className="supporter-tag">OCC Community</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="arco logo.jpg" alt="CAMPO ARCOBALENO Logo" className="footer-logo-img" />
          </div>
          <p className="footer-text">
            © 2025 CAMPO ARCOBALENO - Rainbow Camp | OCC Arts Club
          </p>
          <p className="footer-subtext">
            "Diversity with one view" - Celebrating creativity and art since 2022
          </p>
          <p className="footer-subtext">
            "Developed by: Althian James P. Baron"
          </p>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>
              ✕
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="modal-image"
            />
            <p className="modal-caption">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
