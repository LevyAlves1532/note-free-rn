// LIBs
import { View, Text, StyleSheet, TouchableHighlight } from "react-native"
import { FontAwesome } from "@expo/vector-icons";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";

export default props => {
  function getLeftContent() {
    return (
      <View style={styles.contentDelete}>
        <View style={styles.deleteIcon}>
          <FontAwesome name="trash" size={32} color="#FFF" />
        </View>
      </View>
    )
  }

  function deleteNoteLeft(direction) {
    if (direction === "left") {
      props.onDel && props.onDel();
    }
  }

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderLeftActions={getLeftContent}
        onSwipeableOpen={deleteNoteLeft}
      >
        <TouchableHighlight 
          style={[styles.contentNote, props.style]} 
          underlayColor="#0AC500"
          onPress={props.onEdit || null}
        >
          <>
            <View>
              <Text style={styles.noteTitle}>{props.title}</Text>

              <Text style={styles.noteDate}>{props.date}</Text>
            </View>

            <View>
              <FontAwesome 
                name="sticky-note" 
                size={32} 
                color="#FFF" 
              />
            </View>
          </>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  contentNote: {
    backgroundColor: "#08A300",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    padding: 20,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 10,
    color: "#FFF",
  },
  noteDate: {
    fontSize: 14,
    color: "#DDD",
  },
  contentDelete: {
    flex: 1,
    backgroundColor: "#FF0000",
  },
  deleteIcon: {
    width: 60,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  }
});
