import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HorizontalPicker from "@vseslav/react-native-horizontal-picker";
import { trigger } from "react-native-haptic-feedback";

const Items = ["All", "Community", "Body+Mind", "Party", "The Art"];

export default function Slider() {
  const [selectedTab, setSelectedTab] = React.useState("All");
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };
  const rednerItem = (item, index) => (
    <View
      key={index}
      style={{
        width: 95,
        // backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={index == selectedTab ? styles.selectedText : styles.itemText}
      >
        {item}
      </Text>
    </View>
  );
  return (
    <HorizontalPicker
      data={Items}
      renderItem={rednerItem}
      style={{ marginTop: 10 }}
      itemWidth={80}
      onChange={(item: any, index: any) => {
        setSelectedTab(item);
        trigger("impactHeavy", options);
      }}
    />
  );
}

const styles = StyleSheet.create({
  itemText: {
    fontSize: 12,
    fontWeight: "500",
    color: "gray",
  },
  selectedText: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
});
