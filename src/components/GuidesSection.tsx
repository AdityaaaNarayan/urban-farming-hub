import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Sun, Droplets, Recycle, Sprout, Heart, Shield, Thermometer } from "lucide-react";

export const GuidesSection = () => {
  const guides = [
    {
      icon: <Recycle className="h-6 w-6 text-accent" />,
      title: "Choose Lightweight Soil",
      description: "Use cocopeat or lightweight soil mixes to reduce roof load and improve drainage."
    },
    {
      icon: <Sun className="h-6 w-6 text-sun" />,
      title: "Optimize Sunlight",
      description: "Ensure 4–6 hours of direct sunlight daily for leafy vegetables and herbs."
    },
    {
      icon: <Droplets className="h-6 w-6 text-blue-500" />,
      title: "Smart Irrigation",
      description: "Use drip irrigation or self-watering pots to conserve water efficiently."
    },
    {
      icon: <Recycle className="h-6 w-6 text-growth" />,
      title: "Container Selection",
      description: "Repurpose buckets, use grow bags, or build wooden boxes for sustainable growing."
    },
    {
      icon: <Sprout className="h-6 w-6 text-leaf" />,
      title: "Beginner Crops",
      description: "Start with easy-to-grow plants: spinach, lettuce, tomatoes, and herbs."
    },
    {
      icon: <Heart className="h-6 w-6 text-soil" />,
      title: "Soil Nutrition",
      description: "Add organic compost monthly to maintain soil fertility and plant health."
    },
    {
      icon: <Shield className="h-6 w-6 text-accent" />,
      title: "Weather Protection",
      description: "Use shade nets during harsh summer and protect from strong winds."
    },
    {
      icon: <Thermometer className="h-6 w-6 text-growth" />,
      title: "Natural Pest Control",
      description: "Apply neem oil or garlic spray for eco-friendly pest management."
    }
  ];

  return (
    <section id="guides" className="py-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            📖 Expert Growing Guides
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master the art of urban farming with our proven tips and techniques for successful harvests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {guides.map((guide, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    {guide.icon}
                  </div>
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {guide.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {guide.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Tips */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 text-center shadow-floating">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            🌱 Pro Tip: Start Small, Think Big
          </h3>
          <p className="text-primary-foreground/90 text-lg max-w-3xl mx-auto">
            Begin with 2-3 easy crops in containers, then gradually expand your urban farm. 
            Consistent care and observation will teach you more than any guide ever could!
          </p>
        </div>
      </div>
    </section>
  );
};