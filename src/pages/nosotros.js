import Link from 'next/link'
import Layout from '@/components/layout'

export default function Nosotros() {
  return (
    <>
      <Layout
        title={'Nosotros'}
        description={'Sobre Nosogtros, Blog de musica, venta de guitarras y mas.'}
      >
        <div>Nosotros</div>
        <Link href="/">Inicio</Link>
      </Layout>
    </>
  )
}