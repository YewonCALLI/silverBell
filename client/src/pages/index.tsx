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
    }, 2000)
    setTimeout(() => {
      router.push('/main')
    }, 3000)
  }, [])

  return (
    <>
      <AnimatePresence>
        {splash && (
          <MotionScreen className='w-full h-full flex flex-col p-10 bg-lime-200 justify-between items-center'>
            <h1 className='text-6xl pt-60 font-bold text-[hotpink]'>실버벨</h1>
            <div className='flex flex-col items-center'>
              <p className='text-xxs font-semibold text-[hotpink]'>Copyright @ 2023. ABT</p>
              <p className='text-xxxs text-[hotpink]'>
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
