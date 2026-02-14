import Sidebar from "../components/Sidebar"
import Hero from "../components/Hero"

const Home = () => {
  return (
    <div className="bg-black text-white">

      <Sidebar />

      <div className="pt-16">

        <Hero />

        <section id="plans" className="min-h-screen p-6">
          Plans Section
        </section>

        <section id="gallery" className="min-h-screen p-6">
          Gallery Section
        </section>

        <section id="trainers" className="min-h-screen p-6">
          Trainers Section
        </section>

        <section id="contact" className="min-h-screen p-6">
          Contact Section
        </section>

      </div>

    </div>
  )
}

export default Home
