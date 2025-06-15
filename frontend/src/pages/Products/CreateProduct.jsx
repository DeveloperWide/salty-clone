import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, FormLabel, Radio, RadioGroup, FormControlLabel, InputLabel, Select, MenuItem, Button, } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useState } from 'react';
import axios from 'axios';

const CreateProduct = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    productPrice: "",
    offerPrice: "",
    gender: "Woman",
    category: "",
    inStock: "true",
    images: []
  });
 
  const categories = [
    "Earrings",
    "Necklaces",
    "Rings",
    "Jewellery Sets",
    "Bracelets",
    "Gift Boxes",
    "Couple Sets",
    "Sunglasses",
    "Hats & Caps",
    "Hair Accessories"
  ];


  const onChangeHandler = (e) => {
    setData((prevObj) => {
      return { ...prevObj, [e.target.name]: e.target.value }
    })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.post(`/api/products/new`, data).then((res) => {
      console.log(res.data.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <h2 className='text-3xl font-semibold italic text-[#7E46AC]'>Create Your Product</h2>
      <Box
        component="form"
        noValidate
        method='post'
        autoComplete="off"
        className='flex flex-col'
        onSubmit={onSubmitHandler}
        encType='multipart/form-data'
      >

        {/* Title & Category */}
        <div className='mx-4 my-3'>
          <TextField id="standard-basic" label="Title" variant="standard" name='title' sx={{ margin: "0px 8px 10px 10px", width: "25ch" }} onChange={onChangeHandler} value={data.title} />
          {/* Category */}
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              label="Category"
              name='category'
              value={data.category}
              onChange={onChangeHandler}
            >
              <MenuItem value="">None</MenuItem>
              {categories.map((category, index) => (
                <MenuItem key={index} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* Description */}
        <div className='mx-4 my-3'>
          <p className='italic font-semibold text-amber-900 ms-4'>A detailed explanation about your product</p>
          <TextField id="standard-basic" label="Description" name='description' multiline rows={4} variant="outlined" sx={{ margin: "10px 8px", width: "60ch" }} onChange={onChangeHandler} value={data.description} />
        </div>



        <div className="flex flex-col items-start gap-4 justify-start w-full mx-4 my-3">
          <p className='italic font-semibold text-lg'>Upload Product Images</p>
          <label htmlFor="dropzone-file" className="flex w-[80%] flex-col items-center justify-center  h-64  rounded-lg cursor-pointer dark:hover:bg-gray-500 dark:bg-gray-300">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              <p className="mb-2 text-sm text-gray-900 dark:text-gray-900"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-800 dark:text-gray-800">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              multiple
              accept="image/*"
              onChange={(e) => {
                const selectedFiles = Array.from(e.target.files);
                if (selectedFiles.length + data.images.length > 5) {
                  alert("You can upload a maximum of 5 images.");
                  return;
                }

                const filePreviews = selectedFiles.map((file) => ({
                  file,
                  preview: URL.createObjectURL(file),
                }));

                setData((prev) => {
                  return {...prev, images: [...filePreviews]}
                });
              }}
            />

          </label>
          <div className="flex flex-wrap gap-4 mt-4">
            {data.images.map((img, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={img.preview}
                  alt={`upload-${index}`}
                  className="w-20 h-20 object-cover rounded-md shadow"
                />
                <p className="text-xs mt-1">{img.file.name}</p>
              </div>
            ))}
          </div>

        </div>

        <div className='grid grid-cols-2'>
          {/* Gender & inStock*/}
          <div className='mx-4 my-5'>
            <FormControl sx={{ marginTop: "10px" }}>
              <FormLabel id="demo-radio-buttons-group-label" sx={{ fontStyle: "italic", fontWeight: "700", color: "black" }}>Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                defaultValue="Woman"
                name="gender"
                onChange={onChangeHandler}
                value={data.gender}
                sx={{ margin: "4px 18px 4px 5px" }}
              >
                <FormControlLabel value="Woman" control={<Radio />} label="Woman" />
                <FormControlLabel value="Man" control={<Radio />} label="Man" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
            <br />
            <FormControl sx={{ marginTop: "10px" }}>
              <FormLabel id="demo-radio-buttons-group-label" sx={{ fontStyle: "italic", fontWeight: "700", color: "black" }}>inStock</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                defaultValue="true"
                name="inStock"
                sx={{ margin: "4px 18px 4px 5px" }}
                onChange={onChangeHandler}
                value={data.inStock}
              >
                <FormControlLabel value="true" control={<Radio />} label="Yes" />
                <FormControlLabel value="false" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </div>
          {/* Price */}
          <div className='mx-4 my-3'>
            <p className='italic font-semibold ms-1'>Price : </p>
            <TextField id="standard-basic" label="Product Price" name='productPrice' type='number' variant="standard" sx={{ margin: "4px 18px 4px 5px", width: "25ch" }} onChange={onChangeHandler} value={data.productPrice} />
            <br />
            <TextField id="standard-basic" label="Offer Price" name='offerPrice' type='number' variant="standard" sx={{ margin: "4px 18px 4px 5px", width: "25ch" }} onChange={onChangeHandler} value={data.offerPrice} />
          </div>
        </div>
        <Button variant="outlined" type='submit' sx={{ width: "120px", alignSelf: "end", marginRight: "90px", backgroundColor: "#24ae23", border: "none", color: "#ffffffcc", fontWeight: "700" }}>Submit</Button>
      </Box>
    </div>
  );
};

export default CreateProduct;