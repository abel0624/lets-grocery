import { FontAwesome6 } from "@reac";
import { StyleSheet, Text, View } from "react-native";

const PendingBoard = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FontAwesome6.Solid name="wand-magic-sparkles" size={24} color="white" />
      <Text>PendingBoard</Text>
    </View>
  );
};

export default PendingBoard;

const styles = StyleSheet.create({});
