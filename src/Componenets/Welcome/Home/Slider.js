import { useState,useEffect } from "react";
import './slider.css';
import summersale from '../../../img/summersale.jpeg';
import sunglass from '../../../img/sunglass.png';
import mybanner from '../../../img/mybanner.jpg';
import grabnow from '../../../img/grabnow.png';
import offsale  from '../../../img/offsale.jpg';
import sale from '../../../img/sale.jpg';
import seasonsale from '../../../img/seasonsale.jpg';
import supersale from '../../../img/supersale.jpg'
const slides = [
    {
      eachSlide: `url(${summersale})`,
    },
    {
      eachSlide: `url(${sunglass})`,
    },
    {
      eachSlide: `url(${offsale})`,
    },
    {
      eachSlide: `url(${seasonsale})`,
    },
    {
      eachSlide: `url(${mybanner})`,
    },
    {
      eachSlide: `url(${offsale})`,
    },
    {
      eachSlide: `url(${sale})`,
    },
    {
      eachSlide: `url(${seasonsale})`,
    }
];

const Slider = () => {
    const [active, setActive] = useState(0);
    const autoplay=1;
    const max = slides.length;

    const intervalBetweenSlides = () => autoplay && setActive(active === max - 1 ? 0 : active + 1)

    useEffect(() => {
        const interval = setInterval( () => intervalBetweenSlides(), 3000);
        return () => clearInterval(interval);
    });


    const isActive = value => active === value && 'active'

    const setSliderStyles = () => {
        const transition = active * -80;
        
        return {
          width: ( slides.length *80 ) + 'vw',
          transform: 'translateX(' + transition + 'vw)'
        }
    }

    const renderSlides = () => slides.map((item, index) => (
        <div 
            className='each-slide' 
            key={ index } 
            style={{ backgroundImage: item.eachSlide }}>
        </div> 
    ));

    const renderDots = () => slides.map((silde, index) => ( // check index
        <li 
            className={ isActive(index) + ' dots' }   
            key={ index }>
                <button onClick={ () => setActive(index) }>
                    <span>&#9679;</span>
                </button>
        </li> 
    ));

  

    return (
        <section className='slider'>
            <div 
                className='wrapper' 
                style={ setSliderStyles() }>
                { renderSlides() }
            </div>
           
            <ul className='dots-container'>
                { renderDots() }
            </ul>
           
        </section>
    );
};

export default Slider;