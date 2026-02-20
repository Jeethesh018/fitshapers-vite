import { useState, useRef } from "react"
import Bittu from "../assets/bittu_kumar.png"

type Trainer = {
  name: string
  role: string
  experience: string
  image: string
}

const Trainers = () => {

  const trainers: Trainer[] = [
     {
      name: "Bittu Kumar",
      role: "Strength Coach & Yoga Trainer",
      experience: "7+ Years Experience",
      image: Bittu,
    },
    
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const startX = useRef(0)

  const next = () => {
    if (currentIndex < trainers.length - 1)
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

  // Split trainers into rows of 3 for desktop
  const rows: Trainer[][] = []

  for (let i = 0; i < trainers.length; i += 3) {
    rows.push(trainers.slice(i, i + 3))
  }

  return (
    <section className="bg-zinc-900 text-white py-16 px-6 overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Meet Our <span className="text-orange-500">Trainers</span>
        </h2>

        {/* Mobile Swipe Caption ONLY */}
      {trainers.length > 1  &&  <p className="text-center text-zinc-400 mb-8 md:hidden">
          ← Swipe to view trainers →
        </p>} 

        {/* MOBILE SWIPE VIEW */}
        <div
          className="md:hidden overflow-hidden cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >

            {trainers.map((trainer, index) => (

              <div
                key={index}
                className="min-w-full px-4"
              >
                <TrainerCard trainer={trainer} />
              </div>

            ))}

          </div>

        </div>

        {/* DESKTOP GRID VIEW */}
        <div className="hidden md:flex flex-col gap-8 mt-8">

          {rows.map((row, rowIndex) => (

            <div
              key={rowIndex}
              className="flex justify-center gap-8"
            >

              {row.map((trainer, index) => (

                <div
                  key={index}
                  className="w-full max-w-[320px]"
                >
                  <TrainerCard trainer={trainer} />
                </div>

              ))}

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

type TrainerCardProps = {
  trainer: Trainer
}

const TrainerCard = ({ trainer }: TrainerCardProps) => {

  return (
    <div className="
      bg-black
      rounded-xl
      overflow-hidden
      border border-zinc-800
      hover:border-orange-500/40
      transition-all duration-300
      hover:scale-[1.02]
    ">

      <img
        src={trainer.image}
        alt={trainer.name}
        className="w-full h-[320px] object-cover"
      />

      <div className="p-6">

        <h3 className="text-xl font-semibold">
          {trainer.name}
        </h3>

        <p className="text-orange-500 font-medium">
          {trainer.role}
        </p>

        <p className="text-zinc-400 mt-2">
          {trainer.experience}
        </p>

      </div>

    </div>
  )
}

export default Trainers