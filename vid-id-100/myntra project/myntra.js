import React from "react";
import ReactDOM from "react-dom/client";

const element = <h1>Hello coder army</h1>




function Greet(props1) {
    return <h2>ram ram bhaiya ji {props1.name} my age is {props1.age}</h2>
};
const element2 = <Greet name="keshav verma" age="23"/>

// const element3 = <h1 id=""></h1>
const reactroot = ReactDOM.createRoot(document.getElementById('root'));
reactroot.render(element)
reactroot.render(element2)