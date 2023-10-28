// LIBs
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

// ROUTEs
import Stack from "./src/core/routes/Stack";

// STORE
import { store, persistor } from "./src/core/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
