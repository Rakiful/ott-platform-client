import ProductCard from "../../components/ProductCard";

async function getProducts() {
  const res = await fetch("https://ott-platform-server.vercel.app/api/products");
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="p-10 bg-black text-white min-h-screen">
      <h1 className="text-3xl mb-5 text-red-500 font-bold">Products</h1>
      <div className="grid md:grid-cols-3 gap-5">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}
