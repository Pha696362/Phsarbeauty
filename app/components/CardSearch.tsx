import * as React from "react";
import { View, StyleSheet, Text,TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import _styles from "../_styles";
import modules from "../modules";
import { Battambang } from "../../functions/customFont";



 
interface Props {
  img: any;
  title: any;
  onDetail:any;
}

interface State {}

export default ({ img, title,onDetail }: Props) => {
  return (
    <TouchableOpacity onPress={onDetail} style={[styles.container]}>
      <FastImage style={styles.img} source={{ uri: String(img) }} />
      <Text numberOfLines={2} style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical:modules.BIG_SPACE,
    marginHorizontal:12,
    marginTop:12,
  },
  img:{
    width: 60,
    height:60,
    borderRadius:30,
  },
  text:{
      paddingHorizontal:modules.BODY_HORIZONTAL_12,
      paddingRight:55,
      ...Battambang
  }
});
