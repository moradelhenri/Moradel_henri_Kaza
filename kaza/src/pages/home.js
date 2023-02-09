import Card from "../components/card";
import LocationData from "../data/fichier.json";

function Home() {
  return (
    <section>
      <div className="herobox">
        <h1 className="legend">Chez vous, partout et ailleurs</h1>{" "}
      </div>
      <div className="box_section_galerie">
        {LocationData.map((data) => (
          <Card title={data.title} cover={data.cover} />
        ))}
      </div>
    </section>
  );
}

export default Home;
