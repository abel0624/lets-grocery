import SignOutButton from "@/components/sign-out-button";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/appImages/Home.png")}
        style={{
          width: 350,
          height: 350,
          resizeMode: "contain",
          borderRadius: 10,
        }}
      />
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      <SignOutButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
