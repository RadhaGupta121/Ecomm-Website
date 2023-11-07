import fashion from '../../../img/summersale.jpeg';
import './category.css';
const Categories = () => {
    return (
        <>
        <div className='mt-8'>
            <div className="category-cotainer my-12 flex flex-wrap justify-center gap-10 ">
                <div className='category w-1/3'>
                    <img src={fashion} alt="not found"  />
                </div>
                
                <div className='categories-name'>
                <div className='block'>
                <h1 className=" text-3xl font-semibold font-serif">Popular Categories</h1><br/>
                    </div>
                    <table className="table">
                        <tr>
                            <td className="border-2 px-6 py-4 border-gray-300">Flight</td>
                            <td className="border-2 px-6 py-4 border-gray-300">Bus</td>
                            <td className="border-2 px-6 py-4 border-gray-300">Entertainment</td>
                           
                        </tr>
                        <tr>
                            <td className="border-2 px-6 py-4 border-gray-300">Medicines</td>
                            <td className="border-2 px-6 py-4 border-gray-300">Hosting</td>
                            <td className="border-2 px-6 py-4 border-gray-300">Flowers</td>
                          
                        </tr>
                        <tr>
                            <td className="border-2 px-6 py-4 border-gray-300">OTT</td>
                            <td className="border-2 px-6 py-4 border-gray-300">Bills</td>
                            <td className="border-2 px-6 py-4 border-gray-300">Kids</td>
                           
                        </tr>
                        <tr>
                            <td className="border-2 px-6 py-4 border-gray-300">Food </td>
                            <td className="border-2 px-6 py-4 border-gray-300">Eyewear</td>
                            <td className="border-2 px-6 py-4 border-gray-300">Kitchen</td>
                            
                        </tr>
                        <tr>
                            <td className="border-2 px-6 py-4 border-gray-300">Recharge</td>
                            <td className="border-2 px-6 py-4 border-gray-300">Electronics</td>
                            <td className="border-2 px-6 py-4 border-gray-300">Footwear</td>
                           
                        </tr>
                        <tr>
                            <td className="border-2 px-6 py-4 border-gray-300">Lab</td>
                            <td className="border-2 px-6 py-4 border-gray-300">Education</td>
                            <td className="border-2 px-6 py-4 border-gray-300">Service</td>
                           
                        </tr>
                        <tr>
                            <td className="border-2 px-6 py-4 border-gray-300">Fashion </td>
                            <td className="border-2 px-6 py-4 border-gray-300">Pizza</td>
                            <td className="border-2 px-6 py-4 border-gray-300">Bike</td>
                           
                        </tr>
                        
                    </table>

                </div>
            </div>
            </div>
        </>
    )
}
export default Categories;