import logo from '../../../img/logo.png';
import './footer.css';
import apple from '../../../img/appstore.png';
import android from '../../../img/googleplay.png';
const Footer=()=>{
    return(
        <>
       <div className="bg-slate-400 w-full">
        <div className="footer">
        <ul className="logo ">
         <li>
            <h1 className='logoHeading text-yellow-400 text-lg text-center space-2 '>BigBasket</h1>
         </li>
         <li>
            <p className='text-black'>Lorem is the only for demo purpose</p>
         </li>
         <li>
            <img src={apple} alt='not found' className='w-30 h-11'/>
            </li>
           <li>  <img src={android} alt='not found' className='w-30 h-11'/>
         </li>
        </ul>
        <ul className="company text-red-900">
            <h3 className='heading text-red-900  pb-6'>Company</h3>
            <li>About Us</li>
            <li>Privacy policy</li>
            <li>Terms </li>
            <li>Blogs</li>
            <li>Branding</li>
            <li>Careers</li>
        </ul>
        <ul className="general">
        <h3 className='heading text-red-900  pb-6'>General</h3>
         <li>Partner with us</li>
         <li>Write to us</li>
         <li>Mobile App</li>
         <li>Site map</li>
        </ul>
        <ul className="pages">
        <h3 className='heading text-red-900  pb-6'>Pages</h3>
           <li>Amazon offer</li>
           <li>Google Pay offers</li>
           <li>Paypal offers</li>
           <li>Phonepe Offers</li>
           <li>Festive Offers</li>
           <li>Bank Offers</li>
        </ul>
        <ul className="more">
        <h3 className='heading text-red-900  pb-6'>More</h3>
             <li>City offers</li>
             <li>Brand Offers</li>
             <li>Product Deals</li>
             <li>Gift Cards</li>
        </ul>
        </div>
       </div>
        
        </>
    )
}
export default Footer;