import Product from "./Product";
import { useEffect,useState } from "react";
const ProductListing =()=>{
    const[product,setProduct]=useState("");
    useEffect(()=>{
        LoadProduct();
    },[])
   async function LoadProduct()
    {
        await fetch('https://fakestoreapi.com/products/category/jewelery?limit=3').then(res=>res.json()).then((json)=>setProduct(json))
    }
    console.log("Products:",product);
    return product.length===0?<h1>Loading...</h1>:(
        <>
        <div className="product-list m-auto">
        <div className="flex flex-wrap justify-center">
            {
                product.map((item)=>(
                    <Product  key={item.id} image={item.image} title={item.title}/>
                ))
            }
           
        </div>
        </div>
        </>
    )
}
export default ProductListing;