import logo from "../assets/logo.png"

const Hero = () => {
  return (
  <section
  id="home"
  className="
    min-h-screen
    bg-black text-white
    flex items-start md:items-center
    justify-center
    px-6
  "
>
  <div
    className="
      max-w-4xl text-center
      mt-9 md:-mt-12 lg:-mt-16
    "
  >

        {/* Logo */}
        <img
          src={logo}
          alt="FitShapers The Fitness Club"
          className="
            w-[200px] h-[200px]
            mx-auto mb-6 object-contain
            animate-fade-up animate-delay-1
          "
        />

        {/* Heading */}
        <h1
          className="
            text-4xl md:text-6xl font-bold leading-tight
            animate-fade-up animate-delay-2
          "
        >
          Your Transformation.
          <span className="text-orange-500 block mt-2">
            Our Mission.
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="
            text-zinc-400 mt-6 text-lg md:text-xl
            animate-fade-up animate-delay-3
          "
        >
          Welcome to FitShapers The Fitness Club. A premium environment designed
          to help you build strength, confidence, and discipline with the best
          equipment and expert guidance.
        </p>

        {/* Buttons */}
        <div
          className="
            mt-8 flex flex-col sm:flex-row gap-4 justify-center
            animate-fade-up animate-delay-4
          "
        >

          {/* Join Now */}
          <a
            href="https://wa.me/918553036233?text=Hi, I want to join FitShapers The Fitness Club"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-orange-500 hover:bg-orange-600
              text-white font-semibold
              px-8 py-3 rounded-lg
              transition-all duration-300
              hover:scale-[1.02]
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
              transition-all duration-300
              hover:scale-[1.02]
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