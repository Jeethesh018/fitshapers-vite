import { FaLinkedin } from "react-icons/fa";

const LINKEDIN_URL = "https://www.linkedin.com/in/jeethesh-h-213ba3192";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800">

      <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">

       

        {/* Bottom Row */}
        <div
          className="
            flex flex-col md:flex-row
            items-center
            justify-between
            gap-5
            text-sm
            animate-fadeUp animate-delay-1
          "
        >

          {/* Copyright */}
          <p className="text-zinc-500 text-center md:text-left">
            © 2026 FitShapers The Fitness Club. All rights reserved.
          </p>

          {/* Premium Developer Credit */}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group flex items-center gap-2
              text-zinc-400
              hover:text-white
              transition-all duration-300
            "
          >
            <span className="tracking-wide">
              Developed by
            </span>

            <span
              className="
                font-semibold
                text-orange-500
                group-hover:text-orange-400
                transition-colors duration-300
              "
            >
              Jeethesh
            </span>

            <FaLinkedin
              className="
                text-lg
                text-zinc-500
                group-hover:text-orange-500
                transition-colors duration-300
              "
            />
          </a>

        </div>

      </div>

    </footer>
  );
}