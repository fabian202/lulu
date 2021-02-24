import Head from 'next/head'
import styles from '../styles/Home.module.css';
import TestComponent from '../components/TestComponent';

import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <TestComponent text="on Home" />
      <Head>
        <title>LU~LU~</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Image
        src="/Lulu_400px.png"
        alt="Lulu!"
        width={400}
        height={200}
      />
        <h1 className={styles.title}>
          ¡Muy Pronto!
        </h1>
      </main>

    </div>
  )
}
