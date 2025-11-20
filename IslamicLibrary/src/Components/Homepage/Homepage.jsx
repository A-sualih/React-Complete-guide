import React from "react";
import "./homepage.css";

export default function HomePage() {
  return (
    <div className="page-light">

      <h1 className="title">Quran Translation</h1>
      <p className="subtitle">Your daily learning and process of understanding the Holy Quran</p>

      <h2 className="bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h2>

      <div className="ayah-box">
        <p className="arabic-text">
          قُلْ هُوَ ٱللَّهُ أَحَدٌ ۝ ٱللَّهُ ٱلصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ 
          وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ ۝
        </p>
      </div>

      <p className="english-translation">
        In the name of Allah, the Entirely Merciful, the Especially Merciful.
        Say, “He is Allah, [who is] One. Allah, the Eternal Refuge.  
        He neither begets nor is born. Nor is there to Him any equivalent.”
      </p>

    </div>
  );
}
