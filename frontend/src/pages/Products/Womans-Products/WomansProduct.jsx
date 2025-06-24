import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../../../components/Card";
import Navbar from "../../../layouts/Navbar"
import ImageGallery from "../../../components/ImageGallery";

function WomansProduct({logo}) {
  let [data, setData] = useState([])
  useEffect(() => {
    axios.get("/api/woman/products").then((res) => {
      console.log(res.data.data);
      setData(res.data.data)
    }).catch((err) => {
      console.log(err)
    })
  }, []);

  console.log(data)
  return (
    <>
      <Navbar logo={logo}/>
      <ImageGallery />
      <div className="flex gap-3 justify-center items-center flex-wrap m-5">
        {data.map((obj, idx) => {
          return (
            // imgUrl , Title , productPrice, offerPrice, hoverImage
            
            <Card title={obj.title} productId={obj._id} imgUrl={obj.product_images[0].url} hoverImage={obj.product_images[1].url} productPrice={obj.productPrice} offerPrice={obj.offerPrice} inStock={obj.inStock} key={idx} />
          )
        })}
      </div>
    </>
  )
}

export default WomansProduct;