import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import StopwatchScreen from "./screens/Stopwatch";
import TimerScreen from "./screens/Timer";
import { Text } from "react-native";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="Stopwatch"
          component={StopwatchScreen}
          options={{ tabBarIcon: () => <Text>⏱</Text>, tabBarBadge: "New" }}
        />
        <Tabs.Screen
          name="Timer"
          component={TimerScreen}
          options={{ tabBarIcon: () => <Text>⏲</Text> }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
