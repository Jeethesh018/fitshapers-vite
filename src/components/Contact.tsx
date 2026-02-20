import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaDirections } from "react-icons/fa";

const WHATSAPP_LINK =
  "https://wa.me/918553036233?text=Hi%20FitShapers%20Team,%20I%20want%20to%20join%20the%20gym.";

const PHONE_LINK = "tel:+918553036233";

const MAPS_LINK = "https://maps.app.goo.gl/CD5YynV6GH9z5BLe6";

export default function Contact() {
  return (
   <section className="bg-black py-12 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16 animate-fadeUp">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Start Your Fitness Journey Today
          </h2>

          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
            Join FitShapers The Fitness Club and experience elite training,
            premium equipment, and real transformation.
          </p>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center mb-16 animate-fadeUp animate-delay-1">

          {/* WhatsApp */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center gap-3
              bg-orange-500 hover:bg-orange-600
              text-white font-semibold
              px-6 py-4
              rounded-xl
              transition-all duration-300
              shadow-lg hover:shadow-orange-500/20
            "
          >
            <FaWhatsapp className="text-xl" />
            Chat on WhatsApp
          </a>

          {/* Call */}
          <a
            href={PHONE_LINK}
            className="
              flex items-center justify-center gap-3
              border border-zinc-700
              text-white font-semibold
              px-6 py-4
              rounded-xl
              hover:bg-zinc-900
              transition-all duration-300
            "
          >
            <FaPhoneAlt />
            Call Now
          </a>

        </div>

        {/* Address Block */}
        <div className="text-center mb-10 animate-fadeUp animate-delay-2">

          <div className="flex justify-center items-center gap-2 text-orange-500 mb-3">
            <FaMapMarkerAlt />
            <span className="font-semibold text-white">
              FitShapers The Fitness Club
            </span>
          </div>

          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-4">
            3rd Floor, 338/73
            Nearby KA-51 RTO, Vijay Bank Layout
            Devarachikkanahalli, BTM 4th Stage<br/>
            BDA Layout, 2nd Block
            Bannerghatta Road
            Bengaluru – 560076
          </p>

          {/* Open in Maps Button */}
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              text-orange-500
              hover:text-orange-400
              font-semibold
              transition-colors duration-300
            "
          >
            <FaDirections />
            Open in Google Maps
          </a>

        </div>

        {/* Map Embed */}
        <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-zinc-800 animate-fadeUp animate-delay-3">
          <iframe
            title="FitShapers Location"
            src="https://maps.google.com/maps?q=Bannerghatta%20Road%20Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}