import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    // mantener el control de lo que se escribe a través del gancho useState
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //gestor cuando se envía el formulario
    const onSubmitHandler = e => {
        //evitar el comportamiento por defecto de submit
        e.preventDefault();
        //hacer una petición POST para crear una nueva persona
        axios.post('http://localhost:8000/api/products/new', {
    title,
    price,
    description
})
.then(res => {
    console.log(res.data);
})
.catch(err => {
    console.error('Error:', err.message);
    if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Response data:', err.response.data);
        console.error('Response status:', err.response.status);
        console.error('Response headers:', err.response.headers);
    } else if (err.request) {
        // The request was made but no response was received
        console.error('Request:', err.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', err.message);
    }
});

    }
    //onChange para actualizar title, price, description
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange = {(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
