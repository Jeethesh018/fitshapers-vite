import { useState, useRef } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"


type Image = {
  src: string
  alt: string
}

const Gallery = () => {

  const images: Image[] = [
    {
      src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1600",
      alt: "Gym interior",
    },
    {
      src: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600",
      alt: "Workout area",
    },
    {
      src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1600",
      alt: "Strength training",
    },
    {
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600",
      alt: "Fitness equipment",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const startX = useRef(0)
  const isDragging = useRef(false)

  const next = () => {
    if (currentIndex < images.length - 1)
      setCurrentIndex(prev => prev + 1)
  }

  const prev = () => {
    if (currentIndex > 0)
      setCurrentIndex(prev => prev - 1)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = startX.current - e.changedTouches[0].clientX

    if (diff > 50) next()
    else if (diff < -50) prev()
  }

  return (
    <section className="bg-black text-white py-16 px-0 md:px-6 overflow-hidden">

      <div className="max-w-6xl mx-auto relative">

        {/* Premium Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 px-4 md:px-0">
          Inside <span className="text-orange-500">FitShapers</span>
        </h2>

        {/* Mobile Swipe Hint */}
        <p className="text-center text-zinc-400 mb-8 md:hidden">
          ← Swipe to explore →
        </p>

        {/* Left Arrow (Desktop only) */}
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className="
            hidden md:flex
            absolute -left-14
            top-1/2 -translate-y-1/2
            z-30
            bg-black p-4 rounded-full
            border border-zinc-800
            hover:bg-orange-500
            transition-all duration-300
            disabled:opacity-30
          "
        >
          <FiChevronLeft size={26} />
        </button>

        {/* Carousel */}
        <div
          className="overflow-hidden w-full"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >

            {images.map((image, index) => (

              <div
                key={index}
                className="min-w-full px-0 md:px-4"
              >

                <div className="
                  rounded-xl overflow-hidden
                  border border-zinc-800
                ">

                  <img
                    src={image.src}
                    alt={image.alt}
                    className="
                      w-full
                      h-[260px] md:h-[420px]
                      object-cover
                    "
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Right Arrow (Desktop only) */}
        <button
          onClick={next}
          disabled={currentIndex === images.length - 1}
          className="
            hidden md:flex
            absolute -right-14
            top-1/2 -translate-y-1/2
            z-30
            bg-black p-4 rounded-full
            border border-zinc-800
            hover:bg-orange-500
            transition-all duration-300
            disabled:opacity-30
          "
        >
          <FiChevronRight size={26} />
        </button>

        {/* Pagination */}
        <div className="flex justify-center mt-6 gap-2">

          {images.map((_, index) => (

            <div
              key={index}
              className={`
                h-2 rounded-full transition-all duration-300
                ${
                  currentIndex === index
                    ? "w-6 bg-orange-500"
                    : "w-2 bg-zinc-600"
                }
              `}
            />

          ))}

        </div>

      </div>

    </section>
  )
}

export default Gallery