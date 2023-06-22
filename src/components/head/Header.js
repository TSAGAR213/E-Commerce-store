import { useNavigate } from "react-router-dom";
import "./header.css"
function Header({cartData})
{  let navigate=useNavigate()
    return <>
    <header id="header">
        <nav>
          <ul id="ulist">
            <li><h1>Games Mania</h1></li>
            <li id="end">
            <h2
            onClick={()=>{
              navigate("cart")
            }}
            >Cart({cartData.length})</h2></li>
          </ul>
        </nav>
    </header>
    </>
}
export default Header;