import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, FlatList } from "react-native";
import modules from "../../modules";
import { SafeAreaView, ScrollView } from "react-navigation";
import FastImage from "react-native-fast-image";
import More from 'react-native-vector-icons/MaterialIcons';
import Share from 'react-native-vector-icons/Feather'
import DetailWebView from "../../components/DetailWebView";
import { _formatDateTime, _formatShortDate } from "../../services/datetime.service";
import Icons from 'react-native-vector-icons/Ionicons'
import { useState } from "react";
import CardRelated from "../../components/CardRelated";
import { addAdsInArray } from "../../services/mapping.service";
import { BattambangBold, Battambang } from "../../../functions/customFont";
import CardNewsFix from "../../components/CardNewsFix";
interface Props {
  onClickBack: () => void;
  selectedContent: any;
  onSave: any
  onUnSave: any
  saveData: boolean;
  onShare: any
  onPress: (item: any) => void
  relatedContentData: any
}
interface State { }
export default ({ onClickBack, selectedContent, saveData, onUnSave, onSave, onPress, onShare, relatedContentData }: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor="#ffff" />
      <SafeAreaView />
      <View style={styles.headerDetail}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={onClickBack}>
          <Icons style={styles.arrow} name='ios-arrow-back' />
          <Text style={{ fontSize: 14, ...BattambangBold, color: 'black' }}>{selectedContent.category.name}</Text>
        </TouchableOpacity>

        <View style={styles.TouchableOpacity}>
          {
            saveData ?
              <TouchableOpacity onPress={() => onUnSave()}>
                <More name="bookmark" style={[styles.More_Icon, { marginHorizontal: 18 }]} />
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => onSave()}>
                <More name="bookmark-border" style={[styles.More_Icon, { marginHorizontal: 18 }]} />
              </TouchableOpacity>
          }
          <TouchableOpacity onPress={() => { onShare() }}>
            <Share name="share" style={styles.Share} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.content}
        showsVerticalScrollIndicator={false}>
        <FastImage
          resizeMode={FastImage.resizeMode.cover}
          style={styles.ImgCover}
          source={{
            uri: String(selectedContent.fileUrl)
          }} />
        <View style={styles.TextArea}>
          <Text style={styles.text}>
            {selectedContent.name}
          </Text>
          <Text style={styles.Date}>
            ថ្ងៃទី{" "}
            {selectedContent.create_date
              ? _formatShortDate(selectedContent.create_date.seconds)
              : ""}
          </Text>
        </View>
        <View style={styles.WebView}>
          <DetailWebView html={selectedContent.editname} />
        </View>
        <View style={styles.centerMode}>
          <View style={styles.viewtext} />
          <Text style={styles.TextDate}>RELATED STORIES</Text>
          <View style={styles.viewtext} />
        </View>
        <View style={{ flex: 1, marginHorizontal: modules.BIG_SPACE + 2 }}>
          <FlatList
            data={relatedContentData}
            showsVerticalScrollIndicator={false}
            keyExtractor={(i, index) => index.toString()}
            renderItem={({ item }: any) => {
              if (item.key == selectedContent.key) return (<View />)
              return (
                <CardRelated
                  key={item.key}
                  data={item}
                  onPress={() => onPress(item)}
                />
              );
            }}

          />
        </View>
      </ScrollView>
    </View>
  );

};
const styles = StyleSheet.create({
  TouchableOpacity: {
    flexDirection: 'row',
    padding: 5
  },
  arrow: {
    fontSize: 30,
    color: 'black',
    padding: 10,
  },
  WebView: {
    marginTop: 12
  },
  BorderLine: {
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 3,
    width: modules.VIEW_PORT_WIDTH / 4,
    marginTop: modules.PADDING
  },
  Date: {
    fontSize: modules.FONT_P,
    marginTop: modules.SPACE5,
    color: modules.SUB_TEXT
  },
  Writer: {
    fontSize: modules.FONT_P,
    marginTop: modules.SPACE5,
    ...Battambang
  },
  TextArea: {
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    paddingTop: modules.PADDING,
    backgroundColor: '#fff'
  },
  text: {
    fontSize: modules.FONT_H5,
    color: '#000',
    ...BattambangBold,

  },
  container: {
    flex: 1,
    backgroundColor: modules.WHITE
  },
  content: {
    flex: 1,
    backgroundColor: modules.WHITE
  },
  ImgCover: {
    width: modules.VIEW_PORT_WIDTH,
    height: modules.VIEW_PORT_HEIGHT / 3
  },
  More_Icon: {
    fontSize: 24,
    padding: 6,
    color: 'black'

  },
  Share: {
    fontSize: 20,
    padding: 6,
    color: 'black',
  },
  headerDetail: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: modules.WHITE,
    height: 50
  },
  modalContainer: {
    flex: 1,
    margin: 0,
    justifyContent: 'flex-end',
  },
  modal: {
    width: modules.VIEW_PORT_WIDTH,
    height: modules.VIEW_PORT_HEIGHT / 4.5,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  bodysave: {
    height: 5,
    width: 60,
    borderRadius: 5,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    margin: 6
  },
  savestyles: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: 'rgba(0,0,0,0.1)'
  },
  icon: {
    fontSize: 30,
    margin: 16
  },

  text1: {
    color: modules.TEXT_NOTE,
    fontSize: 16,
  },
  Desc: {
    fontSize: 12,
    color: modules.TEXT_NOTE,
  },
  centerMode: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: modules.PADDING,
    marginVertical: 10
  },
  TextDate: {
    ...BattambangBold,
    color: modules.RED,
    fontSize: modules.FONT_S,
    marginHorizontal: 10
  },
  viewtext: {
    flexDirection: 'row',
    height: 1,
    backgroundColor: modules.TEXT_NOTE,
    width: modules.VIEW_PORT_WIDTH / 3.5
  }

});

