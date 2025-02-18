import { View, StyleSheet } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title="John Doe"
          subtitle="Freelance Web Developer"
          left={(props) => <Avatar.Icon {...props} icon="account" />}
        />
        <Card.Content>
          <Text variant="bodyMedium">
            Experienced in React Native, Firebase, and UI/UX design.
          </Text>
        </Card.Content>
      </Card>
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
  card: {
    width: "100%",
    padding: 15,
  },
});
