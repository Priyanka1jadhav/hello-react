import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
const FetchData = () => {
    document.title='FetchData';
    const [getData, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(res => {
            console.log(res);
            setData(res.data);
            setLoading(false);
        })
        .catch(err => {
            // setError(err.message);
            console.log(err);
            setLoading(false);
        })
    }, []);
    return (
        <Fragment>
            {console.log(getData)}
            <h1>FetchData</h1>
            {loading?
                (<h1>Loading.......</h1>):
                (
                    getData.map((posts, index)=>(
                        <div key={index}>
                            <p style={{ textAlign: 'justify', marginTop:'-20px'}}> - {posts.title}</p>
                        </div>
                    ))   
                )                     
                }
            }
        </Fragment>
    )
}
export default FetchData;