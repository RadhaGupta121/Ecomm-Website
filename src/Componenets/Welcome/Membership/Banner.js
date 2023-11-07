import banner from '../../../img/sunglass.png';
import ProductListing from '../Home/ProductListing';
import './membership.css';
import sale from '../../../img/sale.jpg';
import travel from '../../../img/travel.jpg';
import menu from '../../../img/menu.jpg';
import grabnow from '../../../img/grabnow.png'
const Banner=()=>{
    return(
        <>
        <div className='mt-11 w-2/3 m-auto '>
            <img src={banner} alt="not found"/>
        </div>
        <div className='mt-20'>
        <h1 className="text-center text-3xl font-semibold font-serif">Popualar Membership</h1>
            <div className=' img-container flex flex-wrap justify-center  m-auto '>
                <div>
                    <img src={sale} alt='not found'/>
                </div>
                <div >
                <img src={grabnow} alt='not found'/>
                   {/* <ProductListing/> */}
                </div>
                <div >
                    <img src={menu} alt='not found'/>
                </div>
                <div >
                    <img src={travel} alt='not found'/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Banner;