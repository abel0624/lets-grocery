import { GroceryItems } from "@/providers/shopping-provider";
import { createContext, useContext } from "react";

export type ShoppingData = {
  GetItems: () => Promise<void>;
  CreateItem: (item: any) => Promise<void>;
  UpdateItem: (itemId: string) => Promise<void>;
  DeleteItem: (itemId: string) => Promise<void>;
  shoppingItems?: GroceryItems;
};

export const ShoppingContext = createContext<ShoppingData>({
  GetItems: async () => {},
  CreateItem: async () => {},
  UpdateItem: async () => {},
  DeleteItem: async () => {},
  shoppingItems: undefined,
});

export const useShoppingContext = () => useContext(ShoppingContext);
