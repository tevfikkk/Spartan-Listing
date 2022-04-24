import Footer from './Footer'
import Navbar from './Navbar'

interface Layout {
  children: any
  image?: any
}

const Layout = ({ children }: Layout) => {
  return (
    <div className='content'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
