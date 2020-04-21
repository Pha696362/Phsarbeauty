import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import modules from "../modules";
import Eye from "react-native-vector-icons/SimpleLineIcons";
import ICon from "react-native-vector-icons/Feather";
import _styles from "../_styles";

import { _formatDateTime } from "../services/datetime.service";
import More from "react-native-vector-icons/Entypo";
import { Battambang } from "../../functions/customFont";

interface Props {
  onPress: () => void
  onSave?: any
  data: any
}

interface State { }

export default ({ onPress, data, onSave }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.CardContainer}>
     
      <View style={styles.groupImg}>
        <FastImage style={styles.Image} source={{ uri: String(data.fileurl)}} />
      </View>
      <Text numberOfLines={1} style={styles.TitleFont}>{data.name}</Text>
     
     
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({

  CardContainer: {
    padding: 2,
    marginVertical:2,
    // paddingHorizontal:12,
  },
  groupImg: {
    height: modules.VIEW_PORT_HEIGHT / 4,
    paddingHorizontal: modules.SPACE,
    marginTop: modules.PADDING / 2,
  },
  Image: {
    width: "100%",
    height: '100%',
    borderRadius: modules.BIG_SPACE,
  },
  TitleFont: {
    width: modules.VIEW_PORT_WIDTH / 3.5,
    paddingHorizontal: modules.SPACE,
    fontSize:12,
    color:modules.COLOR_MAIN,
     ...Battambang
  },
});
