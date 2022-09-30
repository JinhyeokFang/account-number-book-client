import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Account Number Book</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Account Number Book
        </h1>
      </main>
    </div>
  )
}

export default IndexPage
