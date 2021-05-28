function Testimonials(props) {
  return (
    <section className="testimonials my-3">
      <div className="container d-grid-3">
        <article className="card bg-light p-1">
          <div className="profile d-grid-2">
            <img src="/Assets/User Avatar.svg" alt="" />
            <div className="profile-desc">
              <div className="text-bold color-primary">Mary Watson</div>
              <div className="sm">$20k in revenue</div>
            </div>
          </div>
          <div className="content my-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis fugit cupiditate perferendis sit non adipisci distinctio quos, doloribus, corporis debitis beatae! Alias saepe necessitatibus inventore eius rerum ratione delectus itaque explicabo maiores sit nobis, ducimus officia molestiae voluptatem veritatis.
            </div>
        </article>
        <article className="card bg-light p-1">
          <div className="profile d-grid-2">
            <img src="/Assets/User Avatar 2.svg" alt="" />
            <div className="profile-desc">
              <div className="text-bold color-primary">James Watson</div>
              <div className="sm">$20k in revenue</div>
            </div>
          </div>
          <div className="content my-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis fugit cupiditate perferendis sit non adipisci distinctio quos, doloribus, corporis debitis beatae! Alias saepe necessitatibus inventore eius rerum ratione delectus itaque explicabo maiores sit nobis, ducimus officia molestiae voluptatem veritatis.
            </div>
        </article>
        <article className="card bg-light p-1">
          <div className="profile d-grid-2">
            <img src="/Assets/User Avatar 3.svg" alt="" />
            <div className="profile-desc">
              <div className="text-bold color-primary"><a href="">Poppy Watson</a></div>
              <div className="sm">$20k in revenue</div>
            </div>
          </div>
          <div className="content my-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis fugit cupiditate perferendis sit non adipisci distinctio quos, doloribus, corporis debitis beatae! Alias saepe necessitatibus inventore eius rerum ratione delectus itaque explicabo maiores sit nobis, ducimus officia molestiae voluptatem veritatis.
            </div>
        </article>
      </div>
    </section>
  );
}
export default Testimonials;
