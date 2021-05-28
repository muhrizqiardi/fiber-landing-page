function Showcase(props) {
  return (
    <section className="showcase p-3">
      <div className="container">
        <div className="text-bold">Why Fiber?</div>
        <h1 className="my-1 text-bold">A good portfolio means good employability.</h1>
        <div className="d-grid-3">
          <article className="my-1">
            <img src="/Assets/time.svg" alt="A clock representing fast build times" />
            <h4 className=" my-1 text-bold">Build in minutes</h4>
            <p className="my-1">With a selection of premade templates, you can build out a portfolio in less than 10 minutes.</p>
          </article>
          <article className="my-1">
            <img src="/Assets/code.svg" alt="A clock representing fast build times" />
            <h4 className=" my-1 text-bold">Build in minutes</h4>
            <p className="my-1">With a selection of premade templates, you can build out a portfolio in less than 10 minutes.</p>
          </article>
          <article className="my-1">
            <img src="/Assets/allSizes.svg" alt="A clock representing fast build times" />
            <h4 className=" my-1 text-bold">Build in minutes</h4>
            <p className="my-1">With a selection of premade templates, you can build out a portfolio in less than 10 minutes.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
export default Showcase;
