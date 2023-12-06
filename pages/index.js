import Header from '@/components/Header';
import Services from '@/components/Services';
import Articles from '@/components/Articles';
import Footer from '@/components/Footer';
import MainWrapper from '@/components/include/MainWrapper';

export default function Home() {
  return (
    <MainWrapper>
      <Header />
      <Services />
      <Articles />
      <Footer />
    </MainWrapper>
  );
}
