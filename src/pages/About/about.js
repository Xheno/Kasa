import Banner from "../../components/Banner";
import Layout from "../../components/Layout";
import DropDown from "../../components/DropDown";
import "./about.css";

import logements from "../../logements.json";

const About = () => {
  return (
    <div className="about">
      <Layout>
        <Banner bannerImg="/images/aboutBanner.png" />
        <div className="dropdown-bg">
          <div className="dropdown-wrapper">
            <DropDown
              title="Fiabilité"
              content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les ionformations sont régulièrement vérifiées par nos équipes."
            />
            <DropDown
              title="Respect"
              content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
            <DropDown
              title="Service"
              content="La qualité du service est au couer de noyre engagement chez Kasa. Nous veillons à ce que chaque intéraction, que ce soit avec nos hôtes ou nos locataires, soit empreintes de respect et de bienveillance"
            />
            <DropDown
              title="Sécurité"
              content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respéctés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
