import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Form from "./src/screens/formNativeBase";
import Hello from "./src/screens/hello";
import IncDec from "./src/screens/incDec";
import { Ionicons } from "@expo/vector-icons";
import "react-native-gesture-handler";
import { useTheme } from "native-base";
import ListSoc from "./src/screens/listSoc";
import DetailSoc from "./src/screens/detailSoc";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  const theme = useTheme()
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "black",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if(route.name === "Form") {
            iconName = focused ? "book" : "book-outline"
          } else if(route.name === "IncDec") {
            iconName = focused ? "add-circle" : "add-circle-outline"
          }

          return <Ionicons name={iconName} size={24} color={theme.colors.amber["500"]} />
        },
      })}
    >
      <Tab.Screen name="Home" component={ListSoc} />
      <Tab.Screen name="Form" component={Form} />
      <Tab.Screen name="IncDec" component={IncDec} />
    </Tab.Navigator>
  );
}

function Container() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={MyTabs}
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
        <Stack.Screen
          name="Detail Social Media"
          component={DetailSoc}
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
