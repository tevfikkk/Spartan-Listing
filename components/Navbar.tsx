import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='logo'>
          <h1>Spartan List</h1>
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
