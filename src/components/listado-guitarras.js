export default function ListadoGuitarras() {
  return (
    <h1>Listado Guitarras</h1>
  )
}

export async function getStaticProps() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const {data: guitarras} = await respuesta.json()

    console.log(guitarras)

    return {
      props: {
        guitarras
      }
    }
}