import { View, StyleSheet } from "react-native";
import { Text, Button, Card } from "react-native-paper";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.title}>
        Welcome to RentPeopleApp
      </Text>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Find the right people for the job!</Text>
        </Card.Content>
      </Card>

      <Button mode="contained" onPress={() => router.push("/profile")} style={styles.button}>
        Go to Profile
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    width: "100%",
    padding: 15,
    marginBottom: 20,
  },
  button: {
    width: "100%",
  },
});
