import { combineReducers } from "redux";
import mServicesReducer from "./mServicesReducer";
import mProvidersReducer from './mProvidersReducer';

export default combineReducers({
  mServices: mServicesReducer,
  mProvider: mProvidersReducer
});
