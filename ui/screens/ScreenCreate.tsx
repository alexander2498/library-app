import {StyleSheet, View} from "react-native";
import ButtonView from "../buttons/ButtonView";
import CompForm from "../components/CompForm";
import {useEffect, useState} from "react";

export default function ScreenCreate({navigation}) {
  const [inputTitle, setInputTitle] = useState('')
  const [inputAuthor, setInputAuthor] = useState('')
  const [inputYear, setInputYear] = useState('')
  const [id, setId] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/books")
      .then(r => r.json())
      .then(r => setId(r.length + 1))
  }, []);

  const onCreate = () => {
    fetch("http://localhost:3000/api/v1/books", {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        id: id,
        title: inputTitle,
        author: inputAuthor,
        year_of_publication: inputYear,
      })
    })
      .then(r => console.log(r.json()))
  }

  return(
    <View style={styles.container} >
      <ButtonView title={'<-'} onPress={() => navigation.goBack()} />
      <View>
        <CompForm
          title={'title'}
          value={inputTitle}
          onChange={setInputTitle}
        />
        <CompForm
          title={'author'}
          value={inputAuthor}
          onChange={setInputAuthor}
        />
        <CompForm
          title={'year of publication'}
          value={inputYear}
          onChange={setInputYear}
        />
        <ButtonView title={'create'} onPress={onCreate} />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  }
})