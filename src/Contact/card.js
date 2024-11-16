import React, { useState, useEffect, useRef } from 'react';
import { Button, TextField, TextareaAutosize } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import EventIcon from '@mui/icons-material/Event'; // Import the calendar icon
import CryptoJS from 'crypto-js';
import './card.css';
import VolumeUpIcon from '@mui/icons-material/VolumeUp'; // Import the voice/speaker icon
import VolumeOffIcon from '@mui/icons-material/VolumeOff'; // Import the stop icon
import DownloadIcon from '@mui/icons-material/Download';
import axios from 'axios';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import PopupDialog from '../component/popup'
import Typography from '@mui/material/Typography';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CommonFunction from '../common';
import Alert from '@mui/material/Alert';


function Card() {
    const commonFunction = new CommonFunction();
    const containerRef = useRef(null);
    const [inputText, setInputText] = useState('');
    const [displayTexts, setDisplayTexts] = useState([]);
    const [inputTextError, setInputTextError] = useState('');
    const [headingText, setHeadingText] = useState('');
    const [headingCounter, setHeadingCounter] = useState(1);
    const [isSpeaking, setIsSpeaking] = useState(false); // State to track if speech is currently active


    const handleChangeInput = (e) => {
        setShowAlert(false);
        setInputTextError('');
        if (e.target.id === 'Text') {
            setInputText(e.target.value);
        } else if (e.target.id === 'Heading') {
            setHeadingText(e.target.value);
        }
    };

    const encryptData = (data) => {
        const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), 'encryptionSecret').toString();
        return encrypted;
    };

    const decryptData = (encryptedData) => {
        const bytes = CryptoJS.AES.decrypt(encryptedData, 'encryptionSecret');
        const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decrypted;
    };

    useEffect(() => {
        const storedData = localStorage.getItem('texts');
        if (storedData) {
            try {
                const decryptedData = decryptData(storedData);
                setDisplayTexts(decryptedData);
            } catch (error) {
                console.error('Error decrypting data:', error);
            }
        }
    }, []);

    const handleSetText = () => {

        setShowAlert(false);

        if (inputText.trim() === '') {
            setInputTextError('Please enter text before adding.');
            return;
        }

        const currentDate = new Date().toISOString();
        let newHeading = headingText.trim(); // Use the entered heading if not blank
        if (newHeading === '') {
            newHeading = `Heading ${headingCounter}`; // Use the incremented heading number
            setHeadingCounter(headingCounter + 1); // Increment the heading counter
        }


        const newText = { heading: newHeading, title: 'New Title', text: inputText, date: currentDate };
        const newTexts = [newText, ...displayTexts];
        const encryptedTexts = encryptData(newTexts);
        setDisplayTexts(newTexts);
        setInputText('');
        setHeadingText(''); // Reset heading input after adding
        localStorage.setItem('texts', encryptedTexts);

    };

    const handleDeleteText = (index) => {
        const updatedTexts = displayTexts.filter((_, idx) => idx !== index);
        setDisplayTexts(updatedTexts);
        localStorage.setItem('texts', JSON.stringify(updatedTexts));
    };

    const handleDeleteAll = () => {
        setShowAlert(false);
        setDisplayTexts([]);
        localStorage.removeItem('texts');
    };

    const speakText = (text) => {
        const speech = new SpeechSynthesisUtterance();
        speech.lang = 'hi-IN'; // Set language to Hindi (India)
        speech.volume = 1; // Set volume level (0 to 1)
        speech.rate = 1; // Set speed rate (0.1 to 10)
        speech.pitch = 1; // Set pitch level (0 to 2)
        let chunkSize = 200; // Define chunk size (adjust as needed)

        if (text.length <= chunkSize) {
            // If text length is within chunk size, speak directly
            speech.text = text;
            window.speechSynthesis.speak(speech);
        } else {
            // If text is longer, split into chunks and speak each chunk
            let chunks = [];
            for (let i = 0; i < text.length; i += chunkSize) {
                chunks.push(text.slice(i, i + chunkSize));
            }

            const speakChunk = (index) => {
                if (index < chunks.length) {
                    speech.text = chunks[index];
                    speech.onend = () => speakChunk(index + 1);
                    window.speechSynthesis.speak(speech);
                }
            };

            speakChunk(0); // Start speaking chunks from index 0
        }

        setIsSpeaking(true); // Set state to indicate speech is active
    };



    const stopSpeech = () => {
        window.speechSynthesis.cancel();
        setIsSpeaking(false); // Set state to indicate speech is stopped
    };

    const handleSpeakText = (text) => {
        if (isSpeaking) {
            stopSpeech(); // Stop speech if already speaking
            return;
        }

        if (text.trim() === '') {
            console.log('Cannot speak empty text.');
            return;
        }
        speakText(text);
    };

    // const handleDownloadVoice = (text) => {

    //     const speechSynthesisUtterance = new SpeechSynthesisUtterance(text);
    //     window.speechSynthesis.speak(speechSynthesisUtterance);

    //     speechSynthesisUtterance.onend = () => {
    //         const blob = new Blob([speechSynthesisUtterance.voice], { type: 'audio/wav' });
    //         const url = URL.createObjectURL(blob);
    //         const element = document.createElement('a');
    //         element.href = url;
    //         element.download = 'voice.wav';
    //         document.body.appendChild(element);
    //         element.click();
    //         document.body.removeChild(element);
    //     };
    // };


    const handleDownloadVoice1 = async (text) => {
        const response = await axios.get(`https://api.voicerss.org/?key=YOUR_API_KEY&src=${encodeURIComponent(text)}&hl=en-us&f=48khz_16bit_stereo`);

        if (response && response.data) {
            const audioBlob = new Blob([response.data], { type: 'audio/mpeg' });
            saveAs(audioBlob, 'voice.mp3');
        }
    };

    useEffect(() => {
        if (containerRef.current) {
            html2canvas(containerRef.current).then(canvas => {
                canvas.toBlob(blob => {
                    saveAs(blob, 'voice.png');
                });
            });
        }
    }, [containerRef]);

    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(false);
    };


    const handleOk = () => {
        setIsOpen(false);
    };
    const handleDownloadVoice = (text) => {
        setIsOpen(true);
    }

    const [showAlert, setShowAlert] = useState(false); // State to control alert visibility


    const handleSaveFirebase = async () => {

        const isLoggedIn = await commonFunction.isCheckUser()
        if (isLoggedIn) {
            // User is logged in
            console.log('User is logged in');
            //  setShowAlert(true); // Show alert when user is not logged in

        } else {
            // User is not logged in
            setShowAlert(true); // Show alert when user is not logged in
            console.log('User is not logged in');
        }

    }


    const handleCloseAlert = () => {
        setShowAlert(false); // Close alert when clicked on the close button
    };


    return (
        <>


            <div>
                <div className="row justify-content-center carview">
                    <div className="card mb-lg-0 col-md-8 my-4 mp-2 mx-auto">
                        <div className="card-body">
                            <h5 className="card-title">Work Place</h5>
                            <p className="card-text">The only way to do great work is to love what you do.</p>
                            <div className="form-outline mb-2 d-flex align-items-center">
                                <TextField
                                    fullWidth
                                    id="Heading" // Unique ID for the heading input
                                    label="Add Heading Here" // Label for the heading input
                                    variant="standard"
                                    value={headingText}
                                    onChange={handleChangeInput}
                                />
                            </div>
                            <div className="form-outline mb-2 d-flex align-items-center">

                                <Typography variant="caption" color="textSecondary">
                                    Add Title
                                </Typography>
                                <TextareaAutosize
                                    className="form-control"
                                    id="Text"
                                    placeholder="Add Title Here"
                                    rows={6}
                                    value={inputText}
                                    onChange={handleChangeInput}
                                    style={{ borderBottom: '1px solid blue', borderRadius: '0' }}
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
                                {displayTexts.map((item, index) => {
                                    const currentDate = new Date(item.date).toLocaleDateString();
                                    const previousDate =
                                        index > 0 ? new Date(displayTexts[index - 1].date).toLocaleDateString() : null;

                                    return (
                                        <React.Fragment key={index}>

                                            {currentDate !== previousDate && (
                                                <>
                                                    <div className="card-text-container">

                                                        <div className='date'>{currentDate}</div>
                                                        <div className="calendar-icon">
                                                            <EventIcon fontSize="small" />
                                                        </div>

                                                    </div>

                                                    <hr style={{ marginTop: '1px' }}></hr>

                                                </>

                                            )}

                                            <div className='heading'>
                                                <h4 className='multicolortext'>{item.heading}</h4>
                                            </div>

                                            <div className="card-text-container">

                                                <pre className={`card-text ${item.text.length > 50 ? 'vertical-scroll' : ''}`}>{item.text}</pre>
                                                <DeleteIcon
                                                    style={{ color: '#d63384', cursor: 'pointer' }}
                                                    onClick={() => handleDeleteText(index)}
                                                />

                                                {isSpeaking ? (
                                                    <VolumeOffIcon color="primary" onClick={stopSpeech} /> // Use the stop icon
                                                ) : (
                                                    <VolumeUpIcon color="primary" onClick={() => handleSpeakText(item.text)} />
                                                )}
                                                <DownloadIcon
                                                    style={{ color: '#1976d2', cursor: 'pointer' }}
                                                    onClick={() => handleDownloadVoice(item.text)}
                                                />



                                            </div>
                                        </React.Fragment>
                                    );
                                })}
                                {displayTexts.length > 0 && (
                                    <>
                                        <div className='d-flex align-items-center card-text-container ' >
                                            <Button
                                                variant="outlined"
                                                color="secondary"
                                                startIcon={<DeleteSweepIcon />}
                                                onClick={handleDeleteAll}
                                            >
                                                Delete All

                                            </Button>
                                            <p style={{ marginBottom: '-3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                Save to Cloud
                                                <span style={{ marginLeft: '5px' }}>
                                                    <CloudDownloadIcon onClick={handleSaveFirebase} className="material-icons" />
                                                </span>
                                            </p>

                                        </div>



                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <PopupDialog
                isOpen={isOpen}
                onCloseButtonLabel="Close"
                onCloseButtonClick={handleClose}
                title="Modal Title"
                okButtonLabel="OK"
                onOk={handleOk}
            >
                <p>Comming Soon <br></br> To Download MP3 Audio </p>
            </PopupDialog>

            {showAlert && (
                <div className="alert-overlay">
                    <Alert
                        variant="filled"
                        severity="error"
                        onClose={handleCloseAlert}
                        style={{ zIndex: 999, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    >
                        You are not logged in. Please log in to continue.
                    </Alert>
                </div>
            )}



        </>
    );
}

export default Card;
