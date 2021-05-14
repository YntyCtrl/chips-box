import axios from "../../axios";
import { SET_ORDERS } from "./types";

export const set = (orders) => ({
  type: SET_ORDERS,
  orders: orders,
});

export const load = () => {
  return (dispatch) =>
    axios
      .get("/orders.json")
      .then((response) => {
        const newOrders = Object.keys(response.data).map((id) => {
          return {
            ...response.data[id],
            id: id,
          };
        });
        dispatch(set(newOrders));
      });
};