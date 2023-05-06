/*/ function Cards({ name, description, cover, rating }) {
  return (
    <ul>
      <li
        className="box_card"
        style={{
          background: `center / cover url(${cover}), linear-gradient(23deg, #00000099 0%, #00000050 12%, rgba(0,241,255,0) 100%)`
        }}
      >
        <div className="box_card_text">
          <h2>{name}</h2>
        </div>
        <h4>{description}</h4>
        <h4>{rating}</h4>
      </li>
    </ul>
  );
}

export default Cards;*/
