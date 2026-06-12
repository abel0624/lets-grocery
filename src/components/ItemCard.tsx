import { useShoppingContext } from "@/hooks/use-shopping-context";
import { GroceryItem } from "@/providers/shopping-provider";
import { Pressable, StyleSheet, Text, View } from "react-native";

const priorityColors = {
  low: "#2E7D32", // dark green
  medium: "#EF6C00", // deep orange
  high: "#C62828", // dark red
};

const ItemCard = ({ item }: { item: GroceryItem }) => {
  const { UpdateItem, DeleteItem, SetPurchased } = useShoppingContext();

  return (
    <View style={styles.container}>
      <View style={styles.leftAreaView}>
        <Pressable
          style={[
            styles.radioStyle,
            { backgroundColor: item.purchased ? "#fff" : "#ffffff00" },
          ]}
          onPress={() => SetPurchased(item.id.toString())}
        ></Pressable>
      </View>
      <View style={styles.middleAreaView}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.nameStyle}>{item.name}</Text>
          <Text
            style={[
              styles.priorityStyle,
              { backgroundColor: priorityColors[item.priority] },
            ]}
          >
            {item.priority.toUpperCase()}
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Pressable
              style={styles.counterBtn}
              onPress={() => UpdateItem(item.id.toString(), "-", item.quantity)}
            >
              <Text style={{ color: "#fff" }}>-</Text>
            </Pressable>
            <Text style={{ color: "#fff", width: 20, textAlign: "center" }}>
              {item.quantity}
            </Text>
            <Pressable
              style={styles.counterBtn}
              onPress={() => UpdateItem(item.id.toString(), "+", item.quantity)}
            >
              <Text style={{ color: "#fff" }}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.rightAreaView}></View>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#ffffff15",
    padding: 20,
    margin: 10,
    borderRadius: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderColor: "#ffffff52",
    borderWidth: 0.5,
    flexDirection: "row",
  },
  nameStyle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  priorityStyle: {
    color: "#fff",
    padding: 5,
    borderRadius: 15,
    fontSize: 10,
    fontWeight: "bold",
  },
  leftAreaView: {
    width: "10%",
  },
  middleAreaView: {
    width: "80%",
    gap: 20,
  },
  rightAreaView: {
    width: "10%",
  },
  radioStyle: {
    borderColor: "#fff",
    borderWidth: 1,
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  counterBtn: {
    backgroundColor: "#ffffff2f",
    borderRadius: 5,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
