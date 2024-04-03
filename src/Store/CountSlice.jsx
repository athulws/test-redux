// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   count: 0 // Initial count value
// };

// const countSlice = createSlice({
//   name: 'count',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.count += 1;
//     }
//   }
// });

// export const { increment } = countSlice.actions;
// export default countSlice.reducer;




// contactSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scrollToContact: false,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setScrollToContact(state, action) {
      state.scrollToContact = action.payload;
    },
  },
});

export const { setScrollToContact } = contactSlice.actions;
export default contactSlice.reducer;

