import React from 'react';
import './BlogsSection.css';

// Import your images - replace these with your actual image paths
import blog1Image from '../../assets/blog-1.jpg';
import blog2Image from '../../assets/blog-2.jpg';
import blog3Image from '../../assets/blog-3.jpg';
import blog4Image from '../../assets/blog-4.jpg';

// Fallback images
const fallbackImages = [
  'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1564577160324-112d603f750f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
];

const BlogsSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Is Islam a Liberal Philosophy?",
      date: "Nov 28, 2023",
      author: "Mufti Maqsud",
      excerpt: "لَا إِكْرَاهَ فِي الدِّينِ ۖ قَدْ تَبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ ۚ فَمَنْ يَكْفُرْ بِالطَّاغُوتِ وَيُؤْمِنْ بِاللَّهِ فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقَىٰ لَا انْفِصَامَ لَهَا ۗ وَاللَّهُ سَمِيعٌ عَلِيمٌ (٢:٢٥٦)",
      explanation: "There is no compulsion in religion. The right direction is henceforth distinct from error. And he who rejecteth false deities and believeth in Allah hath grasped a firm handhold which will never break. Allah is Hearer, Knower.",
      image: blog1Image || fallbackImages[0],
      color: "#2E8B57"
    },
    {
      id: 2,
      title: "Muslim Culture",
      date: "Nov 28, 2023",
      author: "Mufti Maqsud",
      excerpt: "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُمْ مِنْ ذَكَرٍ وَأُنْثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا ۚ إِنَّ أَكْرَمَكُمْ عِنْدَ اللَّهِ أَتْقَاكُمْ ۚ إِنَّ اللَّهَ عَلِيمٌ خَبِيرٌ (٤٩:١٣)",
      explanation: "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous of you. Indeed, Allah is Knowing and Acquainted.",
      image: blog2Image || fallbackImages[1],
      color: "#4682B4"
    },
    {
      id: 3,
      title: "Islamophobia",
      date: "Nov 28, 2023",
      author: "Mufti Maqsud",
      excerpt: "وَلَا تَسُبُّوا الَّذِينَ يَدْعُونَ مِنْ دُونِ اللَّهِ فَيَسُبُّوا اللَّهَ عَدْوًا بِغَيْرِ عِلْمٍ ۗ كَذَٰلِكَ زَيَّنَّا لِكُلِّ أُمَّةٍ عَمَلَهُمْ ثُمَّ إِلَىٰ رَبِّهِمْ مَرْجِعُهُمْ فَيُنَبِّئُهُمْ بِمَا كَانُوا يَعْمَلُونَ (٦:١٠٨)",
      explanation: "And do not insult those they invoke other than Allah, lest they insult Allah in enmity without knowledge. Thus We have made pleasing to every community their deeds. Then to their Lord is their return, and He will inform them about what they used to do.",
      image: blog3Image || fallbackImages[2],
      color: "#8A2BE2"
    },
    {
      id: 4,
      title: "Islamic Spirituality",
      date: "Nov 29, 2023",
      author: "Mufti Maqsud",
      excerpt: "الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُمْ بِذِكْرِ اللَّهِ ۗ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ (١٣:٢٨)",
      explanation: "Those who have believed and whose hearts are assured by the remembrance of Allah. Unquestionably, by the remembrance of Allah hearts are assured.",
      image: blog4Image || fallbackImages[3],
      color: "#FF6B35"
    }
  ];

  return (
    <div className="blogs-container">
      <header className="blogs-header">
        <h1 className="blogs-title">Islamic Blogs</h1>
        <p className="blogs-subtitle">
          "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِنْ مُدَّكِرٍ" (We have certainly made the Qur'an easy for remembrance, so is there any who will remember?) [54:17]
        </p>
      </header>
      
      <div className="blogs-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            {/* Blog Image */}
            <div className="blog-image-container">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="blog-image"
                onError={(e) => {
                  e.target.src = fallbackImages[blog.id - 1];
                }}
              />
              <div className="quran-icon">🕌</div>
            </div>
            
            <div className="blog-content">
              <h2 className="blog-title">{blog.title}</h2>
              
              <div className="blog-meta">
                <span className="blog-date">{blog.date}</span>
                <span className="separator">•</span>
                <span className="blog-author">{blog.author}</span>
              </div>
              
              <div className="quran-text-container">
                <p className="quran-arabic">{blog.excerpt}</p>
                <p className="quran-translation">{blog.explanation}</p>
              </div>
              
              <button className="learn-more-btn" style={{ backgroundColor: blog.color }}>
                Read Reflection
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsSection;