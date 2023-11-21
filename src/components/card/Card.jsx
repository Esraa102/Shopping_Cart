import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../../reducers/slice";

// eslint-disable-next-line react/prop-types
const Card = ({ id, title, imageProp, priceProduct }) => {
  const dispatch = useDispatch();
  let cards = useSelector((state) => state.reducer.cart);
  const addHandler = (e) => {
    cards = cards.filter(
      (ele) => ele.title === e.target.parentElement.children[0].innerText
    );
    if (cards.length === 0) {
      dispatch(
        addCard({
          id: id,
          img: imageProp,
          title: title,
          price: priceProduct,
        })
      );
    }
  };

  return (
    <div id={id} className="rounded-md overflow-hidden shadow-xl border">
      <h2 className="p-2 text-center font-semibold text-lg">{title}</h2>
      <img
        src={imageProp}
        className="object-cover h-[250px] w-full"
        alt="image"
      />
      <p className="text-sm p-2 text-gray-700">Price: {priceProduct}</p>
      <button
        onClick={addHandler}
        className="m-4 px-4 py-1 bg-orange-700 rounded-md text-white"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Card;
