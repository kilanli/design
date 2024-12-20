import "./BlogItem.css";

const BlogItem = () => {
  return (
    <ul className="blog-list">
          <li className="blog-item">
            <a href="/blog" className="blog-image">
              <img src="img/blogs/blog1.jpg" alt="" />
            </a>
            <div className="blog-info">
              <div className="blog-info-top">
                <span>5 Ekim, 2023  </span>
              </div>
              <div className="blog-info-center">
                <a href="/blog">Gıdanın Geleceği: Bilinçli Tüketmek</a>
              </div>
              <div className="blog-info-bottom">
                <a href="/blog">Okumaya Devam Edin</a>
              </div>
            </div>
          </li>
          <li className="blog-item">
            <a href="/blog" className="blog-image">
              <img src="img/blogs/blog2.jpg" alt="" />
            </a>
            <div className="blog-info">
              <div className="blog-info-top">
                <span>25 Ocak, 2023 </span>
              </div>
              <div className="blog-info-center">
                <a href="/blog">Gıda İsrafı Önlenebilir mi?</a>
              </div>
              <div className="blog-info-bottom">
                <a href="/blog">Okumaya Devam Edin</a>
              </div>
            </div>
          </li>
          <li className="blog-item">
            <a href="/blog" className="blog-image">
              <img src="img/blogs/blog3.jpg" alt="" />
            </a>
            <div className="blog-info">
              <div className="blog-info-top">
                <span>12 Kasım, 2022 </span>
              </div>
              <div className="blog-info-center">
                <a href="/blog">Canlılar İçin Arıların Önemi</a>
              </div>
              <div className="blog-info-bottom">
                <a href="/blog">Okumaya Devam Edin</a>
              </div>
            </div>
          </li>
      </ul>
  );
};

export default BlogItem;


