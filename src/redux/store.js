import {configureStore} from "@reduxjs/toolkit";
import pageDataSlice from "./slices/pageData";

const store = configureStore({
    reducer: {
        pageData: pageDataSlice
    }
})

export default store;