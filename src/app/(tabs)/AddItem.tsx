import PendingBoard from "@/components/PendingBoard";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AddItem = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PendingBoard />
      <Text>Add Items</Text>
    </SafeAreaView>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#201c1c",
    justifyContent: "space-between",
    gap: 10,
  },
});
