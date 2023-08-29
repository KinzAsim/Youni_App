import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Border_Button } from "@components";
import { ball, freshers, movie, violan } from "@assets";
import { RF, SCREEN_HEIGHT, SCREEN_WIDTH } from "@theme";
import { heart, heartFill } from "@assets";

const categoryData = [
  {
    id: 1,
    title: "Art & Music",
    img: violan,
  },
  {
    id: 2,
    title: "Sport",
    img: ball,
  },
  {
    id: 3,
    title: "Movie",
    img: movie,
  },
];
const likesData = [
  {
    id: 1,
    title: "Art & Music",
    img: violan,
  },
  {
    id: 2,
    title: "Sport",
    img: ball,
  },
  {
    id: 3,
    title: "Movie",
    img: movie,
  },
];
const Card = () => {
  const [liked, setLiked] = useState(false);
  return (
    <View style={styles.container}>
      <Image source={freshers} style={styles.img} />
      <Text style={styles.date}>Wed, Mar 29 . 19:00-2:00</Text>
      <Text style={styles.titleTxt}>Dinner with Fairgrove Partners</Text>

      <View style={styles.categoryView}>
        <ScrollView horizontal>
          {categoryData.map((c: any) => (
            <Border_Button title={c.title} source={c.img} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.likeView}>
        <View style={[styles.categoryView, { width: "96%", marginTop: 3 }]}>
          <ScrollView horizontal>
            {likesData.map((c: any, index: number) => (
              <Image
                source={c.img}
                style={[styles.likesImg, { marginLeft: index !== 0 ? -14 : 0 }]}
              />
            ))}
            <View
              style={[
                styles.likesImg,
                {
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#bb60fd",
                  marginLeft: -14,
                },
              ]}
            >
              <Text style={{ color: "white", fontSize: 9 }}>+12k</Text>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log("chalalallll");

            setLiked(!liked);
          }}
        >
          <Image
            source={liked ? heartFill : heart}
            style={[styles.heartImg, { height: liked ? 18 : 20 }]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: RF(15),
    borderColor: "white",
    height: SCREEN_HEIGHT / 1.44,
    width: SCREEN_WIDTH - 10,
    marginRight: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  img: {
    width: RF(325),
    height: RF(331),
    resizeMode: "contain",
    alignSelf: "center",
  },
  date: {
    color: "gray",
    fontSize: RF(13),
    fontWeight: "500",
    marginVertical: 5,
  },
  titleTxt: {
    color: "white",
    fontSize: RF(20),
    fontWeight: "600",
    // marginVertical: 5,
  },
  categoryView: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-evenly",
  },
  likeView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heartImg: { width: RF(20), height: RF(20) },
  likesImg: {
    width: RF(32),
    height: RF(32),
    borderRadius: 16,
    borderColor: "white",
    borderWidth: 2,
  },
});
