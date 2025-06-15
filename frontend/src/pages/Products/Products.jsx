import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../../components/Card";
import Navbar from "../../layouts/Navbar";
import ImageGallery from "../../components/ImageGallery";

function Products() {
  let [data, setData] = useState([])
  useEffect(() => {
    axios.get("/api/products").then((res) => {
      console.log(res.data.data);
      setData(res.data.data)
    }).catch((err) => {
      console.log(err)
    })
  }, []);

  console.log(data)
  return (
    <>
    <Navbar />
    <ImageGallery />
     <div className="flex gap-3 justify-center items-center flex-wrap m-5">
      {data.map((obj, idx) => {
        return (
          <Card title={obj.title} imageUrl={obj.image} price={obj.price} key={idx}/>
        )
      })}
    </div>
    </>
  )
}

export default Products;