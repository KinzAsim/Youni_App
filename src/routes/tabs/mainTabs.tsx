import { RF } from "@theme";
import { navigate } from "@services";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import PostStack from "../stacks/postStack";
import EventStack from "../stacks/eventStack";
import { useTheme } from "@react-navigation/native";
import ProfileStack from "../stacks/profileStack";
import LocationStack from "../stacks/locationStack";
import CommunityStack from "../stacks/communityStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { add_img, event, group, location, profile, tabBG } from "@assets";
import {
  Image,
  Pressable,
  StyleSheet,
  ImageBackground,
  Text,
} from "react-native";

const Tab = createBottomTabNavigator();

const MainTabs = ({ navigation }: any) => {
  const theme: any = useTheme();
  const styles = useStyles(theme.colors);
  const [activeStack, setActiveStack] = useState("HomeStack");
  const { colorCode } = useSelector((state: any) => state.root.user);

  const handleCaptureFlag = () => {};

  return (
    <Tab.Navigator
      screenOptions={({ route: { name } }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        keyboardHidesTabBar: true,
        tabBarActiveTintColor: "white",
        tabBarStyle: styles.tabBarStyle,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="EventStack"
        component={EventStack}
        options={{
          tabBarIcon: ({ tintColor, color, focused }: any) => (
            <TabBarIcon
              colorCode={colorCode}
              color={color}
              styles={styles}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
              handleCaptureFlag={handleCaptureFlag}
              stack={"EventStack"}
              focused={focused}
              source={event}
              title={"Events"}
              // source={focused ? event : getIsDarkModeEnabled() ? event : event}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CommunityStack"
        component={CommunityStack}
        options={{
          tabBarIcon: ({ color, focused }: any) => (
            <TabBarIcon
              colorCode={colorCode}
              color={color}
              styles={styles}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
              handleCaptureFlag={handleCaptureFlag}
              stack={"CommunityStack"}
              focused={focused}
              source={group}
              title={"Events"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PostStack"
        component={PostStack}
        options={{
          tabBarIcon: ({ color, focused, props }: any) => (
            <TabBarIcon
              colorCode={colorCode}
              color={color}
              focused={focused}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
              handleCaptureFlag={handleCaptureFlag}
              stack={"PostStack"}
              styles={styles}
              source={add_img}
              title={"Events"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LocationStack"
        component={LocationStack}
        options={{
          tabBarIcon: ({ color, focused }: any) => (
            <TabBarIcon
              colorCode={colorCode}
              color={color}
              styles={styles}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
              handleCaptureFlag={handleCaptureFlag}
              focused={focused}
              stack={"LocationStack"}
              source={location}
              title={"Events"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color, focused }: any) => (
            <TabBarIcon
              colorCode={colorCode}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
              handleCaptureFlag={handleCaptureFlag}
              color={color}
              styles={styles}
              stack={"ProfileStack"}
              focused={focused}
              source={profile}
              title={"Events"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const onPressTab = (
  stack: any,
  activeStack: any,
  setActiveStack: any,
  handleCaptureFlag: any
) => {
  navigate(stack);
  setActiveStack(stack);
  if (stack == "ScanStack" && activeStack == "ScanStack") {
    handleCaptureFlag();
  }
};

const TabBarIcon = ({
  color,
  source,
  title,
  styles,
  focused,
  stack,
  activeStack,
  setActiveStack,
  handleCaptureFlag,
}: {
  source: any;
  title: string;
  styles?: any;
  color: string;
  focused?: any;
  stack: any;
  activeStack: any;
  setActiveStack: any;
  handleCaptureFlag: any;
}) => {
  return (
    <Pressable
      onPress={() =>
        onPressTab(stack, activeStack, setActiveStack, handleCaptureFlag)
      }
    >
      <ImageBackground
        style={styles.imgBG}
        imageStyle={styles.img}
        source={focused ? tabBG : null}
      >
        <Image
          source={source}
          style={[
            styles.image,
            {
              tintColor: color,
            },
          ]}
          resizeMode={"contain"}
        />
        {focused && <Text style={styles.titleText}>{title}</Text>}
      </ImageBackground>
    </Pressable>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    imgBG: {
      alignItems: "center",
      justifyContent: "center",
    },
    img: {
      width: RF(30),
      height: RF(30),
      resizeMode: "contain",
    },
    image: { width: RF(24), height: RF(24), opacity: 100, tintColor: "#fffff" },
    tabBarStyle: {
      height: RF(50),
      backgroundColor: "black",
    },
    titleText: {
      color: "white",
      fontSize: RF(10),
    },
  });

export default MainTabs;
