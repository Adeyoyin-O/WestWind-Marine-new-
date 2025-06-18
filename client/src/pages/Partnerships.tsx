export default function Partnerships() {
  return (
    <div className="page-transition">
      {/* Main Content */}
      <section className="min-h-[80vh] bg-gray-50 relative flex items-center justify-center">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.4) 2px, transparent 0),
                             radial-gradient(circle at 75px 75px, rgba(71, 85, 105, 0.3) 1px, transparent 0)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-slate-200 rounded-lg rotate-12 opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-blue-200 rounded-full opacity-30"></div>
        <div className="absolute top-40 right-40 w-16 h-16 bg-orange-100 rounded-lg rotate-45 opacity-40"></div>
        <div className="absolute bottom-40 left-40 w-20 h-20 bg-blue-100 rounded-full opacity-30"></div>

        {/* Geometric lines */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-slate-300 to-transparent opacity-20"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-300 to-transparent opacity-20"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-20"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-20"></div>

        {/* Main content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center justify-center px-6 py-3 bg-blue-600/10 backdrop-blur-sm rounded-full text-blue-700 font-medium mb-8 border border-blue-200/50">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Partnership Status
            </div>
            
            {/* Main message */}
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
              A Mother Company of{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                West Wind Marine Electronics Ltd
              </span>
            </h1>

            {/* Subtle divider */}
            <div className="flex items-center justify-center mt-12">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full mx-4 opacity-40"></div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
