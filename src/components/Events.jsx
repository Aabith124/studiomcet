import './Events.css';
import { useState } from 'react';
import {EventsData} from './utils/Generate';
export function Events() {

    const[events, setEvents] = useState([
        {
            name: 'Reliving The Most Vibrant<br />Moments | PONGAL',
            date: 'JANUARY 9<sup>th</sup>  2025',
            image: '/Images/pongal25.jpg',
            alt:'Event',
            key:1
        },
         {
            name: 'Reliving The Most Vibrant<br />Moments | DJ SUNDAR',
            date: 'JANUARY 8<sup>th</sup> 2025',
            image: '/Images/sundar.jpg',
            alt:'Event',
            key:2
        },
         {
            name: 'Reliving The Most Vibrant<br />Moments | VJ SIDHU',
            date: 'JANUARY 7<sup>th</sup> 2025',
            image: '/Images/sidhu.jpg',
            alt:'Event',
            key:3
        },
         {
            name: 'Reliving The Most Vibrant<br />Moments | HOMEST',
            date: 'MARCH 12<sup>th</sup> 2024',
            image: '/Images/hostelday.jpg',
            alt:'Event',
            key:4
        },
         {
            name: 'Reliving The Most Vibrant<br />Moments | CULTURALS',
            date: 'FEBRUARY 15<sup>th</sup> 2024',
            image: '/Images/fac.jpg',
            alt:'Event',
            key:5
        },
         {
            name: 'Reliving The Most Vibrant<br />Moments | pongal24',
            date: 'JANUARY 10<sup>th</sup> 2024',
            image: '/Images/pongal24.jpg',
            alt:'Event',
            key:6
        },
         
    ]);
    return (
        <section id="events">
        <div className="events">
            <div className="events-top-container">
                <div className="events-top">
                    <div className="events-left">
                        <div className="events-heading-container">
                            <p className="events-heading"><i className="fas fa-dot-circle icon-dot"></i>FEATURED EVENTS</p>
                        </div>
                        <div className="events-paragraph-container">
                            <p className="events-paragraph">Relive the best moments—captured by Studio MCET!</p>
                        </div>
                    </div>
                    <div className="events-right">
                        <div className="events-button-container">
                            <button className="view-all-events">View All Events</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="events-bottom">
                <div className="boxes">
                   {events.map((item, index) => (
                    <EventsData item={item} />
                
                    ))}
                </div>
            </div>
        </div>
        </section>
    );
}