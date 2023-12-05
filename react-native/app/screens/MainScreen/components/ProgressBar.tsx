import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, useWindowDimensions, ViewStyle } from "react-native"
import { colors } from "app/theme"
import { Text } from "../../../components"

interface ProgressBarProps {
  progress: number
  max: number
  $style?: ViewStyle
}

export const ProgressBar: FC<ProgressBarProps> = observer(function ProgressBar(
  props: ProgressBarProps,
) {
  const { progress, max, $style } = props
  const width = useWindowDimensions().width
  const progressWidth = (progress / max) * width

  return (
    <>
      <Text size="xl" weight="normal" color="white" text="진행률" />
      <View style={$container}>
        <View style={[$progressBar, { ...$style, width: progressWidth }]}>
          <Text size="big" weight="extraBold" color="bluishGreen" text={`${progress}%`} />
        </View>
      </View>
    </>
  )
})

const $container: ViewStyle = {
  width: "100%",
  height: 80,
  backgroundColor: "rgba(255,255,255,0.3)",
  justifyContent: "center",
  alignItems: "flex-start",
}

const $progressBar: ViewStyle = {
  backgroundColor: colors.white,
  height: "100%",
  padding: 10,
  justifyContent: "center",
  alignItems: "flex-start",
}
