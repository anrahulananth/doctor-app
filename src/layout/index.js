import { useRouter } from "next/router";
import DoctorLayout from "./DoctorLayout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useAppStateContext } from "../context/AppStateProvider";

const Layout = (props) => {
    const { children } = props;
    const router = useRouter();
    const { appState } = useAppStateContext();
    const { isLoading } = appState;
    return (
        <>
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
            {
                isLoading && (
                    <div className="flex items-center justify-center w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
                        <div className="w-40 h-40 border-l-4 border-primary1 rounded-full animate-spin" />
                    </div>
                )
            }
        </>
    );
};

export default Layout;
