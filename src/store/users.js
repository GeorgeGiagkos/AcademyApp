import { createSlice } from '@reduxjs/toolkit';
import data from './data';
import { createSelector } from 'reselect';

const userSlice = createSlice({
	name: 'users',
	initialState: data,
	reducers: {
		usersAdded: (user, action) => {
			user.push(action.payload);
		},
	},
});

export const { usersAdded } = userSlice.actions;

export default userSlice;

export const getAllUsers = createSelector((state) => state);
