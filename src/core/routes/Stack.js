// LIBs
import { createStackNavigator } from "@react-navigation/stack";

// SCREENs
import Home from "../../screens/Home";
import Note from "../../screens/Note";

const StackNav = createStackNavigator();

function Stack() {
  return (
    <StackNav.Navigator 
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNav.Screen name="Home" component={Home} />
      <StackNav.Screen name="Note" component={Note} />
    </StackNav.Navigator>
  )
}

export default Stack;