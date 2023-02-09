import Logo from "../assets/imgs/logo.png";

export default function Header() {
  return (
    //<div className=" d_home">

    <header id="header" className="flex Header">
      <div>
        <img className="logo" id="logo" src={Logo} alt="" />
      </div>

      <div className="_nav">
        <a href="#" className="_navlink">
          Accueil
        </a>
        <a href="#" className="_navlink">
          A propos
        </a>
      </div>
    </header>

    // </div>
  );
}

// [logo                                  lien1   lien2]
