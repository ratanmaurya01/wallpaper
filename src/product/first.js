import React from 'react'
import Welcome from '../Design/welcome'
import CustomNavbar from '../navbar/navbar';
import ListProduct from './listproduct'

function First() {
  return (
    <> 
      <CustomNavbar />
    
      <div className='StartPage '>
           <div>
            <ListProduct/>
           </div>
       </div>
    </>
  )
}

export default First
