// PopupDialog.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const PopupDialog = ({ isOpen, onCloseButtonLabel, onCloseButtonClick, title, children, okButtonLabel, onOk }) => {
  return (
    <Modal show={isOpen} onHide={onCloseButtonClick} backdrop='static' >
      
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCloseButtonClick}>
          {onCloseButtonLabel}
        </Button>
        <Button variant="primary" onClick={onOk}>

          {okButtonLabel}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopupDialog;
