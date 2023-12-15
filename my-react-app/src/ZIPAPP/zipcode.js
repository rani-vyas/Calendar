import React, { useState } from "react";

export function ZipPostalCode () {
   const [zipcode,setZipcode] = useState('')
    
    const handlechangeCode = (event) =>{
    setZipcode(event.target.value);
   }
   const handleSubmitCode = (event) =>{
  event.preventDefault();
    if(zipcode.length !== 5){
    const c = document.getElementById('para-id');
    c.innerText = ` Please enter a valid ZIP Code !(5 digits).`;
    setTimeout(() =>{
       c.innerText = " ";
    },5000);
   }
   else{
    console.log('You Entered Valid ZipCode' , zipcode)
    const b = document.getElementById('para1-id');
    b.innerText = `You Entered Valid ZipCode ${zipcode}.`;

 setTimeout(() => {
    b.innerText = " ";
 },5000);
}
}
    return(
        <>
        <div>
            <form onSubmit={handleSubmitCode} id="form-id" >
                <input 
                id="input-id"
                type="number" 
                placeholder="Enter Your ZIP Code" 
                onChange={handlechangeCode}
                value={zipcode}
                
                />
                <p id="para-id" style={{color:'Red'}}></p>
                <p id="para1-id" style={{color:'Blue'}}></p>
            <button type="Submit" >Submit</button>
            </form>
        </div>
        </>
    )
            }