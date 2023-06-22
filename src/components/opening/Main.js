import Games from "../games/GamesL";
import Header from "../head/Header";

function Main({cartData,addtoCart})
{
    return <>
    <Header cartData={cartData}/>
    <Games addtoCart={addtoCart}/>
    </>
}
export default Main;