import Sidebar from "../components/Sidebar"
import Hero from "../components/Hero"
import Plans from "../components/Plans"
import Gallery from "../components/Gallery"
import Trainers from "../components/Trainers"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className="bg-black text-white">

      <Sidebar />

      <div className="pt-16">

        <Hero />
       
      
       

        <section id="plans" className="min-h-screen p-6">
        <Plans/>
        </section>

        <section id="gallery" className="min-h-screen p-6">
            <Gallery/>
        </section>

        <section id="trainers" className="min-h-screen p-6">
         <Trainers/>
        </section>

        <section id="contact" className="min-h-screen p-6">
          <Contact/>
        </section>

        <section className="p-2">
          <Footer/>
        </section>

      </div>

    </div>
  )
}

export default Home
