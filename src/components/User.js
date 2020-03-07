import React, {Fragment} from 'react';


const User=(props)=>{
    const style={
        width:"300px",
        height:"59px",
        padding:"20px",
        margin:"20px",
        border:"1px solid #ff0000"
    }
    document.title='User';
    return (
        <Fragment>
            <div style={style}>
                <h1>User Name :{props.name} </h1>
            </div>
        </Fragment>
    )
}
export default  User;