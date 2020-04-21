
import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import modules from "../modules";
import _styles from "../_styles";
import { _formatDateTime, _formatShortDate } from "../services/datetime.service";
import { BattambangBold, Battambang } from "../../functions/customFont";
import Share from 'react-native-vector-icons/Feather'

interface Props {
    onShare?: any
    proverd: any

}

interface State { }

export default ({ proverd, onShare }: Props) => {
    return (
        <TouchableOpacity style={styles.CardContainer}>
            {/* <Text numberOfLines={2} style={styles.TitleFont}>
          {proverd.name}
        </Text> */}
            <FastImage style={styles.Image} source={{ uri: proverd.fileurl }} 
             resizeMode={FastImage.resizeMode.contain}
            />
            <View style={styles.text}>
            </View>
            <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 12 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text>
                        ថ្ងៃទី{" "}
                        {proverd.create_date
                            ? _formatShortDate(proverd.create_date.seconds)
                            : ""}
                    </Text>
                </View>
                <TouchableOpacity onPress={onShare}>
                    <Share name="share" style={styles.Share} />
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
        color: '#000',
        marginVertical: 5
    },
    CategoryFont: {
        fontSize: modules.FONT_H6,
        ...Battambang,
        color: modules.SUB_TEXT,
        marginVertical: modules.SPACE
    },
    CardContainer: {
        width: modules.VIEW_PORT_WIDTH,
        backgroundColor: modules.WHITE,
        paddingHorizontal: modules.BODY_HORIZONTAL_12,
        marginVertical: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,

    },
    Image: {
        width: '100%',
        height: modules.VIEW_PORT_HEIGHT/3.40,
        borderRadius: 6,
        overflow: "hidden",
        marginTop: modules.SPACE
    },
    text: {
        paddingVertical: modules.SPACE * 2,
        backgroundColor: modules.WHITE,
        ...Battambang
    },
    fontText: {
        fontSize: 14,
        ...Battambang,
        color: modules.SUB_TEXT
    },
    Share: {
        fontSize: 20,
        padding: 6,
        color: 'black',
    },
});
