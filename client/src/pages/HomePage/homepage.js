// HomePage.js

import React from 'react';
import FamilyCircle from '../../component/FamilyCircle/familycircle'; // Import FamilyCircle component
import Navbar from '../../component/Navbar/Navbar'; // Import Navbar component

const HomePage = () => {
  return (
    <div>
      <Navbar /> {/* Use Navbar component */}
      <h1>Welcome to the Family Tree Application</h1>
      <FamilyCircle /> {/* Use FamilyCircle component */}
    </div>
  );
};

export default HomePage;
