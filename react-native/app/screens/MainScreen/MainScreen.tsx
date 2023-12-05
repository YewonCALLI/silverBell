import React, { FC, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { colors } from "../../theme"
import { ProgressBar } from "./components/ProgressBar"
import { VideoPlayer } from "./components/VideoPlayer"
import Video from "react-native-video"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface MainScreenProps extends AppStackScreenProps<"Main"> {}

export const MainScreen: FC<MainScreenProps> = observer(function MainScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  const videoRef = React.useRef<Video>(null)

  const [testFrame, setTestFrame] = React.useState(0)

  // Pull in navigation via hook
  // const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      setTestFrame((prev) => (prev + 1) % 100, videoRef.current?.seek(testFrame / 100))
    }, 1000)
  }, [])

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
        <ProgressBar progress={testFrame} max={100} />
      </View>
      <View style={$content}>
        <VideoPlayer videoRef={videoRef} />
      </View>
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  justifyContent: "center",
}

const $header: ViewStyle = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: 10,
  paddingTop: 10,
  gap: 10,
}

const $content: ViewStyle = {
  flexDirection: "column",
  gap: 10,
}
