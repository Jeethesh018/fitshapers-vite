import logo from "../assets/logo.png"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6"
    >
      <div className="max-w-4xl text-center">

        {/* Logo */}
        <img
          src={logo}
          alt="FitShapers The Fitness Club"
          className="w-62 h-62 mx-auto mb-6 object-contain"
        />

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Your Transformation.
          <span className="text-orange-500 block mt-2">
            Our Mission.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-zinc-400 mt-6 text-lg md:text-xl">
          Welcome to FitShapers The Fitness Club. A premium environment designed
          to help you build strength, confidence, and discipline with the best
          equipment and expert guidance.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          {/* Join Now - WhatsApp */}
          <a
            href="https://wa.me/918553036233?text=Hi, I want to join FitShapers The Fitness Club"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-orange-500 hover:bg-orange-600
              text-white font-semibold
              px-8 py-3 rounded-lg
              transition-all duration-200
            "
          >
            Join Now
          </a>

          {/* Call Now */}
          <a
            href="tel:+918553036233"
            className="
              border border-orange-500
              text-orange-500
              hover:bg-orange-500 hover:text-black
              font-semibold
              px-8 py-3 rounded-lg
              transition-all duration-200
            "
          >
            Call Now
          </a>

        </div>

      </div>
    </section>
  )
}

export default Hero
