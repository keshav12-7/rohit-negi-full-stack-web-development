import React, { useState } from "react";
import ReactDom from "react-dom/client";


// background color changer

function Main(){
    let [color,setcolor] = useState("white");
    console.log("render");
    
    document.body.style.backgroundColor=color;

    
    return (
        
        <div className="container" style={{backgroundColor:"gray"}}>
       
        <h1>background color changer</h1>
        <div className="but">
            <button onClick={()=>setcolor("red")}>red</button>
            <button onClick={()=>setcolor("green")}>green</button>
            <button onClick={()=>setcolor("violet")}>violet</button>
            <button onClick={()=>setcolor("blue")}>blue</button>
            <button onClick={()=>setcolor("orange")}>orange</button>
            <button onClick={()=>setcolor("yellow")}>yellow</button>
            <button onClick={()=>setcolor("skyblue")}>skyblue</button>
            
        </div>
        </div>
        

        
    )
}

const reactroot = ReactDom.createRoot(document.getElementById('root')).render(<Main/>);

