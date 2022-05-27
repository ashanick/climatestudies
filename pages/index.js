import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>1.5-Degrees</title>
        <meta name="description" content="Network of Iyengars" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="lockup">
        <h1> Asha here</h1>
        Asha and Nicky
      </div>
     </div>
  )
}
