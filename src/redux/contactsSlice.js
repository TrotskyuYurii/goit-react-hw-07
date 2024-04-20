import { createSlice } from "@reduxjs/toolkit";

//Первинне значення для слайса
const INITIAL_STATE = {
    items: []
};

//створення слайса з значенням і методами
const contactsSlice = createSlice({
    name: "contacts",
    initialState: INITIAL_STATE,
    reducers: {
        addContact(state, action) {
            state.items.push(action.payload);
        },
        deleteContact(state, action) {
            state.items = state.items.filter((contact) => contact.id !== action.payload);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions; // деструктуризація і імпортування методів з слайсу
export const contactsReducer = contactsSlice.reducer; // імпортування самого слайсу
