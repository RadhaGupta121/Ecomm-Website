import Product from "../Products/Product";
const MyWishList=()=>{
    const wishItem=JSON.parse(localStorage.getItem('wishedItems'));
    console.log(wishItem.length);
    console.log(wishItem);
    if(!wishItem)return <h1 style={{textAlign:"center"}}>Your WishList is empty!</h1>
    else{
    return(
        <>
        <div className="Products" style={{ display: "flex", justifyContent: "center", gap: "5rem" }}>
      {
      wishItem.map((product) => (
        <Product
          key={product.payload.id}
          id={product.payload.id}
          img={product.payload.img}
          price={product.payload.price}
          name={product.payload.name}
          description={product.payload.description}
        />
      ))
      }
    
    </div>
        </>
    )
    }
}
export default MyWishList;