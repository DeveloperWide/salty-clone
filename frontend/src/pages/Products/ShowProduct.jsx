import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../layouts/Navbar";
function ShowProduct() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState("");

    useEffect(() => {
        axios.get(`/api/products/${productId}`)
            .then((res) => {
                const data = res.data.data;
                setProduct(data);
                if (data?.product_images?.length > 0) {
                    setMainImage(data.product_images[0].url);
                }
            })
            .catch((err) => console.log(err));
    }, [productId]);

    if (!product) return <p className="text-center mt-10">Loading product details...</p>;

    const {
        title,
        description,
        category,
        gender,
        inStock,
        offerPrice,
        productPrice,
        product_images = [],
    } = product;

    return (
        <>
            <Navbar />
            <div className="w-full p-6 mt-8 shadow-md bg-white rounded-xl">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* 🖼️ Image Gallery with Thumbnails */}
                    <div className="flex flex-col items-center space-y-4 px-5 mx-6">
                        <div className="w-full h-full max-w-3xl ">
                            <img
                                src={mainImage}
                                className="w-full h-full rounded object-cover"
                                alt="Main Product"
                            />
                        </div>

                        <div className="grid grid-cols-4 gap-4 w-full max-w-3xl">
                            {product_images.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img.url}
                                    onClick={() => setMainImage(img.url)}
                                    className="rounded-lg md:h-24 h-14 object-cover cursor-pointer hover:opacity-80 border-2 transition-all duration-150 ease-in-out"
                                    alt={`Thumb ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl tracking-wide text-gray-700">{title}</h2>
                        <div className="flex items-center gap-9">
                            {offerPrice < productPrice && (
                                <p className="text-gray-400 line-through text-sm">Rs. <br />{productPrice.toLocaleString()}.00</p>
                            )}
                            <p className="text-2xl font-bold text-purple-600">Rs. <br />{offerPrice.toLocaleString()}.00</p>
                            <p>Inclusive of all Taxes Shipping calculated at checkout.</p>
                        </div>
                        <div>
                            <h2 className="uppercase text-xl font-semibold py-4">Product Details</h2>
                            <p className="text-[18px] text-gray-700 leading-relaxed">{description}</p>
                        </div>
                        <div className={`font-semibold ${inStock ? "text-green-600" : "text-red-500"}`}>
                            {inStock ? "In Stock" : "Out of Stock"}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShowProduct;
