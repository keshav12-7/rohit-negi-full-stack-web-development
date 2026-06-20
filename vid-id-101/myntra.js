import React from "react";
import reactDOM from "react-dom/client"

// header
// body
// footer

function Card(props){
    return(
        <div className="card" style={{border:"2px solid black", padding:"2px"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8xSeY2vf2OLQu15toiixOMBHpHevMqTZ9VSueqMUz1w&s=10" height="200px" width="200px" />
            <div style={{textAlign:"center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer} OFF</h1>
                <h2>Shop Now</h2>
            </div>
        </div>
    )
}

function Header(){
    return(
        <div className="heading">
            <img className="images" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ocbDlBX_1eNUSoAVBMPLK5ssJE86ouOxSGqGRcjdYQauPKueQtB4KTI&s=10" height="80px" width="60px"/>
            <div className="options">
                <button className="but">Men</button>
                <button className="but">Women</button>
                <button className="but">Kids</button>
                <button className="but">Home and Living</button>
                <button className="but">Beauty</button>
                <button className="but">Studio</button>
            </div>
            <input className="search-bar" placeholder="Search for products brands and more"></input>

            <div className="profile">
                <button className="but2">Profile</button>
                <button className="but2">Wishlist</button>
                <button className="but2">Bag</button>
            </div>
        </div>
    )
}


const arr=[{cloth:"T-shirt",offer:"30-50%"},{cloth:"Lower",offer:"70%"},{cloth:"Pants",offer:"50%"},{cloth:"Skirt",offer:"10%"},{cloth:"Inner",offer:"30-50%"},{cloth:"kurta",offer:"50%"},{cloth:"Underwear",offer:"30%"}]

function App(){
    return(
        <>
        {/* header */}

        <Header/>

        {/* // body */}

        <div className="middle" style={{display:"flex", gap:"20px", flexWrap:"wrap"}}>
            

                {/* return js expression array,react element,string and numbers  */}

            {
                arr.map((val,index)=><Card key={index} cloth={val.cloth} offer={val.offer} />)

                // here map returns array which is acceptable here because in this block only something which is some returnable is accepted , 
                // it's like [<card/>,<card/>,<card/>,<card/>,<card/>,<card/>,<card/>,<card/>,]
            }
            
        </div>


        {/* // footer */}

        </>
    )
}

const reactRoot = reactDOM.createRoot(document.getElementById('root'));

reactRoot.render(<App/>);