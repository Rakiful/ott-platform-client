"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

export default function AddProductPage() {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true); // show spinner
      const result = await axios.post(
        "https://ott-platform-server.vercel.app/api/products",
        data
      );

      setLoading(false); // hide spinner
      Swal.fire({
        icon: "success",
        title: "Product Added!",
        text: "✅ Your product has been added successfully.",
        showConfirmButton: false,
      });

      reset();
    } catch (err) {
      setLoading(false);
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Failed!",
        text: "❌ Unable to add product. Please try again.",
      });
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
          <label className="block mb-1 font-medium">Product Description</label>
          <input
            placeholder="Product Description"
            type="text"
            {...register("description", { required: true })}
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
          disabled={loading}
          className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 flex items-center justify-center gap-2"
        >
          {loading && (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          )}
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
