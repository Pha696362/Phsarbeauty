import * as React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity,SafeAreaView, ScrollView, StatusBar  } from "react-native";
import modules from "../../modules";
import Icon from "react-native-vector-icons/Feather";
import FastImage from "react-native-fast-image";
import CardSearch from "../../components/CardSearch";
import _styles from "../../_styles";
interface Props {
  searchText: string;
  onTextSearch: (text: string) => void;
  searchData: any;
  goBack: any
  onDetail: any
}

export default ({onDetail, searchText, onTextSearch, searchData, goBack }: Props) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor:modules.WHITE}}>
      <StatusBar barStyle={'light-content'}/>
        <View style={[_styles.rows,{paddingHorizontal: modules.PADDING12,paddingTop: modules.PADDING,}]}>
          <TouchableOpacity onPress={goBack}>
            <Icon style={styles.headIcon} name="chevron-left" />
          </TouchableOpacity>
          <View style={{ flex: 1, }}>
            <TextInput
              autoCapitalize="none"
              autoFocus={true}
              style={styles.textInput}
              placeholder="Search your article here...!"
              value={searchText}
              onChangeText={text => onTextSearch(text)}
            />
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.content}>


        {/* <View style={styles.title}>
          <Text style={styles.FontTitle}>Recent Search:</Text>
        </View> */}
        <ScrollView>
          {searchData.length > 0 ? (
            searchData.map((i: any, index: any) => {
              return <CardSearch key={index} img={i.fileUrl} title={i.name} onDetail={()=>onDetail(i)} />;
            })
          ) : (
              <View style={styles.IMG}>
                <FastImage
                  style={{ height: 200, width: 200, opacity: 0.5 }}
                  source={require("../../images/search.jpg")}
                />
                <Text >មិនមានទិន្នន័យ</Text>
              </View>
            )}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headIcon: {
    fontSize: modules.AVATAR28,
    color: '#333',
    paddingRight: modules.PADDING12,
  },
  IMG: {
    alignItems: "center",
    marginTop: 120
  },
  FontTitle: {
    fontSize: modules.FONT_H6,
    color: modules.TEXT
  },
  title: {
    marginTop: modules.PADDING,
  },
  container: {
    flex: 1,
    backgroundColor: modules.WHITE,
  },
  content: {
    flex: 1,
    backgroundColor: modules.WHITE,
    paddingHorizontal: modules.PADDING20 - 2,
    paddingTop: modules.PADDING
  },
  textInput: {
    margin: 0,
    paddingHorizontal: modules.PADDING12,
    backgroundColor: modules.WHITE,
    height: 40,
    // borderRadius: modules.PADDING8,
    borderBottomWidth:0.50,
    borderBottomColor:modules.TEXT,
    fontSize: modules.FONT,
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 1
  //   },
  //   shadowOpacity: 0.1,
  //   shadowRadius: 1.41,
  //   elevation: 1,
  //   borderWidth: 0.3,
  //   borderColor: modules.BORDER,
   }
});

