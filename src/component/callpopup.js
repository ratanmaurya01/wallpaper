// AnotherPage.js
import React, { useState } from 'react';
import PopupDialog from './popup';

const AnotherPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Close the modal after form submission
    closeDialog();
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    // Reset form data
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      <div>
        <h1>This is another page</h1>
        <button onClick={openDialog} className="btn btn-primary">Open Dialog</button>
        <PopupDialog
          isOpen={isDialogOpen}
          onClose={closeDialog}
          onCloseButtonLabel="CLOSE"
          onCloseButtonClick={closeDialog}
          title="Registration"
          okButtonLabel="Submit"
          onOk={handleSubmit}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Message:</label>
              <textarea className="form-control" name="message" value={formData.message} onChange={handleChange} />
            </div>
          </form>
        </PopupDialog>
      </div>
    </>
  );
};

export default AnotherPage;
