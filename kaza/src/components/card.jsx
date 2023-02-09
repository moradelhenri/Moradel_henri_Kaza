function card({ title, cover }) {
  return (
    <div
      className="box_card"
      style={{
        background: `center / cover url(${cover}), linear-gradient(23deg, #00000099 0%, #00000050 12%, rgba(0,241,255,0) 100%)`
      }}
    >
      <div className="box_card_text">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default card;
