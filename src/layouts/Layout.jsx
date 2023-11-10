import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";

const Layout = ({ children }) => {

    return (
        <>
            <Navigation/>
            <div className='min-h-screen'>
                {children || <Outlet/>}
            </div>
            <Footer />
        </>
    )
}

export default Layout;