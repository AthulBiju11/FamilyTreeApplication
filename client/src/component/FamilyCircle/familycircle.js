// FamilyCircle.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../FamilyCircle/FamilyCircle.css'; // Ensure the CSS file exists

import './images/child1.jpg'
const children = [
  { name: 'Child 3', image: require('./images/3.jpg'), id:3 },
  { name: 'Child 4', image: require('./images/4.jpg') ,id:4},
  { name: 'Child 5', image: require('./images/5.jpg') ,id:5},
  { name: 'Child 6', image: require('./images/6.jpg') ,id:6},
  { name: 'Child 7', image: require('./images/7.jpg') ,id:7},
  { name: 'Child 8', image: require('./images/8.jpg') ,id:8},
  { name: 'Child 9', image: require('./images/9.jpeg') ,id:9},
  { name: 'Child 10', image: require('./images/10.jpg') ,id:10},
  { name: 'Child 11', image: require('./images/11.jpg') ,id:11},
  { name: 'PJ Joseph', image: require('./images/12.jpg') ,id:0},
  { name: 'Child 1', image: require('./images/child1.jpg') ,id:1},
  { name: 'Child 2', image: require('./images/2.jpg') ,id:2}, // New child
];

const FamilyCircle = () => {
  return (
    <div className="circle-container">
      {children.map((child, index) => (
        <Link key={index} to={`/familytree?id=${child.id}`} className={`circle-card card-${index}`}>
          <img src={child.image} alt={child.name} />
          {/* <p>{child.name}</p> */}
        </Link>
      ))}
    </div>
  );
};

export default FamilyCircle;
