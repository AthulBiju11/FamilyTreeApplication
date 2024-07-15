import React, { useState, useEffect } from "react";
import "../MemberList/memberlist.css"; // Assuming you will create or update the CSS file accordingly
import newRequest from "../../utils/newRequest";
import Navbar from '../../component/Navbar/Navbar'; // Import Navbar component

const MemberList = () => {
  const [familyMembers, setFamilyMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  

  const fetchFamilyMembers = async () => {
    try {
      const response = await newRequest.get("/family/all");
      setFamilyMembers(response.data);
    } catch (error) {
      console.error("Error fetching family members:", error);
    }
  };

  useEffect(() => {
    fetchFamilyMembers();
  }, []);

  const filteredMembers = familyMembers.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    
    <div className="member-list">
      <div className='navContent'>
        <Navbar /> {/* Use Navbar component */}
      </div>
      <h1>Family Member List</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
          
        />
      </div>
      <div>
        
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Nickname</th>
              <th>Family ID</th>
              <th>Gender</th>
              <th>Mother ID</th>
              <th>Father ID</th>
              <th>Partner IDs</th>
              <th>Birth Date</th>
              <th>Death Date</th>
              <th>Anniversary Date</th>
              <th>Address</th>
              <th>Mobile Number</th>
              <th>Whatsapp Number</th>
              <th>Achievements</th>
              <th>Profession</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map((member) => (
              <tr key={member.id}>
                <td>{member.id}</td>
                <td>{member.name}</td>
                <td>{member.nickName}</td>
                <td>{member.familyId}</td>
                <td>{member.gender}</td>
                <td>{member.mid}</td>
                <td>{member.fid}</td>
                <td>{member.pids.join(", ")}</td>
                <td>{member.birthDate}</td>
                <td>{member.deathDate}</td>
                <td>{member.anniversaryDate}</td>
                <td>{member.address}</td>
                <td>{member.mobileNo}</td>
                <td>{member.whatsappNumber}</td>
                <td>{member.achievements}</td>
                <td>{member.profession}</td>
                <td>
                  {member.img && (
                    <img src={member.img} alt="Member" width="50" height="50" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberList;
