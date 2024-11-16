import React, { useState } from 'react';
import CustomNavbar from '../navbar/navbar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'; // Import Typography for multiline text
import Sidebar from '../sidebar/sidebar';
import ButtonSidebar from '../sidebar/buttonside';
import '../Contact/card.css';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';


function Hexconvertor() {
    const [hexCode, setHexCode] = useState('');
    const [binaryCode, setBinaryCode] = useState('');
    const [decimalNumber, setDecimalNumber] = useState('');

    const handleHexInputChange = (event) => {
        setHexCode(event.target.value);
    };

    const convertHexToBinaryAndDecimal = () => {
        // Remove spaces and non-hex characters
        const cleanedHex = hexCode.replace(/\s/g, '').replace(/[^0-9a-fA-F]/g, '');
        // Convert hex to binary
        const binary = cleanedHex
            .match(/.{1,2}/g) // Split into pairs of two characters
            .map(hexPair => parseInt(hexPair, 16).toString(2)) // Convert each pair to binary
            .join(' '); // Join binary codes with a space
        setBinaryCode(binary);
        // Convert hex to decimal
        const decimal = parseInt(cleanedHex, 16).toString(10);
        setDecimalNumber(decimal);
    };

    const [dataSequence, setDataSequence] = useState('');
    const [crc16, setCrc16] = useState('');
    const [converted, setConverted] = useState(false);

    const calculateModbusCRC16 = (data) => {
        let crc = 0xFFFF;

        for (let i = 0; i < data.length; i++) {
            crc ^= data.charCodeAt(i);

            for (let j = 0; j < 8; j++) {
                if ((crc & 0x0001) !== 0) {
                    crc >>= 1;
                    crc ^= 0xA001;
                } else {
                    crc >>= 1;
                }
            }
        }

        return crc.toString(16).padStart(4, '0').toUpperCase();
    };



    const handleInputChange = (event) => {
    
        let inputData = event.target.value;

        // Remove spaces from the input data
       // inputData = inputData.replace(/\s/g, '');
    
        setDataSequence(inputData); // Update the input data
        // Check if input data is empty and reset CRC-16 value if needed
        if (inputData.trim() === '') {
            setCrc16(''); // Clear CRC-16 value
            setConverted(false); // Reset converted state
        }
    };

    const handleCalculateCRC = () => {
        const dataArray = dataSequence.split(' ').map(hex => parseInt(hex, 16));
        const crcResult = calculateModbusCRC16(String.fromCharCode(...dataArray));
        setCrc16(crcResult);
        setConverted(true); // Set converted to true after clicking "Convert"
    };

    return (
        <>
        
            <CustomNavbar />
            <div className='StartPage' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
              
               {/* <div className='containers '>
                  <ButtonSidebar/>
               </div> */}
                <div className='container '>
                    <MDBRow className='mainpage' > 
                        <MDBCol md="6">
                        <h5 >Hex to Binary Converter</h5>
                  
                            <MDBCard className="mb-4 mb-md-0">
                                <MDBCardBody>
                                    <div className='form'>
                                        <input
                                            className='form-control'
                                            placeholder='Enter hex code'
                                            value={hexCode}
                                            onChange={handleHexInputChange}
                                        />
                                    </div>
                                    <Button variant='contained' onClick={convertHexToBinaryAndDecimal} style={{ marginLeft: '10px' }}>Convert</Button>
                                    {binaryCode && decimalNumber && (
                                        <div>
                                            <p>Binary Code:</p>
                                            <Typography variant="body2" component="div">
                                                {binaryCode.split('').map((bit, index) => (
                                                    <span key={index}>{bit} {index % 8 === 7 && <br />}</span>
                                                ))}
                                            </Typography>
                                            <p>Decimal Number: {decimalNumber}</p>
                                        </div>
                                    )}
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>


                    <div>
                   <MDBRow  className='mainpage'>
                    
                        <MDBCol md="6">
                                      
                          <h2>Modbus CRC-16</h2>
                
                            <MDBCard className="mb-4 mb-md-0">
                                <MDBCardBody>
                                <p> Modbus  CRC-16 </p>
                                    <div className='form'>
                                        <input
                                            className='form-control'
                                            placeholder='Enter CRC-16 data '
                                            id="dataSequenceInput"
                                            value={dataSequence}
                                            onChange={handleInputChange}
                                           
                                        />
                                    </div>
                                    <Button variant='contained' onClick={handleCalculateCRC} style={{ marginLeft: '10px' }}>Convert</Button>
                                     <div>
                                   
                                    <p style={{alignItems:'center', justifyContent:'center'}}> {converted && <span>{dataSequence} {crc16}</span>}</p>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    </div>
                </div>
            </div>



        </>
    )
};
export default Hexconvertor;
