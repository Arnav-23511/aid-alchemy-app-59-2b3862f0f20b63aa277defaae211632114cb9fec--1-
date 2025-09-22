import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, MapPin, Home, Building, Landmark } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const PostRequirement = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    city: "",
    assetType: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 1) setStep(step + 1);
    else if (step === 2) {
      // After selecting property type, redirect to sign-in
      navigate("/signin");
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const cities = [
    "Agra", "Ahmedabad", "Ahmednagar", "Aizawl", "Ajmer", "Akola", "Alappuzha", "Aligarh", "Allahabad", "Alwar",
    "Ambala", "Amravati", "Amritsar", "Amroha", "Anand", "Anantapur", "Anantpur", "Anantnag", "Angamaly", "Ankleshwar",
    "Asansol", "Aurangabad", "Baddi", "Bagalkot", "Bagdogra", "Balasore", "Bangalore", "Bankura", "Bardoli", "Bareilly",
    "Belgaum", "Bellary", "Berhampur", "Bhagalpur", "Bharuch", "Bhavnagar", "Bhilai", "Bhilwara", "Bhimavaram", "Bhopal",
    "Bhubaneswar", "Bhuj", "Bhusawal", "Bidar", "Bijapur", "Bilaspur", "Bokaro", "Brahmapur", "Budaun", "Bulandshahr",
    "Burhanpur", "Calicut", "Chandigarh", "Chandrapur", "Chennai", "Chhindwara", "Chittoor", "Coimbatore", "Cuttack",
    "Daman", "Darbhanga", "Davangere", "Dehradun", "Delhi", "Dhanbad", "Dharamshala", "Dharwad", "Dhulia", "Dindigul",
    "Durg", "Durgapur", "Eluru", "Erode", "Faridabad", "Fatehpur", "Firozabad", "Gandhinagar", "Gangtok", "Gaya",
    "Ghaziabad", "Goa", "Gobichettipalayam", "Godhra", "Gondia", "Gorakhpur", "Gudivada", "Gulbarga", "Guntur", "Gurgaon",
    "Guwahati", "Gwalior", "Haldia", "Hapur", "Haridwar", "Hassan", "Hazaribagh", "Hisar", "Hosur", "Howrah",
    "Hubli", "Hyderabad", "Ichalkaranji", "Imphal", "Indore", "Jabalpur", "Jaipur", "Jalandhar", "Jalgaon", "Jammu",
    "Jamnagar", "Jamshedpur", "Jhansi", "Jodhpur", "Junagadh", "Kadapa", "Kakinada", "Kalol", "Kamarhati", "Kanpur",
    "Karimnagar", "Karnal", "Karur", "Kashipur", "Katni", "Kochi", "Kohima", "Kolar", "Kolhapur", "Kolkata",
    "Kollam", "Korba", "Kota", "Kottayam", "Kozhikode", "Kurnool", "Latur", "Loni", "Lucknow", "Ludhiana",
    "Machilipatnam", "Madurai", "Malegaon", "Mangalore", "Mathura", "Meerut", "Mehsana", "Moradabad", "Morbi", "Mumbai",
    "Muzaffarnagar", "Muzaffarpur", "Mysore", "Nadiad", "Nagaon", "Nagpur", "Naihati", "Najibabad", "Namakkal", "Nanded",
    "Nandyal", "Nashik", "Navi Mumbai", "Nellore", "New Delhi", "Nizamabad", "Noida", "Ongole", "Orai", "Ozhukarai",
    "Palakkad", "Pali", "Palwal", "Panaji", "Panihati", "Panipat", "Panvel", "Parbhani", "Pathankot", "Patiala",
    "Patna", "Pimpri", "Pondicherry", "Porbandar", "Port Blair", "Proddatur", "Puducherry", "Pune", "Purnia", "Pushkar",
    "Raichur", "Raipur", "Rajahmundry", "Rajkot", "Ramagundam", "Rampur", "Ranchi", "Ratlam", "Raurkela", "Rewari",
    "Rohtak", "Roorkee", "Rourkela", "Sagar", "Saharanpur", "Salem", "Sambalpur", "Sangli", "Satara", "Satna",
    "Secunderabad", "Shahjahanpur", "Shimla", "Shimoga", "Shivamogga", "Sikar", "Silchar", "Siliguri", "Singrauli", "Sirsa",
    "Sonipat", "Srinagar", "Surat", "Surendranagar", "Thane", "Thanjavur", "Thiruvananthapuram", "Thrissur", "Tinsukia", "Tirunelveli",
    "Tirupati", "Tiruppur", "Tiruvottiyur", "Tomohon", "Tumkur", "Udaipur", "Ujjain", "Ulhasnagar", "Unnao", "Vadodara",
    "Valsad", "Vapi", "Varanasi", "Vasco da Gama", "Vellore", "Vijayawada", "Visakhapatnam", "Warangal", "Wardha", "Yamunanagar"
  ];

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
          <Link to="/">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNum 
                    ? "bg-primary text-white" 
                    : "bg-gray-200 text-gray-600"
                }`}>
                  {stepNum}
                </div>
                {stepNum < 2 && (
                  <div className={`w-16 h-1 ml-4 ${
                    step > stepNum ? "bg-primary" : "bg-gray-200"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                {step === 1 && "Select Your City"}
                {step === 2 && "Choose Asset Type"}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Step 1: City Selection */}
              {step === 1 && (
                <div className="space-y-4">
                  <Label htmlFor="city">Select City</Label>
                  <Select value={formData.city} onValueChange={(value) => setFormData({...formData, city: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your city" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Step 2: Asset Type */}
              {step === 2 && (
                <div className="space-y-4">
                  <Label>Select Asset Type</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {assetTypes.map((type) => (
                      <div
                        key={type.value}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.assetType === type.value
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 hover:border-primary/50"
                        }`}
                        onClick={() => setFormData({...formData, assetType: type.value})}
                      >
                        <div className="text-center">
                          <type.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <p className="font-medium">{type.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}


              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button 
                  variant="outline" 
                  onClick={handleBack}
                  disabled={step === 1}
                >
                  Back
                </Button>
                <Button 
                  variant="hero" 
                  onClick={handleNext}
                  disabled={
                    (step === 1 && !formData.city) ||
                    (step === 2 && !formData.assetType)
                  }
                >
                  {step === 2 ? "Continue to Sign In" : "Next"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PostRequirement;