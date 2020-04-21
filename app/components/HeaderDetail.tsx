import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import modules from "../modules";
import Icon from "react-native-vector-icons/Feather";
import { FontGSansBold } from "../../functions/customFont";

interface Props {
  iconLeft?: any;
  iconRight?: any;
  title?: any;
  onClickIconLeft?: any;
  onClickIconRight?: any;
}
interface State {}

export default ({
  iconLeft,
  iconRight,
  title,
  onClickIconLeft,
  onClickIconRight
}: Props) => {
  return (
    <View style={styles.container}>
      {iconLeft ? (
        <TouchableOpacity onPress={onClickIconLeft}>
          <Icon style={styles.Icon} name={iconLeft} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      {title ? <Text style={styles.title}>{title}</Text> : <View />}
      {iconRight ? (
        <TouchableOpacity onPress={onClickIconRight }>
          <Icon style={styles.Icon} name={iconRight} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    backgroundColor: modules.BACKGROUND_PRIMARY,
    paddingVertical: modules.SPACE,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
    // flex:1
  },
  imgLogo: {
    width: 60,
    height: 50
  },
  Icon: {
    fontSize: 28,
    color: modules.WHITE,
    padding: modules.SPACE
  },
  title: {
    fontSize: modules.FONT_H3,
    color:'#000',
    ...FontGSansBold
  }
});
