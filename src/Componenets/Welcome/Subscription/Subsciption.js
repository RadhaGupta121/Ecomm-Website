import img from '../../../img/shopping.jpg';
import './subscribe.css';

const Subscription = () => {
  return (
    <>
    <div>
      <div className="subscribe flex flex-wrap justify-evenly m-auto">
        {/* <div className="img-container bg-black ">
          <img src={img} alt="not found" className='w-full' />
        </div> */}
        <div className="subs sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-6rem ">
          <p>Subscribe to our Newsletter!</p>
          <h5>Be the first to get exclusive offers and the latest news</h5>
          <input type="text" placeholder="" /><br />
          <button className='bg-red-600 px-8 py-2 rounded-3 my-3'>Subscribe</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default Subscription;
