import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  property: {
    type: string;
    address: string;
    size: string;
    city: string;
  };
  profilePicture: string;
  status: "active" | "pending";
  bookingDate: string;
}

const CaretakerDashboard = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedPropertyType, setSelectedPropertyType] = useState<string>("house");

  // Generate customers based on property type
  const generateCustomers = (propertyType: string): Customer[] => {
    const customerNames = [
      "Amit Sharma", "Priya Patel", "Rohit Kumar", "Sneha Gupta", 
      "Vikram Singh", "Kavya Nair", "Arjun Reddy", "Meera Joshi"
    ];
    
    const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad"];
    const addresses = [
      "123 Park Avenue", "456 Garden Street", "789 Lake View", 
      "321 Hill Top", "654 City Center", "987 Green Valley"
    ];

    let count = 4; // Default for house/apartment
    if (propertyType === "land" || propertyType === "plot") count = 3;
    if (propertyType === "commercial") count = 4;

    return Array.from({ length: count }, (_, index) => ({
      id: `customer-${index + 1}`,
      name: customerNames[index],
      email: `${customerNames[index].toLowerCase().replace(' ', '.')}@email.com`,
      phone: `+91 ${Math.floor(Math.random() * 9000000000) + 1000000000}`,
      property: {
        type: propertyType,
        address: `${addresses[index]}, ${cities[Math.floor(Math.random() * cities.length)]}`,
        size: propertyType === "commercial" ? `${Math.floor(Math.random() * 3000) + 1000} sq ft` : 
              propertyType === "land" || propertyType === "plot" ? `${Math.floor(Math.random() * 2000) + 500} sq yards` :
              `${Math.floor(Math.random() * 3) + 2} BHK`,
        city: cities[Math.floor(Math.random() * cities.length)]
      },
      profilePicture: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 100000000)}?w=150&h=150&fit=crop&crop=face`,
      status: Math.random() > 0.3 ? "active" : "pending",
      bookingDate: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toLocaleDateString()
    }));
  };

  useEffect(() => {
    setCustomers(generateCustomers(selectedPropertyType));
  }, [selectedPropertyType]);

  const handleChatWithCustomer = (customerId: string) => {
    navigate(`/chat/${customerId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/signin">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Sign In
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-primary">Caretaker Dashboard</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Property Type Filter */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Filter by Property Type</h2>
          <div className="flex flex-wrap gap-2">
            {["house", "apartment", "land", "plot", "commercial"].map((type) => (
              <Button
                key={type}
                variant={selectedPropertyType === type ? "default" : "outline"}
                onClick={() => setSelectedPropertyType(type)}
                className="capitalize"
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        {/* Customers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customers.map((customer) => (
            <Card key={customer.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={customer.profilePicture}
                      alt={customer.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{customer.name}</CardTitle>
                      <Badge variant={customer.status === "active" ? "default" : "secondary"}>
                        {customer.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4" />
                    {customer.property.address}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Phone className="mr-2 h-4 w-4" />
                    {customer.phone}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Mail className="mr-2 h-4 w-4" />
                    {customer.email}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="text-sm space-y-1">
                    <div><strong>Property Type:</strong> <span className="capitalize">{customer.property.type}</span></div>
                    <div><strong>Size:</strong> {customer.property.size}</div>
                    <div><strong>City:</strong> {customer.property.city}</div>
                    <div><strong>Booked:</strong> {customer.bookingDate}</div>
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  variant="hero"
                  onClick={() => handleChatWithCustomer(customer.id)}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat with Customer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {customers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No customers found for the selected property type.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaretakerDashboard;