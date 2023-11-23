import Header from "@/components/Header.js";
import Services from "@/components/Services.js";
import Articles from "@/components/Articles.js";
import Footer from "@/components/Footer.js";
import MainWrapper from "@/components/include/MainWrapper.js";

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
