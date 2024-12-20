const CartProgress = () => {
  return (
    <div className="free-progress-bar">
      <p className="progress-bar-title">
        Sepetinize <strong>1000.00₺</strong> ürün eklerseniz kargo ücretsiz!
      </p>
      <div className="progress-bar">
        <span className="progress"></span>
      </div>
    </div>
  );
};

export default CartProgress;
