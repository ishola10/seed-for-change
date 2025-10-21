import Banner from "@/app/components/home/Banner";
import ProgramSection from "./components/home/Program";
import PastResidentsSection from "./components/home/PastResidents";
import WhoCanApply from "./components/home/WhoCanApply";
import HowToApply from "./components/home/HowToApply";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Banner />
      <ProgramSection />
      <PastResidentsSection />
      <WhoCanApply />
      <HowToApply />
      <Footer />
    </main>
  );
}