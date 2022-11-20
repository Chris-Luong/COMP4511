import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./screens/Details";
import Settings from "./screens/Settings";
import Todo, { CreateTodo } from "./screens/Todo";

const RootStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {
  const TabsNav = () => (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Todo"
        component={Todo}
        options={{
          tabBarIcon: ({ size }) => <Ionicons name="md-list" size={size} />,
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ size }) => <Ionicons name="md-settings" size={size} />,
        }}
      />
    </Tabs.Navigator>
  );

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="BottomTabs">
        <RootStack.Screen
          name="Details"
          component={Details}
          // options={{ presentation: "modal" }}
          // options={{ headerBackVisible: false }}
        />
        <RootStack.Screen
          name="CreateTodo"
          component={CreateTodo}
          options={{ presentation: "modal" }}
        />
        <RootStack.Screen
          name="BottomTabs"
          component={TabsNav}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
