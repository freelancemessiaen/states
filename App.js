import { Image, View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Human } from "./Human/Human";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Human firstName={"peter"} name={"plouit"} age={4}>
          <Text style={{ fontSize: 40 }}>Bonjour</Text>
        </Human>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
