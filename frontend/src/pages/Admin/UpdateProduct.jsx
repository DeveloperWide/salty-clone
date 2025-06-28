import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
    FormControl,
    FormLabel,
    Radio,
    RadioGroup,
    FormControlLabel,
    InputLabel,
    Select,
    MenuItem,
    Button,
    CircularProgress,
    Modal
} from '@mui/material';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UpdateProduct() {
    const { productId } = useParams();
    const [prevImgs, setPrevImgs] = useState([])
    const [newImgs, setNewImgs] = useState([])
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    const categories = [
        "Earrings", "Necklaces", "Rings", "Jewellery Sets",
        "Bracelets", "Gift Boxes", "Couple Sets", "Sunglasses",
        "Hats & Caps", "Hair Accessories"
    ];

    useEffect(() => {
        axios.get(`/api/products/${productId}`)
            .then((res) => {
                setPrevImgs(res.data.data.product_images)
                res.data.data.product_images = [];
                setProduct(res.data.data)
            })
            .catch(err => console.log(err));
    }, [productId]);



    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setProduct(prev => ({ ...prev, [name]: value }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setLoading(true);

        if(product.product_images.length < 2){
            product.product_images = [...prevImgs];
        }

        axios.put(`/api/products/${productId}`, product)
            .then(res => {
                toast.success("Product updated successfully!", {
                    position: "top-right",
                    autoClose: 4000,
                    theme: "light",
                    transition: Zoom,
                });
            })
            .catch(err => {
                toast.error(err?.response?.data?.error || "Failed to update product", {
                    position: "top-right",
                    autoClose: 4000,
                    theme: "light",
                    transition: Zoom,
                });
            })
            .finally(() => setLoading(false));
    };

    if (!product) return <p className="text-center mt-10">Loading product details...</p>;

    return (
        <>
            <Modal open={loading} sx={{ display: 'flex', bgcolor: "#00000020", alignItems: 'center', justifyContent: 'center' }}>
                <Box textAlign="center">
                    <CircularProgress color="secondary" />
                    <p className="mt-4 text-gray-700 font-semibold">Updating product...</p>
                </Box>
            </Modal>

            <ToastContainer />
            <h2 className="text-3xl font-bold text-purple-700 mb-6">Update Product</h2>

            <Box component="form" onSubmit={onSubmitHandler} noValidate>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <TextField label="Title" name='title' variant="outlined" fullWidth onChange={onChangeHandler} value={product.title || ''} />
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select name='category' value={product.category || ''} onChange={onChangeHandler} label="Category">
                            <MenuItem value="">None</MenuItem>
                            {categories.map((cat, idx) => <MenuItem key={idx} value={cat}>{cat}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <TextField label="Dimensions" name='dimensions' variant="outlined" fullWidth onChange={onChangeHandler} value={product.dimensions || ''} />
                    <TextField label="Material" name='material' variant="outlined" fullWidth onChange={onChangeHandler} value={product.material || ''} />
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel>Color</InputLabel>
                        <Select name='color' value={product.color || ''} onChange={onChangeHandler} label="Color">
                            <MenuItem value="">None</MenuItem>
                            {["Black", "White", "Red", "Blue", "Green", "Yellow", "Orange", "Pink", "Purple", "Brown", "Gray", "Beige", "Navy", "Olive", "Maroon", "Teal", "Cyan", "Magenta", "Gold", "Silver"].map((clr, idx) => (
                                <MenuItem key={idx} value={clr}>{clr}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                <TextField label="Description" name='description' variant="outlined" fullWidth multiline rows={4} className="mb-6" onChange={onChangeHandler} value={product.description || ''} />

                <div>
                    <div className="previous-images flex my-4 gap-5">
                        <h2 className="text-blue-950 text-lg font-semibold ms-3">Previous Images : </h2>
                        {prevImgs.map((img, idx) => {
                            return (
                                <div className="border border-gray-300 rounded p-2" key={idx}>
                                    <img src={img.url} alt="Product" className="w-16" />
                                </div>
                            )
                        })}
                    </div>
                    <div className="mb-6">
                        <p className="font-semibold mb-2">Upload Images (Max 5)</p>
                        <input
                            type="file"
                            name="product_images"
                            multiple
                            accept="image/*"
                            onChange={(e) => {
                                const files = Array.from(e.target.files);
                                if (files.length + product.product_images.length > 5) {
                                    alert("You can only upload up to 5 images.");
                                    return;
                                }
                                const previews = files.map(file => ({ file, preview: URL.createObjectURL(file) }));
                                setProduct(prev => ({ ...prev, product_images: [...prev.product_images, ...previews] }));
                            }}
                        />
                        <div className="flex gap-3 mt-4 flex-wrap">
                            {product.product_images.map((img, i) => (
                                <img key={i} src={img.preview} alt={`img-${i}`} className="w-20 h-20 rounded object-cover" />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup row name="gender" value={product.gender || ''} onChange={onChangeHandler}>
                            <FormControlLabel value="Woman" control={<Radio />} label="Woman" />
                            <FormControlLabel value="Man" control={<Radio />} label="Man" />
                        </RadioGroup>
                    </FormControl>

                    <FormControl>
                        <FormLabel>In Stock</FormLabel>
                        <RadioGroup row name="inStock" value={product.inStock || ''} onChange={onChangeHandler}>
                            <FormControlLabel value="true" control={<Radio />} label="Yes" />
                            <FormControlLabel value="false" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <TextField label="Product Price" name='productPrice' type='number' variant="outlined" fullWidth onChange={onChangeHandler} value={product.productPrice || ''} />
                    <TextField label="Offer Price" name='offerPrice' type='number' variant="outlined" fullWidth onChange={onChangeHandler} value={product.offerPrice || ''} />
                </div>

                <Button type="submit" variant="contained" color="success" sx={{ fontWeight: "bold" }}>
                    Update Product
                </Button>
            </Box>
        </>
    );
}

export default UpdateProduct;
