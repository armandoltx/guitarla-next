
export default function Producto({guitarra}) {
  console.log(guitarra)

  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes

  return (
      <div>[ur]</div>
  )
}

export async function getServerSideProps({query: {url}}) {
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
