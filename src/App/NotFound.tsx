
const NotFound = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-3 py-1 mb-6 text-xs font-medium rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
          404 • Not Found
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Page not found
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          The page you’re looking for doesn’t exist or may have been moved. Try using one of the helpful shortcuts below.
        </p>
      </div>
    </section>
  );
}

export default NotFound;