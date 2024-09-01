// FamilyHistoryPage.js
import React from "react";
import "./Historypage.css"; // Import the CSS file
import Navbar from '../../component/Navbar/Navbar'; // Import Navbar component

const FamilyHistoryPage = () => {
  return (
    <div className="container">
      
      <div className='navContent'>
        <Navbar /> {/* Use Navbar component */}
      </div>
      <h1 className="title">PURAPPANTHANAM ELEVENS</h1>
      <div className="textArea">
      Purappanthanam Kuruvila had five children, one of whom was Ousep (Jayippen). Jayippen had eight children, and Kunjeppu (Echachen) was one of them.
Echachen and Amma initially lived in Aruvithura before moving to Kallekulam, where the original house, now occupied by Shajan, is located. Later, they relocated to Vattamattam, Mavadi. Subsequently, they shifted to the original house at Teekoy, where Josuttan has now built his new house. During their last days, Echachen and Amma resided in the house where Timmychen currently lives.
On February 4, 2019, Seby, son of Kunjuroma, formed the Purappanthanam Cousins WhatsApp group. The group's intention was to unite all cousin brothers and foster a sense of love and camaraderie through social gatherings. The first meeting of the Purappanthanam Cousins took place at Kunjuroma's house (Kalayathinal) in Melampara, where it was unanimously decided to hold such meetings whenever possible.
After several gatherings, during a meeting at Rogychettan's house in Erumely, a majority decision was made to include cousin sisters in the group. On December 30, 2023, a major Purappanthanam Cousins meet was organized, bringing together the complete families of all cousins. More than 150 members participated in this event. During this meeting, a formal committee was established with Rogychettan as President, Seby as Secretary, and Josuttan as Treasurer.
At this meeting, Ampara Seby proposed the idea of creating a digital family tree for the Purappanthanam Cousins, which could later be expanded into a website. With strong support from committee members and all the cousins, Seby completed the data collection and entry by July 19, 2024.
The website was named "Purappanthanam Elevens Genealogy" (PEG).
      </div>
    </div>
  );
};

export default FamilyHistoryPage;
