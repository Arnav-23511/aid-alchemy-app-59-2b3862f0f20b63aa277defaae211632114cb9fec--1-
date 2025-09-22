import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const PropertySize = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (selectedSize) {
      localStorage.setItem('selectedPropertySize', selectedSize);
      navigate("/caretakers");
    }
  };

  const propertyTypes = localStorage.getItem('selectedPropertyType') || 'house';
  
  const getSizeOptions = () => {
    switch (propertyTypes) {
      case 'house':
        return [
          { value: "1bhk", label: "1 BHK (400-600 sq ft)" },
          { value: "2bhk", label: "2 BHK (600-900 sq ft)" },
          { value: "3bhk", label: "3 BHK (900-1200 sq ft)" },
          { value: "4bhk", label: "4 BHK (1200-1800 sq ft)" },
          { value: "5bhk+", label: "5+ BHK (1800+ sq ft)" },
        ];
      case 'land':
        return [
          { value: "small", label: "Small Plot (< 1000 sq ft)" },
          { value: "medium", label: "Medium Plot (1000-5000 sq ft)" },
          { value: "large", label: "Large Plot (5000-10000 sq ft)" },
          { value: "xlarge", label: "Extra Large Plot (10000+ sq ft)" },
        ];
      case 'commercial':
        return [
          { value: "shop", label: "Small Shop (< 500 sq ft)" },
          { value: "office", label: "Office Space (500-2000 sq ft)" },
          { value: "warehouse", label: "Warehouse (2000-10000 sq ft)" },
          { value: "complex", label: "Commercial Complex (10000+ sq ft)" },
        ];
      default:
        return [];
    }
  };

  const getTitle = () => {
    switch (propertyTypes) {
      case 'house':
        return "Property Size";
      case 'land':
        return "Plot Size";
      case 'commercial':
        return "Commercial Space Size";
      default:
        return "Property Size";
    }
  };

  const sizeOptions = getSizeOptions();

  return (
    <div className="min-h-screen bg-gradient-service">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link to="/property-address">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{getTitle()}</CardTitle>
              <p className="text-muted-foreground">Please specify the size of your property</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label htmlFor="size">Property Size</Label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose property size" />
                  </SelectTrigger>
                  <SelectContent>
                    {sizeOptions.map((size) => (
                      <SelectItem key={size.value} value={size.value}>{size.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Home className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Pricing Information</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Caretaker pricing will be calculated based on your city's cost of living, 
                  property type, and size to provide you with the most accurate rates.
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button 
                  variant="hero" 
                  onClick={handleNext}
                  disabled={!selectedSize}
                  className="w-full"
                >
                  Find Caretakers
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PropertySize;