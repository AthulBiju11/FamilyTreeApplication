import React, { useState } from 'react';
import './AdminPage.css';
import newRequest from '../../utils/newRequest';

const AdminPage = () => {
  const [formData, setFormData] = useState({
    name: null,
    gender: null,
    pid:null,
    mid: null,
    fid: null
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission

    

    const response = await newRequest.post("/family/add",formData);
    console.log(response.data)
  };

  return (
    <div className="admin-page">
      <h1>Admin Page</h1>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="pid">Partner ID:</label>
          <input
            type="number"
            id="pid"
            name="pid"
            value={formData.pid}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mid">Mother ID:</label>
          <input
            type="number"
            id="mid"
            name="mid"
            value={formData.mid}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fid">Father ID:</label>
          <input
            type="number"
            id="fid"
            name="fid"
            value={formData.fid}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminPage;
