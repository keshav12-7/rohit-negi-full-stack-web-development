import React, { useState } from "react";
import ReactDOM from "react-dom/client"

function PasswordGenerator(){
    const [password, setpassword]= useState("XYZABC");
    const [length,setlength]=useState(10);
    const [numberchanged,setnumberchanged]=useState(false);
    const [Characterchanged,setcharacterchanged]=useState(false);


    return(
        <>
        <h1>Password is: {password}</h1>
        <div id="form">
            <input type="range" min={5} max={50} value={length} onChange={(e)=>setlength(e.target.value)}></input>
            <label>Length is: {length}</label>

            <input type="checkbox" defaultChecked={numberchanged} onChange={()=>setnumberchanged(!numberchanged)}></input>
            <label>Number</label>

            <input type="checkbox" defaultChecked={Characterchanged} onChange={()=>setcharacterchanged(!Characterchanged)}></input>
            <label>Character</label>
        </div>
        </>
    )
}

const reactroot = ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);