import { Footer } from "./Footer";
import { Header } from "./Header";

export default function LandingPage({ children }) {
    return (
        <>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    );
}
