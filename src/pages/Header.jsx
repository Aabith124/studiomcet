import {useRef, useState} from 'react';
import './Header.css';
export function Header(){

  const boxRef = useRef(null);       // 1. Create ref
  const [toggled, setToggled] = useState(false); // 2. Track toggle state

  const toggleStyle = () => {
    if (boxRef.current) {
      if (!toggled) {
        // Apply new style
        boxRef.current.style.display='flex';
      } else {
        // Revert to original style
        boxRef.current.style.display = 'none';
      }
      setToggled(!toggled); // 3. Flip toggle
    } 
  }
    return(
        <>
 <nav>
        <div className="left-section">
            <a href="/" className="logo">studiomcet.</a>
        </div>
       
        <div className="middle-section">
            <ul className="menu">
                <li><a href="/#">Home</a></li>
                <li><a href="/#about">About Us</a></li>
                <li><a href="/#join">Join</a></li>
                <li><a href="/#contact">Contact Us</a></li>
            </ul>
        </div>
        <div className="right-section">
            <div className="media-icons">
                <a href="https://www.linkedin.com/in/mohamed-abith" target="_blank"><i
                        className="fab fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/studiomcet" target="_blank"><i className="fab fa-instagram"></i></a>
                  
            </div>
            <div className="hamburger-menu" onClick={toggleStyle}>
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
        
    </nav>
    <div className="sidebar" >
        <ul className="sidebar-menu"  ref={boxRef}>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#join">Join</a></li>
            <li><a href="#contact">Contact Us</a></li>
        </ul>
    </div>
   
</>

    );
}