import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MatchScreen } from "../screens/MatchScreen";
import NavbarComponent from '../components/navBarComponent';
import { ProfileComponent } from '../components/profileComponent';
import { ProfileScreen } from '../screens/ProfileScreen';
import { NotificationScreen } from '../screens/NotificationsScreen';
import { TinderCardScreen } from '../screens/TinderCardScreen';

const Tabs = createBottomTabNavigator();

export default function HomeBottomTab() {
    return (
        <Tabs.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => {
            return <NavbarComponent {...props} />;
        }}>
            <Tabs.Screen name="Matches" component={TinderCardScreen} />
            <Tabs.Screen name="Notifications" component={NotificationScreen} />
            <Tabs.Screen name="Profile" component={ProfileScreen} />
        </Tabs.Navigator>
    )
}