import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function TabsLayout() {
  return (
    <NativeTabs
      backgroundColor="#201c1c"
      labelStyle={{ color: "white" }}
      iconColor={{ default: "#fff", selected: "#1a0303" }}
      indicatorColor="#fff"
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Lists</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: "clipboard", selected: "clipboard.fill" }}
          md={{ default: "list_alt", selected: "list_alt" }}
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="AddItem">
        <NativeTabs.Trigger.Label>Add Item</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: "plus", selected: "plus.circle.fill" }}
          md={{ default: "add_circle", selected: "add_circle_outline" }}
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="insights">
        <NativeTabs.Trigger.Label>Insights</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="chart.bar" md="analytics" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
