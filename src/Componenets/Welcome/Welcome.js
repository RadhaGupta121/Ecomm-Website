import './Welcome.css';
import NavigationBar from './Navbar/NavigationBar';
import Searchbar from './Navbar/SearchBar';
import Home from './Home/Home';
import DealsOfTheDay from './Deals/DealsOfTheDay';
// import SerachBar from './Component/Navbar/SearchBar';
import CoupenByCategories from './Coupon/CoupounByCategories';
import PopualarMembership from './Membership/PopualarMembership';
import Subscription from './Subscription/Subsciption';
import Working from './App_Banner/Working/Working';
import BecomePartOfTeams from './App_Banner/Become_PartOfTeam';
import Categories from './Categories/Categories';
import Footer from './Footer/Footer';
function Welcome() {
  return (
    <>
 
 <Home/>
 <DealsOfTheDay/>
 <CoupenByCategories/>
 <PopualarMembership/>
 <Subscription/>
 <Working/>
 <BecomePartOfTeams/>
 <Categories/>
 <Footer/>
 </>
  );
}

export default Welcome;