import Omikuji from "./src/screens/omikuji";
import Result from "./src/screens/result";
import { createStackNavigator } from "react-navigation";

export default createStackNavigator({
  Omikuji: {
    screen: Omikuji
  },
  Result: {
    screen: Result
  }
});
