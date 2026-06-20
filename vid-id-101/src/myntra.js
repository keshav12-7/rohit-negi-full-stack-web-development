import React from "react";
import reactDOM from "react-dom/client"
import Card from "./component/card";
import Header from "./component/header";
import arr from "./utils/dummy";
import {Meet} from "./utils/dummy";
import {Greet as Goa} from "./utils/dummy";


// header
// body
// footer



function App(){
    return(
        <>
        {/* header */}

        <Header/>

        {/* // body */}
        
        <div className="upper-mid">
            <button id="sort">sort</button>
        </div>

        <div className="middle" style={{display:"flex", gap:"20px", flexWrap:"wrap"}}>
            

                {/* return js expression array,react element,string and numbers  */}

            {
                arr.map((val,index)=><Card key={index} cloth={val.cloth} offer={val.offer} price={val.price} />)

                // here map returns array which is acceptable here because in this block only something which is some returnable is accepted , 
                // it's like [<card/>,<card/>,<card/>,<card/>,<card/>,<card/>,<card/>,<card/>,]
            }
            
        </div>


        {/* // footer */}
        <Goa/>
        <Meet/>

        </>
    )
}



const reactRoot = reactDOM.createRoot(document.getElementById('root'));

reactRoot.render(<App/>);