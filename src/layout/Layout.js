import Footer from "../components/Footer";
import Header from "../components/Header";
import AuthProvider from "../context/AuthProvider";

const Layout = (props) => {
    const { children } = props;
    return (
        <AuthProvider>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </AuthProvider>
    );
};

export default Layout;
