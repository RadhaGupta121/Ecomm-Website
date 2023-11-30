import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function ColorFilter()
{
    const[categories,setcateogires]=useState('');
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async()=>{
        let data=await fetch('https://dummyjson.com/products/categories').then(res=>res.json());
        setcateogires(data);
         console.log(categories);
    }
    return categories.length===0 ?<h1>Loading...</h1>:(
        <>
        <div className="mt-20">
          
           <div className="flex flex-wrap mt-10">
               <div className="mx-10 mt-3">Categories</div>
               <div className="flex flex-wrap">
               {/* <Link to="/category/electronics"  >
                  <Button className="mx-1 my-1">Electronics</Button></Link>
                  <Link to="/category/jewelery"  >
                      <Button className="mx-1 my-1">Jewelery</Button></Link>
                      <Link to="/category/men's clothing"  >
                         <Button className="mx-1 my-1">Men's Clothing</Button></Link>
                 <Link to="/category/women's clothing"  >
                    <Button className="mx-1 my-1">Women's Clothing</Button></Link> */}
                    {
                        categories.map((item)=>{
                            return(
                                <Link to={`/category/${item}`}>
                                    <Button className="mx-1 my-1">{item}</Button>
                                </Link>
                            )
                        })
                    }
               </div>
           </div>
         
        </div>
        </>
    )
}
export default ColorFilter;