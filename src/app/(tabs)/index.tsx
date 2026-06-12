import ItemCard from "@/components/ItemCard";
import ListHeroCard from "@/components/ListHeroCard";
import SignOutButton from "@/components/sign-out-button";
import { useShoppingContext } from "@/hooks/use-shopping-context";

import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const shopping = useShoppingContext();

  const ShoppingItems = shopping.shoppingItems?.filter(
    (item) => item.purchased === false,
  );

  const item = {
    name: "Coffe",
    category: "Drink",
    quantity: 1,
    purchased: true,
  };

  const CreateShoppingItem = async () => {
    await shopping.CreateItem(item);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ListHeroCard />
      <ScrollView style={styles.scrollView}>
        {ShoppingItems?.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </ScrollView>
      <SignOutButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#201c1c",
    justifyContent: "space-between",
    gap: 10,
  },
  scrollView: {
    width: "100%",
    gap: 10,
    paddingRight: 20,
  },
});
