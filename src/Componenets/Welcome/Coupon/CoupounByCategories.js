import ProductListing from "../Deals/ProductListing";
import Icons from "./Icons";
import './coupen.css';
import fashion from '../../../img/fashion.png';
import food from '../../../img/food.png';
import Beauty from '../../../img/beauty.jpg';
import Toys from '../../../img/toys.jpg';
import Cloud from '../../../img/clouds.jpg';
import Gaming from '../../../img/gaming.png';
import Phones from '../../../img/phones.png';
import Travel from '../../../img/travel.jpg';
import Movies from '../../../img/movies.png';
const CoupenByCategories=()=>{
    return(
        <>
       <div className="main bg-slate-200 ">
       <h1 className="text-center text-black text-3xl font-semibold font-serif py-12">Coupon By Categories</h1>
       <div className="container">
        <div className="icons flex justify-evenly flex-wrap ">
            {/* <Icons img={fashion} title="Fashion"/> */}
            <Icons img={food} title="food"/>
            <Icons img={Beauty} title="Beauty"/>
            <Icons img={Toys} title="Toys"/>
            <Icons img={Cloud} title="Cloud"/>
            <Icons img={Gaming} title="Gaming"/>
            <Icons img={Phones} title="Phones"/>
            <Icons img={Travel} title="Travel"/>
            <Icons img={Movies} title="Movies"/>
           
        </div>
        <div >
            <ProductListing/>
        </div>
        </div>
       </div>
        </>
    )
}
export default CoupenByCategories;