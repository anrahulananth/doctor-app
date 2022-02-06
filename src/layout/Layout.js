import Footer from "../components/Footer";
import Header from "../components/Header";
import AuthProvider from "../context/AuthProvider";

const Layout = (props) => {
    const { children } = props;
    return (
        <AuthProvider>
            <Header />
            <main className="bg-background3 min-h-screen">
                {children}
            </main>
            <Footer />
        </AuthProvider>
    );
};

export default Layout;
