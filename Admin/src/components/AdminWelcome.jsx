

function AdminWelcome() {
  return (
    <div className="h-full w-full flex justify-center items-center bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-teal-600">
            Welcome to Your Admin Dashboard
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Manage your portfolio with ease and make updates effortlessly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminWelcome;
