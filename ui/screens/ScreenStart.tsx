import {StyleSheet, Text, View} from "react-native";
import ButtonView from "../buttons/ButtonView";
import {useState} from "react";
import CompCard from "../components/CompCard";

export default function ScreenStart({navigation}) {
  const [books, setBooks] = useState([])
  const onListPressed = () => {
    fetch("http://localhost:3000/api/v1/books")
      .then(r => r.json())
      .then(r => setBooks(r))
  }

  const renderedBooks = books.map(book => <CompCard
    key={book.id}
    year_of_publication={book.year_of_publication}
    author={book.author}
    title={book.title}
    id={book.id}
  />)


  return (
    <View style={styles.container}>
      <ButtonView title={'list'} onPress={onListPressed}/>
      <ButtonView title={'create'} onPress={() => navigation.navigate('create')} />
      {renderedBooks}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  }
})