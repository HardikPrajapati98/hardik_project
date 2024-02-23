import React, {useEffect, useState} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
import {
    View,
} from "react-native";
import Home from "../home";

const TabBar = (props) => {

    const option = {
        headerShown: false,
    };


    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            tabBarOptions={{
                showLabel: false,
            }}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    switch (route.name) {
                        case "HomeStack":
                            return <View></View>
                        case "SearchStack":
                            return <View></View>
                        case "AddStack":
                            return <View></View>
                        case "EmailStack":
                            return <View></View>
                        case "ProfileStack":
                            return <View></View>
                        default:
                            return null;
                    }
                },

                tabBarStyle: {
                    backgroundColor: "white", // Background color of the TabBar
                },
            })}
        >
            <Tab.Screen
                name="HomeStack"
                component={<Home/>}
                options={({route}) => ({
                    ...option,
                })}
            />

            <Tab.Screen
                name="SearchStack"
                component={<View style={{flex: 1}}></View>}
                options={({route}) => ({
                    ...option,
                })}
            />

            <Tab.Screen
                name="AddStack"
                component={<View style={{flex: 1}}></View>}
                options={{...option, tabBarStyle: {display: "none"}}}
            />

            <Tab.Screen
                name="EmailStack"
                component={<View style={{flex: 1}}></View>}
                options={{
                    ...option,
                    tabBarStyle: {display: "none"},
                }}
            />

            <Tab.Screen
                name="ProfileStack"
                component={<View style={{flex: 1}}></View>}
                options={({route}) => ({
                    ...option,
                })}
            />
        </Tab.Navigator>
    );
};

export default TabBar;
