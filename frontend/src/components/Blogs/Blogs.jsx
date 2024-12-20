import BlogItem from "./BlogItem"
import "./Blogs.css";
const Blogs = () => {
  return (
    <section className="blogs">
    <div className="container">
      <div className="section-title">
        <h2>Blog</h2>
      </div>
        <BlogItem/>
    </div>
  </section>
  )
}

export default Blogs