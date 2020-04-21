
import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import modules from "../modules";
interface Props {
  fileurl: any;
  // onClickAds:any;
}
export default ({ fileurl }: Props) => {
  return (
    <TouchableOpacity  style={styles.AdsBox}>
      {!fileurl ? (
        <FastImage
          // resizeMode={FastImage.resizeMode.contain}
          style={styles.Ads}
          source={require("../images/1.jpg")}
        />
      ) : (
        <FastImage 
        // resizeMode={FastImage.resizeMode.contain}
        style={styles.Ads} source={{ uri: fileurl }} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Ads: {
    width: modules.VIEW_PORT_WIDTH - (modules.BODY_HORIZONTAL_12*2),
    height:modules.VIEW_PORT_HEIGHT/18,
    borderRadius: modules.BODY_HORIZONTAL_12 / 2
  },
  AdsBox: {
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    overflow: "hidden",
    alignItems:'center',
    marginVertical:0
  }
});