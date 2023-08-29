import { RF } from "@theme";
import React from "react";
import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";

const Border_Button = ({ title, source }: { title?: any; source?: any }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={source} style={styles.img} />
      <Text style={styles.titleTxt}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Border_Button;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: RF(20),
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: RF(4),
    paddingHorizontal: RF(10),
    marginVertical: 10,
    marginRight: 5,
  },
  titleTxt: {
    color: "white",
    fontSize: RF(12),
  },
  img: {
    width: RF(12),
    height: RF(12),
    marginRight: RF(5),
  },
});
