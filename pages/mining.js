import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import SectionTwo from '../components/SectionTwo';

export default function Mining() {
   return (
      <div className={styles.container2}>
         <Head>
            <title>Create Netty App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Header />
         <main className={styles.main}>
            <h1 className={styles.judul1}>Create Item</h1>
            <p className={styles.subJudul}>This images will appear on your collection</p>
            <SectionTwo />
         </main>
      </div>
   )
}