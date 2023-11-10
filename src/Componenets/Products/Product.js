import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Slices/addToCartSlice';
import { Link } from 'react-router-dom';
import ViewProduct from '../ViewProduct/ViewProduct';
import { mywishlist } from '../../Slices/addTowishlist';
import './product.css';
const Product=(props)=>{


  const dispatch = useDispatch()
  let detail={
    img:props.img,
    name:props.name,
    price:props.price,
    id:props.id
  }
 
  const handleWish = (e) => {
    const checkme = e.target.style.color === 'red'; // Determine the checkme
    e.target.style.color = checkme ? 'black' : 'red';
  
    dispatch(mywishlist({ ...detail, checkme: checkme }));
  };
  
  
    return (
        <>
       
    <Card className="card" style={{ width: '18rem',height:'24rem' }}>
    <Link to={`/view/${props.id}`} style={{width:"100%", height:"20rem"}} >
      <Card.Img style={{height:"9rem"}} variant="top" src={props.img} /></Link>
 

      <Card.Body>
        <Card.Title className='card-title'>{props.name}</Card.Title>
        {/* <Card.Text>{props.description}</Card.Text> */}
        <Card.Text>
         {props.price}$
        </Card.Text>
     <Button className='addtocart bg-pink-500 border-none' variant="primary" onClick={() => dispatch(addToCart(detail))}>  <i className="fa fa-shopping-cart"></i>Add to Cart</Button>
   <span style={{marginLeft:"1rem"}}><i className='fa fa-heart   wishlist'  onClick={(e)=>handleWish(e)}></i></span> 
      </Card.Body>
      
    </Card>

        </>
    )
}
export default Product;