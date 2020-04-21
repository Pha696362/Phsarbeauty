// import * as React from 'react';
// import { View, StyleSheet, Text, Image } from 'react-native';
// import modules from '../modules';

// interface Props {
// }

// export default ({ }: Props) => {
//     return (
//         <View style={styles.header}>
//             <Text style={styles.NameHeader}>Contact Us</Text>
//             <View style={styles.groupImg}>
//                 <Image style={styles.logo} source={require('../images/logo3.png')} />
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     header: {
//         alignItems: 'center',
//         backgroundColor: modules.WHITE,
//         paddingVertical: modules.PADDING,
//         borderBottomWidth: 1,
//         borderColor: modules.BORDER,
        
//     },
//     groupImg: {
//         height: 50,
//         width: 200,
//         marginTop:10

//     },
//     logo: {
//         height: '100%',
//         width: '100%',
//     },
//     NameHeader: {
//         fontSize: 32,
//         color: "#000",
//         fontWeight: '600',
//         textAlign: "center",
//     },

// });


import * as React from 'react';
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';
import modules from '../modules'
import Icons from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import _styles from '../_styles';

interface Props {
    onSearch:any
}

export interface AppState {
}

export default ({onSearch}: Props) => {

    return (
        <View style={ styles.matHeader}>
            <TouchableOpacity activeOpacity={0.7} onPress={onSearch} >
            <Icons style={styles.icon} name="search" />
            </TouchableOpacity>
            <View style={_styles.rows}>
            {/* <FastImage style={styles.logo} source={require('../images/logo3.png')} /> */}
                <Text style={styles.HeaderTitle}>PHSAR BEAUTY</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7}>
                <Icon style={styles.user} name="account-circle-outline" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    matHeader: {
        flexDirection: 'row',
		alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: modules.BODY_HORIZONTAL_18,
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
        fontSize: modules.FONT_H2,
        color:modules.SUB_TEXT,
    },
    user:{
        fontSize: modules.FONT_H1,
        color:modules.SUB_TEXT,
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
