import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="card shadow-sm bg-[#131313]">
      <figure className="px-3 pt-10">
        <img src={product.image} alt="movies" className="rounded-xl h-90" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>
        <h1 className="text-red-600 font-bold text-2xl">{product.price}$</h1>
        <p className="max-h-30 overflow-auto">{product.description}</p>
        <div className="card-actions">
          <Link
            href={`/products/${product._id}`}
            className="btn bg-red-600 text-white border-0 shadow"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
