import logo from "../assets/logo.png"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[92vh] bg-black text-white flex items-start md:items-center justify-center px-4 sm:px-6"
    >
      <div className="max-w-4xl text-center mt-16 md:-mt-8 lg:-mt-12">
        <img
          src={logo}
          alt="FitShapers The Fitness Club"
          className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] mx-auto mb-4 object-contain animate-fade-up animate-delay-1"
        />

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight animate-fade-up animate-delay-2">
          Your Transformation.
          <span className="text-orange-500 block mt-1 sm:mt-2">Our Mission.</span>
        </h1>

        <p className="text-zinc-400 mt-5 text-base sm:text-lg md:text-xl animate-fade-up animate-delay-3 px-2">
          Welcome to FitShapers The Fitness Club. A premium environment designed
          to help you build strength, confidence, and discipline with expert guidance.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-up animate-delay-4 px-2">
          <a
            href="https://wa.me/918553036233?text=Hi, I want to join FitShapers The Fitness Club"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02]"
          >
            Join Now
          </a>

          <a
            href="tel:+918553036233"
            className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02]"
          >
            Call Now
          </a>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4 text-left">
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-3 sm:p-4">
            <p className="text-orange-500 text-lg sm:text-xl font-bold">7+</p>
            <p className="text-zinc-400 text-xs sm:text-sm">Years coaching</p>
          </div>
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-3 sm:p-4">
            <p className="text-orange-500 text-lg sm:text-xl font-bold">1:1</p>
            <p className="text-zinc-400 text-xs sm:text-sm">Personal guidance</p>
          </div>
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-3 sm:p-4">
            <p className="text-orange-500 text-lg sm:text-xl font-bold">100%</p>
            <p className="text-zinc-400 text-xs sm:text-sm">Transformation focus</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
