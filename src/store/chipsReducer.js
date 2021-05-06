const initialState = {
  tastes: {
    Bekon: 1,
    Barbecue: 1,
    Crab: 1,
    Hickory: 1,
    Classic: 1,
    Onion: 1,
  },
  price: 232,
  
};
const prices = {
  Bekon: 45,
  Barbecue: 34,
  Crab: 30,
  Hickory: 46,
  Classic: 37,
  Onion: 40,
};

const chipsReducer = (state = initialState, action) => {
   const newState = { ...state };

   switch (action.type) {
     case "ADD_INGREDIENT":
       newState.tastes[action.taste]++;
       newState.price += prices[action.taste];
       break;
     case "REMOVE_INGREDIENT":
       newState.tastes[action.taste]--;
       newState.price -= prices[action.taste];
       break;

     default:
       break;
   }

   return newState;
};

export default chipsReducer;
