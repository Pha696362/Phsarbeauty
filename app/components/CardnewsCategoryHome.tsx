import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import modules from "../modules";
import Eye from "react-native-vector-icons/SimpleLineIcons";
import ICon from "react-native-vector-icons/Feather";
import _styles from "../_styles";

import { _formatDateTime, _formatShortDate } from "../services/datetime.service";
import More from "react-native-vector-icons/Entypo";
import { BattambangBold, Battambang } from "../../functions/customFont";
interface Props {
  onPress: () => void
  onSave?: any
  data: any
}
interface State { }

export default ({ onPress, data, onSave }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.CardContainer}>
      <FastImage style={styles.Image} source={{ uri: String(data.fileUrl) }} />
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: modules.PADDING, marginVertical: 5 }}>
        <View style={{ width: 10, height: 10, backgroundColor: '#000' }} />
        <Text style={{ marginVertical: 5, margin: 10,color:modules.SUB_TEXT }}>
          {data.create_by.name}
        </Text>
      </View>
      <View style={styles.text}>
        <Text numberOfLines={2} style={styles.TitleFont}>
          {data.name}
        </Text>
      </View>
      <View style={styles.textdateandshare}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ marginVertical: 5 }}>
            ថ្ងៃទី{" "}
            {data.create_date
              ? _formatShortDate(data.create_date.seconds)
              : ""}
          </Text>

        </View>
        <TouchableOpacity onPress={onSave}>
          <More style={{ fontSize: 24, marginVertical: 5,color:modules.SUB_TITLE }} name="dots-three-horizontal" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  Icon: {
    fontSize: 24,
    paddingLeft: 12
  },
  Info: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: modules.SPACE5,
    justifyContent: "space-between"
  },
  TitleFont: {
    fontSize: modules.FONT_H6,
    ...BattambangBold,
    color: '#000'
  },
  CategoryFont: {
    fontSize: modules.FONT_H6,
    ...Battambang,
    color: modules.SUB_TEXT,
    marginVertical: modules.SPACE
  },
  CardContainer: {
    flex: 1,
    width: modules.VIEW_PORT_WIDTH,
    backgroundColor: modules.WHITE,
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    marginVertical:10 
  },
  Image: {
    width: "100%",
    height: modules.VIEW_PORT_HEIGHT / 4,
    borderRadius: 6,
    overflow: "hidden",
    marginTop: modules.SPACE

  },
  text: {
    paddingVertical: modules.SPACE * 2,
    backgroundColor: modules.WHITE,
    paddingHorizontal: modules.BODY_HORIZONTAL_12
  },
  fontText: {
    fontSize: 14,
    ...Battambang,
    color: modules.SUB_TEXT
  },
  textdateandshare: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical:10,
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    borderBottomWidth: 0.20,
    borderColor:modules.SUB_TITLE,
  }
});

