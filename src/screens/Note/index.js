// LIBs
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// COMPONENTs
import Header from "../../components/Header";

// FORMs
import FormNoteAddEdit from "../../forms/Note/AddEdit";

// ACTIONs
import { addNotes, editNotes } from "../../core/reducers/notesReducer/actions";

function Note(props) {
  function add(title, description) {
    props.addNotes({ id: Math.random(), title, description, date: new Date().toString() });
    props.navigation.goBack();
  }

  function edit(note) {
    props.editNotes(note);
    props.navigation.goBack();
  }

  return (
    <View style={styles.contentNote}>
      <Header name={props.route.name} />

      <View style={styles.body}>
        <FormNoteAddEdit 
          data={props.route.params || {}} 
          onSendAdd={add} 
          onSendEdit={edit}
        />
      </View>

      <TouchableOpacity 
        onPress={props.navigation.goBack}
        style={styles.button}
      >
        <FontAwesome 
          style={styles.buttonIcon}
          name="angle-left" 
          size={32} 
          color="#08A300" 
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  contentNote: {
    flex: 1,
    backgroundColor: "#1CE700",
  },
  body: {
    flex: 1,
    backgroundColor: "#0AC500",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  button: {
    width: 60,
    height: 60,
    borderTopRightRadius: 40,
    backgroundColor: "#1CE700",
    position: "absolute",
    bottom: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonIcon: {
    marginLeft: -10,
  }
});

const mapDispatchToProps = dispacth => bindActionCreators({
  addNotes,
  editNotes,
}, dispacth);

export default connect(null, mapDispatchToProps)(Note);
