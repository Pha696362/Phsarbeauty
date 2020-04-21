import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/FontAwesome";
import _styles from "../_styles";
import modules from "../modules";
import DetailContainer from "../screens/Detail/DetailContainer";
import SearchTabContainer from "../screens/Search/SearchTabContainer";
import SaveTabContainer from "../screens/Save";
import SettingTabContainer from "../screens/Setting/SettingTabContainer";
import HomeContainer from "../screens/Home";
import DetailContainerNotificaiton from "../screens/Detail/DetailContainer";
import HomeTopTabRoute from "./HomeTopTabRoute";
import SaveContainer from "../screens/Save";
import CategoryTabContainer from "../screens/Category/CategoryTabContainer";

const TabNavigation = createBottomTabNavigator(
  {
    
    HomeTab: HomeTopTabRoute,
    Category: CategoryTabContainer,
    Save: SaveContainer,
    Setting: SettingTabContainer,
     
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOnPress: ({ defaultHandler }) => {
        defaultHandler();
      },
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName: any;
        let labelName: any;
        if (routeName === "HomeTab") {
          
          iconName = "globe";
          labelName = "News";
        }
        else if (routeName === "Category") {
          iconName = "th-large";
          labelName = "Category";
        } 
       
        else if (routeName === "Save") {
          iconName = "star-o";
          labelName = "Save";
        }
        else if (routeName === "Setting") {
          iconName = "info";
          labelName = "Info";
        }
        return (
          <View style={_styles.iconTabContainer}>
            {
              iconName =="Menu" 
              ?
              <Icons
              name={"info-circle"}
              size={focused ? 24 : 24}
              color={`${tintColor}`} 
            />
              :
              <Icon
              name={iconName}
              size={focused ? 24 : 24}
              color={`${tintColor}`}
            />}
             <Text style={focused ? _styles.labelTabActive : _styles.labelTab}>
              {labelName}
            </Text>
          </View>
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: '#CE1026',
      inactiveTintColor:modules.SUB_TEXT,
      showLabel: false,
      style: {
        elevation: 0,
        borderTopWidth: 1,
        borderTopColor: "#F0F0F5",
        backgroundColor: "#fff",
        height: 50,
        paddingTop: 5,
        marginBottom:10,

      }
    }
  }
);
const APP = createStackNavigator(
  { 
    
    MainTab: TabNavigation,
    Detail: DetailContainer, 
    DetailNotification:DetailContainerNotificaiton,
    Search:SearchTabContainer

  },
    
  {
    headerMode: "none"
  },


);
export default createAppContainer(APP);
