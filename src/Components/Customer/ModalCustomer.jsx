import React from 'react';
import PropTypes from 'prop-types';

const AccessibleModal = ({ message, onClose }) => {
  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login Status</h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

AccessibleModal.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AccessibleModal;
