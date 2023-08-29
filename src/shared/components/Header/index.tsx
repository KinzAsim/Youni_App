import React from "react";
import { RF } from "@theme";
import {
  View,
  StyleSheet,
  ViewStyle,
  Text,
  StatusBar,
  Image,
} from "react-native";
import { heart, menu, search } from "@assets";

interface HeaderProps {
  faq?: any;
  clr?: any;
  title?: any;
  profile?: any;
  navigation?: any;
  style?: ViewStyle;
  showBackButton?: boolean;
}

const Header = (props: Partial<HeaderProps>) => {
  const { style, title } = props;

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={"black"}
        barStyle={"light-content"}
      />
      <View style={[styles.headerContainer, style]}>
        <Text style={styles.txt}>{title}</Text>
        <View style={styles.iconView}>
          <Image source={heart} style={styles.img} />
          <Image source={search} style={styles.img} />
          <Image source={menu} style={styles.img} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  img: { width: RF(20), height: RF(20), resizeMode: "contain" },
  iconView: {
    flexDirection: "row",
    width: "40%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  txt: {
    fontSize: RF(26),
    color: "white",
    fontWeight: "600",
  },
  headerContainer: {
    backgroundColor: "black",
    width: "100%",
    height: RF(50),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: RF(10),
    paddingHorizontal: RF(10),
  },
});

export default Header;
