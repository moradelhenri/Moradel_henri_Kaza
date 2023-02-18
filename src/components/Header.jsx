import { Link } from "react-router-dom";
import Logo from "../assets/imgs/logo.png";


export default function Header() {
  return (
    //<div className=" d_home">

    <header id="header" className="flex Header">
      <div>
        <img className="logo" id="logo" src={Logo} alt="" />
      </div>
      <div className="_nav">
     <Link to="/" className="_navlink">
          Accueil
       </Link>
        <Link to="/about" className="_navlink">
          A propos
        </Link>
      </div>
    </header>

    // </div>
  );
}

// [logo                                  lien1   lien2]

     