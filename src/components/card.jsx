function Card({ title, cover, id  }) {
  return (
    <div
      className="box_card"
      style={{
        background: `center / cover url(${cover}), linear-gradient(23deg, #00000099 0%, #00000050 12%, rgba(0,241,255,0) 100%)`,
      }}
    >
      <div className="box_card_text">
        <p>{title}</p>
          <ul><li>{id}</li></ul>
      </div>
    </div>
  );
}

export default Card;
