import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Home, Building, Landmark } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const PropertySelection = () => {
  const [selectedProperty, setSelectedProperty] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (selectedProperty) {
      localStorage.setItem('selectedPropertyType', selectedProperty);
      navigate("/property-address");
    }
  };

  const assetTypes = [
    { value: "house", label: "House/Apartment", icon: Home },
    { value: "land", label: "Land/Plot", icon: Landmark },
    { value: "commercial", label: "Commercial Property", icon: Building },
  ];

  return (
    <div className="min-h-screen bg-gradient-service">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link to="/select-city">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Choose Property Type</CardTitle>
              <p className="text-muted-foreground">Select the type of property you need a caretaker for</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label>Select Property Type</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {assetTypes.map((type) => (
                    <div
                      key={type.value}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedProperty === type.value
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedProperty(type.value)}
                    >
                      <div className="text-center">
                        <type.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <p className="font-medium">{type.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button 
                  variant="hero" 
                  onClick={handleNext}
                  disabled={!selectedProperty}
                  className="w-full"
                >
                  Next
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PropertySelection;