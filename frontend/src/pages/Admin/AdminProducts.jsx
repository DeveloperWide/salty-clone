import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast, Zoom } from "react-toastify";


const AdminProducts = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`/api/products`).then((res) => {
            console.log(res);
            setData(res.data.data);
        }).catch((err) => {
            console.log(err)
        })
    }, []);

    const inStockHandler = (e, productId) => {
        const newInStock = e.target.checked;
        axios.patch(`/api/products/${productId}`, {
            inStock: newInStock,
        }).then((res) => {
            setData((prev) =>
                prev.map((product) =>
                    product._id === productId ? { ...product, inStock: newInStock } : product
                )
            );
        }).catch((err) => {
            console.log(err);
        });
    };


    const toastOptions = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
    }


    const deleteProduct = (productId) => {
        axios.delete(`/api/products/${productId}`).then((res) => {
            setData((prev) => prev.filter(p => p._id !== productId)); // remove from UI
            toast.success(res.data.message, { ...toastOptions });
        }).catch((err) => {
            toast.error(err?.response?.data?.message || "Delete failed", { ...toastOptions });
        });
    };

    return (
        <div className="flex-1 py-10 flex flex-col justify-between">
            <ToastContainer />
            <div className="w-full md:p-10 p-4">
                <h2 className="pb-4 text-lg font-medium">All Products</h2>
                <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
                    <table className="md:table-auto table-fixed w-full overflow-hidden">
                        <thead className="text-gray-900 text-sm text-left">
                            <tr>
                                <th className="px-4 py-3 font-semibold truncate"></th>
                                <th className="px-4 py-3 font-semibold truncate"></th>
                                <th className="px-4 py-3 font-semibold truncate">Product</th>
                                <th className="px-4 py-3 font-semibold truncate max-sm:hidden ">Gender</th>
                                <th className="px-4 py-3 font-semibold truncate max-sm:hidden md:block">Selling Price</th>
                                <th className="px-4 py-3 font-semibold truncate">In Stock</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-500">
                            {data.map((product) => {
                                return (<tr key={product._id} className="border-t border-gray-500/20">
                                    <td className="text-center text-xl hover:text-blue-600  px-3">
                                        <a href={`/admin/dashboard/${product._id}/edit`}><i className="fa-solid fa-pencil cursor-pointer"></i></a>
                                    </td>
                                    <td className="text-center text-xl hover:text-red-500 cursor-pointer px-3" onClick={() => {
                                        deleteProduct(product._id)
                                    }}><i className="fa-regular fa-trash-can"></i></td>
                                    <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                                        <div className="border border-gray-300 rounded p-2">
                                            <img src={product.product_images[0].url} alt="Product" className="w-16" />
                                        </div>
                                        <span className="truncate max-sm:hidden w-full">{product.title}</span>
                                    </td>
                                    <td className="px-4 py-3 max-sm:hidden">{product.gender}</td>
                                    <td className="px-4 py-3 max-sm:hidden">${product.offerPrice}</td>
                                    <td className="px-4 py-3">
                                        <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                                            <input
                                                type="checkbox"
                                                className="sr-only peer"
                                                checked={product.inStock}
                                                onChange={(e) => inStockHandler(e, product._id)}
                                            />

                                            <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                                            <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                                        </label>
                                    </td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminProducts;