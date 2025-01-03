import PropTypes from "prop-types";

const SliderItem = ({ imageSrc }) => {
  return (
    <div className="slider-item fade">
      <div className="slider-image">
        <img src={imageSrc} className="img-fluid" alt="" />
      </div>
      <div className="container">
        <p className="slider-title">Köylüden Halka</p>
        <h2 className="slider-heading">Yöresel Ürünlerimiz</h2>
        <a href="/shop" className="btn btn-lg btn-primary">
          Alışverişe Başla
        </a>
      </div>
    </div>
  );
};

export default SliderItem;

SliderItem.propTypes = {
  imageSrc: PropTypes.string,
};
