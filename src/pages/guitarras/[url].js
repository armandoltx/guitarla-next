import Image from "next/future/image"
import styles from '../../styles/guitarras.module.css'
import Layout from "../../components/layout"

export default function Producto({guitarra}) {
  console.log(guitarra)

  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes

  return (
    <Layout
      title={`Guitarra ${nombre}`}
    >
      <div className={styles.guitarra}>
        <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />

          <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
        </div>
      </div>
    </Layout>
  )
}

// para hacer la consulta de una forma estatica se necesitan las 2 funciones getStaticPaths y getStaticProps
export async funtion getStaticPaths() {
  // se usa para los paths para las paginas q vamos a generar
  const respuesta = await fecth(`${process.env.API_URL}/guitarras`)
  const { data } =await respuesta.json()

  // console.log(data)

  const paths = data.map(guitarra => ({
    params: {
      url: guitarra.attributes.url
    }
  }))

  return {
    paths,
    fallback: false // si se agrega una url q no existe genera una pag 404
  }
}

export async function getStaticProps({params: {url}}) {
  console.log(url)// se ejecuta en la parte del servidor
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filter[url]=beck&populate=imagen`)
  const { data: guitarra } = await respuesta.json()

  console.log(data) // se ejecuta en la parte del servidor

  return(
    props: {
      guitarra
    }
  )
}


// export async function getServerSideProps({query: {url}}) {
//   console.log(url)// se ejecuta en la parte del servidor
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?filter[url]=beck&populate=imagen`)
//   const { data: guitarra } = await respuesta.json()

//   console.log(data) // se ejecuta en la parte del servidor

//   return(
//     props: {
//       guitarra
//     }
//   )
// }