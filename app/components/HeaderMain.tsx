
import * as React from 'react';
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';
import modules from '../modules'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/Feather';
import _styles from '../_styles';

interface Props {


}

export interface AppState {
}

export default ({}: Props) => {

    return (
        <View style={[_styles.rows, styles.matHeader,]}>
            <TouchableOpacity activeOpacity={0.7} >
            {/* <FastImage style={styles.logo} source={require('../images/logo3.png')} /> */}
            </TouchableOpacity>
            <View style={_styles.rows}>
            <FastImage style={styles.logo} source={require('../images/logo3.png')} />
                {/* <Text style={styles.HeaderTitle}>PHSAR BEAUTY</Text> */}
            </View>
            <TouchableOpacity activeOpacity={0.7}>
                {/* <Icon style={styles.icon} name="facebook" /> */}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    matHeader: {
        justifyContent: 'space-between',
        paddingHorizontal: modules.PADDING,
        backgroundColor: modules.WHITE,
        paddingVertical: modules.PADDING,
       

    },
    HeaderTitle: {
        fontSize: modules.FONT_H5,
        color:'#000',
        fontWeight: '500',
        paddingLeft: modules.PADDING,
        fontFamily: 'Battambang-Bold',
    },
    icon: {
        fontSize: modules.FONT_H4,
        color:'#000',
    },
    logo: {
        height: 50,
        width: 200,
        marginTop:-20

        
    },
    labelStyle: {
        color:'#000',
        backgroundColor:'#000',
        fontSize: modules.FONT,
        marginTop: modules.PADDING,
        marginBottom: modules.PADDING,
        fontFamily: 'Battambang-Bold',
    },

});
