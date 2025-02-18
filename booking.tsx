import { View, StyleSheet } from "react-native";
import { Card, Text, Button } from "react-native-paper";

const bookings = [
  { id: 1, name: "Alice", job: "Graphic Designer", price: "$20/hr" },
  { id: 2, name: "Bob", job: "Fitness Trainer", price: "$25/hr" },
];

export default function BookingScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Your Bookings
      </Text>

      {bookings.map((booking) => (
        <Card key={booking.id} style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">{booking.name}</Text>
            <Text>{booking.job}</Text>
            <Text style={styles.price}>{booking.price}</Text>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained">Cancel</Button>
          </Card.Actions>
        </Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    marginBottom: 10,
  },
  price: {
    fontWeight: "bold",
    marginTop: 5,
  },
});
