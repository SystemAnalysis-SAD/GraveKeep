import {
  FaSearch,
  FaMapMarkerAlt,
  FaHeart,
  FaUsers,
  FaArrowRight,
  FaLeaf,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0">
          <img
            src="bg.jpg"
            alt="Garden of Memories Memorial Park"
            className="h-full w-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-emerald-900/20 to-black/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center px-6">
          <div className="text-center text-white max-w-3xl mx-auto">
            {/* Main Heading with Enhanced Styling */}
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tighter">
                <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500 bg-clip-text text-transparent drop-shadow-2xl">
                  GraveKeep
                </span>
              </h1>

              {/* Simplified Tagline */}
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center gap-2 text-emerald-100">
                  <FaMapMarkerAlt className="text-sm" />
                  <span className="text-lg font-medium">
                    Garden of Memories, Taguig
                  </span>
                </div>
              </div>
            </div>

            {/* Simplified Description */}
            <p className="text-sm  md:text-lg text-gray-200 max-w-xl mx-auto mb-12 leading-relaxed font-light backdrop-blur-sm bg-black/20 rounded-2xl p-6 border border-emerald-400/20">
              A compassionate digital memorial to honor and locate departed
              loved ones with dignity and peace.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r cursor-pointer from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 transform">
                <FaSearch className="text-sm" />
                <span className="text-sm">Search Memorials</span>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-8 h-12 border-2 border-emerald-400/40 rounded-full flex justify-center backdrop-blur-sm bg-black/20">
              <div className="w-1 h-4 bg-emerald-400 rounded-full mt-3 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-1 bg-emerald-500 mb-6"></div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
                About <span className="text-emerald-400">GraveKeep</span>
              </h2>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                GraveKeep is a dedicated memorial search system created for the
                <span className="text-emerald-300 font-semibold">
                  {" "}
                  Garden of Memories Memorial Park in Taguig City
                </span>
                . Our mission is to provide families with a respectful and
                efficient way to locate their departed loved ones.
              </p>
              <p className="text-sm text-gray-300 mb-8 leading-relaxed">
                In times of remembrance, we believe technology should serve
                compassion. Our platform helps you find peace by making the
                search process simple, dignified, and accessible.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-emerald-400">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-white text-md">
                    Compassionate Design
                  </span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-white">Easy Navigation</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-white">Respectful Service</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center text-white">
                  <FaHeart className="text-6xl mx-auto mb-4 opacity-80" />
                  <h3 className="text-2xl font-bold mb-2">
                    Garden of Memories
                  </h3>
                  <p className="text-emerald-100">Taguig City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Purpose Section */}
      <div className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-8">
            Our Purpose
          </h2>
          <p className="text-sm text-gray-300 mb-12 leading-relaxed">
            We provide a simple, dignified way for families to locate their
            loved ones within Garden of Memories Memorial Park. No complicated
            features, just a compassionate tool to help you find peace and
            preserve memories.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSearch className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Easy Search
              </h3>
              <p className="text-gray-400">
                Simple and intuitive search to find your loved ones
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Precise Location
              </h3>
              <p className="text-gray-400">
                Accurate grave locations within the memorial park
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                With Compassion
              </h3>
              <p className="text-gray-400">
                Designed with respect and understanding for families
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-gray-900 to-emerald-900/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Ready to Find Your Loved One?
          </h2>
          <p className="text-sm  text-emerald-100 mb-8">
            Begin your search with dignity and respect at Garden of Memories
            Memorial Park.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 cursor-pointer text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-emerald-500/30 mx-auto">
            Start Searching
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
