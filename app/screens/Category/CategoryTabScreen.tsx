
import * as React from 'react';
import { View, StyleSheet, ScrollView, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import modules from '../../modules';
import { SafeAreaView } from 'react-navigation';
import CardHeader from '../../components/CardHeader';
import Fb from 'react-native-vector-icons/SimpleLineIcons'
import Icons from 'react-native-vector-icons/Entypo'
interface Props {
    ContactSelect: any
    onfb: any;
    onBell: any;
    onMakeCall: any
    onSearch:any
}
interface State {
}


export default ({ onfb, ContactSelect, onBell, onMakeCall,onSearch }: Props) => {
    return (
        <ScrollView>
            <SafeAreaView style={{ backgroundColor: modules.WHITE }} />
            <StatusBar barStyle='dark-content' backgroundColor="#ffff" />
            <CardHeader onSearch={onSearch} />
            <View style={styles.Group}>
                <TouchableOpacity style={styles.GroupAccount} onPress={onfb}>
                    <View style={[styles.groupIcon, { backgroundColor: '#ffff' }]}>
                        <Fb style={styles.icon} name="social-facebook" />
                    </View>
                    <View style={styles.GroupText}>
                    <Text style={styles.TextName}>Facebook Pages</Text>
                            

                    </View>
                </TouchableOpacity>

                <View style={styles.GroupAccount}>
                    <View style={[styles.groupIcon, { backgroundColor: '#fff' }]}>
                        <Icon style={styles.icon} name="phone" />
                    </View>
                    <TouchableOpacity style={styles.GroupText} onPress={() => onMakeCall(ContactSelect[0].phonenumber)}>
                        <Text style={styles.TextName}>Phone Number</Text>
                        {ContactSelect.length > 0 ?
                            <Text style={styles.text}>0
                                {ContactSelect[0].phonenumber}
                            </Text> : null}
                    </TouchableOpacity>
                </View>
                <View style={styles.GroupAccount}>
                    <View style={[styles.groupIcon, { backgroundColor: '#fff' }]}>
                        <Icon style={styles.icon} name="email" />
                    </View>
                    <View style={styles.GroupText}>
                        <Text style={styles.TextName}>Email</Text>
                        {ContactSelect.length > 0 ?
                            <Text style={styles.text}>
                                {ContactSelect[0].email}
                            </Text> : null}
                    </View>
                </View>

                <View style={styles.GroupAccount}>
                    <View style={[styles.groupIcon, { backgroundColor: '#fff' }]}>
                        <Icons style={styles.icon} name="address" />
                    </View>
                    <View style={styles.GroupText}>
                        <Text style={styles.TextName}>Address</Text>
                        {ContactSelect.length > 0 ?
                            <Text style={styles.text1}>
                                {ContactSelect[0].address}
                            </Text> : null}
                    </View>
                </View>

                <View style={styles.GroupAccount}>
                    <View style={[styles.groupIcon, { backgroundColor: '#fff' }]}>
                        <Icons style={styles.icon} name="bell" />
                    </View>
                    <TouchableOpacity style={styles.GroupText} onPress={onBell}>
                        <Text style={styles.TextName}>កំណត់សារដំណឹង</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    TextInfor: {
        fontSize: modules.FONT_H2 + 2,
        fontWeight: '500'
    },
    Group: {
        marginTop: modules.PADDING - 10,
        paddingHorizontal: modules.PADDING + 2,
        borderRadius: modules.RADIUS + 4
    },
    GroupAccount: {
        marginTop: modules.PADDING,
        padding: modules.PADDING + 3,
        backgroundColor: modules.WHITE,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: modules.SPACE - 3,
        borderRadius: modules.BIG_SPACE,
        borderColor: modules.BORDER,
    },
    img: {
        height: modules.MARGIN * 2,
        width: modules.MARGIN * 2,
    },
    GroupText: {
        paddingHorizontal: modules.PADDING + 5
    },
    TextName: {
        fontSize: modules.FONT_H3 - 2,
        fontWeight: '400',
        color: '#111',
    },
    text: {
        fontSize: modules.FONT_H6,
        fontWeight: '300',
        marginTop: 5,
        color: modules.TEXT_NOTE,
    },
    text1: {
        fontSize: 14,
        fontWeight: '300',
        marginTop: 5,
        color: modules.TEXT_NOTE,
    },
    groupIcon: {
        backgroundColor: modules.ENGLISH,
        height: modules.PADDING * 3.6,
        width: modules.PADDING * 3.6,
        borderRadius: modules.PADDING * 3.6 / 2,
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        color: modules.SUB_TEXT,
        fontSize: modules.FONT_H1,
    },
});



