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
} from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, Zoom, toast } from 'react-toastify';

const CreateProduct = () => {
  const initialState = {
    title: "",
    description: "",
    productPrice: "",
    offerPrice: "",
    gender: "Woman",
    category: "",
    inStock: "true",
    dimensions: "",
    material: "",
    color: "",
    product_images: []
  };

  const [data, setData] = useState(initialState);

  const categories = [
    "Earrings", "Necklaces", "Rings", "Jewellery Sets",
    "Bracelets", "Gift Boxes", "Couple Sets", "Sunglasses",
    "Hats & Caps", "Hair Accessories"
  ];

  const onChangeHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    theme: "light",
    transition: Zoom,
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (key !== 'product_images') formData.append(key, data[key]);
    });
    data.product_images.slice(0, 5).forEach(img => formData.append("product_images", img.file));

    axios.post(`/api/products/new`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        data.product_images.forEach((img) => URL.revokeObjectURL(img.preview));
        setData(initialState);
        toast.success(res.data.message, toastOptions);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.error || "Product creation failed.", toastOptions);
      });
  };

  return (
    <div className="p-6">
      <ToastContainer />
      <h2 className="text-3xl font-bold text-purple-700 mb-6">Create Product</h2>

      <Box component="form" onSubmit={onSubmitHandler} encType='multipart/form-data' noValidate>
        {/* Title & Category */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <TextField label="Title" name='title' variant="outlined" fullWidth onChange={onChangeHandler} value={data.title} />
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Category</InputLabel>
            <Select name='category' value={data.category} onChange={onChangeHandler} label="Category">
              <MenuItem value="">None</MenuItem>
              {categories.map((cat, idx) => <MenuItem key={idx} value={cat}>{cat}</MenuItem>)}
            </Select>
          </FormControl>
        </div>

        {/* Dimensions, Material, Color */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <TextField label="Dimensions" name='dimensions' variant="outlined" fullWidth onChange={onChangeHandler} value={data.dimensions} />
          <TextField label="Material" name='material' variant="outlined" fullWidth onChange={onChangeHandler} value={data.material} />
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Color</InputLabel>
            <Select name='color' value={data.color} onChange={onChangeHandler} label="Color">
              <MenuItem value="">None</MenuItem>
              {["Black", "White", "Red", "Blue", "Green", "Yellow", "Orange", "Pink", "Purple", "Brown", "Gray", "Beige", "Navy", "Olive", "Maroon", "Teal", "Cyan", "Magenta", "Gold", "Silver"].map((clr, idx) => (
                <MenuItem key={idx} value={clr}>{clr}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* Description */}
        <TextField label="Description" name='description' variant="outlined" fullWidth multiline rows={4} className="mb-6" onChange={onChangeHandler} value={data.description} />

        {/* Image Upload */}
        <div className="mb-6">
          <p className="font-semibold mb-2">Upload Images (Max 5)</p>
          <input
            type="file"
            name="product_images"
            multiple
            accept="image/*"
            onChange={(e) => {
              const files = Array.from(e.target.files);
              if (files.length + data.product_images.length > 5) {
                alert("You can only upload up to 5 images.");
                return;
              }
              const previews = files.map(file => ({ file, preview: URL.createObjectURL(file) }));
              setData(prev => ({ ...prev, product_images: [...prev.product_images, ...previews] }));
            }}
          />
          <div className="flex gap-3 mt-4 flex-wrap">
            {data.product_images.map((img, i) => (
              <img key={i} src={img.preview} alt={`img-${i}`} className="w-20 h-20 rounded object-cover" />
            ))}
          </div>
        </div>

        {/* Gender & Stock */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row name="gender" value={data.gender} onChange={onChangeHandler}>
              <FormControlLabel value="Woman" control={<Radio />} label="Woman" />
              <FormControlLabel value="Man" control={<Radio />} label="Man" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel>In Stock</FormLabel>
            <RadioGroup row name="inStock" value={data.inStock} onChange={onChangeHandler}>
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>

        {/* Prices */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <TextField label="Product Price" name='productPrice' type='number' variant="outlined" fullWidth onChange={onChangeHandler} value={data.productPrice} />
          <TextField label="Offer Price" name='offerPrice' type='number' variant="outlined" fullWidth onChange={onChangeHandler} value={data.offerPrice} />
        </div>

        <Button type="submit" variant="contained" color="success" sx={{ fontWeight: "bold" }}>
          Submit Product
        </Button>
      </Box>
    </div>
  );
};

export default CreateProduct;