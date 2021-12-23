import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./src/screens/Home";
import MovieDetails from "./src/screens/MovieDetails";
import MovieSearch from "./src/screens/MovieSearch";
import * as CustomFonts from './src/constants/FontsDefs'
import * as Colors from "./src/constants/ColorDefs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? CustomFonts.Home : CustomFonts.HomeOutline;
            } else if (route.name === "Search") {
              iconName = focused ? CustomFonts.MovieSearch : CustomFonts.MovieSearchOutline;
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: Colors.WHITE,
          tabBarInactiveTintColor: Colors.GRAY,
          tabBarStyle: { backgroundColor: Colors.BLACK },
        })}
      >
        <Tab.Screen
          name="Home"
          component={MovieStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Search"
          component={SearchStack}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const MovieStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true }}
      initialRouteName="Home"
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true }}
      initialRouteName="MovieSearch"
    >
      <Stack.Screen
        name="MovieSearch"
        component={MovieSearch}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainTab;
