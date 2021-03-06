import { createStore, compose, applyMiddleware } from "redux";
import { AsyncStorage } from "react-native";
import { persistStore, autoRehydrate } from "redux-persist";
import reducer from "../reducer";
import thunk from "redux-thunk";

var defaultState = {};

exports.configureStore = (initialState = defaultState) => {
  var store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(thunk),
    autoRehydrate()
  )
  );
  persistStore(store, { storage: AsyncStorage });
  console.disableYellowBox = true;
  return store;
};
