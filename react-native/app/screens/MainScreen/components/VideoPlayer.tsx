import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import Video from "react-native-video"
import { Button } from "../../../components"
import { colors } from "../../../theme"

interface VideoPlayerProps {
  videoRef?: React.RefObject<Video>
}

export const VideoPlayer: FC<VideoPlayerProps> = observer(function VideoPlayer(
  props: VideoPlayerProps,
) {
  const { videoRef } = props

  const sampleVideo = require("../../../../assets/videos/sample.mp4")

  const [isPlaying, setIsPlaying] = React.useState(false)
  const [isMuted, setIsMuted] = React.useState(false)

  // const togglePlaying = () => {}

  return (
    <View>
      <Video
        ref={videoRef}
        source={sampleVideo}
        style={$video}
        paused={!isPlaying}
        controls={false}
        muted={isMuted}
        resizeMode="contain"
        maxBitrate="default"
        rate={1.0}
      />
      <View style={$controlContainer}>
        <Button
          style={{
            backgroundColor: isPlaying ? colors.vermilion : colors.yellow,
          }}
          onPress={() => setIsPlaying((p) => !p)}
          text={isPlaying ? "Stop" : "Play"}
          textColor={isPlaying ? "white" : "black"}
          textSize="xxl"
          fontWeight="extraBold"
        />
        <Button
          style={{
            backgroundColor: isMuted ? colors.reddishPurple : colors.skyBlue,
          }}
          onPress={() => setIsMuted((m) => !m)}
          text={isMuted ? "Unmute" : "Mute"}
          textSize="xxl"
          textColor={isMuted ? "white" : "black"}
          fontWeight="extraBold"
        />
      </View>
    </View>
  )
})

const $video = {
  width: "100%",
  height: 500,
}

const $controlContainer: ViewStyle = {
  flexDirection: "row",
  marginTop: 10,
  paddingHorizontal: 10,
  justifyContent: "space-between",
  gap: 10,
}
