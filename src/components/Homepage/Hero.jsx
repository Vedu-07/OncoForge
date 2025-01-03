import Header from "./Header";

const Hero = () => {
    const currentYear = new Date().getFullYear();
  return (
    
    <div className="bg-gray-900 text-white h-[100vh] relative overflow-hidden">
      <Header />
      <div className="size-[40vw] hero-ring"></div>
      <div className="size-[55vw] hero-ring"></div>
      <div className="size-[70vw] hero-ring"></div>
      <div className="size-[85vw] hero-ring"></div>

      <div className="flex items-center justify-center h-full">
      <div className="flex-grow flex flex-col justify-center items-center text-center px-6 sm:px-10">
        <div className="animate-fadein">
          <h1 className="md:text-8xl text-6xl font-Inter font-semibold text-green-300">
            OncoForge
          </h1>
        </div>
        <div>
          <h3 className="animate-fadein mt-4 sm:mt-5 text-gray-300 font-Calistoga sm:text-2xl tracking-wide">
            Empower Your Cancer Journey with Precision and Care.
          </h3>
        </div>
        <div>
          <p className="animate-fadein text-gray-400 font-Calistoga tracking-wide sm:text-sm mt-2">
            Get Personalized Treatment Plan, Powered by AI
          </p>
        </div >
        <div className="mt-5">
        {/* Button */}
        <button class="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-Inter font-semibold rounded-full group animate-fadein">
        <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-green-300 opacity-[3%]"></span>
        <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-green-300 opacity-100 group-hover:-translate-x-8"></span>
        <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Get Started</span>
        <span class="absolute inset-0 border-2 border-green-300 rounded-full"></span>
        </button>
        </div>
      </div>
      </div>

      <footer className="h-16 sm:h-16 flex  items-center justify-around  text-gray-400 z-10 absolute bottom-0 w-full">
        <p className="text-xs sm:text-sm">© {currentYear} OncoForge. All rights reserved.</p>
        <p className="text-xs sm:text-sm">Made With ❤️ By Vedant</p>
      </footer>

    </div>
  );
};

export default Hero;
