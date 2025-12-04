import React, { useState, useEffect } from 'react';
import './ScholarsCarousel.css';

// Import local images
import scholar1 from '../../assets/download (1).jpg';
import scholar2 from '../../assets/download (2).jpg';
import scholar3 from '../../assets/download (3).jpg';
import scholar4 from '../../assets/download (4).jpg';
import scholar5 from '../../assets/download (5).jpg';
import scholar6 from '../../assets/download.jpg';

const ScholarsCarousel = () => {
  const scholars = [
    {
      id: 1,
      name: "Doctor Zakir naik",
      title: "Islamic Scholar",
      description: "The Mosque is still under development in some sectors and is in need of your support and contribution.",
      image: scholar1
    },
    {
      id: 2,
      name: "Ustaz Mufti Menki",
      title: "Islamic Scholar",
      description: "The Mosque is still under development in some sectors and is in need of your support and contribution.",
      image: scholar2
    },
    {
      id: 3,
      name: "Sheikh Mahir",
      title: "Quran Teacher",
      description: "The Mosque is still under development in some sectors and is in need of your support and contribution.",
      image: scholar3
    },
    {
      id: 4,
      name: "Sheikh Sudeys",
      title: "Islamic Educator",
      description: "The Mosque is still under development in some sectors and is in need of your support and contribution.",
      image: scholar4
    },
    {
      id: 5,
      name: "Sheikh Uthaiymin",
      title: "Hadith Specialist",
      description: "The Mosque is still under development in some sectors and is in need of your support and contribution.",
      image: scholar5
    },
    {
      id: 6,
      name: "Sheik Fewzan",
      title: "Islamic Studies Professor",
      description: "The Mosque is still under development in some sectors and is in need of your support and contribution.",
      image: scholar6
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 992) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < scholars.length - itemsPerView) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(scholars.length - itemsPerView);
    }
  };

  const goToSlide = (index) => {
    if (index >= 0 && index <= scholars.length - itemsPerView) {
      setCurrentIndex(index);
    }
  };

  const visibleScholars = scholars.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <div className="scholars-carousel-container">
      <header className="scholars-header">
        <h1 className="scholars-title">Islamic Scholars</h1>
        <p className="scholars-subtitle">
          It is the responsibility of every Muslim to serve for DEEN
        </p>
        <div className="divider-line"></div>
      </header>

      <div className="carousel-wrapper">
        <button 
          className="nav-arrow prev-arrow" 
          onClick={prevSlide}
          disabled={currentIndex === 0 && itemsPerView >= scholars.length}
        >
          <span className="arrow-icon">‹</span>
        </button>

        <div className="carousel-content">
          <div className="scholars-flex-container">
            {visibleScholars.map((scholar) => (
              <div key={scholar.id} className="scholar-card">
                <div className="scholar-image-container">
                  <img 
                    src={scholar.image} 
                    alt={scholar.name}
                    className="scholar-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="image-fallback">
                          <div class="fallback-icon">🕌</div>
                          <div class="fallback-name">${scholar.name}</div>
                        </div>
                      `;
                    }}
                  />
                  <div className="image-overlay"></div>
                  <div className="scholar-badge">{scholar.title}</div>
                </div>
                
                <div className="scholar-info">
                  <h3 className="scholar-name">{scholar.name}</h3>
                  <div className="mosque-support">
                    <p className="support-text">{scholar.description}</p>
                  </div>
                  
                  <div className="scholar-actions">
                    <button className="donate-btn">
                      <span className="btn-icon">🤲</span>
                      <span>Donate</span>
                    </button>
                    <button className="learn-btn">
                      <span className="btn-icon">📖</span>
                      <span>Learn More</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          className="nav-arrow next-arrow" 
          onClick={nextSlide}
          disabled={currentIndex >= scholars.length - itemsPerView && itemsPerView >= scholars.length}
        >
          <span className="arrow-icon">›</span>
        </button>
      </div>

      <div className="carousel-dots">
        {Array.from({ length: Math.max(1, scholars.length - itemsPerView + 1) }).map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="scholars-footer">
        <p className="quran-verse">
          "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ"
        </p>
        <p className="verse-translation">
          "Allah will raise those who have believed among you and those who were given knowledge by degrees." (Al-Mujadila 58:11)
        </p>
      </div>
    </div>
  );
};

export default ScholarsCarousel;