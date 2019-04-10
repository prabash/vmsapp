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
import { onSignIn } from "../../global/auth";
import { login } from "../../services/login-service";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  getUsername = _username => {
    this.setState({ username: _username });
  };
  getPassword = _password => {
    this.setState({ password: _password });
  };

  loginUser = () => {
    var res = login(this.state.username, this.state.password);
    console.log(res);
    this.props.navigation.navigate("SignedIn");
  };

  render() {
    return (
      <ImageBackground
        source={require("../../images/background.png")}
        style={{ width: "100%", height: "100%"}}
      >
        <View style={styles.container}>
          <StatusBar translucent />
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../../images/Welcome.png")}
            />
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
                  onChangeText={value => this.getUsername(value)}
                  onSubmitEditing={() => this.passwordInput.focus()}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
              <View style={styles.inputContainer}>
                <Icon
                  name="lock"
                  type="material"
                  style={styles.inputIcon}
                  color={global.foregroundColor}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  onChangeText={value => this.getPassword(value)}
                  placeholderTextColor={global.foregroundColor}
                  secureTextEntry
                  returnKeyType="go"
                  ref={input => (this.passwordInput = input)}
                />
              </View>
              <TouchableOpacity
                style={styles.signInBtnContainer}
                onPress={() => {
                  this.loginUser();
                }}
              >
                <Text style={styles.signInBtnText}>SIGN IN</Text>
              </TouchableOpacity>

              <View style={{ alignItems: "flex-end" }}>
                <TouchableOpacity
                  style={styles.fgtPasswordContainer}
                  onPress={() =>
                    this.props.navigation.navigate("ForgotPassword")
                  }
                >
                  <Text style={styles.fgtPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
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
  logoContainer: {
    alignItems: "center",
    flexGrow: 0.75,
    justifyContent: "center"
  },
  logo: {
    width: 220,
    height: 62
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
  signInBtnContainer: {
    backgroundColor: global.accentColor,
    height: 40,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 10,
    width: 320
  },
  signInBtnText: {
    textAlign: "center",
    color: global.accentOffsetColor,
    fontSize: 16,
    fontWeight: "200"
  },
  fgtPasswordContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  fgtPasswordText: {
    color: global.foregroundColor,
    fontWeight: "100"
  }
});
