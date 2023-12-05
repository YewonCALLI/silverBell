import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View } from "react-native"
import Video from "react-native-video"
import { Button } from "../../../components"

interface VideoPlayerProps {}

export const VideoPlayer: FC<VideoPlayerProps> = observer(function VideoPlayer(
  props: VideoPlayerProps,
) {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [isMuted, setIsMuted] = React.useState(false)

  // const togglePlaying = () => {}

  return (
    <View>
      <Video
        source={"https://www.w3schools.com/html/mov_bbb.mp4"}
        style={$video}
        paused={!isPlaying}
        controls={true}
        muted={isMuted}
      />
      <Button onPress={() => setIsPlaying((p) => !p)} text={isPlaying ? "Stop" : "Play"} />
      <Button onPress={() => setIsMuted((m) => !m)} text={isMuted ? "Unmute" : "Mute"} />
    </View>
  )
})

const $video = {
  width: "100%",
  height: 500,
}
