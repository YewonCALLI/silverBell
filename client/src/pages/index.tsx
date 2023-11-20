import Header from '@/components/dom/layout/Header'
import { useState } from 'react'

export default function Page(props) {
  const [page, setPage] = useState<string>('index')

  return (
    <>
      {page === 'index' ? (
        <>
          <div className=' w-full h-screen flex justify-center items-center flex-col '>
            <h1 className='text-6xl font-bold text-white'>실버벨</h1>
            <button
              className='bg-white text-black font-bold text-4xl px-4 py-2 rounded-lg mt-20'
              onClick={() => {
                setPage('main')
              }}>
              시작하기
            </button>
          </div>
        </>
      ) : (
        <>
          <Header title={props.title} height={80} />
          <div className='mt-20 text-white flex flex-col justify-start w-screen h-full gap-10 py-20'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </div>
        </>
      )}
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: '실버벨' } }
}
