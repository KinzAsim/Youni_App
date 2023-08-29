import { RF } from "@theme";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Tab = ({
  onPress,
  selectedTab,
}: {
  onPress: (i: number) => void;
  selectedTab?: any;
}) => {
  const list = [{ title: "Explore" }, { title: "For You" }];

  const handleOnPress = (index: number) => {
    onPress(index);
  };

  return (
    <View>
      <FlatList
        horizontal
        data={list}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentStyle}
        keyExtractor={(item: any, index: any) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => handleOnPress(index)}>
              <Text
                style={[
                  styles.txtStyle,
                  {
                    color: selectedTab === index ? "white" : "grey",
                  },
                ]}
              >
                {item?.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentStyle: {
    width: "100%",
    height: RF(30),
    justifyContent: "center",
  },
  txtStyle: {
    fontSize: RF(20),
    fontWeight: "500",
    color: "grey",
    marginHorizontal: RF(10),
  },
});

export default Tab;
