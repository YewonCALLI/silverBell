import { use, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

export default function Page(props) {
  const router = useRouter()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(null)

  useEffect(() => {
    const timer = setInterval(() => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime)
      }
    }, 1000) // 갱신 주기는 1초입니다
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
      <div className='fixed top-0 p-4 flex flex-col justify-center items-center w-full h-20'>
        <button
          className='fixed top-0 z-10 right-0 p-2 text-x'
          onClick={() => {
            router.push('/')
          }}>
          🔄
        </button>
        <div className='text-2xl font-bold text-black'>
          {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60)}
        </div>
        <div className='border-2 border-black h-10 w-full'>
          <div
            className='bg-black h-full'
            style={{
              width: `${(currentTime / videoRef.current?.duration) * 100}%`,
            }}></div>
        </div>
      </div>
      <div className='w-full h-full flex flex-col bg-white justify-between items-center'>
        <video ref={videoRef} className='w-fit h-full' src='/videos/sample.mp4' loop playsInline />
      </div>
      <div className='fixed bottom-0 w-full flex gap-4 flex-row h-20 py-2 px-4'>
        {!playing ? (
          <button
            className='w-full h-full -translate-y-2 font-bold text-2xl rounded-xl bg-background text-[lightgreen] active:text-background active:bg-white active:translate-y-0 transition-all duration-300 ease-in-out '
            style={{
              boxShadow: '0px 8px 0px lightgreen',
            }}
            onClick={() => {
              setPlaying(true)
              videoRef.current?.play()
            }}>
            재생
          </button>
        ) : (
          <button
            className='w-full h-full -translate-y-2 font-bold text-2xl rounded-xl bg-primary text-[pink] active:text-[skyblue] active:bg-background active:translate-y-0 transition-all duration-300 ease-in-out '
            style={{
              boxShadow: '0px 8px 0px pink',
            }}
            onClick={() => {
              setPlaying(false)
              videoRef.current?.pause()
            }}>
            일시정지
          </button>
        )}

        <button
          className='w-full h-full -translate-y-2 font-bold text-2xl rounded-xl bg-[skyblue] text-[darkblue] active:text-[skyblue] active:bg-white active:translate-y-0 transition-all duration-300 ease-in-out '
          style={{
            boxShadow: '0px 8px 0px darkblue',
          }}
          onClick={() => {
            setPlaying(false)
            videoRef.current.currentTime = 0
            setPlaying(true)
            videoRef.current.play()
          }}>
          다시 시작하기
        </button>
      </div>
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: '실버벨' } }
}
