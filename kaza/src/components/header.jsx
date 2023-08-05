import { Link, } from "react-router-dom";
import Logo from "../assets/imgs/logo.png";


export default function Header() {
  return (
 

    <header id="header" className="flex Header">
      <div>
        <img className="logo" id="logo" src={Logo} alt=" logo principal kaza" />
      </div>
      <div className="_nav">
     <Link to="/" className="_navlink">
         <div className="accueil"> Accueil</div>
       </Link>
        <Link to="/about" className="_navlink">
          <div className="propos">A propos</div>
        </Link>
      </div>
    </header>

    // </div>
  );
}

// [logo                                  lien1   lien2]

     