import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact } from "./contactsOps";

const INITIAL_STATE = {
    items: [],
    loading: false,
    error: null
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: INITIAL_STATE,
    extraReducers: (builder) => {
        builder
            // Отримання масиву контактів 
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Додавання контакту
            .addCase(addContact.pending, (state) => {
                state.loading = true;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(addContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

// Мемоізований селектор для фільтрації контактів
export const selectFilteredContacts = createSelector(
    (state) => state.contacts.items, 
    (state) => state.filters.name, 
    (items, filterName) => { 
        return items.filter(contact => contact.name.toLowerCase().includes(filterName.toLowerCase()));
    }
);

export const contactsReducer = contactsSlice.reducer;
