import Navbar from "../Navbar"
import Footer from "../Footer"

const PageLayout = ({children}) => {
  return (
    <div className="">
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default PageLayout;