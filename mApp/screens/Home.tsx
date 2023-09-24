import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
const Home = ({ route, navigation }) => {

  useEffect(() => {

  }, []);

  const moveAdminScreen = () => {
    navigation.navigate('adminScreen');
  }

  return (
    <View>

      <TouchableOpacity onPress={moveAdminScreen}>
        <Text>
          관리자 페이지로 이동합니다.
        </Text>
      </TouchableOpacity>
    </View>
  )

}
export default Home;