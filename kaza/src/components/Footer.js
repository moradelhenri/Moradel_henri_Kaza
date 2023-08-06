import React from "react";
 import "./Footer.css";
import logoFooter from "../assets/imgs/Logofooter.png";

function  Footer() {
    return(
        <footer>
            <div id="container-footer">
              <div className=" box-img-footer">  <img className="img-footer" src={logoFooter} alt="Logo" /></div>
                <p className="text-footer">© 2020 Kasa. 2022 Kasa. Tous droits réservés</p>
            </div>
        </footer>
    );
}
export default Footer