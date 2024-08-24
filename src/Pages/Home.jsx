import Banner from "../Components/Banner/Banner"
import Navbar from "../Components/Navbar/Navbar"
import About from "../Components/About/About"
import Footer from "../Components/Footer/Footer"


function Home() {
  
  
  return (
    <>
    <div className="banner-navbar-container">
      <Navbar />
      <Banner title="Soy Guillermo Suarez Reinoso" showDynamicText={true} isHomePage={true} />
    </div>
    <About />
    <Footer></Footer>
    </>
  )
}

export default Home