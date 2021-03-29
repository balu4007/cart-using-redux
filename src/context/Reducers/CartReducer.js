import {
  Add_Iteam_To_Cart,
  Reduce_Count_From_Cart,
  Remove_Iteam_From_Cart,
} from "../constants";

export const cartReducer = (state, { type, payload }) => {
  const addIteamToCart = () => {
    const found_iteam = state.cartIteams.find(
      (iteam) => payload.id === iteam.id
    );
    if (found_iteam) {
      return {
        ...state,
        cartIteams: state.cartIteams.map((iteam) => {
          if (iteam.id === payload.id) {
            return { ...iteam, quantity: iteam.quantity + 1 };
          } else {
            return iteam;
          }
        }),
      };
    } else {
      return {
        ...state,
        cartIteams: [...state.cartIteams, { ...payload, quantity: 1 }],
      };
    }
  };
  const removeIteamFromCart = () => {
    return {
      ...state,
      cartIteams: state.cartIteams.filter((iteam) => iteam.id !== payload.id),
    };
  };
  const reduceCountFromCart = () => {
    return {
      ...state,
      cartIteams: state.cartIteams.map((iteam) => {
        if (iteam.id === payload.id) {
          return { ...iteam, quantity: iteam.quantity - 1 };
        } else {
          return iteam;
        }
      }),
    };
  };
  switch (type) {
    case Add_Iteam_To_Cart:
      return addIteamToCart();
    case Remove_Iteam_From_Cart:
      return removeIteamFromCart();
    case Reduce_Count_From_Cart:
      return reduceCountFromCart();
    default:
      return state;
  }
};
