import React from 'react';
import './TeamCarousel.css';

// Mock data - replace with your actual team data
const teamMembers = [
  {
    name: "Mohamed Abith",
    role: "Sr. Technical Lead",
    image: "/Abith_Profile.jpg",
    instagram: "https://www.instagram.com/aabith___",
    linkedin: "https://www.linkedin.com/in/mohamed-abith",
    snapchat: "https://www.snapchat.com/add/aabi_thh"
  },
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    image: "Images/Sarah_Profile.jpg",
    instagram: "https://www.instagram.com/sarah",
    linkedin: "https://www.linkedin.com/in/sarah",
    snapchat: "https://www.snapchat.com/add/sarah"
  },
  {
    name: "John Smith",
    role: "Lead Developer",
    image: "Images/John_Profile.jpg",
    instagram: "https://www.instagram.com/john",
    linkedin: "https://www.linkedin.com/in/john",
    snapchat: "https://www.snapchat.com/add/john"
  },
  {
    name: "Emily Davis",
    role: "UX Designer",
    image: "Images/Emily_Profile.jpg",
    instagram: "https://www.instagram.com/emily",
    linkedin: "https://www.linkedin.com/in/emily",
    snapchat: "https://www.snapchat.com/add/emily"
  },
  {
    name: "Michael Brown",
    role: "Marketing Manager",
    image: "Images/Michael_Profile.jpg",
    instagram: "https://www.instagram.com/michael",
    linkedin: "https://www.linkedin.com/in/michael",
    snapchat: "https://www.snapchat.com/add/michael"
  }
];

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [itemsPerView, setItemsPerView] = React.useState(3);

  // Handle responsive items per view
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerView(1);
      } else if (window.innerWidth <= 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, teamMembers.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1);
  };

  const getVisibleMembers = () => {
    return teamMembers.slice(currentIndex, currentIndex + itemsPerView);
  };

  return (
    <section id="team">
    <div className="team">
      <div className="team-top">
        <div className="team-heading-container">
          <p className="team-heading"><i className="fas fa-dot-circle icon-dot"></i>MEET THE STORYTELLERS</p>
        </div>
        <div className="team-paragraph-container">
          <p className="team-paragraph">The Team That Captures the Moments</p>
        </div>
      </div>
      
      <div className="team-bottom">
        <div className="team-left-arrow" onClick={prevSlide}>
          <i className="fa fa-long-arrow-left"></i>
        </div>
        
        <div className="team-boxes">
          {getVisibleMembers().map((member, index) => (
            <div key={currentIndex + index} className="team-box">
              <div className="profile-picture-container">
                <img 
                  className="profile-picture" 
                  src={member.image}
                  alt={member.name}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjQ0NDIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Qcm9maWxlPC90ZXh0Pgo8L3N2Zz4K';
                  }}
                />
              </div>

              <div className="profile-stats">
                <p className="name">{member.name}</p>
                <p className="role">{member.role}</p>
              </div>
              
              <div className="media-icons-container">
                <div className="media-icons">
                  <a className="team-instagram" href={member.instagram} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="team-linkedin" href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="team-snapchat" href={member.snapchat} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-snapchat"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="team-right-arrow" onClick={nextSlide}>
          <i className="fa fa-long-arrow-right"></i>
        </div>
      </div>
    </div>
    </section>
  );
};

export default TeamCarousel;