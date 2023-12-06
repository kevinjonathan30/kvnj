import Footer from "@/components/Footer.js";
import Navigation from "@/components/Navigation.js";
import Portfolio from "@/components/Portfolio.js";
import MainWrapper from "@/components/include/MainWrapper.js";
import Button from '@/components/include/Button';

export default function Home() {
    return (
        <MainWrapper>
            <Navigation />
            <Portfolio />
            <div className="flex justify-center mt-8">
                <Button href={"./"} openInNewTab={false}>Back to Home</Button>
            </div>
            <Footer />
        </MainWrapper>
    );
}
