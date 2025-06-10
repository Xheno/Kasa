import React from "react";
import { useParams } from "react-router";
import logements from "../../logements.json";
import Dropdown from "../../components/DropDown";
import "./logement.css";
import "../../style/Layout.css";

const Logement = () => {
  const { id } = useParams();

  // Cherche le logement dans le JSON
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return (
        <h2>Logement introuvable</h2>
    );
  }
  const {
    title,
    location,
    cover,
    tags,
    host,
    rating,
    description,
    equipments,
  } = logement;

  const ImageCarousel = ({ pictures, title }) => {
    const [current, setCurrent] = React.useState(0);

    const goNext = () => {
      setCurrent((prev) => (prev + 1) % pictures.length);
    };

    const goPrev = () => {
      setCurrent((prev) => (prev - 1 + pictures.length) % pictures.length);
    };

    return (
      <div className="carousel">
        <img
          src={pictures[current]}
          alt={`${title} ${current + 1}`}
          className="carousel-image"
        />
        {pictures.length > 1 && (
          <>
            <button className="carousel-btn left" onClick={goPrev}>
              ‹
            </button>
            <button className="carousel-btn right" onClick={goNext}>
              ›
            </button>
            <div className="carousel-counter">
              {current + 1}/{pictures.length}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
      <div className="accommodation-card">
        <ImageCarousel pictures={logement.pictures} title={title} />


        <div className="accommodation-header">
          <div>
            <h1>{title}</h1>
            <p className="location">{location}</p>
            <div className="tags">
              {tags.map((tag, idx) => (
                <span key={idx} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="host-rating">
            <div className="host">
              <span className="host-name">{host.name}</span>
              <img
                className="host-picture"
                src={host.picture}
                alt={host.name}
              />
            </div>
            <div className="rating">
              {[...Array(5)].map((_, idx) => (
                <span
                  key={idx}
                  className={idx < rating ? "star filled" : "star"}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="dropdowns">
          <Dropdown className="dropdown-description" title="Description" content={description} />
          <Dropdown className="dropdown-equipments" title="Équipements" content={equipments} />
        </div>
      </div>
  );
};

export default Logement;
