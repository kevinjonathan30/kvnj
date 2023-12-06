import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Portfolio from '@/components/Portfolio';
import MainWrapper from '@/components/include/MainWrapper';
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
