import React from "react";
 import "./Footer.css";
import logoFooter from "../assets/imgs/Logofooter.png";

function  Footer() {
    return(
        <footer>
            <div id="container-footer">
                <img className="img-footer" src={logoFooter} alt="Logo" />
                <p className="text-footer">© 2020 Kasa. 2022 Kasa. Tous droits réservés</p>
            </div>
        </footer>
    );
}
export default Footer