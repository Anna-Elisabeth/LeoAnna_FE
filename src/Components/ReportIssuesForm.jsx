import React, { useState } from 'react';
import axios from 'axios';
import Modal from './Customer/Modal';
import { useNavigate } from "react-router-dom";

function ReportIssuesForm() {
  const [email, setEmail] = useState('');
  const [issue, setIssue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await axios.post("http://localhost:8082/report/submit", { email, issue });
      setModalMessage('Issue reported successfully!');
      setShowModal(true);
      return;
      
    } catch (error) {
      console.error('Error reporting issue:', error);
    //   alert('An error occurred while reporting the issue.');
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleNavigate = () => {
    if (modalMessage.includes("Issue")) {
      navigate("/report-issues");
      setShowModal(false);
      setEmail("");
      setIssue("");
    }};

  return (
    <div className="container mt-4">
      <h2 aria-label="report issue form" className="border border-dark p-2 mb-2 border-4 border-dark rounded" style={{ color: "white", fontFamily: "Verdana, sans-serif", width: "250px", backgroundColor: "#365074" }}>Report Issues</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <br />
            <br />
          <label aria-label="email field" className="border border-dark p-2 mb-2 border-4 border-dark rounded" style={{fontSize:"25px", color: "white", fontFamily: "Verdana, sans-serif", width: "100px", backgroundColor: "#365074" }}>Email:</label>
          <input 
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ fontSize: "25px" }}
          />
        </div>
        <div className="mb-3">
          <label aria-label="email field" className="border border-dark p-2 mb-2 border-4 border-dark rounded" style={{fontSize:"25px", color: "white", fontFamily: "Verdana, sans-serif", width: "270px", backgroundColor: "#365074" }} htmlFor="issue" >Describe the issue:</label>
          <textarea
            className="form-control"
            id="issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            rows={6} 
            required
            style={{ fontSize: "25px" }}
          />
        </div>
        <div>
        <button aria-label="submit button" type="submit" className="btn btn-light btn-lg" >Submit</button>
        </div>
        
      </form>
      {showModal && (
        <Modal
          open={showModal}
          onClose={handleModalClose}
          message={modalMessage}
          onNavigate={handleNavigate}
        />
      )}
    </div>
  );
}

export default ReportIssuesForm;
