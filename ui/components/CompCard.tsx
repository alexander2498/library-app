import {StyleSheet, Text, View} from "react-native";
import {Card} from "@rneui/base";
import ButtonView from "../buttons/ButtonView";
import {useState} from "react";
import CompForm from "./CompForm";


enum Visibility {
  flex = "flex",
  none = "none",
}
export default function CompCard({id, title, author, year_of_publication}) {
  const [inputTitle, setInputTitle] = useState(title)
  const [inputAuthor, setInputAuthor] = useState(author)
  const [inputYear, setInputYear] = useState(year_of_publication)
  const [visibility, setVisibility] = useState(Visibility.none)
  const onDelete = () => {
    fetch(`http://localhost:3000/api/v1/books/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "DELETE"
    })
      .then(r => console.log(r.json()))
  }

  const onViewPressed = () => {
    if (visibility === "none") {
      setVisibility(Visibility.flex);
    } else setVisibility(Visibility.none);
  }

  const onUpdate = () => {
    fetch(`http://localhost:3000/api/v1/books/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify({
        title: inputTitle,
        author: inputAuthor,
        year_of_publication: inputYear
      })
    })
      .then(r => console.log(r.json()))
  }

  return(
    <View>
      <Card>
        <Card.Title>{title}</Card.Title>
        <Text>{author}</Text>
        <Text>{year_of_publication}</Text>
        <ButtonView title={'delete'} onPress={onDelete} />
        <ButtonView title={'view'} onPress={onViewPressed} />
        <View style={{display: visibility}} >
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
          <ButtonView title={'update'} onPress={onUpdate} />
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({

})