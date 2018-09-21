import Omikuji from "./screens/omikuji";
import Result from "./screens/result";
import { createStackNavigator } from "react-navigation";

export default createStackNavigator({
  Omikuji: {
    screen: Omikuji
  },
  Result: {
    screen: Result
  }
});
