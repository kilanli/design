import "./CampaignItem.css";

const CampaignItem = () => {
  return (
    <div className="campaign-item">
      <h3 className="campaign-title">
        Her Ayın 15 i<br />
        Seçili Ürünlerde <br />% 15 İndirim
      </h3>
      <p className="campaign-desc"></p>
      <a href="#" className="btn btn-primary">
        Detaylar
        <i className="bi bi-arrow-right"></i>
      </a>
    </div>
  );
};

export default CampaignItem;
