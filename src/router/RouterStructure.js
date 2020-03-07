import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import User from '../components/User';
import Add from '../components/AddSub';
import FetchData from '../components/FetchData';
// import Form from '../components/form';

const pageNotFound=()=>{
    return(
        <h1> 404 Page not found! </h1>
    )
}
const RouterStructure =()=>{
    const removeUnderLine={
        textDecoration:"none"
    }
    return(
        <Fragment>
            <Router>
            <div style={{textAlign:"center", fontSize:"30px"}}>
                <Link style={removeUnderLine} to="/">User {`     `} </Link>
                <Link style={removeUnderLine} to="/add">{`     `}  Add  {`     `} </Link>
                <Link style={removeUnderLine} to="/fetch">{`     `}  FetchData  {`     `} </Link>
                {/* <Link style={removeUnderLine} to="/form">{`     `}  Form  {`     `} </Link> */}

            </div>
                <Switch>
                    <Route exact path='/' >
                        <User name="Arush" />
                        <User name="Abc" />
                        <User name="Xyz" /> 
                    </Route>
                    
                    <Route exact path='/add' component={Add} /> 
                    <Route exact path='/fetch' component={FetchData} />
                    {/* <Route exact path='/form' component={Form} />  */}
                    <Route  component={pageNotFound} /> 
                </Switch>
            </Router>
        </Fragment>
    )
}
export default RouterStructure;