import React, { Fragment, useState } from 'react';
// import Axios from 'axios';

const Form =()=>{
    
    const [getFormdata, setData]=useState({
        firstName:"",
        lastName:"",
        address:"",
        phone:""
    });
    document.title='Form';
    const getData=(e)=>{
        setData({
            ...getFormdata, 
            [e.target.name]:e.target.value});        
        console.log(getFormdata);
    }
    
    const sendData=(e)=>{
        e.preventDefault();
        console.log( "data------>", getFormdata );
        // Axios.post('https/', data)
    }
    return(
        <Fragment>
        <h2> Form</h2>
        <div style={{textAlign:"center"}}>             
            <h1>Form</h1>
            <form onSubmit={sendData}>
                <input type="text" onChange={getData} value={getFormdata.firstName} name="firstName" placeholder="FirstName...." /> <br /> <br />
                <input type="text" onChange={getData} value={getFormdata.lastName} name="lastName" placeholder="LastName...." /> <br /> <br />
                <input type="text" onChange={getData} value={getFormdata.address} name="address" placeholder="Address...." /> <br /> <br />
                <input type="text" onChange={getData} value={getFormdata.phone} name="phone" placeholder="Phone...." /> <br /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
        </Fragment>
    )
}
export default Form;