import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { colors } from "../../theme"
import { ProgressBar } from "./components/ProgressBar"
import { VideoPlayer } from "./components/VideoPlayer"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface MainScreenProps extends AppStackScreenProps<"Main"> {}

export const MainScreen: FC<MainScreenProps> = observer(function MainScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen
      preset="fixed"
      contentContainerStyle={$container}
      safeAreaEdges={["top", "bottom"]}
      KeyboardAvoidingViewProps={{
        behavior: "padding",
        keyboardVerticalOffset: 100,
      }}
    >
      <View style={$header}>
        <ProgressBar progress={50} max={100} />
      </View>
      <VideoPlayer />
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
}

const $header: ViewStyle = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: 10,
  paddingTop: 10,
  gap: 10,
}
