import React from "react";


import "./error.css";

const Error = () => {
  return (
    <div>

        <div className="error-content">
          <h1 className=" error-h1 flex-center marginLeftRight">404</h1>
          <p className="error-text flex-center marginLeftRight">
            Oups! La page que vous demandez n'existe pas.
          </p>
          <a href="/" className="return-text flex-center marginLeftRight">
            Retourner sur la page d'accueil
          </a>
        </div>
    </div>
  );
};

export default Error;
