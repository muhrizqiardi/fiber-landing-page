import Nav from "./Nav";

function Hero(props) {
  return (
    <div className="hero p-3">
      <div className="container">
        <Nav />
        <div className="d-grid-2">
          <div className="img p-3"><img src="/Assets/hero-Illustration.png" alt="Illustration of a person" /></div>
          <div className="desc">
            <h1 className="my-1">Create your portfolio in minutes.</h1>
            <p>With Fiber you can setup your own personal portolio in minutes with dozens of premade, beautiful templates.</p>
            <div className="btn bg-primary color-light w-100 p-1 my-1 text-center text-bold">Start Free Trial</div>
            <div className="color-primary text-center text-ul text-bold"><a href="/">View Examples</a></div>
            <ul className="benefits my-1">
              <li><img src="/Assets/checkmark.svg" className="checkmark" alt="" /> No Credit Card Required</li>
              <li><img src="/Assets/checkmark.svg" className="checkmark" alt="" /> 10 Free Templates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
