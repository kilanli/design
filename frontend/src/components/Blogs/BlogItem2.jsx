import "./BlogItem.css";

const BlogItem = () => {
  return (
    <ul className="blog-list">
    <li className="blog-item">
      <a href="/blog/123123" className="blog-image">
        <img src="img/blogs/blog1.jpg" alt="" />
      </a>
      <div className="blog-info">
        <div className="blog-info-top">
          <span>5 Ekim, 2023  </span>
        </div>
        <div className="blog-info-center">
          <a href="/blog/123123">Gıdanın Geleceği: Bilinçli Tüketmek</a>
        </div>
        <div className="blog-info-bottom">
          <a href="/blog/123123">Okumaya Devam Edin</a>
        </div>
      </div>
    </li>
    <li className="blog-item">
      <a href="/blog/123123" className="blog-image">
        <img src="img/blogs/blog2.jpg" alt="" />
      </a>
      <div className="blog-info">
        <div className="blog-info-top">
          <span>25 Ocak, 2023 </span>
        </div>
        <div className="blog-info-center">
          <a href="/blog/123123">Gıda İsrafı Önlenebilir mi?</a>
        </div>
        <div className="blog-info-bottom">
          <a href="/blog/123123">Okumaya Devam Edin</a>
        </div>
      </div>
    </li>
    <li className="blog-item">
      <a href="/blog/123123" className="blog-image">
        <img src="img/blogs/blog3.jpg" alt="" />
      </a>
      <div className="blog-info">
        <div className="blog-info-top">
          <span>12 Kasım, 2022 </span>
        </div>
        <div className="blog-info-center">
          <a href="/blog/123123">Canlılar İçin Arıların Önemi</a>
        </div>
        <div className="blog-info-bottom">
          <a href="/blog/123123">Okumaya Devam Edin</a>
        </div>
      </div>
    </li>
    <li className="blog-item">
      <a href="/blog/123123" className="blog-image">
        <img src="img/blogs/blog4.jpg" alt="" />
      </a>
      <div className="blog-info">
        <div className="blog-info-top">
          <span>15 Haziran, 2022 </span>
        </div>
        <div className="blog-info-center">
          <a href="/blog/123123">Doğal Nar Ekşisi ve Faydaları</a>
        </div>
        <div className="blog-info-bottom">
          <a href="/blog/123123">Okumaya Devam Edin</a>
        </div>
      </div>
    </li>
    <li className="blog-item">
      <a href="/blog/123123" className="blog-image">
        <img src="img/blogs/blog5.jpg" alt="" />
      </a>
      <div className="blog-info">
        <div className="blog-info-top">
          <span>18 Eylül, 2021 </span>
        </div>
        <div className="blog-info-center">
          <a href="/blog/123123">Uzayda tarım yapmak mümkün mü?</a>
        </div>
        <div className="blog-info-bottom">
          <a href="/blog/123123">Okumaya Devam Edin</a>
        </div>
      </div>
    </li>
    <li className="blog-item">
      <a href="/blog/123123" className="blog-image">
        <img src="img/blogs/blog6.jpg" alt="" />
      </a>
      <div className="blog-info">
        <div className="blog-info-top">
          <span>28 Ağustos, 2021 </span>
        </div>
        <div className="blog-info-center">
          <a href="/blog/123123">Yediklerinizin Farkında mısınız?</a>
        </div>
        <div className="blog-info-bottom">
          <a href="/blog/123123">Okumaya Devam Edin</a>
        </div>
      </div>
    </li>
  </ul>

  );
};

export default BlogItem;