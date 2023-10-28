// LIBs
import { View, Text, TextInput, StyleSheet } from "react-native";

export default props => {
  switch(props.type) {
    case "textarea":
      return (
        <View style={props.style}>
         <Text style={styles.inputLabel}>{props.label}</Text>
     
         <TextInput 
           style={styles.inputTextArea} 
           placeholder={props.placeholder}
           value={props.value}
           onChangeText={props.onText}
           multiline
           placeholderTextColor="#08A300"
           textAlignVertical="top"
           {...props.textarea}
         />
        </View> 
       )
    default:
      return (
        <View style={props.style}>
          <Text style={styles.inputLabel}>{props.label}</Text>
      
          <TextInput 
            style={styles.inputText} 
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.onText}
            placeholderTextColor="#08A300"
            {...props.input}
          />
        </View> 
      )
  }
}

const styles = StyleSheet.create({
  inputLabel: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 10,
    color: "#FFF",
  },
  inputText: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#1CE700",
    fontSize: 18,
    color: "#08A300"
  },
  inputTextArea: {
    height: 200,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#1CE700",
    fontSize: 18,
    color: "#08A300",
  }
});
