import { use, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

export default function Page(props) {
  const router = useRouter()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime)
      }
    }, 1000) // 갱신 주기는 1초입니다.

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('ended', () => {
        setPlaying(false)
      })
    }
  }, [])

  return (
    <>
      <div className='fixed top-0 flex flex-row justify-center items-center w-full h-20'>
        <button
          className='fixed top-0 right-0 p-2 text-x'
          onClick={() => {
            router.push('/')
          }}>
          🔄
        </button>
        <div className='text-xl font-bold text-primary'>
          {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60)}
        </div>
      </div>
      <div className='w-full h-full flex flex-col bg-background justify-between items-center'>
        <video ref={videoRef} className='w-full h-full' src='/videos/sample.mp4' loop muted playsInline />
      </div>
      <div className='fixed bottom-0 w-full flex gap-4 flex-row h-20 py-2 px-4'>
        <button
          className='w-full h-full -translate-y-2 font-bold text-3xl rounded-xl bg-primary text-[pink] active:text-primary active:bg-background active:translate-y-0 transition-all duration-300 ease-in-out '
          style={{
            boxShadow: '0px 8px 0px pink',
          }}
          onClick={() => {
            setPlaying(true)
            videoRef.current?.play()
          }}>
          시작하기
        </button>
        <button
          className='w-full h-full -translate-y-2 font-bold text-3xl rounded-xl bg-[skyblue] text-[black] active:text-blue active:bg-background active:translate-y-0 transition-all duration-300 ease-in-out '
          style={{
            boxShadow: '0px 8px 0px blue',
          }}
          onClick={() => {
            setPlaying(false)
            if (playing) videoRef.current?.pause()
          }}>
          멈추기
        </button>
      </div>
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: '실버벨' } }
}
