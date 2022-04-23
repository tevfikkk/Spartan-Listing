import Footer from './Footer'
import Navbar from './Navbar'

interface Layout {
  children: any
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
