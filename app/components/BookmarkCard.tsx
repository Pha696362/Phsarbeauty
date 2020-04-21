import More from 'react-native-vector-icons/MaterialIcons';
import Share from 'react-native-vector-icons/Feather'
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
import { BattambangBold } from '../../functions/customFont';

export interface Props {
    onClick: () => void
    data: any
    onSave?: any
    onUnSave: any
    onShare: any
}
interface State { }

export default ({ data, onClick, onUnSave, onShare }: Props) => {
    return (
        <TouchableOpacity onPress={onClick} style={styles.card}>
               <View style={[styles.subContainer]}>
                <View style={styles.containText}>
                    <View style={{flex:1}}>
                        <View style={{flexDirection:'row',alignItems:'center',}}>
                            <View style={{ width:10,height:10,backgroundColor:'#000',marginVertical:15,}} />
                            <Text style={{ marginVertical:5, margin:10 ,color:modules.SUB_TEXT}}>
                                {data.create_by.name}
                            </Text>
                        </View>
                        <Text numberOfLines={2} style={styles.text}>{data.name}</Text>
                    </View>
                    <FastImage style={styles.img1} source={{ uri: String(data.fileUrl) }} />
                </View>
             </View>
            <View style={styles.Viewstyldate }>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text >
                        ថ្ងៃទី{" "}
                        {data.create_date
                            ? _formatShortDate(data.create_date.seconds)
                            : ""}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity onPress={() => { onShare() }}>
                        <Share name="share" style={{ fontSize: 20, marginHorizontal: 20, marginVertical:5 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onUnSave()}>
                        <More name="bookmark" style={{ fontSize: 22, marginLeft: 18,marginVertical:5 }} />
                    </TouchableOpacity>
                </View>
            </View>


        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    card: {
        padding: 12,
        backgroundColor: '#ffffff',
        borderRadius: 10,
    },
    icon: {
        marginHorizontal: 4
    },
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
    },
    subContainer: {
        paddingTop: 12,
        // backgroundColor: '#2b2b',
        flexDirection: 'row',
        flex: 1
    },
    containText: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        height: 80,
        width: 80,
        borderRadius: 6,
        marginLeft: 12,
    },
    text: {
        fontSize: 14,
        ...BattambangBold,
        opacity: 1,
        marginBottom: 12,
        color:'#000'

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
         marginTop: 12 ,
        borderBottomWidth: 1,
        borderColor: modules.SUB_TITLE,
    }
});





