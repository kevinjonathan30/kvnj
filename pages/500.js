import Button from '@/components/include/Button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MainWrapper from '@/components/include/MainWrapper';

export default function InternalServerError500() {
    return (
        <MainWrapper>
            <section>
                <Navigation />
                <div className="text-center p-10">
                    <h2 className="font-gloriaHallelujah text-5xl py-2 text-blue-600 font-semibold tracking-wide dark:text-blue-400 md:text-6xl">Oops!</h2>
                    <h3 className="font-gloriaHallelujah text-2xl py-2 dark:text-white md:text-3xl mb-4">500 - Internal Server Error</h3>
                    <p className="text-md md:text-xl font-normal py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-lg mx-auto">
                        Perhaps the server needs time to recover itself...?
                    </p>
                </div>
                <div className="flex justify-center mt-8">
                    <Button href={"./"} openInNewTab={false}>Try Again</Button>
                </div>
            </section>
            <Footer />
        </MainWrapper>
    );
}
