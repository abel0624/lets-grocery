import { useShoppingContext } from "@/hooks/use-shopping-context";
import { StyleSheet, Text, View } from "react-native";
import * as Progress from "react-native-progress";

const ListHeroCard = () => {
  const shopping = useShoppingContext();
  const shoppingItems = shopping.shoppingItems;

  const completedCount =
    shoppingItems?.filter((item) => item.purchased === true).length ?? 0;
  const pendingCount = shoppingItems
    ? shoppingItems.length - completedCount
    : 0;
  const itemTotal = shoppingItems?.length ?? 0;
  const progress = pendingCount / itemTotal;

  const TodayDate = new Date();
  const Today = TodayDate.toLocaleDateString();

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Date:{Today}</Text>
      <Text style={styles.titleStyle}>Shopping Board</Text>
      <View style={styles.totalsStyle}>
        <Text style={styles.textStyle}>Pending: {pendingCount}</Text>
        <Text style={styles.textStyle}>Completed: {completedCount}</Text>
      </View>
      <Progress.Bar
        progress={progress}
        width={360}
        color="#fff"
        height={8}
        unfilledColor="#424141"
        borderColor="#fff"
      />
    </View>
  );
};

export default ListHeroCard;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    gap: 5,
    width: "100%",
    backgroundColor: "#4fc94b",
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
  },
  titleStyle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  totalsStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
