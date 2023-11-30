import {  useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "../Products/Product";

const GoToCart=()=>{
  const allitem=JSON.parse(localStorage.getItem("cartItems"));
  console.log(allitem);
  let [totalPrice,setTotalPrice]=useState(0);
  useEffect(()=>{
       allitem.forEach(item => {
       console.log(item);
        setTotalPrice((prev)=>prev+item.price);
       });
  },[])
   if(!allitem)return <h1 style={{textAlign:"center"}}>Cart is empty!</h1>
   else{
console.log(totalPrice);
    return(
      <>
      <div className="Products" style={{ display: "flex", justifyContent: "center", gap: "5rem" }}>
      {
      allitem.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          img={product.img}
          price={product.price}
          name={product.name}
          description={product.description}
        />
       

      ))
      }
    </div>
       
      </>
    )
  }
 }
export default GoToCart;


{/* <h1 style={{color:"white"}}>My cart</h1>
      {/* {
      
        allitem.map((product) => (
          <Product key={product.id} id={product.id} img={product.thumbnail} price={product.price} name={product.brand} description={product.description} />

      ))
      } */
    
      } 