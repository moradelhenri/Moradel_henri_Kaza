function Cards({ description, picture, id,   }) {
    return (
      <div
        className="box_cards"
        style={{
          background: `center /  url(${picture}) linear-gradient(23deg, #00000099 0%, #00000050 12%, rgba(0,241,255,0) 100%)`,

        }}
      >

        <div className="box_cards_text">
            <p>{id}</p>
          <p>{description}</p>
          <p className="picture">{picture}</p>
          
        </div>
      </div>
    );
  }
  
  export default Cards;
  