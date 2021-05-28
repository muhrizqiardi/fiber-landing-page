import Hero from "./Hero"
import Nav from "./Nav"
import Footer from "./Footer"
import Showcase from "./Showcase"
import Testimonials from "./Testimonials"

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase/>
      <section className="trial mb-4">
        <div className="container">
          <div className="card bg-primary color-light d-grid-2 gap-4 p-3">
            <article className="card-desc">
              <h1 className="my-1 lg">Diversify your portfolio.</h1>
              <p className="my-1">Create an even more impressive portfolio by creating case studies for your projects. Simply follow our step-by step guide.</p>
              <div className="btn bg-light color-primary py-1 w-100 text-center text-bold">Start Free Trial</div>
            </article>
            <img src="/Assets/Page Image.png" alt="Page Image" />
          </div>
        </div>
      </section>
      <Testimonials/>
      <Footer/>
    </>
  )
}
