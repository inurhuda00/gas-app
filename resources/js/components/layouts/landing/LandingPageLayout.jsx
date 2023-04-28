import { Footer } from "./Footer";
import { Header } from "./Header";

export default function LandingPage({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
