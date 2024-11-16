import React from 'react';
import Modal from 'react-modal';

const Custommodal = ({ isOpen, closeModal, modalContent }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Download Voice Modal"
    >
      <h2>Download Voice</h2>
      <p>{modalContent}</p>
      <button onClick={closeModal}>Close Modal</button>
    </Modal>
  );
};

export default Custommodal;
