import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Form from "./src/screens/formNativeBase";
import Hello from "./src/screens/hello";
import IncDec from "./src/screens/incDec";
import "react-native-gesture-handler";

function Container() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Hello}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen
          name="IncDec"
          component={IncDec}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// <View>
//   <Text color={"surya.200"} fontSize={100} fontFamily={"body"}>
//     Bismillah
//   </Text>
// </View>
export default Container;
