import SignOutButton from "@/components/sign-out-button";
import { useShoppingContext } from "@/hooks/use-shopping-context";

import { Button, StyleSheet, View } from "react-native";

export default function Index() {
  const shopping = useShoppingContext();
  const GetItems = async () => {
    await shopping.GetItems();
  };

  const ShoppingItems = shopping.shoppingItems;

  const item = {
    name: "Milk",
    category: "Dairy",
    quantity: 3,
    purchased: false,
  };

  const CreateShoppingItem = async () => {
    await shopping.CreateItem(item);
  };

  return (
    <View style={styles.container}>
      <SignOutButton />
      <Button title="Get Items" onPress={() => GetItems()} />
      <Button title="Log Items" onPress={() => console.log(ShoppingItems)} />
      <Button title="Create Item" onPress={() => CreateShoppingItem()} />
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
