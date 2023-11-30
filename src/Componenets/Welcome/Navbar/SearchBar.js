import { useState } from 'react'
import logo from '../../../img/logo.png'
import './nav.css'
const SearchBar = () => {
    const [item,setItem]=useState('');
    
    
    return (
        <>
            <div className='searchbar pt-12 mt-0'>
                <div className="container max-w-[1240px] mt-[0px] items-center  flex flex-wrap justify-evenly  mx-auto px-2 bg-whitesomoke-200">
                    <div className='img-container mb-2 mt-0'>
                    {/* <h1 style={{textAlign:"center",color:"yellow",textShadow:"2px 2px 4px orange",paddingBottom:'4rem',fontFamily:"cursive"}}>Big Basket</h1> */}
    <h1 className='text-yellow-300 text-center text-4xl  px-12'>BigBasket</h1>
                    </div>
                    <ul className='input-ul flex flex-wrap gap-4 '>
                        <li className='input-box-li' >  <input type='search'  placeholder='Enter you product'  className="max-w-[20rem] h-12  w-96  border-grey-600 border-2 rounded-3"  />
                        </li>
                        <li>
                            
                            <button className='login-btn login-btn bg-red-500 text-white  rounded-3  '>Login/Signout</button>
                        </li>
                    </ul>



                </div>

            </div>
        </>
    )
}
export default SearchBar;



