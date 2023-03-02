import Layout from '@/components/layout'

export default function Home() {
  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Blog de musica, venta de guitarras y mas.'}
      >
        <h1>Hola Mundo</h1>
      </Layout>
    </>
  )
}


export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`

  const [ resGuitarras, resPosts, resCurso ] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso)
  ])
  const [{ data: guitarras }, {data: posts}, {data: curso}] = await Promise.all([
      resGuitarras.json(),
      resPosts.json(),
      resCurso.json()
  ])

  return {
      props: {
          guitarras,
          posts,
          curso
      }
  }
}