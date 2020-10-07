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
      if (existing) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id ?
            { ...item, quantity: item.quantity + 1 }
            : item
          )
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, {
            ...action.payload,
            quantity: 1
          }]
        }
      }
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      }
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          (item.id === action.payload.id) ?
            {
              ...item,
              quantity: item.quantity - 1
            } 
            : item
        ).filter(item => item.quantity > 0)
      }
    default:
      return state
  }
}

export default cartReducer;