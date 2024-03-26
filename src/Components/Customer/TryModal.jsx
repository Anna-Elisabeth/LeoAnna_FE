import { useState } from "react";
import './Modal.css';
import Modal from './Modal';

function TryModal() {
  const [openModal, setOpenModal] = useState(false);



  return (
    <div>
      <button 
      onClick={() => setOpenModal(true)} 
      className='modalButton'>
        Modal
      </button>
      <Modal 
      open={openModal} 
      onClose={() => setOpenModal(false)} />
      </div>
  );
}

export default TryModal;