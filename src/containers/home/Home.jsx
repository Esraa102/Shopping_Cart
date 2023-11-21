import Card from "../../components/card/Card";
import { dataProducts } from "../../data/data";

const Home = () => {
  return (
    <div className="section">
      {dataProducts.map((product, index) => (
        <Card
          key={index}
          id={index}
          title={product.head}
          imageProp={product.image}
          priceProduct={product.price}
        />
      ))}
    </div>
  );
};

export default Home;
