import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://chips-box-default-rtdb.firebaseio.com/";

export default instance;
