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
          <a className='btn'>Home</a>
        </Link>
        <Link href='/about'>
          <a className='btn'>About</a>
        </Link>
        <Link href='/spartans'>
          <a className='btn'>Spartan Listing</a>
        </Link>
        <Link href='/spartans/history'>
          <a className='btn'>Spartan History</a>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
