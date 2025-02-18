import { Tabs } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <PaperProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#6200ea",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => <MaterialIcons name="person" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="booking"
          options={{
            title: "Bookings",
            tabBarIcon: ({ color }) => <MaterialIcons name="event" size={24} color={color} />,
          }}
        />
      </Tabs>
    </PaperProvider>
  );
}
