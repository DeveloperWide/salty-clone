import axios from "axios";

function Card({ imgUrl, productId, title, productPrice, offerPrice, hoverImage, inStock }) {

  function changeImg(e, hoverImage) {
    e.target.src = hoverImage;
  }

  function onMouseLeaveHandle(e, imgUrl) {
    e.target.src = imgUrl;
  }


  if (inStock) {
    return (
      <a href={`/products/${productId}`}>
        <div className=" flex flex-col  items-center h-90 w-50 relative">
          {/* imgUrl , Title , productPrice & OfferPrice hoverImage */}

          <img src={imgUrl} alt="Earring" className="w-full h-60 object-cover " onMouseOver={(e) => {
            changeImg(e, hoverImage)
          }} onMouseLeave={(e) => {
            onMouseLeaveHandle(e, imgUrl)
          }} />
          {/* 
      Hover Image
      
      */}
          <p className="text-center px-1 py-1 font-semibold">{title.length > 20 ? `${title.slice(0, 20)}...` : title}</p>
          <div>
            <span className="text-gray-500 line-through">{productPrice.toLocaleString('en-IN', {
              style: 'currency',
              currency: 'INR'
            })}</span>
            &nbsp;
            &nbsp;
            <span>{offerPrice.toLocaleString('en-IN', {
              style: 'currency',
              currency: 'INR',
            })}</span>
          </div>
          <button className="w-full bg-[#7B46AC] absolute bottom-0 py-2 rounded uppercase font-semibold text-[#ffffffe5] shadow shadow-amber-50 tracking-widest">Add To Cart</button>
        </div>
      </a>
    )
  }

}

export default Card;