import Head from 'next/head'

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await res.json()

  const paths = data.map((spartan: any) => {
    return {
      params: { id: spartan.id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()

  return {
    props: { spartan: data },
  }
}

const Details = ({ spartan }: any) => {
  return (
    <div>
      <Head>
        <title>Spartan List | {spartan.name}</title>
        <meta name='keywords' content='spartans' />
      </Head>
      <h1>{spartan.name}</h1>
      <p>{spartan.email}</p>
      <p>{spartan.website}</p>
      <p>{spartan.address.city}</p>
    </div>
  )
}

export default Details
