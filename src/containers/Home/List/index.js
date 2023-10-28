// LIBs
import { View, FlatList, StyleSheet } from "react-native";

// COMPONENTs
import Note from "../../../components/Note";

// HELPERs
import dateText from "../../../core/helpers/dateText";

export default props => {
  return (
    <View>
      <FlatList 
        data={props.data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Note 
            title={item.title}
            onDel={() => props.onDelNote(item) || null}
            onEdit={() => props.onEditNote(item) || null}
            date={dateText(item.date, "{day} de {month_name} de {year} as {hours}h{minutes}")}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({

});
