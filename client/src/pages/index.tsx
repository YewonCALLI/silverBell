import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { MotionScreen } from 'src/styles/common.styles'
import { AnimatePresence } from 'framer-motion'

export default function Page(props) {
  const router = useRouter()
  const [splash, setSplash] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSplash(false)
    }, 3000)
    setTimeout(() => {
      router.push('/main')
    }, 4000)
  }, [])

  return (
    <>
      <AnimatePresence>
        {splash && (
          <MotionScreen className='w-full h-full flex flex-col p-10 bg-background justify-between items-center'>
            <h1 className='text-6xl pt-60 font-bold text-[orange]'>실버벨 프로젝트</h1>
            <div className='flex flex-col items-center'>
              <p className='text-xxs font-semibold text-[orange]'>Copyright @ 2023. ABT</p>
              <p className='text-xxs text-[orange]'>
                Design & developed by <span className=''>happyphysicsclub.</span>
              </p>
            </div>
          </MotionScreen>
        )}
      </AnimatePresence>
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: '실버벨' } }
}
