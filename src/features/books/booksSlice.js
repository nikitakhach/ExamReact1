import { createSlice } from "@reduxjs/toolkit";

const books = [
  { id: 1, title: "ვეფხისტყაოსანი", author: "შოთა რუსთაველი" },
  { id: 2, title: "დათა თუთაშხია", author: "ჭაბუა ამირეჯიბი" },
  { id: 3, title: "მე, ბებია, ილიკო და ილარიონი", author: "ნოდარ დუმბაძე" },
];

const booksSlice = createSlice({
  name: "books",
  initialState: books,
  reducers: {
    addBook: (state, action) => {
      const newId =
        state.length > 0 ? Math.max(...state.map((book) => book.id)) + 1 : 1;

      state.push({
        ...action.payload,
        id: newId,
      });
    },

    removeBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },

    clearBooks: () => {
      return [];
    },
  },
});

export const { addBook, removeBook, clearBooks } = booksSlice.actions;

export default booksSlice.reducer;
