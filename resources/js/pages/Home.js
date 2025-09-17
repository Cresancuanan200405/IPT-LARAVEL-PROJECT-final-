// Home.js
import React, { useEffect, useRef } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import '../../sass/pages/Home.scss';

const Home = () => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    // Animation on component mount
    if (heroRef.current) {
      heroRef.current.style.opacity = 1;
      heroRef.current.style.transform = 'translateY(0)';
    }
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section ref={heroRef} className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Our <span className="accent-text">Beautiful</span> Space</h1>
          <p className="hero-subtitle">Discover amazing features and modern design that will transform your experience</p>
          <div className="hero-buttons">
            <Button className="primary-btn">Get Started</Button>
            <Button className="secondary-btn">Learn More</Button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Our <span className="accent-text">Features</span></h2>
        <div className="cards-container">
          <Card className="feature-card">
            <div className="card-icon">✨</div>
            <h3>Modern Design</h3>
            <p>Clean and contemporary aesthetics with attention to detail</p>
          </Card>
          <Card className="feature-card">
            <div className="card-icon">🚀</div>
            <h3>Fast Performance</h3>
            <p>Optimized for speed and seamless user experience</p>
          </Card>
          <Card className="feature-card">
            <div className="card-icon">🎨</div>
            <h3>Customizable</h3>
            <p>Personalize to match your unique style and preferences</p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to get started?</h2>
          <p>Join thousands of satisfied users today</p>
          <Button className="cta-button">Sign Up Now</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;