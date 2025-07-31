import { useState, useEffect } from "react";
import { Link } from 'react-router';

import "./ImageSlider.css";

import ParticlesComponent from "./ParticlesComponent";

const images = [
  '/Images/img1.jpg',
  '/Images/img2.jpg',
  '/Images/img3.jpg',
  '/Images/img4.jpg',
  '/Images/img5.jpg',
  '/Images/img6.jpg',
  '/Images/img7.jpg'
];


export const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false); // delay first 
  const [overlay, setOverlay] = useState(false);

  useEffect(() => {
    const showTimeout = setTimeout(() => setShow(true), 100);

    const revealTimeout = setTimeout(() => setOverlay(true), 600);

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(showTimeout);
      clearTimeout(revealTimeout); // 👈 Don't forget to clear this one too!
    };
  }, []);

  return (
    <section id="#">
      <div className="slider-wrapper">

        {/* Image Slider */}
        <div className="slider-container">

          {/* ✅ Particles inside image container */}
          <ParticlesComponent className="particles-overlay" />

          {/* Images */}
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className={`slide ${i === index && show ? "active" : ""}`}
              alt={`slide-${i}`}
            />
          ))}
        </div>

        {/* Overlay Text + Button */}
        {overlay && (
          <div className="overlay">
            <div className="book-event">
              <p className="book-event-text">BOOK STUDIOMCET FOR YOUR EVENT!</p>
            </div>

            <div className="book-event-description">
              <p className="book-event-description-content">
                Get professional photography coverage for college events, fests, and workshops.
              </p>
            </div>
            <Link to="/booknow">
              <div>
                <button className="book-event-button">
                  Book Event
                  <span className="right-arrow">
                    <i className="fa fa-long-arrow-right"></i>
                  </span>
                </button>
              </div>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}