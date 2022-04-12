import { createStore } from "redux";
import rootReducer from "./reducer";

import ChangeNumber from "./reducer/updown";

const store = createStore(rootReducer);


export default store;