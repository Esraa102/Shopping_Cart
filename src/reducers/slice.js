import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const addedCard = {
        id: action.payload.id,
        url: action.payload.img,
        title: action.payload.title,
        price:action.payload.price
      };
      state.cart.push(addedCard);
    },
    removeCard: (state, action) => {
      state.cart = state.cart.filter((e) => e.id !== Number(action.payload));
      console.log(action.payload);
    },
  },
});

export const { addCard, removeCard } = cartSlice.actions;
export default cartSlice;
