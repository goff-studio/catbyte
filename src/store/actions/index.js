export const UPDATE_USERS = 'UPDATE_USERS';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';

export const addInitialUsers = data => ({
	type: UPDATE_USERS,
	data,
});

export const addUser = data => ({
	type: ADD_USER,
	data,
});

export const removeUser = data => ({
	type: DELETE_USER,
	data,
});
