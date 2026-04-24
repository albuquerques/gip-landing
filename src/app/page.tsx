import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { StepsSection } from "@/components/sections/steps";
import { GovernanceSection } from "@/components/sections/governance";
import { ClassificationSection } from "@/components/sections/classification";
import { ToolsSection } from "@/components/sections/tools";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <StepsSection />
        <GovernanceSection />
        <ClassificationSection />

        <div className="lg:px-5 lg:pb-32 lg:pt-20 xl:px-9 xl:pb-32 xl:pt-20">
          <ToolsSection />
        </div>
      </main>

      <Footer />
    </>
  );
}
