import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import cartCounter from "./middlewares/cartCounter";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(cartCounter, thunk))
);

export default store;
