import { useContext, useEffect, useState } from "react";
import Proptypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../../../context/CartProvider";
import "./Header.css";

const Header = ({ setIsSearchShow }) => {
  const { cartItems } = useContext(CartContext);
  const [user, setUser] = useState(null); // Başlangıçta null
  const { pathname } = useLocation();

  // Kullanıcı durumunu dinamik olarak kontrol et
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser); // localStorage'dan kullanıcıyı al ve state'i güncelle
  }, []);

  const handleLogout = () => {
    if (window.confirm("Çıkış yapmak istediğinize emin misiniz?")) {
      localStorage.removeItem("user");
      setUser(null); // Kullanıcı durumunu sıfırla
      window.location.href = "/";
    }
  };

  return (
    <header>
      <div className="global-notification">
        <div className="container">
          <p>
            YENİ KULLANICILARA %20 HOŞGELDİN İNDİRİMİ VE ÜCRETSİZ TESLİMAT!
            <a href="shop.html"> ALIŞVERİŞE BAŞLA</a>
          </p>
        </div>
      </div>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>
            <div className="header-left">
              <Link
                to={"/"}
                className={`menu-link ${pathname === "/" && "active"}`}
              >
                <img
                  src="/img/logo6.png"
                  alt="Logo"
                  style={{ height: "90px", width: "175px", marginTop: "6px" }}
                />
              </Link>
            </div>
            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <Link
                      to={"/"}
                      className={`menu-link ${pathname === "/" && "active"}`}
                    >
                      ANASAYFA
                    </Link>
                  </li>
                  <li className="menu-list-item megamenu-wrapper">
                    <Link
                      to={"/shop"}
                      className={`menu-link ${
                        pathname === "/shop" && "active"
                      }`}
                    >
                      ALIŞVERİŞ
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/blog"}
                      className={`menu-link ${
                        pathname === "/blog" && "active"
                      }`}
                    >
                      BLOG
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/about"}
                      className={`menu-link ${
                        pathname === "/about" && "active"
                      }`}
                    >
                      HAKKIMIZDA
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/contact"}
                      className={`menu-link ${
                        pathname === "/contact" && "active"
                      }`}
                    >
                      BİZE ULAŞIN
                    </Link>
                  </li>
                </ul>
              </nav>
              <i className="bi-x-circle" id="close-sidebar"></i>
            </div>
            <div className="header-right">
              <div className="header-right-links">
                {!user ? (
                  <Link to={"/auth"} className="header-account">
                    <i className="bi bi-person"></i>
                  </Link>
                ) : (
                  <button
                    className="search-button"
                    onClick={handleLogout}
                  >
                    <i className="bi bi-box-arrow-right" style={{ fontSize: "23px" }}></i>
                  </button>
                )}
                <button
                  className="search-button"
                  onClick={() => setIsSearchShow(true)}
                >
                  <i className="bi bi-search"></i>
                </button>
                <div className="header-cart">
                  <Link to={"/cart"} className="header-cart-link">
                    <i className="bi bi-bag"></i>
                    <span className="header-cart-count">
                      {cartItems.length}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  setIsSearchShow: Proptypes.func,
};






/*
import { useContext } from "react";
import Proptypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../../../context/CartProvider";
import "./Header.css";



const Header = ({ setIsSearchShow }) => {
  const { cartItems } = useContext(CartContext);
  const user = localStorage.getItem("user");
  const { pathname } = useLocation();
  return (
    <header>
      <div className="global-notification">
        <div className="container">
          <p>
            YENİ KULLANICILARA %20 HOŞGELDİN İNDİRİMİ VE ÜCRETSİZ TESLİMAT!
            <a href="shop.html"> ALIŞVERİŞE BAŞLA</a>
          </p>
        </div>
      </div>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>
            <div className="header-left">
              <Link
                to={"/"}
                className={`menu-link ${pathname === "/" && "active"}`}
              >
                <img src="/img/logo.png" alt="Logo" style={{ height: "90px", width: "175px" , marginTop:"6px"}} />
              </Link>
            </div>
            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <Link
                      to={"/"}
                      className={`menu-link ${pathname === "/" && "active"}`}
                    >
                      ANASAYFA
                    </Link>
                  </li>
                  <li className="menu-list-item megamenu-wrapper">
                    <Link
                      to={"/shop"}
                      className={`menu-link ${
                        pathname === "/shop" && "active"
                      }`}
                    >
                      ALIŞVERİŞ
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/blog"}
                      className={`menu-link ${
                        pathname === "/blog" && "active"
                      }`}
                    >
                      BLOG
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/about"}
                      className={`menu-link ${
                        pathname === "/about" && "active"
                      }`}
                    >
                      HAKKIMIZDA
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/contact"}
                      className={`menu-link ${
                        pathname === "/contact" && "active"
                      }`}
                    >
                      BİZE ULAŞIN
                    </Link>
                  </li>
                </ul>
              </nav>
              <i className="bi-x-circle" id="close-sidebar"></i>
            </div>
            <div className="header-right">
              <div className="header-right-links">
                <Link to={"/auth"} className="header-account">
                  <i className="bi bi-person"></i>
                </Link>
                <button
                  className="search-button"
                  onClick={() => setIsSearchShow(true)}
                >
                  <i className="bi bi-search"></i>
                </button>
               
                <div className="header-cart">
                  <Link to={"/cart"} className="header-cart-link">
                    <i className="bi bi-bag"></i>
                    <span className="header-cart-count">
                      {cartItems.length}
                    </span>
                  </Link>
                </div>
                {user && (
                  <button
                    className="search-button"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Çıkış yapmak istediğinize emin misiniz?"
                        )
                      ) {
                        {
                          localStorage.removeItem("user");
                          window.location.href = "/";
                        }
                      }
                    }}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  setIsSearchShow: Proptypes.func,
};
*/
