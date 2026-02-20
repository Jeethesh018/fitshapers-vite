import { useState, useRef, useEffect } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

type Plan = {
  name: string
  price: string
  duration: string
}

const Plans = () => {

  const plans: Plan[] = [
    { name: "Monthly", price: "₹1999", duration: "per month" },
    { name: "3 Months", price: "₹4999", duration: "quarterly" },
    { name: "6 Months", price: "₹6999", duration: "half yearly" },
    { name: "12 Months", price: "₹9999", duration: "yearly" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [plansPerView, setPlansPerView] = useState(1)

  const startX = useRef(0)
  const isDragging = useRef(false)

  // Detect screen size
  useEffect(() => {

    const updatePlansPerView = () => {
      if (window.innerWidth >= 768)
        setPlansPerView(3)
      else
        setPlansPerView(1)
    }

    updatePlansPerView()

    window.addEventListener("resize", updatePlansPerView)

    return () => window.removeEventListener("resize", updatePlansPerView)

  }, [])

  const totalPages = Math.ceil(plans.length / plansPerView)

  const next = () => {
    if (currentIndex < totalPages - 1)
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
    handleSwipe(e.changedTouches[0].clientX)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    startX.current = e.clientX
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    isDragging.current = false
    handleSwipe(e.clientX)
  }

  const handleSwipe = (endX: number) => {

    const diff = startX.current - endX

    if (diff > 50) next()
    else if (diff < -50) prev()

  }

  return (
    <section className="bg-zinc-900 text-white py-16 px-6 overflow-hidden">

      <div className="max-w-6xl mx-auto relative">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Membership <span className="text-orange-500">Plans</span>
        </h2>

        {/* Mobile swipe hint */}
        <p className="text-center text-zinc-400 mb-6 md:hidden">
          ← Swipe left or right to view plans →
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
          className="overflow-hidden w-full cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => (isDragging.current = false)}
        >

          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >

            {plans.map((plan, index) => (

              <div
                key={index}
                className="min-w-full md:min-w-[33.333%] px-4"
              >

                <div className="
                  bg-black p-8 rounded-xl
                  border border-zinc-800
                  hover:border-orange-500/40
                  transition-all duration-300
                ">

                  <h3 className="text-2xl font-semibold mb-4">
                    {plan.name}
                  </h3>

                  <p className="text-4xl md:text-5xl font-bold text-orange-500">
                    {plan.price}
                  </p>

                  <p className="text-zinc-400 mb-6">
                    {plan.duration}
                  </p>

                  <ul className="text-zinc-400 mb-8 space-y-2">
                    <li>✔ Full Gym Access</li>
                    <li>✔ Strength Training</li>
                    <li>✔ Cardio Access</li>
                    <li>✔ Functional Training</li>
                  </ul>

                  <a
                    href={`https://wa.me/918553036233?text=Hi, I want to join ${plan.name} Plan`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      block text-center
                      bg-orange-500 hover:bg-orange-600
                      py-3 rounded-lg font-semibold
                      transition-all duration-300
                    "
                  >
                    Join Now
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          disabled={currentIndex === totalPages - 1}
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

        {/* Correct Pagination */}
        <div className="flex justify-center mt-8 gap-2">

          {Array.from({ length: totalPages }).map((_, index) => (

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

export default Plans