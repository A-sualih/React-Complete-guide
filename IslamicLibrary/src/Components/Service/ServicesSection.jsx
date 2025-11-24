import React from "react";
import "./ServicesSection.css";
import hadith from "../../assets/service-1.png";
import nikah from "../../assets/service-2.png";
import funeral from "../../assets/service-3.png";
export default function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <h2 className="services-title">Services</h2>
      <p className="services-subtitle">
        It is the responsibility of every Muslim to serve for DEEN
      </p>

      <div className="services-grid">
        {/* Card 1 - Hadith */}
        <div className="service-card">
          <img src={hadith} alt="Hadith Courses" className="service-img" />
          <div className="service-content">
            <h3 className="service-heading">Hadith Courses</h3>
            <p className="service-text">
              عَنْ أَبِي هُرَيْرَةَ رضي الله عنه قَالَ: قَالَ رَسُولُ اللهِ ﷺ:
              «مَنْ سَلَكَ طَرِيقًا يَبْتَغِي فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ
              طَرِيقًا إِلَى الْجَنَّةِ، وَإِنَّ الْمَلَائِكَةَ لَتَضَعُ
              أَجْنِحَتَهَا لِطَالِبِ الْعِلْمِ رِضًا بِمَا يَصْنَعُ، وَإِنَّ
              الْعالِمَ لَيَسْتَغْفِرُ لَهُ مَن فِي السَّمَاوَاتِ وَمَن فِي
              الْأَرْضِ، حَتَّى الْحِيتَانُ فِي الْمَاءِ، وَفَضْلُ الْعالِمِ
              عَلَى الْعَابِدِ كَفَضْلِ الْقَمَرِ عَلَى سَائِرِ الْكَوَاكِبِ،
              إِنَّ الْعُلَمَاءَ وَرَثَةُ الأَنْبِيَاءِ، إِنَّ الأَنْبِيَاءَ
              لَمْ يُوَرِّثُوا دِينَارًا وَلا دِرْهَمًا، إِنَّمَا وَرَّثُوا
              الْعِلْمَ، فَمَنْ أَخَذَهُ أَخَذَ بِحَظٍّ وَافِرٍ.»
            </p>
            <button className="read-btn">Read More</button>
          </div>
        </div>

        {/* Card 2 - Nikah */}
        <div className="service-card">
          <img src={nikah} alt="Nikah Registration" className="service-img" />
          <div className="service-content">
            <h3 className="service-heading">Nikah Registration</h3>
            <p className="service-text">
              وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
              لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ
              إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ (30:21) هُنَّ
              لِبَاسٌ لَّكُمْ وَأَنتُمْ لِبَاسٌ لَّهُنَّ ( 2:187) وَمِنْ
              آيَاتِهِ أَنْ خَلَقَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا
              لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَوَدَّةً وَرَحْمَةً ۚ
              إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِلْقَوْمِ يَتَفَكَّرُونَ (43:71)
            </p>
            <button className="read-btn">Read More</button>
          </div>
        </div>

        {/* Card 3 - Funeral */}
        <div className="service-card">
          <img src={funeral} alt="Funeral Services" className="service-img" />
          <div className="service-content">
            <h3 className="service-heading">Funeral Services</h3>
            <p className="service-text">
              كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ ۗ وَإِنَّمَا تُوَفَّوْنَ
              أُجُورَكُمْ يَوْمَ الْقِيَامَةِ ۖ فَمَن زُحْزِحَ عَنِ النَّارِ
              وَأُدْخِلَ الْجَنَّةَ فَقَدْ فَازَ ۗ وَمَا الْحَيَاةُ الدُّنْيَا
              إِلَّا مَتَاعُ الْغُرُورِ إِنَّ اللَّهَ يَشْرَحُ صَدْرَهُ
              لِلإِيمَانِ وَيَهْدِي الْمُؤْمِنِينَ وَمَن يَعْمَلْ صَالِحًا مِن
              ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌ فَأُو۟لَـٰٓئِكَ يَدْخُلُونَ
              الْجَنَّةَ وَلَا يُظْلَمُونَ نَقِيرًا
            </p>
            <button className="read-btn">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
