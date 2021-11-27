import { configureStore } from "@reduxjs/toolkit";
import responseReducer from "./features/responseSlice";
import teamReducer from "./features/teamSlice";
import pageReducer from "./features/pageSlice";
import resultsReducer from "./features/resultsSlice";
import detailsReducer from "./features/detailsSlice";

export default configureStore({
  reducer: {
    response: responseReducer,
    page: pageReducer,
    team: teamReducer,
    results: resultsReducer,
    details: detailsReducer,
  },
});
