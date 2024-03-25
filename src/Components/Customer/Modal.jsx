const Modal = ({ message, onClose }) => {
    return (
      <div
        className="modal"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black background
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center', // Center the modal content vertically and horizontally
        }}
      >
        <div
          className="modal-content"
          style={{
            backgroundColor: '#fff',
            padding: '20px',
            border: '1px solid #888',
            borderRadius: '4px',
          }}
        >
          <p>{message}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };
  
  export default Modal;