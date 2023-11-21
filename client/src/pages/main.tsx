import Header from '@/components/dom/layout/Header'
import * as S from '@/components/dom/layout/styles'

export default function Page(props) {
  return (
    <>
      <Header title={props.title} height={80} />
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: '실버벨' } }
}
