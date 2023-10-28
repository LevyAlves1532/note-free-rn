// LIBs
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

// COMPONENTs
import Header from "../../components/Header";

// CONTAINERs
import ListHomeContainer from "../../containers/Home/List";

// SELECTORs
import { listNotes } from "../../core/reducers/notesReducer/selectors";

// ACTIONs
import { delNotes } from "../../core/reducers/notesReducer/actions";

function Home(props) {
  function deleteNote(note) {
    props.delNotes(note);
  }

  return (
    <View style={styles.contentHome}>
      <Header name={props.route.name} />

      <View 
        style={styles.body}
      >
        <ListHomeContainer 
          data={props.notes} 
          onDelNote={deleteNote} 
          onEditNote={note => props.navigation.navigate("Note", { ...note })}
        />
      </View>

      <TouchableOpacity 
        onPress={() => props.navigation.navigate("Note")}
        activeOpacity={0.7} 
        style={styles.button}
      >
        <Feather 
          name="plus" 
          size={32} 
          color="#08A300" 
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  contentHome: {
    flex: 1,
    backgroundColor: "#1CE700",
  },
  body: {
    flex: 1,
    backgroundColor: "#0AC500",
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#1CE700",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 20,
    bottom: 40,
  },
  buttonIcon: {

  },
});

const mapStateToProps = state => ({
  notes: listNotes(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  delNotes,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);