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
        <div>
          <p className="max-h-20 overflow-hidden">{product.description}</p>
          ...more
        </div>
        <div className="card-actions">
          <Link
            href={`/products/${product._id}`}
            className="btn bg-red-600 text-white border-0 shadow mt-3"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
