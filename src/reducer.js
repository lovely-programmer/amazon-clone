export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {

  switch (action.type) {
    case "ADD_TO_BASKET":
      const item = action.item;
      const existItem = state.basket.find((x) => x.id === item.id);
      if (existItem) {
        return {
          ...state,
          basket: state.basket.map((x) => (x.id === existItem.id ? item : x)),
        };
      } else {
        return { ...state, basket: [...state.basket, item] };
      }
      

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id} as its not in basket)`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};

export default reducer;
