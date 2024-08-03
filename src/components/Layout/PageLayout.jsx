import Navbar from "../Navbar"
import Footer from "../Footer"

const PageLayout = ({ children }) => {
  return (
    <div className="font-MadeMirage">
      <Navbar />
      <div className="mt-16">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default PageLayout;