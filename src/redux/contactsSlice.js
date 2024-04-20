import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";

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

// Експорт селектора
export const selectFilteredContacts = createSelector(
    (state) => state.contacts.items, 
    (state) => state.filters.name, 
    (items, filterName) => { 
        return items.filter(contact => contact.name.toLowerCase().includes(filterName.toLowerCase()));
    }
);

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
