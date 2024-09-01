// FamilyCircle.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../FamilyCircle/FamilyCircle.css'; // Ensure the CSS file exists

import './images/child1.jpg'
const children = [
  { name: 'Child 3', image: require('./images/3.jpg') },
  { name: 'Child 4', image: require('./images/4.jpg') },
  { name: 'Child 5', image: require('./images/5.jpg') },
  { name: 'Child 6', image: require('./images/6.jpg') },
  { name: 'Child 7', image: require('./images/7.jpg') },
  { name: 'Child 8', image: require('./images/8.jpg') },
  { name: 'Child 9', image: require('./images/9.jpeg') },
  { name: 'Child 10', image: require('./images/10.jpg') },
  { name: 'Child 11', image: require('./images/11.jpg') },
  { name: 'PJ Joseph', image: require('./images/12.jpg') },
  { name: 'Child 1', image: require('./images/child1.jpg') },
  { name: 'Child 2', image: require('./images/2.jpg') }, // New child
];

const FamilyCircle = () => {
  return (
    <div className="circle-container">
      {children.map((child, index) => (
        <Link key={index} to={`/child/${index}`} className={`circle-card card-${index}`}>
          <img src={child.image} alt={child.name} />
          {/* <p>{child.name}</p> */}
        </Link>
      ))}
    </div>
  );
};

export default FamilyCircle;
