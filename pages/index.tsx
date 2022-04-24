import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Spartan List | Home</title>
        <meta name='keywords' content='spartans' />
      </Head>

      <h1 className={styles.title}>Greetings!</h1>

      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        praesentium, quod iure est iusto eveniet laboriosam recusandae nesciunt.
        Soluta ab sequi dolorum doloremque omnis tempora ratione voluptates
        inventore et deserunt!
      </p>

      <h3 className={styles.title}>This is index page</h3>

      <div className={styles.title}>
        <Link href='/spartans'>
          <a className={styles.btn}>See Spartan Listing</a>
        </Link>
      </div>
    </div>
  )
}

export default Home
