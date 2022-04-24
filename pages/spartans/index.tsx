import styles from '../../styles/Spartans.module.css'
import Link from 'next/link'
import Head from 'next/head'

interface Spartans {
  spartans: any
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    props: { spartans: data },
  }
}

const Spartans = ({ spartans }: Spartans) => {
  return (
    <div>
      <Head>
        <title>Spartan List | Spartans</title>
        <meta name='keywords' content='spartans' />
      </Head>

      <h1>All Spartans</h1>
      {spartans.map((spartan: any) => (
        <Link href={`/spartans/${spartan.id}`} key={spartan.id}>
          <a className={styles.single}>
            <h3>{spartan.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Spartans
