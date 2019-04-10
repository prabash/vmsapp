import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import Login from "../components/login/login";
import Home from "../components/home/home";
import CheckInVisitor from "../components/check-in-visitor/check-in-visitor"

export const SignedOut = createStackNavigator(
  {
    Login: Login
  },
  {
    defaultNavigationOptions: {
      headerVisible: false
    }
  }
);

export const SignedIn = createStackNavigator(
  {
    CheckInVisitor: CheckInVisitor,
    Home: Home
  },
  {
    defaultNavigationOptions: {
      tabBarLabel: "Home",
      header: null
    }
  }
);

export const createRootNavigator = (signedIn = false) => {
  return createAppContainer(
    createSwitchNavigator(
      {
        SignedIn: {
          screen: SignedIn
        },
        SignedOut: {
          screen: SignedOut
        }
      },
      {
        initialRouteName: signedIn ? "SignedIn" : "SignedOut"
      }
    )
  );
};
