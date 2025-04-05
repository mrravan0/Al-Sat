import { Fragment } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Main from "../Main/Main";
import { DataProvider } from "../../Context/Context";

const Layout = ({ children }) => {
    return (
        <Fragment>
            <Header />
            <DataProvider>
                <Main>{children}</Main>
            </DataProvider>
            <Footer />
        </Fragment>
    )
}
export default Layout;