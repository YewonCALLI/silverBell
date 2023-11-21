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
        <div className='text-xl text-[hotpink]'>
          {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60)}
        </div>
        <button
          className='text-xl text-[hotpink] bg-white'
          onClick={() => {
            router.push('/')
          }}>
          다시보기
        </button>
      </div>
      <div className='w-full h-full flex flex-col bg-lime-200 justify-between items-center'>
        <video ref={videoRef} className='w-full h-full' src='/videos/sample.mp4' loop muted playsInline />
      </div>
      <div className='fixed bottom-0 w-full flex flex-row h-20'>
        <button
          className='w-full h-full -translate-y-2 text-2xl bg-[hotpink] text-white active:text-[hotpink] active:bg-white active:translate-y-0 transition-all duration-300 ease-in-out '
          style={{
            boxShadow: '0px 8px 0px pink',
          }}
          onClick={() => {
            setPlaying(!playing)
            if (playing) videoRef.current?.pause()
            else videoRef.current?.play()
          }}>
          {playing ? '체조 멈추기' : '체조 시작하기'}
        </button>
      </div>
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: '실버벨' } }
}
