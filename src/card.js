function Card(props) {
  const { price, description, category, name, image, shortDescription } = props;
  return (
    <div class="card">
      <div class="container">
        <h4>
          <b>{name}</b>
        </h4>
        <p>{shortDescription}</p>
        <img src={image} alt="Avatar" style={{ width: "50%" }} />
        <p>{price}</p>
        <p>{category}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
