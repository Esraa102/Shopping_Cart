import { useSelector, useDispatch } from "react-redux";
import { removeCard } from "../../reducers/slice";
import { Link } from "react-router-dom";
const Cart = () => {
  const data = useSelector((state) => state.reducer.cart);
  const dispatch = useDispatch();
  const removehandler = (e) => {
    dispatch(removeCard(e.target.parentElement.id));
  };
  let prices = [];
  if (data.length) {
    data.forEach((ele) => {
      prices.push(Number(ele.price.slice(1)));
    });
  }
  const total = prices.reduce((prev, acc) => {
    return prev + acc;
  }, 0);

  return (
    <div>
      <h2 className="text-center text-lg my-4 font-semibold uppercase">
        Cart items: {data.length}
      </h2>
      {!data.length && (
        <div className="text-center font-semibold ">
          You Have No Items Selected!{" "}
          <Link to="/" className="text-red-600 block mt-4 underline">
            Go For Shopping
          </Link>
        </div>
      )}
      <div className="container p-4 mx-auto">
        {data.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className="flex items-center justify-between odd:bg-gray-200 p-2 rounded-md mb-4"
          >
            <div className="flex items-center gap-2">
              <img
                src={item.url}
                className="w-[100px] h-[100px] object-cover"
                alt="image"
              />
              <div>
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="text-sm mt-2 text-gray-700">
                  Price: {item.price}
                </p>
              </div>
            </div>
            <button
              onClick={removehandler}
              className="px-4 py-1 rounded-md bg-red-500 text-white"
            >
              Remove From Cart
            </button>
          </div>
        ))}
        <div className="p-2 bg-[#ddd] font-semibold text-lg text-center">
          Total Price:<span className="text-red-600"> ${total}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
