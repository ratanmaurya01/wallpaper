import React, { useState, useEffect } from 'react'
import { Button, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { database } from '../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { ref, set } from 'firebase/database';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep'; // Import DeleteSweepIcon
import CryptoJS from 'crypto-js'; // Import CryptoJS for encryption



function Card() {

    const [inputText, setInputText] = useState('');
    const [displayTexts, setDisplayTexts] = useState([]); // State to hold the displayed texts as a list

    const handleChangeInput = (e) => {
        setInputText(e.target.value);
    }


    const encryptData = (data) => {
        const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), 'encryptionSecret').toString();
        return encrypted;
    }

    const decryptData = (encryptedData) => {
        const bytes = CryptoJS.AES.decrypt(encryptedData, 'encryptionSecret');
        const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decrypted;
    }


    useEffect(() => {
        // Load and decrypt data from localStorage on component mount
        const storedData = localStorage.getItem('texts');
        if (storedData) {
            const decryptedData = decryptData(storedData); // Decrypt stored data
            setDisplayTexts(decryptedData);
        }
    }, []);




    // useEffect(() => {
    //     // Load data from localStorage on component mount
    //     const storedData = localStorage.getItem('texts');
    //     if (storedData) {
    //         setDisplayTexts(JSON.parse(storedData));
    //     }
    // }, []);



    // set Data in firebae realtime database
    // useEffect(() => {
    //     // Fetch data from Firebase on component mount
    //     const fetchData = async () => {
    //         const snapshot = await firebase.database().ref('texts').once('value');
    //         const data = snapshot.val();
    //         if (data) {
    //             setDisplayTexts(data); // Update local state with Firebase data
    //         }
    //     };
    //     fetchData();
    // }, []);

    const handleSetText = () => {
        if (inputText.trim() !== '') {
            const newTexts = [...displayTexts, inputText];
            const encryptedTexts = encryptData(newTexts); // Encrypt newTexts
            setDisplayTexts(newTexts);
            setInputText('');
            localStorage.setItem('texts', encryptedTexts); // Store encrypted data
        }
    }
    
    // const handleSetText = () => {
    //     if (inputText.trim() !== '') {
    //         const newTexts = [...displayTexts, inputText];
    //         setDisplayTexts(newTexts);
    //         setInputText('');

    //         /// store data in firebase 
    //         //  firebase.database().ref('texts').set(newTexts);
    //         // Store newTexts in localStorage
    //         localStorage.setItem('texts', JSON.stringify(newTexts));

    //     }
    // }

    const handleDeleteText = (index) => {
        const updatedTexts = displayTexts.filter((_, idx) => idx !== index);
        setDisplayTexts(updatedTexts);
        localStorage.setItem('texts', JSON.stringify(updatedTexts));
    }

    const handleDeleteAll = () => {
        setDisplayTexts([]);
        localStorage.removeItem('texts');
    }


    return (
        <>
            <div>
                <div className="row justify-content-center">
                    <div className="card col-lg-4 col-md-8 my-4 mp-2 mx-auto">
                        <div className="card-body">
                            <h5 className="card-title">Work Place </h5>
                            <p className="card-text">The only way to do great work is to love what you do.</p>
                            <div className="form-outline mb-2 d-flex align-items-center">
                                <TextField
                                    fullWidth
                                    id="Text"
                                    label="Add Work Here"
                                    variant="standard"
                                    value={inputText}
                                    onChange={handleChangeInput}
                                />
                                <Button
                                    style={{ marginBottom: '-10px' }}
                                    variant="outlined"
                                    color="primary"
                                    startIcon={<AddIcon />}
                                    onClick={handleSetText}
                                >
                                    Add
                                </Button>

                            </div>
                            <div>
                                {/* <ul>
                                    {displayTexts.map((text, index) => (
                                        <li key={index}>{text}</li>
                                    ))}
                                </ul> */}

                                <ul>
                                    {displayTexts.map((text, index) => (
                                        <li key={index}>
                                            {text}

                                            <DeleteIcon
                                                style={{ color: '#d63384', cursor: 'pointer' }} // Add inline styling for color and cursor
                                                onClick={() => handleDeleteText(index)} // Removed the startIcon prop
                                            />

                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    startIcon={<DeleteSweepIcon />}
                                    onClick={handleDeleteAll}
                                >
                                    Delete All
                                </Button>


                            </div>


                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Card
