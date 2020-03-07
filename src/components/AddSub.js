import React, { Fragment, useState, useEffect } from 'react';

const AddSub=()=>{
    const [getNumber, setNumber]=useState(0);
    // const a=10;

    useEffect(()=>{
        document.title=`Number = ${getNumber}`;
        console.log('useEffect');
    });
    const Sub=(e)=>{
        e.preventDefault();
        console.log('Sub');
        setNumber(getNumber-1);
    }

    const Add=(e)=>{
        e.preventDefault();
        console.log('Add');
        setNumber(getNumber+1);
    }
    return(
        <Fragment>
            <input type="submit" value="+1" onClick={Add}/> 
            {/* <input type="text" name="getNumber" value={getNumber} ></input> */}
            {getNumber}
            <input type="submit" value="-1" onClick={Sub}/>
        </Fragment>
    )
}
export default AddSub;