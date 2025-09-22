import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const PropertyAddress = () => {
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (address.trim()) {
      localStorage.setItem('selectedAddress', address);
      navigate("/property-size");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-service">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link to="/select-property">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Property Address</CardTitle>
              <p className="text-muted-foreground">Please provide the exact address of your property</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Complete Address</Label>
                  <Input
                    id="address"
                    placeholder="Enter exact property address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="h-12"
                  />
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Location on Map</span>
                  </div>
                  <div className="bg-card h-48 rounded border flex items-center justify-center">
                    <p className="text-muted-foreground">Google Maps Integration</p>
                    <p className="text-sm text-muted-foreground ml-2">(Coming Soon)</p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button 
                  variant="hero" 
                  onClick={handleSubmit}
                  disabled={!address.trim()}
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

export default PropertyAddress;