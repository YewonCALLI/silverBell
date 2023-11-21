import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { MotionDiv } from 'src/styles/common.styles'

export default function Page(props) {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/main')
    }, 3000)
  }, [])

  return (
    <MotionDiv className='w-full h-full flex bg-lime-200'>
      <h1>실버벨</h1>
    </MotionDiv>
  )
}

export async function getStaticProps() {
  return { props: { title: '실버벨' } }
}
