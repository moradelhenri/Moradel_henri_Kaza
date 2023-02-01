import Logo from "../assets/imgs/logo.png";

export default function Header() {
  return (
    <header id="header" className="flex Header">
      <div>
        <img className="logo" id="logo" src={Logo} alt="" />
      </div>

      <div className="_nav">
        <a href="#"  >Acceuil</a>
        <a href="#" className ="_navlinkAPropos"   >A propos</a>
      </div>
    </header>
  );
}

// [logo                                  lien1   lien2]
