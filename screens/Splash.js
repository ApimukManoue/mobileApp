import { StyleSheet, View, Text, Image } from "react-native";
import React, { useEffect } from "react";

export default function Splash({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.SplashIMG} source={require("../assets/Fox.png")} />
      {/* <Image
        style={styles.SplashIMG}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6a5acd",
    alignItems: "center",
    justifyContent: "center",
  },
  SplashIMG: {
    width: 250,
    height: 250,
  },
});
