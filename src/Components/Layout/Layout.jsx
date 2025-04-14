import { Fragment } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Main from "../Main/Main";
const Layout = ({ children }) => {
    return (
        <Fragment>
            <Header />
                <Main>{children}</Main>
            <Footer />
        </Fragment>
    )
}
export default Layout;