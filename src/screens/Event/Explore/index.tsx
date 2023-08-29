import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Card, Slider } from "@components";
import { styles } from "./styles";
import { RF } from "@theme";

const DATA = [1, 2, 3, 4];

const Explore = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const renderItem = ({ item, index }: any) => {
    return <Card />;
  };
  return (
    <>
      <Slider />
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

export default Explore;
