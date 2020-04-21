import * as React from "react";
import { View, StyleSheet, Text,TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import modules from "../modules";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { FontGSansBold } from "../../functions/customFont";

interface Props {
  img?: any;
  icon?: any;
  title?: any;
  onDelete?: any
  onRightClick?: () => void
}
interface State { }

export default ({ img, icon, title, onDelete, onRightClick }: Props) => {
  return (
    <View style={styles.container}>
      {img ? (
        <FastImage
          style={styles.imgLogo}
          resizeMode={FastImage.resizeMode.cover}
          source={img}
        />
      ) : (
          <View />
        )}
      {title ? <Text style={styles.title}>{title}</Text> : <View />}


      {icon ?
        <TouchableOpacity onPress={onRightClick}>
          <Icon style={styles.Icon} name={icon} />
        </TouchableOpacity>
        : <View />}


    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    backgroundColor: modules.WHITE,
    paddingVertical: modules.SPACE5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  imgLogo: {
    width: 70,
    height: 50
  },
  Icon: {
    fontSize: 28,
    color: modules.RED
  },
  title: {
    fontSize: modules.FONT_H3,
    color:modules.SUB_TEXT,
    ...FontGSansBold
  }
});
