import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      console.log('use effect ran')
      //router.go(1)
      router.push('/')
    }, 3000)
  }, [router])

  return (
    <div className='not-found'>
      <h1>Oooop... </h1>
      <div>
        <h2>You`re in the wrong path Spartan!</h2>
        <h2>Get back to Reach! Chief and other Spartans waiting for you!</h2>
      </div>
      <p>
        Go back to the{' '}
        <Link href='/'>
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  )
}

export default NotFound
