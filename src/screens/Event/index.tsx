import { styles } from "./styles";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { Header, Slider, Tab } from "@components";
import Explore from "./Explore";
import ForYou from "./ForYou";

const Event = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [loading, setLoading] = useState(true);

  function getCurrentFormattedDate() {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const currentDate = new Date();
    const day = daysOfWeek[currentDate.getDay()];
    const date = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    return `${day}, ${month} ${date} `;
  }
  const formattedDate = getCurrentFormattedDate();

  const onClick = (index: any) => {
    setSelectedTab(index);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.mainView}>
      <Header title={"Events"} />
      <Tab selectedTab={selectedTab} onPress={(index: any) => onClick(index)} />

      {loading ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator color={"white"} size="large" />
        </View>
      ) : (
        <>
          {selectedTab === 0 && <Explore />}

          {selectedTab === 1 && <ForYou />}
        </>
      )}
    </View>
  );
};

export default Event;
