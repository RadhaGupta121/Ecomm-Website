
 import p1 from '../../img/phonepay.png';
import p2 from '../../img/cc.png';
import p3 from '../../img/upi.jpg';
import p4 from '../../img/netbanking.jpg';

import { useEffect, useState } from 'react';

function CheckOut() {
  const [data,setData]=useState([]);
  useEffect(()=>{
fetch("https://dummyjson.com/products/1").then((result)=>{
    result.json().then((resp)=>{
      // console.log(resp);
      setData(resp);
      console.log(data);
    })
  })
  },[])
  
  return (
    <>
    <div className='main' style={{display:"flex",justifyContent:"center",marginTop:"5rem"}}>
      <div className='imgContainer' style={{backgroundColor:"#cee79c",width:"25rem",height:"30rem",padding:"1rem"}}>
        <h3 style={{textAlign:"center"}}>Order Summary</h3>
        <span style={{marginRight:"5rem"}}>Deliver To:</span> <button style={{backgroundColor:"white",height:"2.5rem",width:"5rem"}}>Change </button>
        <br/>
        <span>John Doe</span>
        <address>113 Block DNoida sector-15,Uttar Pradesh</address>
        <div className='prodDetail' >
          <div className='prodImg'>
            <img src={data.thumbnail} style={{height:"5rem",width:"5rem"}}/>
          </div>
          <div className='detail'>
            <span>{data.brand}</span><br/>
            <span>{data.description}</span><br/>
            <span>{data.rating}<i className='fa fa-star'></i></span><br/>
            <span><span style={{textDecoration:"line-through"}}>2,999</span> {data.price}$ <span className='green'>{data.discount}% off</span></span>
            
          </div>
          <div className='delivery'>Delivery in 3 days, Tues | <span className='green'>Free Delivery</span></div>
        </div>
      </div>
      <div className='payment' style={{backgroundColor:"lavender",width:"30rem",height:"30rem",padding:"1rem"}}>
      <h3 style={{textAlign:"center",paddingBottom:"2rem"}}>Payment Details</h3>
       <img className='payImg' src={p1}/>
       <img className='payImg' src={p2}/>
       <img className='payImg' src={p3}/>
       <img className='payImg' src={p4}/>
       <div className='payment'>
       <input className='payInput' type='text' placeholder='Enter your Card no'/><br></br>
       <input className='payInput' type="text" placeholder='Card Holder name'/><br></br>
       <input className='payInput' type='date' placeholder='Enter expiry date'/><br></br>
       <input className='payInput' type='textnumber' placeholder='CC number'/> <br></br>
       </div>
     <center> <button >Proceed</button></center> 
      </div>
    </div>
    </>
  );
}

export default CheckOut;