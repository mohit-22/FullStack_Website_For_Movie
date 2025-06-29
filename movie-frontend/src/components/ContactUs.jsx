"use client";

import { useState } from "react";
import "./ContactUs.css";

export default function ContactUs() {
  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    alert(`Language changed to ${lang}`);
  };

  const quickLinks = [
    "Content Grievances in India",
    "Reset password",
    "Update email",
    "Get help signing in",
    "Update payment method",
  ];

  const footerLinks = [
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
  ];

  return (
    <div className="contact-page">
      <div className="cinema-overlay"></div>

      <header className="contact-header">
        <div className="header-content">
          <div className="logo-section">
            <img
              src="https://www.shutterstock.com/image-vector/binge-watching-square-banner-web-600nw-1843952809.jpg"
              alt="Binge Watch Logo"
              className="logo"
            />
            <span className="brand-text">BINGE WATCH</span>
          </div>
          <button className="signin-btn">
            <span>Sign In</span>
          </button>
        </div>
      </header>

      <main className="contact-main">
        <div className="contact-container">
          <div className="title-section">
            <h1 className="contact-title">
              <span className="title-accent">CONTACT</span>
              <span className="title-main">US</span>
            </h1>
            <div className="title-underline"></div>
            <p className="contact-subtitle">
              Tell us more and we'll find the best solution for you
            </p>
          </div>

          <div className="search-section">
            <div className="search-wrapper">
              <input
                type="text"
                className="issue-input"
                placeholder="Describe your issue..."
              />
              <div className="search-icon">🔍</div>
            </div>
          </div>

          <div className="quick-links-section">
            <h3 className="section-title">Quick Links</h3>
            <div className="links-grid">
              {quickLinks.map((link, idx) => (
                <a key={idx} href="" className="quick-link">
                  <span className="link-icon">▶</span>
                  <span className="link-text">{link}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="contact-footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="language-selector">
              <label htmlFor="language" className="language-label">
                🌐 Language
              </label>
              <select
                id="language"
                value={language}
                onChange={handleLanguageChange}
                className="language-select"
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-links">
              {footerLinks.map((link, idx) => (
                <a key={idx} href="#" className="footer-link">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Binge Watch. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

