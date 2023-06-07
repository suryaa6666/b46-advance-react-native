import { NativeBaseProvider, extendTheme } from "native-base";

import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/dev";
import Container from "./Container";
import { ActivityIndicator, Text } from "react-native";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const fontConfig = {
    Poppins: {
      400: "Poppins_400Regular",
    },
    PoppinsBold: {
      400: "Poppins_700Bold",
    },
  };

  const customeColor = {
    surya: {
      100: "#0079FF",
      200: "#00DFA2",
      300: "#F6FA70",
      400: "#FF0060",
    },
  };

  const theme = extendTheme({
    colors: customeColor,
    fontConfig: fontConfig,
    fonts: {
      head: "PoppinsBold",
      body: "Poppins",
      mono: "Poppins",
    },
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size={100} />;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <Container />
      </NativeBaseProvider>
    );
  }
}
