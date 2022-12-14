import React from 'react';
import { Text, View } from '../components/theme';
import { useUsers } from '../hooks/useUsers';

export function UsersScreen() {
	const { data, loading } = useUsers();
	console.info(data.length, loading);

	return (
		<View flex center>
			<Text>Users</Text>
		</View>
	);
}
