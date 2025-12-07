import React from 'react';
import './EventsSection.css';

// Import your images - replace these with your actual image paths
import event1Image from '../../assets/event-1.png';
import event2Image from '../../assets/event-2.png';
import event3Image from '../../assets/event-3.png';

// Fallback images
const fallbackImages = [
  'https://images.unsplash.com/photo-1633959580565-b30c8c055dce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', // Mosque
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', // Charity
  'https://images.unsplash.com/photo-1551828343-0d5a6c4b6c2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'  // Rally
];

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Mahafil Zikr and Bayan",
      date: "07-01-2023",
      location: "Ethiopia, KELALA",
      description: "الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ - الرعيَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا ۚ إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْد.",
      image: event1Image || fallbackImages[0],
      icon: "🕌",
      color: "#2E8B57"
    },
    {
      id: 2,
      title: "Ramadan Fund Raising",
      date: "08-01-2023",
      location: "Ethiopia, KELALA",
      description: "ايَا أَيُّهَا الَّذِينَ آمَنُوا لَا تُبْطِلُوا صَدَقَاتِكُم بِالْمَنِّ وَالْأَذَىٰ كَالَّذِي يُنفِقُ مَالَهُ رِئَاءَ النَّاسِ وَلَا يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ.",
      image: event2Image || fallbackImages[1],
      icon: "🤲",
      color: "#4682B4"
    },
    {
      id: 3,
      title: "Islamophobia Rally",
      date: "09-01-2023",
      location: "Ethiopia, KELALA",
      description: "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا ۚ إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ ۚ إِنَّ اللَّهَ عَلِيمٌ خَبِيرٌ.",
      image: event3Image || fallbackImages[2],
      icon: "✊",
      color: "#8A2BE2"
    }
  ];

  return (
    <div className="events-container" id='events'>
      <header className="events-header">
        <h1 className="events-title">Events</h1>
        <p className="events-subtitle">The upcoming events and services in our Mosque</p>
        <div className="divider-line"></div>
      </header>
      
      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            {/* Event Image */}
            <div className="event-image-container">
              <img 
                src={event.image} 
                alt={event.title}
                className="event-image"
                onError={(e) => {
                  e.target.src = fallbackImages[event.id - 1];
                }}
              />
              <div className="event-icon" style={{ backgroundColor: event.color }}>
                {event.icon}
              </div>
              <div className="event-date-badge">
                {event.date}
              </div>
            </div>
            
            <div className="event-content">
              <h2 className="event-title-text">{event.title}</h2>
              
              <div className="event-meta">
                <span className="event-location">
                  <span className="meta-icon">📍</span>
                  {event.location}
                </span>
              </div>
              
              <p className="event-description">{event.description}</p>
              
              <div className="event-actions">
                <button className="learn-more-btn" style={{ backgroundColor: event.color }}>
                  Learn More
                </button>
                <button className="rsvp-btn">
                  RSVP
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="view-all-container">
        <button className="view-all-btn">
          View All Events
        </button>
      </div>
    </div>
  );
};

export default EventsSection;