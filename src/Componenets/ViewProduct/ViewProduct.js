import React from 'react';
import { useState,useEffect } from 'react';
// import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './view.css'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Slices/addToCartSlice';

function ViewProduct() {
  const {id}=useParams();
  console.log(id);
    const[mydata,setmydata]=useState([]);
    const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (response.ok) {
          const data = await response.json();
          setmydata(data);
        } else {
          // Handle the case where the response is not OK (e.g., show an error message).
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      }
    }
    fetchData();
  }, [id]);
    console.log(mydata);
    const dispatch = useDispatch()
  let detail={
    img:mydata.image,
    name:mydata.title,
    price:mydata.price,
    id:mydata.id
  }
    return mydata.length<=0?<h1>Loading...</h1>: (
        <>
        <div className='flex justify-evenly'>
         <Card className="card  text-white" style={{ width: '24rem',height:'24rem' }}>
   
      <Card.Img style={{height:"100%"}} variant="top" src={mydata.image} />
    </Card>
<Card>
<Card.Body className='block w-96'>
        <Card.Title className='text-center text-red-600 '>{mydata.title}</Card.Title>
        <Card.Text className='text-center text-green-900 text-lg font-bold'>
       Price:  {mydata.price}$  
        </Card.Text>
        <Card.Text className='text-center text-red-900 text-lg font-bold'>
       Rating: {mydata.rating.rate} <span className='text-yellow-600 text-lg font-semibold'>({mydata.rating.count})</span>
        </Card.Text>
        <Card.Text className='text-sm font-bold'>{mydata.description}</Card.Text>
       <Button className='bg-red-500 border-none my-5 mx-3'>Buy Now</Button>
       <Button className='addtocart bg-pink-500 border-none' variant="primary" onClick={() => dispatch(addToCart(detail))}>  <i className="fa fa-shopping-cart"></i>Add to Cart</Button>
 
      </Card.Body>
</Card>
</div>
        </>
    );
}

export default ViewProduct;