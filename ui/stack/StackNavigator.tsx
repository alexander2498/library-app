import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ScreenStart from "../screens/ScreenStart";
import ScreenCreate from "../screens/ScreenCreate";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name='start' component={ScreenStart} />
      <Stack.Screen name='create' component={ScreenCreate} />
    </Stack.Navigator>
  )
}