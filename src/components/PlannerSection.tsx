import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Sun, Thermometer, MapPin, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PlannerData {
  roofSize: number;
  sunlight: number;
  temperature: number;
  environment: string;
}

export const PlannerSection = () => {
  const [formData, setFormData] = useState<PlannerData>({
    roofSize: 0,
    sunlight: 0,
    temperature: 0,
    environment: ""
  });
  const [plannerResult, setPlannerResult] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generatePlanner = async () => {
    if (!formData.roofSize || !formData.sunlight || !formData.temperature || !formData.environment) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to generate your custom planner.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    let cropSuggestion = "";
    let sizingTips = "";
    let environmentalTips = "";

    // Sunlight-based suggestions
    if (formData.sunlight < 3) {
      cropSuggestion = "shade-tolerant plants like spinach, lettuce, kale, and herbs (mint, parsley, cilantro)";
    } else if (formData.sunlight <= 6) {
      cropSuggestion = "leafy greens, herbs, and small-fruit plants like cherry tomatoes, chilies, and peppers";
    } else {
      cropSuggestion = "high-sun crops like cucumbers, peppers, beans, and even small melons or squash";
    }

    // Space-based suggestions
    if (formData.roofSize < 50) {
      sizingTips = "Focus on vertical growing with tower gardens and hanging planters to maximize space.";
    } else if (formData.roofSize <= 200) {
      sizingTips = "You have good space for container gardening and small raised beds.";
    } else {
      sizingTips = "Excellent space! You can create dedicated zones for different crop types and even composting areas.";
    }

    // Environment-based tips
    switch (formData.environment) {
      case "urban":
        environmentalTips = "Use air-purifying plants, consider dust protection, and ensure good drainage for city conditions.";
        break;
      case "clean":
        environmentalTips = "Perfect conditions! Focus on maximizing yield with proper spacing and nutrition.";
        break;
      case "polluted":
        environmentalTips = "Use protective barriers, choose hardy plants, and consider indoor/greenhouse growing for sensitive crops.";
        break;
    }

    const customPlan = `
      <div class="space-y-6">
        <div class="bg-gradient-primary/10 rounded-lg p-4">
          <h3 class="font-bold text-lg mb-2 flex items-center">
            <span class="mr-2">🌿</span> Your Custom Urban Farm Plan
          </h3>
          <p><strong>Space:</strong> ${formData.roofSize} sq.ft | <strong>Sunlight:</strong> ${formData.sunlight} hrs/day | <strong>Environment:</strong> ${formData.environment}</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-leaf/10 rounded-lg p-4">
            <h4 class="font-semibold mb-3 flex items-center text-leaf">
              <span class="mr-2">🌱</span> Recommended Crops
            </h4>
            <p class="text-sm leading-relaxed">Best for your conditions: ${cropSuggestion}</p>
          </div>

          <div class="bg-growth/10 rounded-lg p-4">
            <h4 class="font-semibold mb-3 flex items-center text-growth">
              <span class="mr-2">📏</span> Space Optimization
            </h4>
            <p class="text-sm leading-relaxed">${sizingTips}</p>
          </div>
        </div>

        <div class="bg-accent/10 rounded-lg p-4">
          <h4 class="font-semibold mb-3 flex items-center text-accent">
            <span class="mr-2">🌍</span> Environment Tips
          </h4>
          <p class="text-sm leading-relaxed">${environmentalTips}</p>
        </div>

        <div class="bg-secondary/50 rounded-lg p-4">
          <h4 class="font-semibold mb-3">📅 4-Week Implementation Plan</h4>
          <div class="space-y-2 text-sm">
            <div class="flex items-start space-x-2">
              <CheckCircle class="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <div><strong>Week 1:</strong> Clean and prepare the space, measure areas, and plan layout</div>
            </div>
            <div class="flex items-start space-x-2">
              <CheckCircle class="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <div><strong>Week 2:</strong> Set up containers, install irrigation system, and prepare soil mix</div>
            </div>
            <div class="flex items-start space-x-2">
              <CheckCircle class="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <div><strong>Week 3:</strong> Plant your selected crops and set up support structures</div>
            </div>
            <div class="flex items-start space-x-2">
              <CheckCircle class="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <div><strong>Week 4:</strong> Establish maintenance routine - water every 2 days, monitor growth</div>
            </div>
          </div>
        </div>

        <div class="bg-sun/10 rounded-lg p-4 text-center">
          <h4 class="font-semibold mb-2 text-sun">🎯 Success Tips</h4>
          <p class="text-sm">Start small, observe daily, keep a garden journal, and gradually expand as you gain experience!</p>
        </div>
      </div>
    `;

    setPlannerResult(customPlan);
    setIsGenerating(false);

    toast({
      title: "Plan Generated! 🌱",
      description: "Your custom urban farming plan is ready below."
    });
  };

  return (
    <section id="planner" className="py-20 bg-gradient-to-br from-background to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            🗓️ Custom Farm Planner
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get a personalized growing plan tailored to your space, climate, and environment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-floating bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-card-foreground">
                Tell us about your growing space
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="roof-size" className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Roof/Space Size (sq. ft)</span>
                  </Label>
                  <Input
                    id="roof-size"
                    type="number"
                    placeholder="e.g., 100"
                    value={formData.roofSize || ""}
                    onChange={(e) => setFormData({...formData, roofSize: parseInt(e.target.value) || 0})}
                    className="bg-background border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sunlight" className="flex items-center space-x-2">
                    <Sun className="h-4 w-4 text-sun" />
                    <span>Daily Sunlight (hours)</span>
                  </Label>
                  <Input
                    id="sunlight"
                    type="number"
                    placeholder="e.g., 6"
                    value={formData.sunlight || ""}
                    onChange={(e) => setFormData({...formData, sunlight: parseInt(e.target.value) || 0})}
                    className="bg-background border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="temperature" className="flex items-center space-x-2">
                    <Thermometer className="h-4 w-4 text-accent" />
                    <span>Average Temperature (°C)</span>
                  </Label>
                  <Input
                    id="temperature"
                    type="number"
                    placeholder="e.g., 25"
                    value={formData.temperature || ""}
                    onChange={(e) => setFormData({...formData, temperature: parseInt(e.target.value) || 0})}
                    className="bg-background border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-growth" />
                    <span>Environment Type</span>
                  </Label>
                  <Select onValueChange={(value) => setFormData({...formData, environment: value})}>
                    <SelectTrigger className="bg-background border-border/50">
                      <SelectValue placeholder="Select your environment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urban">Urban (City/Downtown)</SelectItem>
                      <SelectItem value="clean">Clean/Rural Area</SelectItem>
                      <SelectItem value="polluted">Polluted/Industrial Area</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="text-center pt-4">
                <Button
                  onClick={generatePlanner}
                  disabled={isGenerating}
                  variant="farm"
                  size="lg"
                  className="min-w-48"
                >
                  {isGenerating ? "Generating Plan..." : "Generate My Farm Plan"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          {plannerResult && (
            <Card className="mt-8 shadow-floating bg-gradient-card">
              <CardContent className="p-6">
                <div dangerouslySetInnerHTML={{ __html: plannerResult }} />
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};