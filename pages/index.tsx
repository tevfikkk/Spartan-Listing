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
      <h1>Greetings!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        praesentium, quod iure est iusto eveniet laboriosam recusandae nesciunt.
        Soluta ab sequi dolorum doloremque omnis tempora ratione voluptates
        inventore et deserunt!
      </p>
      <h3>This is index page</h3>
      <Link href='/spartans'>
        <a>See Spartan Listing</a>
      </Link>
    </div>
  )
}

export default Home
