import Footer from "./footer";
import Navbar from "./navbar";


const Layout = ({ children }) => (
    <div className="">
        <Navbar />
            {children}
        <Footer />
    </div>
)

export default Layout;