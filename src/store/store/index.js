import { createStore } from 'redux';
import { coreReducers } from '../reducers';

export const store = createStore(
	coreReducers,
	undefined,
	// compose(applyMiddleware(...middleware)), // we could have redux middlewares like thunk or saga
);
