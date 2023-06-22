import "./games.css"
const { useState, useEffect } = require("react");
const { Api } = require("../Api");

function Games({addtoCart})
{ let [incData,setIncdata]=useState([]);
    useEffect(()=>{
   Api()
   .then(data=>{

    setIncdata(data.data)
   })
    },[])
    return <div id="games-container">
    {incData.map(data=>{
        return <div key={data.attributes['Title']} className="game">
            <div id="image-container"><img src={`http://localhost:1337${data.attributes['image'].data.attributes.url}`} alt="strapi-images"/></div>
            <h3>{data.attributes['Title']}</h3>
            <p className="desc">{data.attributes['Description']}</p>
            <h3>₹ {data.attributes['price']}</h3>
            <div 
            id="cart"
            onClick={()=>{
                addtoCart(data)
            }}
            >Buy now</div>
        </div>
    })}
    </div>
}
export default Games;