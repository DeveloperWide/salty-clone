import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
        <div className="max-w-5xl mx-auto p-6 mt-8 shadow-md bg-white rounded-xl">
            <div className="grid md:grid-cols-2 gap-6">
                {/* 🖼️ Image Gallery with Thumbnails */}
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-full h-full max-w-3xl">
                        <img
                            src={mainImage}
                            className="w-full h-full rounded-lg object-cover"
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
                    <h2 className="text-2xl font-bold tracking-wide">{title}</h2>
                    <div className="text-sm text-gray-600">
                        <span className="font-medium">Category:</span> {category}
                    </div>
                    <div className="text-sm text-gray-600">
                        <span className="font-medium">Gender:</span> {gender}
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="text-xl font-bold text-purple-600">₹{offerPrice}</p>
                        {offerPrice < productPrice && (
                            <p className="text-gray-400 line-through">₹{productPrice}</p>
                        )}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
                    <div className={`font-semibold ${inStock ? "text-green-600" : "text-red-500"}`}>
                        {inStock ? "In Stock" : "Out of Stock"}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowProduct;
