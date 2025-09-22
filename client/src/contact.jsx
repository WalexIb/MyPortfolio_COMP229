/* File: Contact.jsx
   Student: Adewale Ibrahim
   StudentID: 301515732
   Date: 2025-09-15
*/

/* Import necessary modules and assets */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });

  // Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for your message!");
    navigate("/"); // Redirect to Home Page
  };

  return (
    <div className="main-container">
      {/* Contact Info Panel */}
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Name:</strong> Adewale Ibrahim</p>
        <p><strong>Email:</strong> aibra188@my.centennialcollege.ca</p>
        <p><strong>Phone:</strong> +1 (647) 561 4661</p>
        <p><strong>Location:</strong> Toronto, Canada</p>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Send Me a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input 
              type="text" 
              name="firstName" 
              placeholder="First Name" 
              value={formData.firstName} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="text" 
              name="lastName" 
              placeholder="Last Name" 
              value={formData.lastName} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-row">
            <input 
              type="tel" 
              name="phone" 
              placeholder="Contact Number" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <textarea 
            name="message" 
            placeholder="Write your message..." 
            value={formData.message} 
            onChange={handleChange} 
            rows="4" 
            required
          ></textarea>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}