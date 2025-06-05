import "../style/Layout.css"; // on va créer ce fichier CSS

const Banner = ({ bannerImg, bannerOpacity, text, textPosition }) => {
  return (
    <div className="banner flex-center marginLeftRight">
      <img src={bannerImg} alt="Logo" className="banner-img" />
      {text && (
        <>
          <div
            style={{ opacity: bannerOpacity }}
            className={`banner-opacity ${textPosition}`}
          ></div>
          <div className="banner-text">
            <h3>{text}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Banner;
