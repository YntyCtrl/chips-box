import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INGREDIENTS,
} from "../actions/types";

const initialState = {
  tastes: {
    
  },
  price: 0,
};
const prices = {
  Bekon: 45,
  Barbecue: 34,
  Crab: 30,
  Hickory: 46,
  Classic: 37,
  Onion: 40,
};

const box = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case ADD_INGREDIENT:
      newState.tastes[action.taste]++;
      newState.price += prices[action.taste];
      break;
    case REMOVE_INGREDIENT:
      newState.tastes[action.taste]--;
      newState.price -= prices[action.taste];
      break;
    case SET_INGREDIENTS:
      newState.tastes = action.data.box;
      newState.price = action.data.price;
      break;
      
    default:
      break;
  }

  return newState;
};

export default box;
