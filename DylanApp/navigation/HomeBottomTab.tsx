import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MatchScreen } from "../screens/MatchScreen";
import NavbarComponent from '../components/navBarComponent';
import { NotificationScreen } from "../screens/NotificationScreen";
import { ProfileComponent } from '../components/profileComponent';
import { ProfileScreen } from '../screens/ProfileScreen';

const Tabs = createBottomTabNavigator();

export default function HomeBottomTab() {
    return (
        <Tabs.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => {
            return <NavbarComponent {...props} />;
        }}>
            <Tabs.Screen name="Profile" component={ProfileScreen} />
            <Tabs.Screen name="Matches" component={MatchScreen} />
            <Tabs.Screen name="Notifications" component={NotificationScreen} />
        </Tabs.Navigator>
    )
}
""