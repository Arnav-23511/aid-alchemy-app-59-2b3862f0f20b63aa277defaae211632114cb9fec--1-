import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MapPin, Clock, Shield, Phone, Mail, ArrowLeft, CheckCircle } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";

const CaretakerProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data for different caretakers
  const caretakers = {
    "1": {
      id: 1,
      name: "Rajesh Kumar",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      skills: ["Home Maintenance", "Garden Care", "Security", "Cleaning", "Electrical Work"],
      rating: 4.8,
      totalReviews: 47,
      experience: 5,
      location: "Andheri West, Mumbai",
      verified: true,
      price: "₹15,000/month",
      phone: "+91 98765 43210",
      email: "rajesh.kumar@email.com",
      aadhaarVerified: true,
      description: "Experienced caretaker with 5+ years in residential property maintenance. Specializes in home security, garden maintenance, and general upkeep. Reliable, trustworthy, and available for both full-time and part-time engagements.",
      availability: "Full-time, Part-time",
      languages: ["Hindi", "English", "Marathi"]
    },
    "2": {
      id: 2,
      name: "Suresh Patel",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      skills: ["Land Maintenance", "Agricultural Care", "Irrigation", "Crop Management", "Livestock Care"],
      rating: 4.6,
      totalReviews: 32,
      experience: 8,
      location: "Borivali East, Mumbai",
      verified: true,
      price: "₹18,000/month",
      phone: "+91 98765 43211",
      email: "suresh.patel@email.com",
      aadhaarVerified: true,
      description: "Agricultural specialist with 8+ years in land and farm management. Expert in irrigation systems, crop care, and livestock management. Perfect for farmhouse and agricultural property maintenance.",
      availability: "Full-time",
      languages: ["Hindi", "English", "Gujarati"]
    },
    "3": {
      id: 3,
      name: "Amit Singh",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
      skills: ["Property Security", "Maintenance", "Cleaning", "Night Watch", "Emergency Response"],
      rating: 4.9,
      totalReviews: 38,
      experience: 3,
      location: "Bandra West, Mumbai",
      verified: true,
      price: "₹12,000/month",
      phone: "+91 98765 43212",
      email: "amit.singh@email.com",
      aadhaarVerified: true,
      description: "Security-focused caretaker with 3+ years in property protection and maintenance. Trained in emergency response and night security. Ideal for properties requiring enhanced security measures.",
      availability: "Full-time, Night shifts",
      languages: ["Hindi", "English", "Punjabi"]
    },
    "4": {
      id: 4,
      name: "Mohan Sharma",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face",
      skills: ["Building Maintenance", "Electrical Work", "Plumbing", "HVAC", "Carpentry"],
      rating: 4.7,
      totalReviews: 55,
      experience: 12,
      location: "Powai, Mumbai",
      verified: true,
      price: "₹22,000/month",
      phone: "+91 98765 43213",
      email: "mohan.sharma@email.com",
      aadhaarVerified: true,
      description: "Master technician with 12+ years in building maintenance and repairs. Expert in electrical, plumbing, and HVAC systems. Perfect for large properties and commercial buildings.",
      availability: "Full-time, Emergency calls",
      languages: ["Hindi", "English"]
    },
    "5": {
      id: 5,
      name: "Raghavendra Naha",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
      skills: ["Farm Management", "Livestock Care", "Crop Monitoring", "Organic Farming", "Pest Control"],
      rating: 4.5,
      totalReviews: 28,
      experience: 7,
      location: "Thane, Mumbai",
      verified: true,
      price: "₹20,000/month",
      phone: "+91 98765 43214",
      email: "raghavendra.naha@email.com",
      aadhaarVerified: true,
      description: "Specialized farm manager with 7+ years in organic farming and livestock care. Expert in sustainable farming practices and animal husbandry. Ideal for agricultural properties and eco-farms.",
      availability: "Full-time",
      languages: ["Hindi", "English", "Bengali"]
    },
    "6": {
      id: 6,
      name: "Vikash Yadav",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
      skills: ["Household Management", "Pet Care", "Elderly Care", "Cooking", "Child Care"],
      rating: 4.8,
      totalReviews: 42,
      experience: 4,
      location: "Malad West, Mumbai",
      verified: true,
      price: "₹16,000/month",
      phone: "+91 98765 43215",
      email: "vikash.yadav@email.com",
      aadhaarVerified: true,
      description: "Comprehensive household manager with 4+ years in family care services. Specializes in pet care, elderly assistance, and household management. Perfect for families requiring full-service care.",
      availability: "Full-time, Live-in",
      languages: ["Hindi", "English"]
    }
  };

  const caretaker = caretakers[id] || caretakers["1"];

  const reviews = [
    {
      id: 1,
      author: "Priya Sharma",
      rating: 5,
      date: "2 weeks ago",
      comment: "Excellent service! Rajesh has been taking care of our property for 6 months now. Very reliable and trustworthy. Highly recommended!"
    },
    {
      id: 2,
      author: "Amit Patel",
      rating: 4,
      date: "1 month ago",
      comment: "Good caretaker, maintains the property well. Sometimes delays in communication but overall satisfied with the service."
    },
    {
      id: 3,
      author: "Sunita Joshi",
      rating: 5,
      date: "2 months ago",
      comment: "Outstanding work! Our garden has never looked better. Rajesh is punctual, professional, and takes great care of our home."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/caretakers">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Caretakers
          </Button>
        </Link>

        {/* Profile Header */}
        <Card className="mb-8 shadow-card">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Photo and Basic Info */}
              <div className="flex-shrink-0">
                <img
                  src={caretaker.photo}
                  alt={caretaker.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
                />
              </div>

              {/* Details */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                  <h1 className="text-3xl font-bold">{caretaker.name}</h1>
                  {caretaker.verified && (
                    <Shield className="h-6 w-6 text-green-500" />
                  )}
                </div>

                <div className="flex items-center justify-center md:justify-start space-x-1 mb-4">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">{caretaker.rating}</span>
                  <span className="text-muted-foreground">({caretaker.totalReviews} reviews)</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{caretaker.experience} years experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{caretaker.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{caretaker.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{caretaker.email}</span>
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <div className="text-2xl font-bold text-primary mb-4">{caretaker.price}</div>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                    <Button 
                      variant="hero" 
                      size="lg"
                      onClick={() => navigate(`/payment/${caretaker.id}`)}
                    >
                      Confirm Hire
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="about" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>About {caretaker.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {caretaker.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Availability</h4>
                    <p className="text-muted-foreground">{caretaker.availability}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {caretaker.languages.map((language, index) => (
                        <Badge key={index} variant="outline">{language}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Skills & Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {caretaker.skills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-muted rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Verification & Documents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <div>
                    <p className="font-semibold text-green-700">Aadhaar Card Verified</p>
                    <p className="text-sm text-green-600">Identity verified by CareTaker Pro</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <div>
                    <p className="font-semibold text-green-700">Background Check Complete</p>
                    <p className="text-sm text-green-600">Criminal background verification passed</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <div>
                    <p className="font-semibold text-green-700">References Verified</p>
                    <p className="text-sm text-green-600">Previous employer references confirmed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>Reviews & Ratings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-semibold">{review.author}</span>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CaretakerProfile;