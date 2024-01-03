import Header from '@/components/Header';
import Services from '@/components/Services';
import Articles from '@/components/Articles';
import MainWrapper from '@/components/include/MainWrapper';

export default function Home() {
  return (
    <MainWrapper>
      <Header />
      <Services />
      <Articles />
    </MainWrapper>
  );
}
