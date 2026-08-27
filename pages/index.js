// Home page: Displays header and expertises inside main layout
import Header from '@/components/Header';
import Expertises from '@/components/Expertises';
import MainWrapper from '@/components/include/MainWrapper';

export default function Home() {
  return (
    <MainWrapper>
      <Header />
      <Expertises />
    </MainWrapper>
  );
}
