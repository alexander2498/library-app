import {StyleSheet, Text, TextInput, View} from "react-native";

export default function CompForm({title, value, onChange}) {
  return (
    <View>
      <Text>{title}</Text>
      <TextInput
        value={value}
        style={styles.input}
        onChangeText={onChange}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})