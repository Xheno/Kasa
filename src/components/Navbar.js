
import '../style/Layout.css'; // on va créer ce fichier CSS

const Navbar = () => {
  return (
    <div className="navbar marginLeftRight">
      <img src="/images/LOGO_red.svg" alt="Logo"/>
      <div className='navbar-links'>
        <a href='/'>Accueil</a>
        <a href='/about'>A propos</a>
      </div>
    </div>
  );
};

export default Navbar;
