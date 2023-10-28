// LIBs
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const statusHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 64;

export default props => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <View style={styles.headerIcon}>
          <FontAwesome 
            name="sticky-note" 
            size={32} 
            color="#FFF" 
          />
        </View>

        <Text style={styles.headerText}>NoteFree</Text>
      </View>

      <View style={styles.headerPage}>
        <Text style={styles.headerPageName}>{props.name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: statusHeight,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#0AC500",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 600,
    color: "#08A300",
  },
  headerPage: {
    marginLeft: 20,
  },
  headerPageName: {
    fontSize: 18,
    fontWeight: 600,
    color: "#08A300",
  }
});
