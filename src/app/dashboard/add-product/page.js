"use client";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function AddProductPage() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:5000/api/products", data);
      alert("✅ Product added successfully!");
      reset();
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add product");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-red-500 mb-6">
        Add New <span className="text-white">Product</span>
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 rounded shadow-md"
      >
        <div>
          <label className="block mb-1 font-medium">Product Name</label>
          <input
            placeholder="Product Name"
            type="text"
            {...register("name", { required: true })}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            placeholder="Price"
            type="number"
            {...register("price", { required: true })}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            placeholder="Image URL"
            type="text"
            {...register("image", { required: true })}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
