import { ShoppingContext } from "@/hooks/use-shopping-context";
import { supabase } from "@/utils/supabase";
import { PropsWithChildren, useEffect, useState } from "react";

export type GroceryItem = {
  id: number;
  name: string;
  category: string;
  priority: "low" | "medium" | "high"; // constrained values
  quantity: number;
  purchased: boolean;
  created_at: string; // ISO string
  updated_at: string; // ISO string
};

export type GroceryItems = GroceryItem[];

export default function ShoppingProvider({ children }: PropsWithChildren) {
  const [shoppingItems, setShoppingItems] = useState<GroceryItems>();

  useEffect(() => {
    GetItems();
  }, []);

  const GetItems = async () => {
    await supabase
      .from("grocery-items")
      .select("*")

      .then(({ data, error }) => {
        if (data) {
          setShoppingItems(data);
        }
        if (error) {
          console.log(error);
        }
      });
  };

  const CreateItem = async (item: GroceryItem) => {
    const newItem = await supabase.from("grocery-items").insert(item);
    console.log(newItem.data);
  };
  const UpdateItem = async (
    itemId: string,
    operation: string,
    currValue: number,
  ) => {
    if (currValue === 1 && operation === "-") {
      DeleteItem(itemId);
      GetItems();
    } else {
      await supabase
        .from("grocery-items")
        .update({ quantity: operation === "+" ? currValue + 1 : currValue - 1 })
        .eq("id", itemId);
    }

    GetItems();
  };
  const DeleteItem = async (itemId: string) => {
    const deletedItem = await supabase
      .from("grocery-items")
      .delete()
      .eq("id", itemId);

    console.log("Deleted Item:" + deletedItem.data);
  };
  const SetPurchased = async (itemId: string) => {
    await supabase
      .from("grocery-items")
      .update({ purchased: true })
      .eq("id", itemId);

    GetItems();
  };

  return (
    <ShoppingContext.Provider
      value={{
        GetItems,
        CreateItem,
        UpdateItem,
        DeleteItem,
        SetPurchased,
        shoppingItems,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}
