import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const baseURL = 'https://6623b2ba3e17a3ac846fe9ca.mockapi.io/contacts';

// Отримання масиву контактів
export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',  //префікc санки
    async (_, thunkAPI) => { //1 параметр - дані що передають в санку, 2 параметр - обект кофигурації санки
      try {
        const response = await axios.get(baseURL);
        return response.data;
      } catch (error) {
        // return thunkAPI.rejectWithValue(error.response.data);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
