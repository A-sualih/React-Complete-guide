import React from "react";
import "./PrayerTimings.css";

const PrayerTimings = () => {
  const timings = [
    { name: "الفجر", time: "05:20 AM"  },
    { name: "الظهر", time: "01:00 PM" },
    { name: "العصر", time: "04:00 PM" },
    { name: "المغرب", time: "06:20 PM" },
    { name: "العشاء", time: "01:50 AM" },
  ];

  
  return (
    <div className="pt-container">
      <h1 className="pt-title">Daily Prayer Timings</h1>
      <h2 className="pt-subtitle">In Ethiopia</h2>

      <div className="pt-grid">
        {timings.map((p, index) => (
          <div className="pt-card" key={index}>
            <div className="pt-name">{p.name}</div>
            <div className="pt-time">{p.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrayerTimings;
