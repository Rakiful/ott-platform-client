async function getProduct(id) {
  const res = await fetch(`http://localhost:5000/api/products/${id}`, {
    cache: "no-store", // fresh data
  });
  return res.json();
}

export default async function ProductDetails({ params }) {
  const product = await getProduct(params._id);

  return (
    <div className="min-h-[80vh] text-white flex items-center justify-center">
      <div className=" lg:flex gap-10 w-full bg-zinc-900 rounded-2xl shadow-xl p-8">
        <div>
          <figure className="mb-5 rounded-xl flex items-center justify-center">
            <div className="lg:w-1/2">
              <img
                src={product.image}
                alt={product.name}
                className="w-900 h-120 object-cover rounded-xl"
              />
            </div>
          </figure>
        </div>
        <div className="flex flex-col justify-between">
          {/* Product Title */}
          <h1 className="text-4xl font-bold text-red-500 mb-4 border-b border-red-700 pb-2">
            {product.name}
          </h1>

          {/* Product Description */}
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Product Price */}
          <p className="text-5xl font-semibold text-red-400">
            ${product.price}
          </p>

          <div>
            <button className="btn bg-red-600 text-white shadow border-0 w-full my-5">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
