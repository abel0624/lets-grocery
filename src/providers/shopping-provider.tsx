import { ShoppingContext } from "@/hooks/use-shopping-context";
import { supabase } from "@/utils/supabase";
import { PropsWithChildren, useState } from "react";

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
  const GetItems = async () => {
    await supabase
      .from("grocery-items")
      .select("*")
      .then(({ data, error }) => {
        if (data) {
          console.log(data);
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
  const UpdateItem = async (itemId: string) => {
    const updatedItem = await supabase
      .from("grocery-items")
      .update({ purchased: true })
      .eq("id", itemId);
    console.log(updatedItem.data);
  };
  const DeleteItem = async (itemId: string) => {
    const deletedItem = await supabase
      .from("grocery-items")
      .delete()
      .eq("id", itemId);
    console.log("Deleted Item:" + deletedItem.data);
  };

  return (
    <ShoppingContext.Provider
      value={{
        GetItems,
        CreateItem,
        UpdateItem,
        DeleteItem,
        shoppingItems,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}
