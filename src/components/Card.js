import "../style/Layout.css"; // on va créer ce fichier CSS

import { useNavigate } from 'react-router-dom';

const Card = ({ data }) => {
  const nav = useNavigate();
  return (
    <div className="card" onClick={() => nav(`/logements/${data.id}`)}>
      <img src={data.cover} alt={data.title} className="card-img" />
      <div className="card-opacity"></div>
      <div className="card-text">
        <p>{data.title}</p>
      </div>
    </div>
  );
};

export default Card;
