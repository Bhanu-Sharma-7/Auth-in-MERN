export const BruditeDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">📊 Brudite Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-4 rounded-xl shadow-md text-center">
          <p className="text-sm text-gray-600">Total Users</p>
          <h2 className="text-2xl font-semibold mt-2">1,240</h2>
        </div>

        <div className="bg-green-100 p-4 rounded-xl shadow-md text-center">
          <p className="text-sm text-gray-600">Active Sessions</p>
          <h2 className="text-2xl font-semibold mt-2">389</h2>
        </div>

        <div className="bg-purple-100 p-4 rounded-xl shadow-md text-center">
          <p className="text-sm text-gray-600">System Load</p>
          <h2 className="text-2xl font-semibold mt-2">72%</h2>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Weekly Summary</h2>
        <div className="h-32 flex items-center justify-center text-gray-400">
          {/* Placeholder for future chart or content */}
          <span>No data available</span>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          View More
        </button>
      </div>
    </div>
  );
};