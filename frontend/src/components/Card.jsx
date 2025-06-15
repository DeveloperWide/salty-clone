function Card({imgUrl , Title , productPrice, offerPrice, hoverImage}) {

  function changeImg(e, hoverImage) {
    e.target.src = hoverImage;
  }

  function onMouseLeaveHandle(e, imgUrl) {
    e.target.src = imgUrl;
  }

  return (
    <div className=" flex flex-col  items-center h-90 w-50 relative">
      {/* imgUrl , Title , productPrice & OfferPrice hoverImage */}
      
      <img src={imgUrl} alt="Earring" className="w-full h-56 object-cover" onMouseOver={(e) => {
        changeImg(e , hoverImage)
      }} onMouseLeave={(e) => {
        onMouseLeaveHandle(e, imgUrl)
      }}/>
      {/* 
      Hover Image
      
      */}
      <p className="text-center p-2 font-semibold">{Title}</p>
      <div>
        <span className="text-gray-500 line-through">Rs. {productPrice}.00</span>
        &nbsp;
        &nbsp;
        <span>Rs. {offerPrice}.00</span>
      </div>
      <button className="w-full bg-[#7B46AC] absolute bottom-0 py-2 rounded uppercase font-semibold text-[#ffffffe5] shadow shadow-amber-50 tracking-widest">Add To Cart</button>
    </div>
  )
}

export default Card;