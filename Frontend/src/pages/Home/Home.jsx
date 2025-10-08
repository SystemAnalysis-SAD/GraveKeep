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
        <img
          src="bg.jpg"
          alt="Garden of Memories Memorial Park"
          className="opacity-40 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl">
            <div className="flex justify-center mb-6"></div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-emerald-200 to-emerald-400 bg-clip-text text-transparent">
              GraveKeep
            </h1>
            <p className="text-md md:text-2xl mb-4 opacity-90 font-light">
              Honoring Memories, Preserving Legacies
            </p>
            <p className="text-md md:text-3xl font-semibold text-emerald-300 mb-8">
              Garden of Memories Memorial Park
            </p>
            <p className="text-sm md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              A compassionate platform to help you locate and remember your
              departed loved ones with dignity and respect.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/25">
                Find Loved Ones
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-emerald-500 hover:bg-emerald-500 text-emerald-500 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                <FaUsers className="text-lg" />
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2"></div>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About <span className="text-emerald-400">GraveKeep</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                GraveKeep is a dedicated memorial search system created for the
                <span className="text-emerald-300 font-semibold">
                  {" "}
                  Garden of Memories Memorial Park in Taguig City
                </span>
                . Our mission is to provide families with a respectful and
                efficient way to locate their departed loved ones.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                In times of remembrance, we believe technology should serve
                compassion. Our platform helps you find peace by making the
                search process simple, dignified, and accessible.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-emerald-400">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-white">Compassionate Design</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Our Purpose
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Find Your Loved One?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Begin your search with dignity and respect at Garden of Memories
            Memorial Park.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-emerald-500/30 mx-auto">
            Start Searching
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
