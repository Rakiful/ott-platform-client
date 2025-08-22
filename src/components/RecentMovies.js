// app/components/RecentMovies.jsx
import Image from "next/image";
import Link from "next/link";

async function getProducts() {
  const res = await fetch("http://localhost:5000/api/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function RecentMovies() {
  const movies = await getProducts();

  return (
    <section className="bg-black text-white py-10 px-5">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl text-center text-red-500 font-bold mb-12">
        Recent <span className="text-white">Movies</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.slice(0, 4).map((movie) => (
          <Link
            href={`/products/${movie._id}`}
            key={movie._id}
            className="bg-[#131313] rounded-2xl shadow-lg duration-500 overflow-hidden hover:scale-102 transition-transform"
          >
            <img
              src={movie.image || "/placeholder.jpg"}
              alt={movie.name}
              width={300}
              height={200}
              className="w-full h-120 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{movie.name}</h3>
              <p className="text-sm text-gray-400 line-clamp-2">
                {movie.description}
              </p>
              <p className="text-red-400 mt-2 font-bold">
                ⭐ {movie.rating || "N/A"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
