/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";

import { isSignedIn } from "./src/global/auth";
import { createRootNavigator } from "./src/global/router";
import { ToastAndroid } from "react-native";

var PushNotification = require("react-native-push-notification");

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function(token) {
    //alert('test');
    console.log("+++++++++++++ FULL TOKEN:", token);
    //saveNotifToken(token.token).then(() => console.log("TOKEN:", token.token));
  },

  // (required) Called when a remote or local notification is opened or received
  onNotification: function(notification) {
    console.log("NOTIFICATION:", notification);

    setTimeout(() => {
      if (!notification["foreground"]) {
        ToastAndroid.show("You've clicked!", ToastAndroid.SHORT);
      }
    }, 1);

    PushNotification.localNotificationSchedule({
      //... You can use all the options from localNotifications
      message: notification["name"], // (required)
      date: new Date(Date.now() + 60 * 1000) // in 60 secs
    });
  },

  // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
  senderID: "1067901696506",
  popInitialNotification: true,
  requestPermissions: true
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;
    //If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}
