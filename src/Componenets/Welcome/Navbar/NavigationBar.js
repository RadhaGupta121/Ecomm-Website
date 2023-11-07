import './nav.css';
import { Link } from 'react-router-dom';
const NavigationBar=()=>{
    return(
        <>
       <div className="nav-container bg-purple-600 mt-10 mb-12">
        <ul className="nav-list flex flex-wrap justify-center text-white gap-20 text-xl  py-3">
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/gotocart">Cart</Link></li>
            <li> <Link to="/wishlist">WishList</Link></li>
            <li> <Link to="/stores">Stores</Link></li>
            <li> <Link to="/filter">Filter</Link></li>
           
            <li> <Link to="/contact">Contact Us</Link></li>
        </ul>
       </div>
        
        </>
    )
}
export default NavigationBar;