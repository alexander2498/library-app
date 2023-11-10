import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function ButtonView({title, onPress}) {
  return(
    <View style={styles.container} >
      <TouchableOpacity style={styles.button} onPress={onPress} >
          <Text style={styles.text} >{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: "center",
    width: 80,
  },
  text: {
    color: 'white',
  },
  container: {
    marginVertical: 10,
  }
})