import React from "react";
import "./PillarsOfIslam.css";

const PillarsOfIslam = () => {
  const pillarsData = [
    {
      id: 1,
      title: "Shahada",
      number: "1",
      color: "#4CAF50",
      icon: "☪️",
      text: `"أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ."`,
      subtitle: "Declaration of Faith",
      reference: "Arabic",
    },
    {
      id: 2,
      title: "Salah",
      number: "2",
      color: "#2196F3",
      icon: "🙏",
      text: `"إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا"`,
      subtitle: "Prayer",
      reference: "Quran 29:45",
    },
    {
      id: 3,
      title: "Sawm",
      number: "3",
      color: "#FF9800",
      icon: "🌙",
      text: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ",
      subtitle: "Fasting",
      reference: "Ramadan",
    },
    {
      id: 4,
      title: "Zakat",
      number: "4",
      color: "#9C27B0",
      icon: "💰",
      text: `"{خذ من أموالهم صدقة تطهرهم وتزكيهم بها} وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا
       مَعَ الرَّاكِعِينَ ."`,
      subtitle: "Charity",
      reference: "Prophet Muhammad (S.A.W.W)",
    },
    {
      id: 5,
      title: "Hajj",
      number: "5",
      color: "#E91E63",
      icon: "🕋",
      text: " وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا وَمَنْ كَفَرَ فَإِنَّ اللَّهَ غَنِيٌّ عَنِ الْعَالَمِينَ.",
      subtitle: "Pilgrimage",
      reference: "Once in Lifetime",
    },
  ];

  return (
    <div className="pillars-container" id="pilars">
      {/* Background Animation */}
      <div className="background-animation">
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                "--size": `${Math.random() * 15 + 5}px`,
                "--duration": `${Math.random() * 30 + 20}s`,
                "--delay": `${Math.random() * 5}s`,
                "--opacity": Math.random() * 0.3 + 0.1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Header with Home Link */}
      <header className="pillars-header">
        <div className="header-navigation"></div>

        <div className="header-decoration">
          <div className="decoration-line"></div>
          <div className="header-icon">☪️</div>
          <div className="decoration-line"></div>
        </div>
        <h1>بُنِيَ الإسْلامُ عَلَى خَمْسٍ</h1>
        <p className="subtitle">
          The Five Pillars are the core beliefs and practices of Islam
        </p>
      </header>

      {/* Pillars Grid - Multi Column Layout */}
      <div className="pillars-columns-grid">
        {pillarsData.map((pillar) => (
          <div
            key={pillar.id}
            className="pillar-column-card"
            style={{ "--pillar-color": pillar.color }}
          >
            <div className="column-card-inner">
              {/* Floating Elements */}
              <div className="card-floating-elements">
                <div className="floating-circle circle-1"></div>
                <div className="floating-circle circle-2"></div>
                <div className="floating-circle circle-3"></div>
              </div>

              {/* Shine Effect */}
              <div className="card-shine"></div>

              {/* Card Header */}
              <div className="pillar-column-header">
                <div className="pillar-column-number">
                  {pillar.number}
                  <div className="number-glow"></div>
                </div>
                <div className="pillar-column-icon">{pillar.icon}</div>
              </div>

              {/* Card Content */}
              <div className="pillar-column-content">
                <h2 className="pillar-column-title">
                  <span className="title-text">{pillar.title}</span>
                  <span className="title-underline"></span>
                </h2>
                <p className="pillar-column-text">{pillar.text}</p>
              </div>

              {/* Card Footer */}
              <div className="pillar-column-footer">
                <span className="pillar-column-subtitle">
                  {pillar.subtitle}
                </span>
                <span className="pillar-column-reference">
                  {pillar.reference}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Bubble */}
      <div className="chat-bubble">
        <div className="chat-text">
          <span className="chat-wave">👋</span>
          Hi! Learn about Islam's foundation
        </div>
        <div className="chat-icon">
          <div className="chat-pulse"></div>
          💬
        </div>
      </div>
    </div>
  );
};

export default PillarsOfIslam;
