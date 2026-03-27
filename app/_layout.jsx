import { Stack } from "expo-router";
import { View, Text } from "react-native";
 
// Ce composant définit le layout global de l'application.
// Il inclut un header commun et une navigation par pile (Stack) pour gérer les différentes routes.
export default function Layout() {
  return (
    // Le conteneur principal qui englobe l'ensemble du layout.
    <View style={{ flex: 1 }}>
       
      <View style={{ padding: 16, backgroundColor: "#f0f0f0" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Mon Application
        </Text>
      </View>
     
      <Stack>
        <Stack.Screen name="index" options={{ title: "Accueil" }} />
        <Stack.Screen name="about" options={{ title: "À propos" }} />
        <Stack.Screen name="user/:id" options={{ title: "User" }} />
      </Stack>
     
    </View>
  );
}