import { action } from "mobx";
import {
  notificationsRef,
  initialMessaging
} from "../services/messaging.service";
import firebase from "react-native-firebase";
import AsyncStorage from "@react-native-community/async-storage";
import { fieldArrayValue, userObject } from "../services/mapping.service";
import { NavigationScreenProp } from "react-navigation";
import { ContentRef } from "../services/data.service";
// import { batchRef, createId, employeeRef } from "../services/data.service";

export default class MessagingStore {
  notificationOpen: any = null;
  notificationOpenedListener: any = null;
  notificationListener: any = null;
  notificationListenerDisplay: any = null;
  messageListener: any = null;
  fcmToken: any = null;

  @action
  async checkPermission() {
    this.fcmToken = await initialMessaging();
  }


  @action
  async initialNotification(navigation: NavigationScreenProp<any>) {
    this.notificationListener = notificationsRef().onNotification((notification) => {
      // console.log("onNotification", notification)
      const { title, body, key } = notification.data;
      this.showNotification(notification.data);

      if (key) {
        ContentRef().doc(key).get().then((item: any) => {
          const data = item.data();
          navigation.navigate('Detail', { DATA: data })
        })
      }
    })

    this.notificationOpenedListener = notificationsRef().onNotificationOpened((notificationOpen) => {
      // console.log("Detail", notificationOpen)
      const { title, body, key } = notificationOpen.notification.data;
      if (key) {
        ContentRef().doc(key).get().then((item: any) => {
          const data = item.data();
          navigation.navigate('Detail', { DATA: data })
        })
      }
    });
    const notificationOpen = await notificationsRef().getInitialNotification();
    if (notificationOpen) {
      // console.log("getInitialNotification", notificationOpen)
      const { title, body, key } = notificationOpen.notification.data;
      if (key) {
        ContentRef().doc(key).get().then((item: any) => {
          const data = item.data();
          navigation.navigate('Detail', { DATA: data })
        })
      }
    }
    firebase.messaging().subscribeToTopic(`cambodianews`);
    this.messageListener = firebase.messaging().onMessage((message) => {
      const { title, body, key } = message.data;
      // console.log('message', message)
      this.showNotification(message.data);
    });
  }



  @action
  async setUserToken() {
    let fcmToken = await AsyncStorage.getItem("fcmToken");
    // console.log('fcmToken', fcmToken);
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        await AsyncStorage.setItem("fcmToken", fcmToken);
      }
    }
  }

  // @action
  // async initialNotification() {
  //   // this.notificationListenerDisplay = await notificationsRef().onNotificationDisplayed((notification) => {
  //   // 	const { data } = notification;
  //   // 	console.log('data', data)
  //   // 	this.showNotification(data);
  //   // });

  //   this.notificationListener = await notificationsRef().onNotification(
  //     notification => {
  //       const { data } = notification;
  //       this.showNotification(data);
  //     }
  //   );

  //   // this.notificationOpenedListener = notificationsRef().onNotificationOpened((notificationOpen) => {
  //   // 	const { title, body } = notificationOpen.notification;
  //   // 	this.showNotification(title, body);
  //   // });
  //   // const notificationOpen = await notificationsRef().getInitialNotification();
  //   // if (notificationOpen) {
  //   // 	const { title, body } = notificationOpen.notification;
  //   // 	this.showNotification(title, body);
  //   // }
  //   firebase.messaging().subscribeToTopic("bakseynews");
  //   this.messageListener = firebase.messaging().onMessage(message => {
  //     const { data } = message;
  //     console.log("data", data);
  //     // console.log('title,body', message);
  //     this.showNotification(data);
  //   });
  // }

  @action
  showNotification(data: any) {
    const { title, body, key } = data;
    const notification = new firebase.notifications.Notification()
      .setNotificationId("notificationId")
      .setTitle(title)
      .setBody(body)
      .setData({
        key: key
      });
    firebase.notifications().displayNotification(notification);
  }

  @action
  stopListener() {
    if (this.notificationOpenedListener) this.notificationOpenedListener();
    if (this.notificationListener) this.notificationListener();
    if (this.notificationOpen) this.notificationOpen();
    if (this.messageListener) this.messageListener();
  }
}
