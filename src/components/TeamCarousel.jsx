import React, { useState, useEffect, useRef } from 'react';
import './TeamCarousel.css';

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
  },
  {
    name: "Lisa Wilson",
    role: "Project Manager",
    image: "Images/Lisa_Profile.jpg",
    instagram: "https://www.instagram.com/lisa",
    linkedin: "https://www.linkedin.com/in/lisa",
    snapchat: "https://www.snapchat.com/add/lisa"
  }
];

export const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [slideDistance, setSlideDistance] = useState(0);

  const carouselRef = useRef(null);

  // Handle responsive behavior and calculate slide distance
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Set items per view based on screen size to prevent card cutting
      if (width <= 480) {
        setItemsPerView(1); // Show 1 card on mobile
      } else if (width <= 768) {
        setItemsPerView(2); // Show 2 cards on small tablets
      } else {
        setItemsPerView(3); // Show 3 cards on larger screens
      }

      // Calculate slide distance including margins and gaps
      setTimeout(() => {
        if (carouselRef.current) {
          const firstCard = carouselRef.current.querySelector('.team-box');
          if (firstCard) {
            const cardWidth = firstCard.offsetWidth;
            const cardMargin = parseFloat(getComputedStyle(firstCard).marginLeft) + 
                              parseFloat(getComputedStyle(firstCard).marginRight);
            const computedStyle = getComputedStyle(carouselRef.current);
            const gap = parseFloat(computedStyle.gap) || 0;
            
            // Calculate total distance per slide including margins
            setSlideDistance(cardWidth + cardMargin + gap);
          }
        }
      }, 100);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset currentIndex if it exceeds the new maxIndex after resize
  useEffect(() => {
    const maxIndex = Math.max(0, teamMembers.length - itemsPerView);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerView, currentIndex]);

  const maxIndex = Math.max(0, teamMembers.length - itemsPerView);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Calculate transform with proper spacing
  const getTransformValue = () => {
    const baseOffset = 15; // Account for padding
    return -(currentIndex * slideDistance) + baseOffset;
  };

  return (
    <section id="team">
      <div className="team">
        <div className="team-top">
          <div className="team-heading-container">
            <p className="team-heading">
              <i className="fas fa-dot-circle icon-dot"></i> MEET THE STORYTELLERS
            </p>
          </div>
          <div className="team-paragraph-container">
            <p className="team-paragraph">The Team That Captures the Moments</p>
          </div>
        </div>

        <div className="team-bottom">
          <div
            className={`team-left-arrow ${currentIndex === 0 ? 'disabled' : ''}`}
            onClick={prevSlide}
            role="button"
            aria-label="Previous team members"
          >
            <i className="fa fa-long-arrow-left"></i>
          </div>

          <div className="carousel-track-container">
            <div
              className="team-boxes"
              ref={carouselRef}
              style={{
                transform: `translateX(${getTransformValue()}px)`,
              }}
            >
              {teamMembers.map((member, index) => (
                <div
                  className="team-box"
                  key={index}
                >
                  <div className="profile-picture-container">
                    <img
                      className="profile-picture"
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      onError={(e) => {
                        e.target.src =
                          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiByeD0iNjAiIGZpbGw9IiNmMGYwZjAiLz4KPHN2ZyB4PSIzMCIgeT0iMzAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5OTkiIHN0cm9rZS13aWR0aD0iMiI+CjxwYXRoIGQ9Im0yMCAxNy0yLTJtMi0xNWE0IDQgMCAwIDAtOCAwdjZhNCA0IDAgMCAwIDggMHoiLz4KPHN2ZyB5PSIxNiIgd2lkdGg9IjI0IiBoZWlnaHQ9IjgiIHZpZXdCb3g9IjAgMCAyNCA4IiBmaWxsPSJub25lIiBzdHJva2U9IiM5OTkiIHN0cm9rZS13aWR0aD0iMiI+CjxwYXRoIGQ9Ik0yIDRhMiAyIDAgMCAxIDItMmgxNmEyIDIgMCAwIDEgMiAydjBhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJ6Ii8+Cjwvc3ZnPgo8L3N2Zz4KPC9zdmc+';
                      }}
                    />
                  </div>
                  <div className="profile-stats">
                    <p className="name">{member.name}</p>
                    <p className="role">{member.role}</p>
                    <div className="media-icons-container">
                      <div className="media-icons">
                        <a
                          className="team-instagram"
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s Instagram`}
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a
                          className="team-linkedin"
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a
                          className="team-snapchat"
                          href={member.snapchat}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s Snapchat`}
                        >
                          <i className="fab fa-snapchat"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`team-right-arrow ${
              currentIndex >= maxIndex ? 'disabled' : ''
            }`}
            onClick={nextSlide}
            role="button"
            aria-label="Next team members"
          >
            <i className="fa fa-long-arrow-right"></i>
          </div>
        </div>
      </div>
    </section>
  );
};