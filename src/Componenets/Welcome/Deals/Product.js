import React from 'react';
import img from '../../../img/amazon.png'
import './../Welcome.css';
const Product = (props) => {
  return (
    <div className="product-main w-56 bg-white shadow-lg rounded-lg overflow-hidden m-4 my-6">
      <img className="w-22 h-12 object-contain object-center" src={props.image} alt="Product " />
      <p className='text-black text-center text-sm pt-1'>{props.title}</p>
      <div className="container p-2">
        
        <p className="text-green-600 text-center ">Flat 30% off</p>
        <div className="mt-7 mx-2">
          <button className='grabNow bg-red-500 text-white px-1 py-1  w-full rounded-3 h-10'>Grab Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
