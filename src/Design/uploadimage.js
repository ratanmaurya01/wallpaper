import { useState } from 'react';
import { storage } from '../firebase'; // Import Firebase Storage instance
import Image from './Image'
import CustomNavbar from '../navbar/navbar'
import '../App.css'

function Uploadimge() {


  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
      if (e.target.files[0]) {
          setImage(e.target.files[0]);
      }
  };

  const handleUpload = () => {
      const storageRef = storage.ref();
      const imageRef = storageRef.child(`images/${image.name}`);

      imageRef.put(image).then((snapshot) => {
          //  console.log('Image uploaded successfully:', snapshot);
          alert('Image save in database ');
          // You can handle success message or further actions here
      }).catch((error) => {
          console.error('Error uploading image:', error);
          // Handle error message or retry logic here
      });
  };

  return (
    <>
   
      <CustomNavbar/>
      <div className='StartPage' >

        <h1>Upload Image </h1>

        <div>
            <input type="file" onChange={handleImageChange} />
            <button onClick={handleUpload}>Upload Image</button>
        </div>
       
        <div style={{marginTop:'10px'}}> 
          
        <Image/>
        </div>
      </div>

    </>
  )
}

export default Uploadimge



// import React, { useState } from 'react';
// import { storage } from '../firebase'; // Import Firebase Storage instance

// import CustomNavbar from '../navbar/navbar'
// import '../App.css'

// function Uploadimge() {
//   const [image, setImage] = useState(null);
//   const [text, setText] = useState('');

//   const handleImageChange = (e) => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };
  
//   const handleTextChange = (e) => {
//     setText(e.target.value);
//   };

//   const handleUpload = () => {
//     if (image && text.trim() !== '') {
//       const storageRef = storage.ref();
//       const imageRef = storageRef.child(`images/${image.name}`);
//       const textRef = storageRef.child(`text/${image.name}.txt`);

//       imageRef.put(image).then((imageSnapshot) => {
//         console.log('Image uploaded successfully:', imageSnapshot);
//         // Handle success message or further actions for image upload

//         textRef.putString(text).then((textSnapshot) => {
//           console.log('Text uploaded successfully:', textSnapshot);
//           // Handle success message or further actions for text upload
//         }).catch((textError) => {
//           console.error('Error uploading text:', textError);
//           // Handle error message or retry logic for text upload
//         });

//       }).catch((imageError) => {
//         console.error('Error uploading image:', imageError);
//         // Handle error message or retry logic for image upload
//       });
//     } else {
//       console.error('Please select an image and enter some text.');
//       // Handle validation error message
//     }
//   };

//   return (
//     <>
//       <CustomNavbar/>
//       <div className='StartPage'>
//         <h1>Upload Image</h1>
//         <div>
//           <input type="file" onChange={handleImageChange} />
//           <input type="text" placeholder="Enter text" value={text} onChange={handleTextChange} />
//           <button onClick={handleUpload}>Upload Image and Text</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Uploadimge;
