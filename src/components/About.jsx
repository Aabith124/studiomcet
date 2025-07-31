import './About.css';
export function About() {
    return (
        <>
        <section id="about">
            <div className="about-section">
                <div className="about-left">
                    <img className="group-photo" src="/group.jpg" alt="Group" />
                </div>
                <div className="about-right">
                    <div className="about-heading">
                        <p className="about-heading-content">
                            ABOUT <span className="bold">STUDIOMCET'S</span> VISION
                        </p>
                    </div>
                    <div className="pseudo-group-photo-container">
                        <img className="pseudo-group-photo" src="/photo.jpg" alt="Club activity" />
                    </div>
                    <div className="about-paragraph">
                        <p className="about-paragraph-content">
                            At Studio MCET, our vision is to build a creative and collaborative space for photography enthusiasts.
                            We strive to foster a community where students can explore their passion for visual storytelling and enhance their skills.
                            <br />
                            One of our primary goals is to share knowledge in photography, videography, editing, and designing.
                            Through hands-on learning, workshops, and peer collaboration, we aim to help members refine their craft and stay updated with the latest trends in visual media.
                            <br />
                            We are committed to covering college events, fests, and workshops, ensuring that important moments are captured with professionalism and creativity.
                            Our team works dedicatedly to document the vibrancy of campus life, preserving memories that last a lifetime.
                            <br />
                            At Studio MCET, we believe in continuous learning, artistic expression, and the power of storytelling through visuals.
                            Our vision is to not just take pictures, but to create impactful narratives that resonate with our audience.
                        </p>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
}
