import Head from 'next/head'
import styles from '../../../styles/Spartan-History.module.css'

const index = () => {
  return (
    <div className={styles.rcorners1}>
      <Head>
        <title>History</title>
      </Head>
      <h1 className={styles.title}>History of Spartans</h1>

      <div className={styles.rcorners2}>
        <p className={styles.text}>
          Spartans or SPARTAN Programs are members of a series of United Nations
          Space Command projects designed to create physically, genetically,
          technologically, and mentally superior supersoldiers as special
          fighting units.[2] Although the word SPARTAN is written in all capital
          letters when used in reference to the programs in a formal context, it
          is not an acronym; the supersoldiers are known simply as Spartans.
        </p>
      </div>
    </div>
  )
}

export default index
