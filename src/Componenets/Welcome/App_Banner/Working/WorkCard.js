import React from 'react';

import img from '../../../../img/amazon.png';
const WorkCard = (props) => {
  return (
    <div className="product-main w-56 bg-white shadow-lg rounded-lg overflow-hidden m-4 my-6">
      <img className="w-22 h-12 object-contain object-center" src={img} alt="Product " />
      <p className='text-black text-center text-sm pt-1'>{props.title}</p>
      <div className="container p-2">
        
        <p className="text-center text-black ">If you are going to use a passage of Lorem ipsum, you need to be sure there</p>
       
      </div>
    </div>
  );
};

export default WorkCard;
