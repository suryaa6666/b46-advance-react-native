import { View, useTheme, Text } from 'native-base'

function Container() {
    const theme = useTheme()
  return (
    <View>
      <Text color={"surya.200"} fontSize={100} fontFamily={"body"}>Bismillah</Text>
    </View>
  )
}

export default Container