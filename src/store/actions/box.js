import axios from "../../axios";
import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS } from "./types";


export const add = (taste) => ({
  type: ADD_INGREDIENT,
  taste: taste,
});

export const remove = (taste) => ({
  type: REMOVE_INGREDIENT,
  taste: taste,
});
export const set = (data) => ({
  type: SET_INGREDIENTS,
  data: data,
});

export const load = () => {
  return (dispatch) =>
    axios
      .get("/default.json")
      .then((response) => dispatch(set(response.data)));
};