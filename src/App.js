import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import ProductListing from './Componenets/Products/ProductListing';
// import Searchbar from './Componenets/SearchBar/Searchbar';
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import GoToCart from './Componenets/Cart/GoToCart';
import CheckOut from './Componenets/Payment/CheckOut';
import MyWishList from './Componenets/Wishlist/MyWishList';
import ViewProduct from './Componenets/ViewProduct/ViewProduct';
import Filter from './Componenets/Filters/Filter';
import Welcome from './Componenets/Welcome/Welcome';
import SearchBar from './Componenets/Welcome/Navbar/SearchBar';
import NavigationBar from './Componenets/Welcome/Navbar/NavigationBar';
import FilteredProduct from './Componenets/Filters/FilteredProduct';
import Contact from './Componenets/ContactUs/Contact';
function App() {
  return (
    <>
    <BrowserRouter>
    <div className='fixed top-0 left-0 w-full z-10 bg-black '>
    <SearchBar/>
    <NavigationBar/>
    </div>
    <div className='mt-80'>
    <Routes>
      
     
     <Route exact path='/view/:id' element={<ViewProduct />}/>
     <Route exact path='/category/:name' element={<FilteredProduct/>}/>
     <Route exact path="/" element={<Welcome />} />
    <Route exact path='/stores' element={<ProductListing/>}/> 
    <Route path='/gotocart' element={<GoToCart price={2390}/>}/>
     <Route path='/checkout' element={<CheckOut/>}/>
     <Route path='/wishlist' element={<MyWishList/>}/> 
     <Route path='/filter' element={<Filter/>}/> 
     <Route path='/contact' element={<Contact/>}/> 
    
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
