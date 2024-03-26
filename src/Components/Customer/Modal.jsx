import Logo5 from "./Logo5.png";
import './Modal.css';

const Modal = ({ open, onClose, message, onNavigate }) => {
  if (!open) return null;

  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img src={Logo5} alt='dolphinity logo' />
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content' style={{ fontSize: "20px", fontFamily: "Verdana, sans-serif", fontWeight: "bold"  }}>
            {message} {/* Dynamically display the message */}
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary' onClick={onNavigate}>
              <span className='bold'>Continue</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;