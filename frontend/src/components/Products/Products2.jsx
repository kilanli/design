import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import "./Products2.css";
import { message } from "antd";

const Products = () => {
  const [products, setProducts] = useState([]);

  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products`);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          message.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };
    fetchProducts();
  }, [apiUrl]);

  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Çok Satanlar</h2>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-item" key={product._id}>
              <ProductItem productItem={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;