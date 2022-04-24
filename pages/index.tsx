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
        The basic concept for the SPARTAN programs has been around since the
        late 22nd century when the first bioengineering protocols were developed
        for the Interplanetary War.[4] Since the establishment of these
        protocols humans have been using performance-enhancing equipment and
        augmentations to make them stronger and faster than previously possible.
        Spartans have been deployed numerous times throughout human conflict,
        leading up to and during the Human-Covenant War. The notion of creating
        supersoldiers first arose as a plan to enhance normal human soldiers
        into powerfully augmented special operations commandos. Initially the
        three separate programs were humanitys various attempts to create the
        perfect soldiers, in order to patrol the colonies, protect civilian and
        government populations, crush uprisings in their infancy and ensure
        others dont rise up as a result. The Spartan soldiers of the UNSC are
        named after the Spartans of Ancient Greece, specifically during the time
        of the Persian invasion led by Xerxes I. The wars between invading
        Persians and defending Greeks would be known as the Greco-Persian Wars,
        and lasted from 499-448 BCE. During this war, the Battle of Thermopylae
        occurred, in which 300 Spartan soldiers leading 5000 other Greeks under
        the command of Leonidas I, held back a significantly larger force of
        Persian soldiers. All of the Spartans were eventually killed, but they
        successfully killed 20,000 Persians (according to Herodotus), and bought
        the Greeks time to prepare a better defense for Greece. The Spartans
        formidable resilience resulted from their rigorous training in the
        agoge, which started when they reached the age of 7.
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
