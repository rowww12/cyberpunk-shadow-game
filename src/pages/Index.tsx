
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DownloadSection from "@/components/DownloadSection";
import FakeReviews from "@/components/FakeReviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main>
        <Hero />
        <Features />
        <DownloadSection />
        <FakeReviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
