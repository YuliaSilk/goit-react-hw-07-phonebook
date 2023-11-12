const { createSlice } = require("@reduxjs/toolkit");

const filterSliсe = createSlice({
    name: "filter",
    initialState: { value: "" },
    reducers: { onChangeFilter(state, action) {
        state.value = action.payload;
        },
    },
})

export const filterReducer = filterSliсe.reducer;
export const { onChangeFilter } = filterSliсe.actions;