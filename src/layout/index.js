import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AuthProvider from "../context/AuthProvider";
import DoctorLayout from "./DoctorLayout";

const Layout = (props) => {
    const { children } = props;
    const router = useRouter();
    return (
        <AuthProvider>
            {
                router.route.includes("/doctor") ? (
                    <DoctorLayout>
                        {children}
                    </DoctorLayout>
                ) : (
                    <>
                        <Header />
                        {children}
                        <Footer />
                    </>
                )
            }
        </AuthProvider>
    );
};

export default Layout;
