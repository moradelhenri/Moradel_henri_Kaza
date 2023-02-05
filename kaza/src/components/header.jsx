import Logo from "../assets/imgs/logo.png";

export default function Header() {

  return (
    <div className=" d_home">
      <div  className ="box_header">
    <header id="header" className="flex Header">
      <div>
        <img className="logo" id="logo" src={Logo} alt="" />
      </div>

      <div className="_nav">
        <a href="#"  className="_navlinkAccueil">Accueil</a>
        <a href="#" className ="_navlinkAPropos">A propos</a>
               </div>
    </header>    
  </div>
  </div>
  
  );  
}

// [logo                                  lien1   lien2]
