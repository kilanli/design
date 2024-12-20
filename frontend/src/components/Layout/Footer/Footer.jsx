import React from "react";
import "./Footer.css";
import Policy from "../Policy/Policy";

const Footer = () => {
  return (
    <React.Fragment>
      <Policy />
      <footer className="footer">
        <div className="subscribe-row">
          <div className="container">
            <div className="footer-row-wrapper">
              <div className="footer-subscribe-wrapper">
                <div className="footer-subscribe">
                  <div className="footer-subscribe-top">
                    <h3 className="subscribe-title">
                      Yeni ürünler, indirimler ve daha fazlası hakkında bilgi
                      almak için <br />
                      e-postalarımızı alın.
                    </h3>
                    <p className="subscribe-desc">
                      200₺` üzerindeki ilk siparişinizde 50₺ indirim sağlayan
                      bir kuponu e-postayla göndereceğiz
                    </p>
                  </div>
                  <div className="footer-subscribe-bottom">
                    <form>
                      <input
                        type="text"
                        placeholder="Email adresinizi giriniz."
                      />
                      <button className="btn">Gönder</button>
                    </form>
                    <p className="privacy-text">
                      Abone olarak, bu sözleşmeleri kabul etmiş olursunuz:
                      <a href="#">
                        Kullanıcı Sözleşmesi, Gizlilik ve Çerez Politikası.
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="footer-contact-wrapper">
                <div className="footer-contact-top">
                  <h3 className="contact-title">
                    İletişim <br />
                    (0352) 123 38 38
                  </h3>
                  <p className="contact-desc">
                    {" "}
                    8:00 – 19:00 arası ulaşılabilir
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="widgets-row">
          <div className="container">
            <div className="footer-widgets">
              <div className="brand-info">
                <div className="footer-logo">
                  <a href="index.html" className="logo">
                    LOGO
                  </a>
                </div>
                <div className="footer-desc">
                  <p>Köylüden halka yöresel ürün pazarı</p>
                </div>
                <div className="footer-contact">
                  <p>
                    <a href="tel:0352 123 38 38">(0352) 123 38 38</a> –
                    <a href="mailto:koyludenhalka@gmail.com">
                      koyludenhalka@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="widget-nav-menu">
                <h4>Genel Bilgiler</h4>
                <ul className="menu-list">
                  <li>
                    <a href="about.html">Hakkımızda</a>
                  </li>
                  <li>
                    <a href="contact.html">Bize Ulaşın</a>
                  </li>
                  <li>
                    <a href="#">Gizlilik Politikası</a>
                  </li>
                  <li>
                    <a href="#">İade Politikası</a>
                  </li>
                </ul>
              </div>
              <div className="widget-nav-menu">
                <h4>Hesap Bilgileri</h4>
                <ul className="menu-list">
                  <li>
                    <a href="#">Kontrol Paneli</a>
                  </li>
                  <li>
                    <a href="#">Siparişlerim</a>
                  </li>
                  <li>
                    <a href="#">Favorilerim</a>
                  </li>
                  <li>
                    <a href="#">Hesap Detayları</a>
                  </li>
                </ul>
              </div>
              <div className="widget-nav-menu">
                <h4>Alışveriş</h4>
                <ul className="menu-list">
                  <li>
                    <a href="#">Çok Satanlar</a>
                  </li>
                  <li>
                    <a href="#">Yeni Ürünler</a>
                  </li>
                  <li>
                    <a href="#">İndirimli Ürünler</a>
                  </li>
                  <li>
                    <a href="#">Kampanyalar</a>
                  </li>
                </ul>
              </div>
              <div className="widget-nav-menu">
                <h4>Kategoriler</h4>
                <ul className="menu-list">
                  <li>
                    <a href="#">Meyve Sebze</a>
                  </li>
                  <li>
                    <a href="#">Kuru Gıdalar</a>
                  </li>
                  <li>
                    <a href="#">Kahvaltılık Ürünler</a>
                  </li>
                  <li>
                    <a href="#">Et ve Et Ürünleri</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-row">
          <div className="container">
            <div className="footer-copyright">
              <div className="site-copyright">
                <p>Copyright 2024 © Köylüden Halka. Tüm hakları saklıdır.</p>
              </div>
              <a href="#">
              <img src="/img/footer/cards.png" alt="" />
              </a>
              <div className="footer-menu">
                <ul className="footer-menu-list">
                  <li className="list-item">
                    <a href="#">Gizlilik Politikası</a>
                  </li>
                  <li className="list-item">
                    <a href="#">İade Politikası</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Çerez Politikası</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
