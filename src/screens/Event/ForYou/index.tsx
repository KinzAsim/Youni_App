import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Card, Slider } from "@components";
import { styles } from "./styles";

const DATA = [1, 2, 3, 4];
const categoryData = [
  {
    id: 1,
    title: "My Interests",
  },
  {
    id: 2,
    title: "My Groups",
  },
  {
    id: 3,
    title: "My Friends",
  },
];

const ForYou = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const renderItem = ({ item, index }: any) => {
    return <Card />;
  };
  return (
    <>
      <ScrollView horizontal>
        <TouchableOpacity
          onPress={() => setSelectedTab("All")}
          style={[
            styles.categoryContainer,
            {
              backgroundColor: selectedTab == "All" ? "white" : "black",
              borderColor: selectedTab == "All" ? "white" : "gray",
            },
          ]}
        >
          <Text
            style={[
              styles.categoryTitle,
              { color: selectedTab == "All" ? "black" : "gray" },
            ]}
          >
            All
          </Text>
        </TouchableOpacity>
        {categoryData.map((c: any) => (
          <TouchableOpacity
            onPress={() => setSelectedTab(c.title)}
            style={[
              styles.categoryContainer,
              {
                backgroundColor: selectedTab == c.title ? "white" : "black",
                borderColor: selectedTab == c.title ? "white" : "gray",
              },
            ]}
          >
            <Text
              style={[
                styles.categoryTitle,
                { color: selectedTab == c.title ? "black" : "gray" },
              ]}
            >
              {c.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <FlatList
        horizontal
        data={DATA}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentStyle}
        keyExtractor={(item: any, index: any) => index.toString()}
        renderItem={renderItem}
      />
    </>
  );
};

export default ForYou;
