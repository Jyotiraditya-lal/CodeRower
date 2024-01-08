import { useState } from "react";
import React from "react";
import './update.css'

const  Update=()=> {
    const [output, setOutput] = useState(false);
    const [isid, setid] = useState('');
    const [isRemarks,setRemarks]= useState('')

    const idChangeHandler = (e) => {
        setid(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault(); 
        setOutput(true);
    }

    const remarksChangeHandler=(e)=>{
        setRemarks(e.target.value)
    }

    return (
        <React.Fragment>
            <h1>Update Remarks</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="fetch">config to update configId</label>
                <input type="text" id="fetch" value={isid} onChange={idChangeHandler} required />
                <br />
                <label htmlFor="remark">Remarks</label>
                <input type="text" id="remark" value={isRemarks} onChange={remarksChangeHandler} />
                <br />
                <button type="submit">submit</button>
            </form>
            {output && <h1>PUT:http://localhost:3000/api/configurations/{isid}</h1>}
            {output && <p>success</p>}
        </React.Fragment>
    );
}

export default Update;
