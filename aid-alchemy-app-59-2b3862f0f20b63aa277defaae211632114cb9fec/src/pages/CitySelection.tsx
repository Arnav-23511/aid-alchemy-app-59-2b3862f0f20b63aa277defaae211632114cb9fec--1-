import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const CitySelection = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (selectedCity) {
      localStorage.setItem('selectedCity', selectedCity);
      navigate("/select-property");
    }
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

  return (
    <div className="min-h-screen bg-gradient-service">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link to="/home">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Select Your City</CardTitle>
              <p className="text-muted-foreground">Choose the city where your property is located</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label htmlFor="city">Select City</Label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
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

              {/* Submit Button */}
              <div className="pt-6">
                <Button 
                  variant="hero" 
                  onClick={handleNext}
                  disabled={!selectedCity}
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

export default CitySelection;