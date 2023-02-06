import Background from "../assets/imgs/Background.png";
import IMG from "../assets/imgs/IMG.png";
function Home() {
  return (
    <div>
      <div classeName="_body">
        <section>
          <div className="box">
            {" "}
            <img className="Background" src={Background} alt="" />
            <img className="IMG" src={IMG} alt="" />
            <h1 className="legend">Chez vous, partout et ailleurs</h1>{" "}
          </div>
          <div className="box_section_galerie">
            <ul>
          <li className="galerie_one"><h4 className="h4_one">Titre de la<br/> location</h4></li>
          <li className="galerie_two"><h4 className="h4_two">Titre de la<br/> location</h4></li>
          <li className="galerie_three"><h4 className="h4_three">Titre de la<br/> location</h4></li>
          <li className="galerie_for"><h4 className ="h4_for">Titre de la<br/> location</h4></li>
          <li className="galerie_five"><h4 className="h4_five">Titre de la<br/> location</h4></li>
          <li className="galerie_six"><h4 className="h4_six">Titre de la<br/> location</h4></li>
         
         
         </ul>
         
          
          
          
          
          
          
           </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
