import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { fetchData } from '../helpers/communicationHelper';
import { addInitialUsers } from '../store/actions';

export const useUsers = () => {
	const data = // ran of time, i usually add the logic of loading, fetching, etc here
		useSelector(state => state);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();

	const refetch = useCallback(() => {
		setLoading(true);
		fetchData('users').then(response => {
			!!response?.users?.length &&
				dispatch(addInitialUsers(response.users));
			setLoading(false);
		});
	}, [dispatch]);

	useEffect(() => {
		// logic need to be optimised, I just tried to write some code fast :)
		!data.length && refetch();
	}, [data.length, refetch]);

	return { data, loading, refetch };
};
