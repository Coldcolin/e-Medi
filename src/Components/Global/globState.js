import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  cart: [],
  Id: "",
};

const globState = createSlice({
  name: "redux",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.product = payload;
    },

    addToCart: (state, { payload }) => {
      const checkCart = state.cart.findIndex((el) => el._id === payload._id);
      if (checkCart >= 0) {
        state.cart[checkCart].QTY += 1;
      } else {
        const items = { ...payload, QTY: 1 };
        state.cart.push(items);
      }
    },

    removeCart: (state, { payload }) =>{
      const remove = state.cart.filter(el => el._id !== payload._id)
      state.cart = remove
    },
    clearCart: (state, { payload })=>{
      state.cart = []
    },
    changeItem: (state, { payload }) =>{
      const checkCart = state.cart.findIndex((el) => el._id === payload._id);
      const check = state.cart[checkCart].QTY

      if(check > 1){
        state.cart[checkCart].QTY -= 1
      }else if (check === 1){
        const remove = state.cart.filter(el => el._id !== payload._id)
      state.cart = remove
      }
    },
    total: (state, { payload }) => {
      // const {totalCost, totalItems } = state.cart.reduce(
      //   (cost, items) =>{
      //     const { Price, QTY } = items
      //     const miniCost = Price * QTY
      //     cost.totalCost += QTY
      //     cost.totalCost += miniCost
      //     return cost;
      //   }, {totalCost: 0, totalItems: 0}
      // )
      // state.MyTotalQTY = totalItems
      
      let amount = 0;
      let total = 0;
      state.cart.forEach((item) => {
        amount += item.QTY;
        total += item.QTY * item.Price;
      });
      state.amount = amount;
      state.total = total;
    },
    addId: (state, {payload}) =>{
        state.Id = payload
    },
    removeId: (state, {payload})=>{
      state.Id = ""
    },
    changeId: (state, {payload})=>{
      state.Id.isAdmin = true
    },
    signOut: (state) => {
      state.Id = "";
      state.cart = []
    },
  },
});

export const { addProduct, addToCart, removeCart, changeItem, total, addId,  removeId, changeId, signOut, clearCart} = globState.actions;

export default globState.reducer;