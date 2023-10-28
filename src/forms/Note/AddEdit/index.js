// LIBs
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// COMPONENTs
import Input from "../../../components/Input";

export default props => {
  const [ title, setTitle ] = useState(props.data.title || "");
  const [ description, setDescription ] = useState(props.data.description || "");

  function send() {
    if (title.trim() && description.trim()) {
      if (props.data.id && props.onSendEdit) {
        props.onSendEdit({ ...props.data, title, description });
      }

      if (!props.data.id && props.onSendAdd) {
        props.onSendAdd(title, description);
      }
    }
  }

  return (
    <View styles={styles.form}>
      <Input 
        label="Título da anotação" 
        placeholder="Ex: Comprar Livro"
        value={title}
        onText={title => setTitle(title)}
        style={styles.Input}
      />
      <Input 
        type="textarea"
        label="Descrição da anotação" 
        placeholder="Ex: Indo até a livraria..."
        value={description}
        onText={description => setDescription(description)}
        style={styles.Input}
      />
      <TouchableOpacity 
        onPress={send}
        style={styles.button} 
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>
          { (props.data && props.data.id) ?
              "Editar"
            :
              "Adicionar"
          }
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    gap: 20,
  },
  Input: {
    marginBottom: 20,
  },  
  button: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#1CE700",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: 600
  }
});
