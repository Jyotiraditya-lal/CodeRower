import { useState } from "react";
import React from "react";
import './fetch.css'

const Fetch=()=> {
    const [output, setOutput] = useState(false);
    const [isFetch, setFetch] = useState('');

    const idChangeHandler = (e) => {
        setFetch(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault(); 
        setOutput(true);
    }

    return (
        <React.Fragment>
            <h1>Fetch Config</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="fetch">config to load configId</label>
                <input type="text" id="fetch" value={isFetch} onChange={idChangeHandler} required />
                <br />
                <button type="submit">submit</button>
            </form>
            {output && <h1>Result:http://localhost:3000/api/configurations/{isFetch}</h1>}
            {output && <p>sym1,sym2,sym3,<br />sym4,sym6,sym8,<br />sym5,sym1,sym0</p>}
        </React.Fragment>
    );
}

export default Fetch;
