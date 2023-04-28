import About from "@/components/landing/About";
import CTA from "@/components/landing/CTA";
import Career from "@/components/landing/Career";
import Categories from "@/components/landing/Categories";
import Feature from "@/components/landing/Feature";
import FeatureMap from "@/components/landing/FeatureMap";
import Hero from "@/components/landing/Hero";
import LandingPageLayout from "@/components/layouts/landing/LandingPageLayout";

export const DynamicComponent = ({ section, props }) => {
    switch (section) {
        case "Hero":
            return <Hero {...props} target={section} />;
        case "Career":
            return <Career {...props} target={section} />;
        case "Categories":
            return <Categories {...props} target={section} />;
        case "Feature":
            return <Feature {...props} target={section} />;
        case "FeatureMap":
            return <FeatureMap {...props} target={section} />;
        case "CTA":
            return <CTA {...props} target={section} />;
        case "About":
            return <About {...props} target={section} />;
        default:
            return null;
    }
};

const LandingPage = ({ sections }) => {
    return (
        <>
            {sections
                .sort((a, b) => a.order - b.order)
                .map((props, index) => (
                    <DynamicComponent {...props} key={index} />
                ))}
        </>
    );
};

LandingPage.layout = (page) => <LandingPageLayout children={page} />;

export default LandingPage;
