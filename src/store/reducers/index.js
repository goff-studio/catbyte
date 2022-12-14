import { ADD_USER, UPDATE_USERS } from '../actions';

const initState = [];

// we could have combineReducers to expand the project, but since it is a very limited app, lets only have on ereducer
export const coreReducers = (state = initState, action) => {
	switch (action.type) {
		case UPDATE_USERS:
			return action.data;
		case ADD_USER:
			return [...state, action.data];
		default:
			return state;
	}
};
