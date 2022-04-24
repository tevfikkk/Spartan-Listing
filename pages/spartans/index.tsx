import styles from '../../styles/Spartans.module.css'

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
      <h1>All Spartans</h1>
      {spartans.map((spartan: any) => (
        <div key={spartan.id}>
          <a className={styles.single}>
            <h3>{spartan.name}</h3>
          </a>
        </div>
      ))}
    </div>
  )
}

export default Spartans
