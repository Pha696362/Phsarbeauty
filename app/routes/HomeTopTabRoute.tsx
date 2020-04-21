import * as React from 'react'
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import modules from '../modules';
import { BattambangBold } from '../../functions/customFont';
import HomeScreenContainer from '../screens/Home';
import HeaderMain from '../components/HeaderMain';
import BeautyContainer from '../screens/Beauty';
import HealthContainer from '../screens/Health';
import LoveContainer from '../screens/Love';
import ProverbContainer from '../screens/Proverb/ProverbContainer';
import ComadyContainer from '../screens/Funy';
import KeystoryContainer from '../screens/KeySuccess';

const TopNavigator = createMaterialTopTabNavigator({
    Home: HomeScreenContainer,
    Beauty: BeautyContainer,
    Health: HealthContainer,
    Love: LoveContainer,
    KeyStory: KeystoryContainer,
    Proverd: ProverbContainer,
    Comady: ComadyContainer,

}, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarLabel: ({ focused }: any) => {
            const { routeName } = navigation.state;
            let TabName;
            if (routeName === "Home") {
                TabName = `ទំព័រដើម`;
            } else if (routeName === "Beauty") {
                TabName = `សម្រស់`;
            } else if (routeName === "Health") {
                TabName = `សុខភាព`;
            } else if (routeName === "Love") {
                TabName = `ស្នេហា`;
            } else if (routeName === "KeyStory") {
                TabName = `គន្លឹះជោគជ័យ`;
            }
            else if (routeName === "Proverd") {
                TabName = `សុភាសិត`;
            } else if (routeName === "Comady") {
                TabName = `ប្លែកៗ`;
            }

            return (
                <View style={[styles.row, focused ? { borderColor: '#F902AE', borderBottomWidth: 2} : null]}>
                    <Text style={focused ? styles.labelStyleAtive : styles.labelStyle}>
                        {TabName}
                    </Text>
                </View>
            );

        }
    }),
    lazy: true,
    tabBarOptions: {
        scrollEnabled: true,
        labelStyle: {
            fontSize: 12,

        },
        tabStyle: {
            width: 110,
            paddingHorizontal: 2,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 5
        },
        style: {
            backgroundColor: "#ffffff",


        },
        indicatorStyle: {
            backgroundColor: "#ffffff",

        },
    }
})


export default class HomeTopTabRoute extends React.Component<any>{
    static router = TopNavigator.router;
    _onDrawer = () => {
        this.props.navigation.openDrawer()
    }
    _onSearch = () => {
        this.props.navigation.navigate('Search')
    }
    render() {
        return (
            <View style={styles.View1}>
                <StatusBar barStyle='light-content' />
                <SafeAreaView style={{backgroundColor:'#ffff'}}/>
                <HeaderMain/>
                <View style={styles.topnavigator}>
                    <TopNavigator navigation={this.props.navigation} />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    labelStyle: {
        fontSize: modules.FONT_H5,
        marginTop: modules.SPACE,
        marginBottom: modules.SPACE,
        color:'#000',
        ...BattambangBold

    },
    labelStyleAtive: {
        fontSize: modules.FONT_H5,
        marginTop: modules.SPACE,
        marginBottom: modules.BIG_SPACE,
        color: '#F902AE',
        ...BattambangBold
    },

    view: {
        alignItems: "center"
    },
    View1: {
        flex: 1, backgroundColor: "#000"
    },
    flex: {
        flex: 1,
    },

    topnavigator: {
        flex: 1, backgroundColor: "#fff",

    }

});