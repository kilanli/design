import "./Policy.css";

const Policy = () => {
  return (
    <section className="policy">
      <div className="container">
        <ul className="policy-list">
          <li className="policy-item">
            <i className="bi bi-truck"></i>
            <div className="policy-texts">
              <strong> ÜCRETSİZ TESLİMAT</strong>
              <span>1000₺ ve üzeri</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-headset"></i>
            <div className="policy-texts">
              <strong> 7/24 CANLI DESTEK</strong>
              <span>Müşteri Hizmetleri</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-arrow-clockwise"></i>
            <div className="policy-texts">
              <strong> İADE POLİTİKASI</strong>
              <span>Ürünlerimizde İade ve Değişim Yapılmamaktadır</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-credit-card"></i>
            <div className="policy-texts">
              <strong> ÖDEME YÖNTEMLERİ</strong>
              <span>Güvenli Ödeme Seçenekleri</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Policy;
