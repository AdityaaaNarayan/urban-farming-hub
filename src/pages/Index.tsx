import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { GuidesSection } from "@/components/GuidesSection";
import { PlannerSection } from "@/components/PlannerSection";
import { ChatBot } from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <GuidesSection />
        <PlannerSection />
        <ChatBot />
      </main>
      
      {/* Footer */}
      <footer className="bg-gradient-hero py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-primary-foreground/80">
            🌱 Built with love for urban farmers everywhere
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
