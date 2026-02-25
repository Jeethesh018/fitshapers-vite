import {
  FiActivity,
  FiUser,
  FiZap,
  FiHeart,
  FiBarChart2,
  FiTarget,
  FiTrendingUp
} from "react-icons/fi"

type Service = {
  title: string
  description: string
  icon: React.ReactNode
}

const Plans = () => {

  const services: Service[] = [
    {
      title: "Strength Training",
      description:
        "Structured weight training programs designed to build muscle, improve endurance, and increase overall power.",
      icon: <FiActivity />
    },
    {
      title: "Functional Training",
      description:
        "Dynamic movement-based workouts that enhance mobility, balance, coordination, and core stability.",
      icon: <FiZap />
    },
    {
      title: "Personal Training",
      description:
        "One-on-one expert coaching tailored to your body type, fitness goals, and transformation journey.",
      icon: <FiUser />
    },
    {
      title: "HIIT Workouts",
      description:
        "High-intensity interval sessions focused on fat loss, conditioning, and peak athletic performance.",
      icon: <FiBarChart2 />
    },
    {
      title: "Yoga & Mobility",
      description:
        "Improve flexibility, posture, recovery, and mental focus through guided yoga sessions.",
      icon: <FiHeart />
    },
    {
      title: "Weight Management",
      description:
        "Customized fat loss and weight gain programs with nutrition guidance and body composition tracking.",
      icon: <FiTrendingUp />
    },
    {
      title: "Body Transformation",
      description:
        "Complete transformation programs combining training, nutrition, and progress monitoring.",
      icon: <FiTarget />
    }
  ]

  return (
    <section className="bg-black py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">
          Our <span className="text-orange-500">Services</span>
        </h2>

        {/* Grid Layout */}
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-zinc-900 rounded-2xl p-6
                border border-zinc-800
                hover:border-orange-500
                hover:bg-zinc-800
                transition-all duration-300
                group
              "
            >

              {/* Icon */}
              <div className="text-orange-500 text-4xl mb-5 group-hover:scale-110 transition">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Plans