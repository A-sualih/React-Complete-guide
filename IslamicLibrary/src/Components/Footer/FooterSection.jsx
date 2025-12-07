import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './FooterSection.css';

const FooterSection = () => {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 1, name: "Home" },
    { id: 2, name: "Services" },
    { id: 3, name: "Blogs" },
    { id: 4, name: "About" },
    { id: 5, name: "Contact" },
    { id: 6, name: "Courses" }
  ];

  const latestBlogs = [
    { id: 1, title: "Is Islam a Liberal Philosophy?", date: "Nov 28, 2023" },
    { id: 2, title: "What is Muslim Culture?", date: "Nov 27, 2023" },
    { id: 3, title: "What is Muslim Culture?", date: "Nov 26, 2023" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      // Replace these with your EmailJS credentials
      // You need to sign up at https://www.emailjs.com/
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'contactinfo@al-buraq.com', // Your receiving email
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
      };

      // Send email using EmailJS
      // You need to get these credentials from EmailJS dashboard
      const result = await emailjs.send(
        'service_lvhga8r',        // Replace with your service ID
        'template_my47vqn',       // Replace with your template ID
        templateParams,
        '25SIIILM-AMcZfFJB'         // Replace with your public key
      );

      if (result.status === 200) {
        setIsSent(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSent(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info Section */}
          <div className="footer-column">
            <h2 className="company-name">AL-BURAQ</h2>
            <p className="company-description">
              Islam is about knowing what and how to live your life in the best way. 
              Lorem ipsum proin gravida nibh vel velit auctor aliquet.
            </p>
            
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span className="contact-text">20025 Ethiopia ,Kelala</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <a href="mailto:contactinfo@al-buraq.com" className="contact-link">
                sualihahmed92@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <a href="tel:+19172395190" className="contact-link">
                  +251 926-34-29-43
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <a href="tel:+16463857126" className="contact-link">
                  646-385-7126
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-column">
            <h3 className="column-title">Quick Links</h3>
            <ul className="links-list">
              {quickLinks.map((link) => (
                <li key={link.id} className="link-item">
                  <a href="#" className="footer-link">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Blogs Section */}
          <div className="footer-column">
            <h3 className="column-title">Latest Blogs</h3>
            <ul className="blogs-list">
              {latestBlogs.map((blog) => (
                <li key={blog.id} className="blog-item">
                  <div className="blog-title">{blog.title}</div>
                  <div className="blog-date">{blog.date}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form Section */}
          <div className="footer-column">
            <h3 className="column-title">Contact us</h3>
            
            {isSent && (
              <div className="success-message">
                <span className="success-icon">✅</span>
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Full Name" 
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  disabled={isLoading}
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  disabled={isLoading}
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder="Write Message" 
                  className="form-textarea"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={`submit-btn ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Now'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright-section">
          <p className="copyright-text">
            © {currentYear}. All rights reserved by Al-Buraq.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;