
import '../style/Layout.css'; // on va créer ce fichier CSS

const FooterContent = ({ prop1, csWidth }) => {
  return (
    <div className="footer-content">
      <img src="/images/LOGO_white.svg" alt="Logo"/>
      <div className='Footer-links'>
        <p>© 2020 Kasa. All rights reserved </p>
      </div>
    </div>
  );
};

export default FooterContent;
