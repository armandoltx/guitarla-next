import Image from "next/image"
import Layout from '@/components/layout'
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <>
      <Layout
        title={'Nosotros'}
        description={'Sobre Nosogtros, Blog de musica, venta de guitarras y mas.'}
      >
        <main className="contenedor">
          <h1 className="heading">Nosotros</h1>
          <div className={styles.contenido}>
            <Image src="/img/nosotros.jpg" alt="imagen sobre nosotros" width={1000} height={800} />

            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis rhoncus magna, nec consectetur diam imperdiet vitae. Suspendisse dignissim bibendum elit, at consequat lacus accumsan sit amet. Suspendisse ut ullamcorper eros, a scelerisque nunc.</p>
              <p>Nulla commodo ante eu ipsum sodales pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque at finibus urna, non vulputate ligula. Duis feugiat lectus justo, vel placerat mauris elementum et. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}
