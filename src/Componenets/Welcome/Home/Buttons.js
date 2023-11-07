import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faClock,faChartLine } from '@fortawesome/free-solid-svg-icons';

const Buttons=()=>{
    return(
        <>
        <div className="buttons flex justify-center gap-10 mt-16">
            <div>
            <FontAwesomeIcon icon={faTrophy} />  <span>Popular Coupons</span>
            </div>
            <div>
            <FontAwesomeIcon icon={faClock} /> <span>Ending Soon</span>
            </div>
            <div>
            <FontAwesomeIcon icon={faChartLine} />   <span>Latest Coupons</span>
            </div>
        </div>
        </>
    )
}
export default Buttons;