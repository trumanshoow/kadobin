import {createSlice} from "@reduxjs/toolkit";

const pageDataSlice = createSlice({
    name: "pageData",
    initialState: {},
    reducers: {
        setPageData: (state, action)=> {
            state = action.payload;
            return state;
        }
    }
})

export const setPageData = pageDataSlice.actions.setPageData;

export default pageDataSlice.reducer;