
import React from "react";

import Banner from "../../components/Banner";
import Layout from "../../components/Layout";
import Card from "../../components/Card";

import logements from "../../logements.json";


const Home = () => {
  return (
    <div className="App">
      <Layout>
        <Banner
          bannerImg="/images/homeBanner.png"
          bannerOpacity={0.6}
          text={"Chez vous, partout ailleurs"}
          textPosition="center"
        />
        <div className="card-wrapper">
          {logements.map((logement) => (
            <Card key={logement.id} data={logement} />
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
