import WorkCard from './WorkCard';
import './working.css';
const Working = () => {
    return (
        <>
            <div className='my-10' >
                <div  >
                <h1 className="text-center text-3xl font-semibold font-serif">How it Works</h1>
                </div>
                <div className="works flex justify-center flex-wrap  m-auto">
                    <div className=" m-2 w-60 h-60 rounded-3">
                        <WorkCard title="Signup"/>
                    </div>
                    <div className=" m-2 w-60 h-60 rounded-3">
                        <WorkCard title="Choose Coupon" />
                    </div>
                    <div className=" m-2 w-60 h-60 rounded-3">
                        <WorkCard title="Grab Coupon" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Working;