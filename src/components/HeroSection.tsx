import { Button } from "@/components/ui/button";
import { ArrowDown, Leaf, Building, Droplets } from "lucide-react";
import heroImage from "@/assets/vertical-farming-hero.jpg";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight drop-shadow-lg">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-accent to-growth bg-clip-text text-transparent">
              Urban Farming
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white mb-8 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-md">
            Transform your urban spaces into thriving green gardens. Learn vertical farming, 
            rooftop gardening, and sustainable agriculture practices for modern city living.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Building className="h-8 w-8 text-accent mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Vertical Farming</h3>
              <p className="text-white/90 text-sm">Maximize yield in minimal space</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Leaf className="h-8 w-8 text-growth mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Rooftop Gardens</h3>
              <p className="text-white/90 text-sm">Transform unused roof space</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Droplets className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Smart Irrigation</h3>
              <p className="text-white/90 text-sm">Water-efficient growing systems</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection('guides')}
              className="min-w-48"
            >
              Start Growing Today
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => scrollToSection('planner')}
              className="min-w-48 border-white/50 bg-white/10 text-white hover:bg-white/20 hover:border-white backdrop-blur-sm"
            >
              Get Custom Plan
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection('guides')}
            className="text-white hover:bg-white/10 rounded-full"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};