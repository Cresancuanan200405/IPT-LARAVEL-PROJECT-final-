// About.js
import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import '../../sass/pages/About.scss';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">About <span className="accent-text">Rheanne</span></h1>
          <p className="about-subtitle">Discover the story behind our brand and our passion for creating beautiful experiences</p>
        </div>
        <div className="about-hero-visual">
          <div className="floating-element"></div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-content">
          <div className="story-text">
            <h2>Our <span className="accent-text">Story</span></h2>
            <p>
              Founded with a vision to create meaningful digital experiences, Rheanne began as a small passion project 
              and has grown into a platform dedicated to innovation and user-centered design.
            </p>
            <p>
              We believe that technology should be both beautiful and functional, enhancing everyday life through 
              thoughtful design and seamless interactions.
            </p>
            <Button className="primary-btn">Learn More</Button>
          </div>
          <div className="story-image">
            <div className="image-placeholder">
              <div className="placeholder-content">
                <span>Our Journey</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our <span className="accent-text">Values</span></h2>
        <div className="values-grid">
          <Card className="value-card">
            <div className="value-icon">💖</div>
            <h3>Passion</h3>
            <p>We pour our hearts into every project, ensuring each detail reflects our commitment to excellence.</p>
          </Card>
          <Card className="value-card">
            <div className="value-icon">✨</div>
            <h3>Innovation</h3>
            <p>Constantly pushing boundaries to create cutting-edge solutions that stand out from the crowd.</p>
          </Card>
          <Card className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Collaboration</h3>
            <p>Working together with our clients to bring their vision to life through partnership and trust.</p>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our <span className="accent-text">Team</span></h2>
        <div className="team-grid">
          <Card className="team-card">
            <div className="team-image">
              <div className="member-photo"></div>
            </div>
            <h3>Rheanne Reyes</h3>
            <p className="team-role">Founder & Lead Developer</p>
            <p>Passionate about creating digital experiences that make a difference.</p>
          </Card>
          <Card className="team-card">
            <div className="team-image">
              <div className="member-photo"></div>
            </div>
            <h3>Alex Morgan</h3>
            <p className="team-role">Design Director</p>
            <p>Transforming ideas into visually stunning and functional designs.</p>
          </Card>
          <Card className="team-card">
            <div className="team-image">
              <div className="member-photo"></div>
            </div>
            <h3>Jordan Taylor</h3>
            <p className="team-role">UX Specialist</p>
            <p>Ensuring every interaction is intuitive and enjoyable for users.</p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>Ready to work with us?</h2>
          <p>Let's create something amazing together</p>
          <Button className="cta-button">Get In Touch</Button>
        </div>
      </section>
    </div>
  );
};

export default About;