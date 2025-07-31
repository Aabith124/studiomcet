import React, { useState } from 'react';
import './Join.css'; // Import your existing styles

export const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    rollno: '',
    contact: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Clear the form
    setFormData({ name: '', rollno: '', contact: '' });

    // Show confirmation
    setIsSubmitted(true);
  };

  return (
    <section id="join">
      <div className="join">
        {/* Header Section */}
        <div className="join-top">
          <div className="join-heading-container">
            <p className="join-heading"><i className="fas fa-dot-circle icon-dot"></i>Capture. Create. Inspire.</p>
          </div>
          <div className="join-paragraph-container">
            <p className="join-paragraph">Become a Part of Studio MCET</p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="join-bottom">
          {/* Left Side - Why Studio MCET */}
          <div className="join-bottom-left">
            <div className="why-studiomcet-container">
              <p className="why-studiomcet">Why Studio MCET?</p>
            </div>
            <div className="why-studiomcet-paragraph-container">
              <p className="why-studiomcet-paragraph">
                At Studio MCET, we're more than just a club—we're a family of
                creatives who learn, grow, and evolve together. It's a place where you build skills, gain
                recognition, and form lasting friendships with people who share your passion. As one of the most
                prestigious and active clubs on campus, we're always on the move, capturing moments that matter.
                If you love photography and want to be part of something exciting, this is where you belong!
              </p>
            </div>
          </div>

          {/* Right Side - Form / Confirmation */}
          <div className="join-bottom-right">
            {!isSubmitted ? (
              <div className="joining-form">
                <label htmlFor="join-name">Name</label>
                <br />
                <input
                  type="text"
                  id="join-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <br />

                <label htmlFor="rollno">Roll no</label>
                <br />
                <input
                  type="text"
                  id="rollno"
                  name="rollno"
                  value={formData.rollno}
                  onChange={handleInputChange}
                  required
                />
                <br />

                <label htmlFor="contact">Contact</label>
                <br />
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                />
                <br />
                <br />

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="join-submit"
                >
                  Submit
                </button>
              </div>
            ) : (
              <div className="joining-form join-confirmation">
  <h3>🎉 You’re In! Welcome to StudioMCET</h3>
  <p>
    We’re excited to have you on board.
    <br />
    Join our WhatsApp group to stay updated!
  </p>
  <a
    className="join-whatsapp-link"
    href="https://chat.whatsapp.com/HxtzwOyvBESJr4rQ7pK42l"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa-brands fa-whatsapp" style={{ color: '#ffffff', marginRight: '8px' }}></i>
    Join WhatsApp Group
  </a>
</div>

            )}
          </div>
        </div>
      </div>
    </section>
  );
};
