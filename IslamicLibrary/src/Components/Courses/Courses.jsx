import React, { useState, useRef } from "react";
import "./Courses.css";

const Courses = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef([]);

  // Function to get thumbnail for YouTube video
  const getYouTubeThumbnail = (url) => {
    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);

    if (match && match[1]) {
      return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
    }

    return `https://picsum.photos/400/200?random=${Math.random()}`;
  };

  const courses = [
    {
      id: 1,
      title: "Islam and youth",
      description:
        "دورة متخصصة تهدف إلى توجيه الشباب المسلم لفهم تعاليم الإسلام السمحة وتطبيقها في حياتهم المعاصرة، مع التركيز على بناء الشخصية الإسلامية المتوازنة.",
      author: "الدكتور أحمد حسين",
      videoUrl: "https://youtu.be/13UZJbaVSSE",
      thumbnail: getYouTubeThumbnail("https://youtu.be/13UZJbaVSSE"),
      titleColor: "#E74C3C",
      authorColor: "#9B59B6",
      descriptionColor: "#16A085",
      buttonColor: "#E74C3C",
      buttonHoverColor: "#C0392B",
    },
    {
      id: 2,
      title: "Parent Education",
      description:
        "برنامج متكامل لتعزيز مهارات التربية الإسلامية من الطفولة إلى المراهقة، مع أدوات عملية لتطبيق منهج النبي ﷺ في التربية.",
      author: "الأستاذة فاطمة أحمد",
      videoUrl: "https://youtu.be/bdi877qwKgM",
      thumbnail: getYouTubeThumbnail("https://youtu.be/bdi877qwKgM"),
      titleColor: "#3498DB",
      authorColor: "#E67E22",
      descriptionColor: "#27AE60",
      buttonColor: "#3498DB",
      buttonHoverColor: "#2980B9",
    },
    {
      id: 3,
      title: "Quran Recitation",
      description:
        "إتقان تلاوة القرآن الكريم بأحكام التجويد الصحيحة، من خلال منهجية متدرجة تناسب جميع المستويات.",
      author: "الشيخ محمد علي",
      videoUrl: "https://youtu.be/hDXLTvF8s1I",
      thumbnail: getYouTubeThumbnail("https://youtu.be/hDXLTvF8s1I"),
      titleColor: "#8E44AD",
      authorColor: "#C0392B",
      descriptionColor: "#2980B9",
      buttonColor: "#8E44AD",
      buttonHoverColor: "#6C3483",
    },
  ];

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handlePlayVideo = (id) => {
    const course = courses.find((c) => c.id === id);
    if (course) {
      window.open(course.videoUrl, "_blank");
    }
  };

  const handleLearnMore = (course) => {
    // You can customize what happens when "Learn More" is clicked
    alert(`Learn more about: ${course.title}\nInstructor: ${course.author}`);
    // Alternatively, you can navigate to a detailed course page
    // window.location.href = `/course/${course.id}`;
  };

  return (
    <div className="courses-container" id="courses">
      <header className="courses-header">
        <h1 className="main-title">Courses</h1>
        <p className="main-subtitle">Watch and learn from quality courses</p>
      </header>

      <div className="courses-grid">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`course-card ${
              hoveredCard === course.id ? "hovered" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(course.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="course-video-container">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="course-thumbnail"
              />

              <div
                className={`video-overlay ${
                  hoveredCard === course.id ? "visible" : ""
                }`}
                onClick={() => handlePlayVideo(course.id)}
              >
                <div className="play-button">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                </div>
              </div>

              <div className="youtube-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="red">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </div>
            </div>

            <div className="course-content">
              <h2 className="course-title" style={{ color: course.titleColor }}>
                {course.title}
              </h2>
              <p
                className="course-description"
                style={{ color: course.descriptionColor }}
              >
                {course.description}
              </p>
              <div
                className="course-author"
                style={{ color: course.authorColor }}
              >
                {course.author}
              </div>

              {/* Learn More Button */}
              <button
                className="learn-more-btn"
                style={{
                  backgroundColor: course.buttonColor,
                  "--button-hover-color": course.buttonHoverColor,
                }}
                onClick={() => handleLearnMore(course)}
              >
                <span className="btn-text">Learn More</span>
                <span className="btn-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
