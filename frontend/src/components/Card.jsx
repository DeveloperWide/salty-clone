function Card({title, imageUrl, price}){
    return(
        <div className="border rounded-2xl flex flex-col justify-center items-center">
            <img src={imageUrl} alt={title} className="h-30 rounded-t-2xl w-[100%] object-center rounded-tr-2xl" />
            <div className="p-5 text-center">
              <p className="font-sans font-normal leading-7 text-[#1a1221]">{title}</p>
              <p>{price}</p>
              <button>Add to Cart</button>
            </div>
          </div>
    )
}

export default Card;