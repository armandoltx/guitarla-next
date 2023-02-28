import Layout from '@/components/layout'
import Guitarra from '@/components/guitarra'

export default function Tienda({guitarras}) {
  console.log(guitarras)

  return (
    <Layout
      title={'Tienda Virtual'}
      description="Tienda virtual, venta de guitarras, instrumentos, GuitarLA"
    >
        <main className="contenedor">
            <h1 className="heading">Nuestra Colección</h1>

            <div className={styles.grid}>
              {guitarras?.map(guitarra => (
                  <Guitarra
                      key={guitarra.id}
                      guitarra={guitarra.attributes}
                  />
              ))}
            </div>
        </main>
    </Layout>
  )
}

// esta es parte del servidor

// getStaticProps es estatico, asi q cuando se hace el build no guarda todos los datos de la api, si hay algun cambio
// los datos en la API no se reflejaran hasta q no se haga otro build.

{/* export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const {data: guitarras} = await respuesta.json()
  return {
    props: {
      guitarras
    }
  }
} */}

// getStaticProps es del servidor.

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const {data: guitarras} = await respuesta.json()
  return {
    props: {
      guitarras
      }
    }
}
