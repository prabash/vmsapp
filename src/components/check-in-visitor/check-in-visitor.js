import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  ImageBackground
} from "react-native";
import { Icon } from "react-native-elements";
import { registerUserToken } from "../../services/notification-service";
import { checkinVisitor } from "../../services/checkin-service";

export default class CheckInVisitor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(" +++++ CHECKIN NOTIF TOKEN " + global.notifToken);
    registerUserToken("Steven", global.notifToken).then(res => {
      // get the service data
      const serviceData = res.data;
      console.log("+++  REGISTER DEVICE RESPONSE : " + serviceData);
    });
  }

  checkinVisitor = () => {
    checkinVisitor("Steven", "Visitor 1")
    alert("Visitor Checked-In");
  };

  render() {
    return (
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Check-In User</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.loginFormContainer}>
            <StatusBar barStyle="light-content" />
            <View style={styles.inputContainer}>
              <Icon
                name="person"
                type="material"
                style={styles.inputIcon}
                color={global.foregroundColor}
              />
              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor={global.foregroundColor}
                returnKeyType="next"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name="email"
                type="material"
                style={styles.inputIcon}
                color={global.foregroundColor}
              />
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor={global.foregroundColor}
                secureTextEntry
                returnKeyType="go"
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name="call"
                type="material"
                style={styles.inputIcon}
                color={global.foregroundColor}
              />
              <TextInput
                style={styles.input}
                placeholder="Contact No"
                placeholderTextColor={global.foregroundColor}
                secureTextEntry
                returnKeyType="go"
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name="domain"
                type="material"
                style={styles.inputIcon}
                color={global.foregroundColor}
              />
              <TextInput
                style={styles.input}
                placeholder="Company Name"
                placeholderTextColor={global.foregroundColor}
                secureTextEntry
                returnKeyType="go"
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name="face"
                type="material"
                style={styles.inputIcon}
                color={global.foregroundColor}
              />
              <TextInput
                style={styles.input}
                placeholder="Person to Meet"
                placeholderTextColor={global.foregroundColor}
                secureTextEntry
                returnKeyType="go"
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name="face"
                type="material"
                style={styles.inputIcon}
                color={global.foregroundColor}
              />
              <TextInput
                style={styles.input}
                placeholder="Purpose"
                placeholderTextColor={global.foregroundColor}
                secureTextEntry
                returnKeyType="go"
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name="card-travel"
                type="material"
                style={styles.inputIcon}
                color={global.foregroundColor}
              />
              <TextInput
                style={styles.input}
                placeholder="Carry In Items"
                placeholderTextColor={global.foregroundColor}
                secureTextEntry
                returnKeyType="go"
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name="time-to-leave"
                type="material"
                style={styles.inputIcon}
                color={global.foregroundColor}
              />
              <TextInput
                style={styles.input}
                placeholder="Car License Plate"
                placeholderTextColor={global.foregroundColor}
                secureTextEntry
                returnKeyType="go"
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name="portrait"
                type="material"
                style={styles.inputIcon}
                color={global.foregroundColor}
              />
              <TextInput
                style={styles.input}
                placeholder="Visitor Badge No."
                placeholderTextColor={global.foregroundColor}
                secureTextEntry
                returnKeyType="go"
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name="people"
                type="material"
                style={styles.inputIcon}
                color={global.foregroundColor}
              />
              <TextInput
                style={styles.input}
                placeholder="No. of Pax"
                placeholderTextColor={global.foregroundColor}
                secureTextEntry
                returnKeyType="go"
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name="event"
                type="material"
                style={styles.inputIcon}
                color={global.foregroundColor}
              />
              <TextInput
                style={styles.input}
                placeholder="Check-In Date"
                placeholderTextColor={global.foregroundColor}
                secureTextEntry
                returnKeyType="go"
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name="access-time"
                type="material"
                style={styles.inputIcon}
                color={global.foregroundColor}
              />
              <TextInput
                style={styles.input}
                placeholder="Check-In Time"
                placeholderTextColor={global.foregroundColor}
                secureTextEntry
                returnKeyType="go"
              />
            </View>
            <TouchableOpacity
              style={styles.checkInBtnContainer}
              onPress={() => {
                this.checkinVisitor();
              }}
            >
              <Text style={styles.checkInBtnText}>CHECK IN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: global.backgroundColor
  },
  headerContainer: {
    backgroundColor: "#187F73",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  header: {
    fontSize: 30,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    margin: 10
  },
  formContainer: {
    flexGrow: 2
  },
  loginFormContainer: {
    flex: 1,
    backgroundColor: global.backgroundColor,
    alignItems: "center",
    padding: 20
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: global.borderColor,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
    height: 40,
    width: 320
  },
  inputIcon: {
    paddingLeft: 5
  },
  input: {
    flex: 1,
    color: global.borderColor,
    paddingLeft: 5
  },
  checkInBtnContainer: {
    backgroundColor: global.accentColor,
    height: 40,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 10,
    width: 320
  },
  checkInBtnText: {
    textAlign: "center",
    color: global.accentOffsetColor,
    fontSize: 16,
    fontWeight: "200"
  }
});
