import { useForm } from "react-hook-form";
import axios from "axios";

export default function CreateProduct() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => axios.post(`/api/products/new`, data).then((res) => {
    console.log(data)
    console.log(res);
  }).catch((err) => {
    console.log(data)
    console.log(err)
  })

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] mx-auto my-10 p-6 bg-white shadow-xl rounded-2xl space-y-6"
    >
      <h2 className="text-center text-3xl font-semibold text-gray-800">Add Your Product</h2>

      {/* Title */}
      <div className="flex flex-col">
        <label htmlFor="title" className="mb-1 font-medium text-gray-700">Title</label>
        <input
          id="title"
          placeholder="e.g. Premium Leather Shoes"
          {...register("title", { required: "Title is required" })}
          className={`p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.title ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.title && <span className="text-red-600 text-sm mt-1">{errors.title.message}</span>}
      </div>

      {/* Description */}
      <div className="flex flex-col">
        <label htmlFor="description" className="mb-1 font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          placeholder="Write a brief about the product..."
          {...register("description", {
            required: "Description is required",
            minLength: {
              value: 30,
              message: "Description should be at least 30 characters",
            },
          })}
          rows={4}
          className={`p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none ${errors.description ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.description && <span className="text-red-600 text-sm mt-1">{errors.description.message}</span>}
      </div>

      {/* Price */}
      <div className="flex flex-col">
        <label htmlFor="price" className="mb-1 font-medium text-gray-700">Price (₹)</label>
        <input
          id="price"
          type="number"
          placeholder="e.g. 4999"
          {...register("price", {
            required: "Price is required",
            min: { value: 1, message: "Price must be at least ₹1" },
          })}
          className={`p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.price ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.price && <span className="text-red-600 text-sm mt-1">{errors.price.message}</span>}
      </div>

      {/* Image */}
      <div className="flex flex-col">
        <label htmlFor="image" className="mb-1 font-medium text-gray-700">Image URL</label>
        <input
          id="image"
          placeholder="https://your-image-url.com/product.jpg"
          {...register("image", {
            required: "Image URL is required",
            pattern: {
              value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i,
              message: "Enter a valid image URL",
            },
          })}
          className={`p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.image ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.image && <span className="text-red-600 text-sm mt-1">{errors.image.message}</span>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
      >
        Submit Product
      </button>
    </form>
  );
}
