import layout from '../../assets/scss/layout/Layout.module.scss'
import Header from "./header/Header"
import Footer from "./footer/Footer"

const Layout = ({children}) => {
    return (
      <div className={layout.layout}>
        <Header />
        <main>
            {children}
        </main>
        <Footer />  
      </div>
    )
  }
  
  export default Layout