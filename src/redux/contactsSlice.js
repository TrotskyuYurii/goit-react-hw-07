import { createSlice } from "@reduxjs/toolkit";
import {fetchContacts} from "./contactsOps"; 

//Первинне значення для слайса
const INITIAL_STATE = {
    items: [],
    loading: false,
    error: null
};

//створення слайса з значенням і методами
const contactsSlice = createSlice({
    name: "contacts",
    initialState: INITIAL_STATE,
    // reducers: {
    //     addContact(state, action) {
    //         state.items.push(action.payload);
    //     },
    //     deleteContact(state, action) {
    //         state.items = state.items.filter((contact) => contact.id !== action.payload);
    //     },
    // },

    // підключаємо санки
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
    }

});

export const { addContact, deleteContact } = contactsSlice.actions; // деструктуризація і імпортування методів з слайсу
export const contactsReducer = contactsSlice.reducer; // імпортування самого слайсу
