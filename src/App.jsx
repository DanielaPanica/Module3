import productList from "./productList";
import Card from "./card";

const getRandomElem = () => {
  const randomIndex = Math.floor(Math.random() * productList.length);
  return productList[randomIndex];
};

const App = () => {
  console.log(productList);
  return (
    <div>
      <div style={{ textAlign: "center" }}>Random Product of the day</div>

      <div style={{ textAlign: "center" }}>The rest of the products</div>

      <footer>
        <p>
          We bring you <strong>only the best products</strong> that can be
          randomly generated!
        </p>
        <div className="offer">
          <Card {...getRandomElem()} />
        </div>
        <div className="card-container">
          {productList.map(function (elem) {
            const {
              price,
              description,
              category,
              name,
              image,
              shortDescription,
            } = elem;
            return (
              <Card
                price={price}
                description={description}
                category={category}
                name={name}
                image={image}
                shortDescription={shortDescription}
              />
            );
          })}
        </div>
        <p>
          Content from <a href="https://marak.github.io/faker.js/">faker.js</a>{" "}
          with images from <a href="https://picsum.photos/">Lorem Picsum</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
