import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='logo'>
          <Image
            src='/halo-spartan.png'
            width={220}
            height={80}
            alt='spartan'
          />
        </div>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/spartans'>
          <a>Spartan Listing</a>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
