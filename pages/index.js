// Home page: Displays header and services inside main layout
import Header from '@/components/Header';
import Services from '@/components/Services';
import MainWrapper from '@/components/include/MainWrapper';

export default function Home() {
  return (
    <MainWrapper>
      <Header />
      <Services />
    </MainWrapper>
  );
}
