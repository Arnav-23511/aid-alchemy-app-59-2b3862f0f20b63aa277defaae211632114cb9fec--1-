import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Shield, Settings, MessageSquare, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SettingsSidebar from "@/components/SettingsSidebar";
import ChatBot from "@/components/ChatBot";

// Function to generate dynamic caretaker profiles for different cities
const generateCaretakersForCity = (city: string, propertyType: string, propertySize: string) => {
  const photos = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face"
  ];
  
  const names = [
    "Rajesh Kumar", "Suresh Patel", "Amit Singh", "Mohan Sharma", 
    "Vikash Yadav", "Deepak Gupta", "Arjun Reddy", "Karan Joshi"
  ];
  
  const skillSets = [
    ["Home Maintenance", "Garden Care", "Security"],
    ["Land Maintenance", "Agricultural Care", "Irrigation"],
    ["Property Security", "Maintenance", "Cleaning"],
    ["Building Maintenance", "Electrical Work", "Plumbing"],
    ["Farm Management", "Livestock Care", "Crop Monitoring"],
    ["Household Management", "Pet Care", "Elderly Care"],
    ["Construction", "Renovation", "Interior Design"],
    ["Landscaping", "Pool Maintenance", "Outdoor Care"]
  ];
  
  const areas = [
    `Andheri West, ${city}`, `Borivali East, ${city}`, `Bandra West, ${city}`,
    `Powai, ${city}`, `Thane, ${city}`, `Malad West, ${city}`,
    `Juhu, ${city}`, `Worli, ${city}`, `Lower Parel, ${city}`
  ];
  
  // Dynamic pricing based on city, property type, and size
  const calculatePrice = (city: string, propertyType: string, propertySize: string) => {
    // Base prices by city (cost of living multiplier)
    const cityMultipliers: { [key: string]: number } = {
      'Mumbai': 1.5, 'Delhi': 1.4, 'Bangalore': 1.3, 'Chennai': 1.2, 'Hyderabad': 1.1,
      'Pune': 1.2, 'Kolkata': 1.0, 'Ahmedabad': 0.9, 'Surat': 0.8, 'Jaipur': 0.8
    };
    
    // Property type multipliers
    const propertyMultipliers: { [key: string]: number } = {
      'house': 1.0, 'commercial': 1.4, 'land': 0.8
    };
    
    // Size multipliers
    const sizeMultipliers: { [key: string]: number } = {
      // House sizes
      '1bhk': 0.8, '2bhk': 1.0, '3bhk': 1.3, '4bhk': 1.6, '5bhk+': 2.0,
      // Land sizes
      'small': 0.7, 'medium': 1.0, 'large': 1.5, 'xlarge': 2.2,
      // Commercial sizes
      'shop': 0.9, 'office': 1.2, 'warehouse': 1.8, 'complex': 2.5
    };
    
    const basePrice = 12000;
    const cityMult = cityMultipliers[city] || 1.0;
    const propMult = propertyMultipliers[propertyType] || 1.0;
    const sizeMult = sizeMultipliers[propertySize] || 1.0;
    
    return Math.round(basePrice * cityMult * propMult * sizeMult);
  };
  
  const caretakers = [];
  
  // Shuffle photos array to ensure uniqueness
  const shuffledPhotos = [...photos].sort(() => Math.random() - 0.5);
  
  // Always include Raghavendra Basarwar as first profile with unique photo
  const raghavPhoto = shuffledPhotos[0];
  const raghavSkills = skillSets[Math.floor(Math.random() * skillSets.length)];
  const raghavArea = areas[Math.floor(Math.random() * areas.length)];
  const raghavPrice = calculatePrice(city, propertyType, propertySize);
  
  caretakers.push({
    id: 1,
    name: "Raghavendra Basarwar",
    photo: raghavPhoto,
    skills: raghavSkills,
    rating: 4.5 + Math.random() * 0.4, // Random rating between 4.5-4.9
    experience: Math.floor(Math.random() * 15) + 1, // 1-15 years
    location: raghavArea,
    verified: true,
    price: `₹${raghavPrice.toLocaleString()}/month`
  });
  
  // Generate 3-4 additional random profiles with unique photos
  const numAdditional = 3 + Math.floor(Math.random() * 2); // 3 or 4
  for (let i = 0; i < numAdditional; i++) {
    const unusedNames = names.filter(name => name !== "Raghavendra Basarwar");
    const randomName = unusedNames[Math.floor(Math.random() * unusedNames.length)];
    const randomPhoto = shuffledPhotos[i + 1]; // Use next unique photo
    const randomSkills = skillSets[Math.floor(Math.random() * skillSets.length)];
    const randomArea = areas[Math.floor(Math.random() * areas.length)];
    const randomPrice = calculatePrice(city, propertyType, propertySize);
    // Add some variation to other caretaker prices
    const priceVariation = 0.8 + Math.random() * 0.4; // 0.8 to 1.2 multiplier
    const finalPrice = Math.round(randomPrice * priceVariation);
    
    caretakers.push({
      id: i + 2,
      name: randomName,
      photo: randomPhoto,
      skills: randomSkills,
      rating: 4.3 + Math.random() * 0.6, // Random rating between 4.3-4.9
      experience: Math.floor(Math.random() * 20) + 1, // 1-20 years
      location: randomArea,
      verified: true,
      price: `₹${finalPrice.toLocaleString()}/month`
    });
  }
  
  return caretakers;
};

const CaretakerList = () => {
  const navigate = useNavigate();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [caretakers, setCaretakers] = useState<any[]>([]);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  
  useEffect(() => {
    // Check if payment was completed
    const isPaymentCompleted = localStorage.getItem('paymentCompleted') === 'true';
    setPaymentCompleted(isPaymentCompleted);
    
    // Get stored data or defaults
    const currentCity = localStorage.getItem('selectedCity') || "Mumbai";
    const propertyType = localStorage.getItem('selectedPropertyType') || "house";
    const propertySize = localStorage.getItem('selectedPropertySize') || "2bhk";
    
    const generatedCaretakers = generateCaretakersForCity(currentCity, propertyType, propertySize);
    setCaretakers(generatedCaretakers);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/home")}
              className="flex items-center"
            >
              <Home className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Available Caretakers</h1>
              <p className="text-muted-foreground">{localStorage.getItem('selectedCity') || 'Mumbai'} • {caretakers.length} caretakers found</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline"
              onClick={() => {
                if (paymentCompleted) {
                  const hiredCaretaker = JSON.parse(localStorage.getItem('hiredCaretaker') || '{}');
                  navigate(`/chat/${hiredCaretaker.id}`);
                } else {
                  alert('Please complete a payment to access messaging functionality.');
                }
              }}
              className="flex items-center gap-2"
              disabled={!paymentCompleted}
            >
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Message</span>
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setIsSettingsOpen(true)}
              className="relative"
            >
              <Settings className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline"
              onClick={() => setIsChatOpen(true)}
              className="flex items-center gap-2"
            >
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Report</span>
            </Button>
          </div>
        </div>

        {/* Caretaker Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caretakers.map((caretaker) => (
            <Card 
              key={caretaker.id} 
              className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => navigate(`/caretaker/${caretaker.id}`)}
            >
              <CardContent className="p-6">
                {/* Photo and Basic Info */}
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={caretaker.photo}
                    alt={caretaker.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-lg">{caretaker.name}</h3>
                      {caretaker.verified && (
                        <Shield className="h-4 w-4 text-green-500" />
                      )}
                    </div>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{caretaker.rating}</span>
                      <span className="text-sm text-muted-foreground">(25 reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {caretaker.skills.slice(0, 2).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {caretaker.skills.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{caretaker.skills.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Experience and Location */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{caretaker.experience} years experience</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{caretaker.location}</span>
                  </div>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold text-primary">
                    {caretaker.price}
                  </div>
                  <Button variant="professional" size="sm">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>

      {/* Sidebar Components */}
      <SettingsSidebar 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
      />
      <ChatBot 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </div>
  );
};

export default CaretakerList;