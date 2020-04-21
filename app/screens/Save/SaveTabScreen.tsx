
import * as React from "react";
import { View, StyleSheet, Text, ActivityIndicator, Alert, StatusBar } from "react-native";
import modules from "../../modules";
import { SafeAreaView, FlatList } from "react-navigation";
import FastImage from "react-native-fast-image";
import BookmarkCard from "../../components/BookmarkCard";
import HeaderDetail from "../../components/HeaderDetail";
import HeaderMain from "../../components/HeaderMain";
import { keys } from "mobx";
import HeaderSave from "../../components/HeaderSave";
interface Props {
  data: any,
  progress: boolean,
  onDetail: (item: any) => void
  onDelete: () => void
  onUnsave:any
  onShare:any
}

export default ({ data, progress, onDetail, onDelete,onUnsave,onShare }: Props) => {

  return (
    <View style={styles.container}>

      <SafeAreaView style={{backgroundColor:modules.WHITE}}/>

      <StatusBar barStyle='dark-content' backgroundColor="#ffffff" />
      

      <HeaderSave title="Saved stories" onDelete={

        !data || data.length == 0 ?
          null
          :
          () => {
            Alert.alert(
              'Remove all',
              'Are you sure for remove all contents?',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                { text: 'OK', onPress: () => { onDelete() } },
              ],
              { cancelable: false },
            );


          }} />
      {
        progress ?
          <ActivityIndicator />
          :
          !data || data.length == 0 ?
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#fff' }}>

              <FastImage
                resizeMode={FastImage.resizeMode.contain}
                style={styles.ImgSearch}
                
                source={require('../../images/bookmark.png')}
              />
              <View style={{marginBottom:250}}>
              <Text style={styles.text}>Save some articles and
             </Text>
              <Text style={styles.text}>Help me feel complete
             </Text>
              </View>
             
            </View>

            :
          
              <FlatList
                 data= {data}
                 renderItem={(item:any) => {
                 const data = JSON.parse(item.item.data)
                //  console.log('item.item', item.item)

                  return (
                    <BookmarkCard data={data} onClick={() => onDetail(data)} onUnSave={onUnsave} onShare={onShare}/>
                  )


                }}
              />


      }

    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize:20,
    color: modules.SUB_TEXT,
  },
  container: {
    flex: 1,
    backgroundColor: modules.WHITE,

  },
  content: {
    // flex: 1,
    backgroundColor: modules.WHITE,
    alignItems: "center",
    justifyContent: "center",


  },
  ImgSearch: {
    width: modules.VIEW_PORT_WIDTH ,
    height: modules.VIEW_PORT_HEIGHT /6,
  
    
  }
});
