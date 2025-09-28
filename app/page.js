import HeaderBanner from "./components/header/HeaderBanner";
import AboutSection from "./components/homepage/AboutSection";
import BottleSection from "./components/homepage/BottleCards";
import BottleSlider from "./components/homepage/BottleSlider";
import CallToAction from "./components/homepage/CallToAction";
import InfiniteMarquee from "./components/homepage/InfiniteMarquee";
import QualityMonitoring from "./components/homepage/QualityMonitoring";

export default function Home() {
    return (
        <div className="relative">
            <HeaderBanner />
            <BottleSection />
            <AboutSection />
            <BottleSlider />
            <QualityMonitoring />
            <InfiniteMarquee />
            <CallToAction />
        </div>
    );
}