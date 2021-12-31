import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = (props) => {
    const { children } = props;
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
