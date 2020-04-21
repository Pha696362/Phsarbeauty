
import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Image from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';
import { _formatDateTime, _formatShortDate } from '../services/datetime.service';
import FastImage from 'react-native-fast-image';
import DetailWebView from './DetailWebView';
import ICon from "react-native-vector-icons/Entypo";
import Eye from "react-native-vector-icons/SimpleLineIcons";
import modules from '../modules';
import { removeTag } from '../services/formattext.service'
import { BattambangBold, Battambang } from '../../functions/customFont';
export interface Props {
    onPress: () => void
    data: any,
    onSave?: any
    // onShare?:any
}
interface State { }

export default ({ data, onPress, onSave, }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
                <View style={styles.containText}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: modules.PADDING }}>
                            <View style={{ width: 10, height: 10, backgroundColor: '#000' }} />
                            <Text style={{ marginVertical: 5, margin: 10 ,color:modules.SUB_TEXT}}>
                                {data.create_by.name}
                            </Text>
                        </View>
                        <Text numberOfLines={2} style={styles.text}>{data.name}</Text>
                    </View>
                    <FastImage style={styles.img1} source={{ uri: String(data.fileUrl) }} />
                </View>
           
                 <View style={styles.Viewstyldate}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text>
                        ថ្ងៃទី{" "}
                        {data.create_date
                            ? _formatShortDate(data.create_date.seconds)
                            : ""}
                    </Text>
                    {/* <Eye style={styles.eye} name='eye' />
                    <Text style={styles.fontText}>{data.top_view}</Text> */}
                </View>
                <TouchableOpacity onPress={onSave}>
                    <ICon style={{ fontSize: 24, marginVertical: 5, color: modules.SUB_TITLE }} name="dots-three-horizontal" />
                </TouchableOpacity>
            </View>

        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    eye: {
        color: modules.SUB_TEXT,
        fontSize: 16, marginHorizontal: 4, marginLeft: 8
    },
    card: {
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop:-3
    },
    icon: {
        marginHorizontal: 4
    },
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
    },
    subContainer: {
        flexDirection: 'column',
        flex: 1,
      
    },
    containText: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      
        
    },
    row: {
        flexDirection: 'row',
        // alignItems: 'center',
    },
    groupImage: {
    },
    groupText: {
        flex: 1,
        justifyContent: "space-between"
    },
    img: {
        height: 50,
        width: 50,
        borderRadius: 100,

    },
    img1: {
        height: 120,
        width: 120,
        borderRadius: 6,
        marginLeft: 12,
    },
    text: {
        fontSize: 14,
        ...BattambangBold,
        opacity: 1,
        marginBottom: 12,
        color: '#000',
        paddingHorizontal: modules.PADDING

    },
    text_subtitle: {
        fontSize: 14,
        ...Battambang,
        opacity: 1,
        marginBottom: 12,
        color: '#000'

    },
    text1: {
        fontSize: 13,
        fontWeight: '500',


    },
    text2: {
        fontSize: 13,
        opacity: 0.8
    },
    dateTime: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },

    row1: {
        flexDirection: 'row',
        alignItems: "center"
    },
    Icon:
    {
        flexDirection: "row", alignItems: 'center'
    },
    fontText: {
        fontSize: modules.FONT_H5 - 4,
        color: modules.SUB_TITLE,
    },
    Viewstyldate: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 12,
        paddingHorizontal: modules.PADDING,
        borderBottomWidth: 0.20,
        borderColor: modules.SUB_TITLE,
    }
});


