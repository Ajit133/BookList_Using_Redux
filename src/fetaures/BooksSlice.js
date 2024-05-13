import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books:[
        {id:1,title:"I Love Bangladesh",author:"Ajit Das"},
        {id:2,title:"My MotherLand",author:"Ajit Das"},
    ]
};

export const booksSlice = createSlice({
    name : "books",
    initialState : initialBooks,
    reducers:{
        showBooks : (state)=>state,
    }
});
export const {showBooks} = booksSlice.actions;
export default booksSlice.reducer;
