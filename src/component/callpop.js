// App.js
import React, { useState } from 'react';
import PopupDialog from './popup';

const CallFunction = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleOk = () => {
    // Add functionality for OK button
    console.log("OK button clicked!");
    closeDialog(); // Close the dialog after OK is clicked
  };

  return (
    <div className="app">
      <button onClick={openDialog} className="btn btn-primary">
        Open Dialog
      </button>
      <PopupDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        onCloseButtonLabel="CANCEL"
        onCloseButtonClick={closeDialog} // Close the dialog on "Close" button click
        title="Modal title"
        okButtonLabel="OK"
        onOk={handleOk}
      >
        <p>Welcome to the Modal!</p>
        <p>Popup 1</p>
        <p>Popup 2</p>
        <p>Popup 3</p>
      </PopupDialog>
    </div>
  );
};

export default CallFunction;
