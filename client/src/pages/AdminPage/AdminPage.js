import React, { useState, useEffect } from 'react';
import './AdminPage.css';
import newRequest from '../../utils/newRequest';
import { Cloudinary } from '@cloudinary/url-gen';
import Dropzone from 'react-dropzone';
import { produce } from 'immer';

const AdminPage = () => {
  const [formData, setFormData] = useState({
    name: null,
    gender: null,
    pid: null,
    mid: null,
    fid: null,
    img: null,
  });

  const [familyMembers, setFamilyMembers] = useState([]);

  useEffect(() => {
    const fetchFamilyMembers = async () => {
      try {
        const response = await newRequest.get('/family/all');
        setFamilyMembers(response.data);
      } catch (error) {
        console.error('Error fetching family members:', error);
      }
    };

    fetchFamilyMembers();
  }, []);

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'doet8xhyx',
      api_key: '116524793817853',
      api_secret: 'ktyft8-cJFEAZ-RxRfD4lC_2JUA'
    },
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageUpload = async (files) => {
    const uploadedFile = files[0];
    const formData = new FormData();
    formData.append('file', uploadedFile);
    formData.append('upload_preset', 'fiverr');

    try{
      const response = await fetch('https://api.cloudinary.com/v1_1/doet8xhyx/image/upload', {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
      setFormData((prevState) =>
        produce(prevState, (draftState) => {
          draftState.img = data.secure_url;
        })
      );
      console.log("FormData", formData)
    }catch (error){
      console.log(error)
    }
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission



    const response = await newRequest.post("/family/add", formData);
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
        <div className="form-group">
          <label htmlFor="img">Image:</label>
          <Dropzone onDrop={handleImageUpload}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {formData.img ? (
                  <img src={formData.img} alt="Uploaded" width="200" />
                ) : (
                  <p>Drag and drop an image here, or click to select a file</p>
                )}
              </div>
            )}
          </Dropzone>
        </div>

        <button type="submit">Submit</button>
      </form>
      <div>
        
          <h2>Family Members</h2>
          <table className="table"> {/* Add the 'table' class */}
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Mother ID</th>
                <th>Father ID</th>
                <th>Parent IDs</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {familyMembers.map((member) => (
                <tr key={member.id}>
                  <td>{member.id}</td>
                  <td>{member.name}</td>
                  <td>{member.gender}</td>
                  <td>{member.mid}</td>
                  <td>{member.fid}</td>
                  <td>{member.pids.join(', ')}</td>
                  <td>
                    {member.img && <img src={member.img} alt="Member" width="50" height="50" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  );
};

export default AdminPage;
