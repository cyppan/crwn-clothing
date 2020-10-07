import CartActionTypes from './cart.types';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionTypes.ADD_ITEM:
      const { id } = action.payload
      const existing = state.cartItems.find(item => item.id === id);
      const newCartItems = [...state.cartItems];
      if (existing) {
        existing.quantity += 1;
      } else {
        newCartItems.push({
          ...action.payload,
          quantity: 1
        });
      }
      return {
        ...state,
        cartItems: newCartItems
      }
    default:
      return state
  }
}

export default cartReducer;