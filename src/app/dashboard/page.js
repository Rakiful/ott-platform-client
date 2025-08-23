"use client";

export default function Dashboard() {
  return (
    <div className="p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-red-500 mb-6">
        Dashboard <span className="text-white">Overview</span>
      </h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#131313] rounded-2xl shadow-md p-6">
          <h2 className="text-lg font-semibold ">Total Products</h2>
          <p className="text-2xl font-bold  mt-2">120</p>
        </div>
        <div className="bg-[#131313] rounded-2xl shadow-md p-6">
          <h2 className="text-lg font-semibold ">Orders</h2>
          <p className="text-2xl font-bold  mt-2">85</p>
        </div>
        <div className="bg-[#131313] rounded-2xl shadow-md p-6">
          <h2 className="text-lg font-semibold ">Revenue</h2>
          <p className="text-2xl font-bold mt-2">$5,430</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-[#131313] rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-semibold  mb-4">Recent Activity</h2>
        <ul className="space-y-3">
          <li className="">
            ✅ New Movie <span className="font-medium">Borbaad</span> added
          </li>
          <li className="">
            🛒 Order #1024 placed by <span className="font-medium">Md rakif</span>
          </li>
          <li className="">
            📦 Drama <span className="font-medium">Bachelor point session 5 </span>New
            Episode released
          </li>
        </ul>
      </div>
    </div>
  );
}
