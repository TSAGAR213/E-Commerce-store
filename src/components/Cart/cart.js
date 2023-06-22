import { useCallback } from "react";
import Header from "../head/Header";
import "./cart.css"
import useRazorpay from "react-razorpay";
function Cart({cartData})
{ 
    const Razorpay = useRazorpay();
    const razorpayDisplay=useCallback(async (total)=>{
        const options = {
            key: "rzp_test_MUuzDuNxHGtR7q",
            amount:total, 
            currency: "INR",
            name: "Games-mania",
            description: "Games Transaction",
            handler: function (response) {
              alert(response.razorpay_payment_id);
              alert(response.razorpay_order_id);
              alert(response.razorpay_signature);
            },
            prefill: {
              name: "Sagar T Teradal",
              email: "sagarteradal@gmail.com",
              contact: "9999999999",
            },
            notes: {
              address: "Razorpay murgod Office",
            },
            theme: {
              color: "#3399cc",
            },
          };
        const rzp1 = new Razorpay(options);
        rzp1.open();
    },[Razorpay])

     let t=0;
    return <>
    <Header cartData={cartData}/>
    <div id="main">
        {cartData.map(item=>{
            t+=item.attributes['price']
            return <div className="item-container" key={item.attributes['Title']}>
            <div id="image-container"><img src={`http://localhost:1337${item.attributes['image'].data.attributes.url}`} alt="strapi-images"/></div>
            <h3 className="marginL">{item.attributes['Title']}</h3>
            <h3 className="marginL">₹ {item.attributes['price']}</h3>
            <br/>
            </div>
    
        })}
        <h2 style={{textAlign:"center"}}>Total:₹ {t}</h2>
        <div style={{textAlign:"center",marginBottom:"50px"}} onClick={()=>{razorpayDisplay(t*100)}}><button>Checkout</button></div>
    </div>
    </>
}
export default Cart;