
import { useState } from "react";
import Modal from "../Customer/Modal";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");


  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setModalMessage("Your order is now complete");
    setShowModal(true);
  };

  const handleConfetti = () => {
    confetti({
      particleCount: 500,
      spread: 320,
    });
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleNavigate = () => {
    navigate("/checkout"); // Navigate to items page after adding to cart
    setShowModal(false); // Close the modal
  };

  return (
    <div>
      <h1 className="border border-dark p-2 mb-2 border-4 border-dark rounded" style={{ marginLeft: "50px", marginTop: "50px", width: "380px", color: "white", fontFamily: "Verdana, sans-serif", backgroundColor: "#365074" }}>Payment Details</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="border border-dark p-2 mb-2 border-4 border-dark rounded" style={{ color: "white", fontFamily: "Verdana, sans-serif", fontSize: "20px", marginTop: "50px", marginLeft: "50px", backgroundColor: "#365074", width: "450px" }}>
          <br />
          <label htmlFor="fn">Name: As it appears on the card &nbsp;</label>
          <input  required className="form-control border-3 border-dark rounded" aria-label="Item name" style={{ width: "250px", height: "31px" }} type="text" />
          <br />
          <label htmlFor="fn">Long Card Number: PAN &nbsp;</label>
          <input  required className="form-control border-3 border-dark rounded" aria-label="Item name" style={{ width: "250px", height: "31px" }} type="text" />
          <br />
          <label htmlFor="fn">Card Expiry Date: MM/YY &nbsp;</label>
          <input  required className="form-control border-3 border-dark rounded" aria-label="Item name" style={{ width: "250px", height: "31px" }} type="text" />
          <br />
          <label htmlFor="fn"> CVC &nbsp;</label>
          <input  required className="form-control border-3 border-dark rounded" aria-label="Item name" style={{ width: "250px", height: "31px" }} type="text" />
          <br />
          <label htmlFor="fn"> Postcode &nbsp;</label>
          <input  required className="form-control border-3 border-dark rounded" aria-label="Item name" style={{ width: "250px", height: "31px" }} type="text" />
          <br />
          <button className="btn btn-success btn-lg" type="submit">Submit</button>
        </div>
      </form>

      {/* Modal for success message */}
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

export default Payment;