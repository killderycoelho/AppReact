import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

import Routes from "./src/pages";

AppRegistry.registerComponent(appName, () => Routes);
