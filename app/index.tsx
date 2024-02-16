import { Button, Text } from "react-native";
import { router } from "expo-router";

export default function () {
  return (
    <>
      <Text>root</Text>
      <Button title={'route to (app)'}  onPress={() => {
        router.navigate('(app)')
      }}/>
    </>
  )
}