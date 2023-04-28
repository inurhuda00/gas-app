import About from "@/components/landing/About";
import CTA from "@/components/landing/CTA";
import Career from "@/components/landing/Career";
import Categories from "@/components/landing/Categories";
import Feature from "@/components/landing/Feature";
import FeatureMap from "@/components/landing/FeatureMap";
import Hero from "@/components/landing/Hero";
import LandingPageLayout from "@/components/layouts/landing/LandingPageLayout";

const LandingPage = () => {
    return (
        <>
            <Hero />
            {/* FITUR */}
            <Feature />
            {/* KATEGORI */}
            <Categories />
            {/* FITUR MAPS */}
            <FeatureMap />
            {/* CTA */}
            <CTA />
            {/* ABOUT */}
            <About />
            {/* KARIR */}
            <Career />
        </>
    );
};

LandingPage.layout = (page) => <LandingPageLayout children={page} />;

export default LandingPage;
