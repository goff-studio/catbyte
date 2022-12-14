import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UsersScreen } from './screens/UsersScreen';

const { Navigator, Screen } = createStackNavigator();

export default function Navigation() {
	return (
		<NavigationContainer>
			<Navigator screenOptions={{ headerShown: false }}>
				<Screen name="Users" component={UsersScreen} />
			</Navigator>
		</NavigationContainer>
	);
}
