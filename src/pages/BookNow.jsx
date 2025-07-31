import React, { useState, useEffect } from 'react';
import './BookNow.css';
import './Confirmation.css';

export const BookNow = () => {
  const [formData, setFormData] = useState({
    organizerName: '',
    department: '',
    email: '',
    phone: '',
    eventName: '',
    eventDescription: '',
    eventDate: '',
    startTime: '',
    endTime: '',
    venue: '',
    coverage: [],
    specialRequests: '',
    confirmation: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (name === 'coverage[]') {
        const updatedCoverage = checked
          ? [...formData.coverage, value]
          : formData.coverage.filter(item => item !== value);
        setFormData(prev => ({ ...prev, coverage: updatedCoverage }));
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setFadeIn(true), 100);
  };

  const isFormDisabled = isSubmitted;

  return (
    <div className="book-event-outer">
      <div className="book-event-container">
        <div className="book-event-heading">
          <h1 className="heading">No hassles. No delays. Just stunning photos — reserve your slot now!</h1>
        </div>
        <div className="book-event-paragraph">
          <p className="paragraph">
            Booking us is just a click away. From cultural fests to workshops and everything in between — we're
            here to frame your best moments in style.<br />
            Fill out the quick form, lock in your date, and leave the rest to us.
          </p>
        </div>
      </div>

      {isSubmitted ?(
  <div className={`booking-confirmation ${fadeIn ? 'fade-in' : ''}`}>
    <div className="lottie-check">
      <i className="fa-solid fa-circle-check" style={{ color: '#63E6BE', fontSize: '4rem' }}></i>
    </div>
    <h2>Event Booked Successfully!</h2>
    <p>Thanks for booking StudioMCET — your request has been received.</p>
    <a href="/" className="go-home-btn">Go Home</a>
  </div>
)
: (
        <div className="form-container">
          <h1 className="form-title">Book Now</h1>
          <form onSubmit={handleSubmit}>
            <div className="section-title">Event Organizer Details</div>

            <div className="form-group">
              <label htmlFor="organizerName">Name</label>
              <input
                type="text"
                id="organizerName"
                name="organizerName"
                value={formData.organizerName}
                onChange={handleInputChange}
                required
                disabled={isFormDisabled}
              />
            </div>

            <div className="form-group">
              <label htmlFor="department">Department / Club Name</label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                required
                disabled={isFormDisabled}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email ID</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isFormDisabled}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                disabled={isFormDisabled}
              />
            </div>

            <div className="section-divider"></div>

            <div className="section-title">Event Details</div>

            <div className="form-group">
              <label htmlFor="eventName">Event Name</label>
              <input
                type="text"
                id="eventName"
                name="eventName"
                value={formData.eventName}
                onChange={handleInputChange}
                required
                disabled={isFormDisabled}
              />
            </div>

            <div className="form-group">
              <label htmlFor="eventDescription">Event Description</label>
              <textarea
                id="eventDescription"
                name="eventDescription"
                value={formData.eventDescription}
                onChange={handleInputChange}
                placeholder="Short brief about what the event is about"
                required
                disabled={isFormDisabled}
              ></textarea>
            </div>

            <div className="section-divider"></div>

            <div className="section-title">Date & Time</div>

            <div className="datetime-row">
              <div className="form-group">
                <label htmlFor="eventDate">Event Date</label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  required
                  disabled={isFormDisabled}
                />
              </div>

              <div className="form-group">
                <label htmlFor="startTime">Start Time</label>
                <input
                  type="time"
                  id="startTime"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleInputChange}
                  required
                  disabled={isFormDisabled}
                />
              </div>

              <div className="form-group">
                <label htmlFor="endTime">End Time</label>
                <input
                  type="time"
                  id="endTime"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleInputChange}
                  required
                  disabled={isFormDisabled}
                />
              </div>
            </div>

            <div className="section-divider"></div>

            <div className="section-title">Location/Venue</div>

            <div className="form-group">
              <label htmlFor="venue">Venue Name / Block</label>
              <input
                type="text"
                id="venue"
                name="venue"
                value={formData.venue}
                onChange={handleInputChange}
                required
                disabled={isFormDisabled}
              />
            </div>

            <div className="section-divider"></div>

            <div className="section-title">Photography Requirements</div>

            <div className="form-group">
              <label>Coverage Needed:</label>
              <div className="checkbox-group">
                {[
                  'photos', 'videos', 'reels',
                  'groupPhotos', 'crowdMoments', 'liveTelecast'
                ].map((type) => (
                  <div className="checkbox-item" key={type}>
                    <input
                      type="checkbox"
                      id={type}
                      name="coverage[]"
                      value={type}
                      checked={formData.coverage.includes(type)}
                      onChange={handleInputChange}
                      disabled={isFormDisabled}
                    />
                    <label htmlFor={type}>
                      {type.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="specialRequests">Special Requests / Notes</label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                placeholder="e.g., 'Need team at 9:30 AM sharp', or 'Focus more on chief guest coverage'"
                disabled={isFormDisabled}
              ></textarea>
            </div>

            <div className="section-divider"></div>

            <div className="confirmation-group">
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="confirmation"
                  name="confirmation"
                  checked={formData.confirmation}
                  onChange={handleInputChange}
                  required
                  disabled={isFormDisabled}
                />
                <label htmlFor="confirmation">I confirm the event details are correct</label>
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={isFormDisabled}>
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
