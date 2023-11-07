import ProductListing from "./ProductListing";

const DealsOfTheDay=()=>{
    return(
        <>
        <div className="mt-32">
            <div>
                <h1 className="text-center text-3xl font-semibold font-serif">Deals of the day</h1>
                <div >
                   <ProductListing/> 
                </div>
            </div>
        </div>
        
        </>
    )
}
export default DealsOfTheDay;