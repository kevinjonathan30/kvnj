import Footer from "@/components/Footer.js";
import Navigation from "@/components/Navigation.js";
import Portfolio from "@/components/Portfolio.js";
import MainWrapper from "@/components/include/MainWrapper.js";

export default function Home() {
    return (
        <MainWrapper>
            <Navigation />
            <Portfolio />
            <Footer />
        </MainWrapper>
    );
}
