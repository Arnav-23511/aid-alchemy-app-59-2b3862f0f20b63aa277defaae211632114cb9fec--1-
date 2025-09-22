import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Search, CreditCard, Headphones, MapPin, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Shield,
    title: "Verified Caretakers",
    description: "All caretakers undergo thorough background checks, Aadhaar verification, and skill assessments for your peace of mind.",
    features: ["Background Checked", "Document Verified", "Skill Tested"]
  },
  {
    icon: Search,
    title: "Easy Hiring Process",
    description: "Post your requirements, browse verified profiles, and hire the perfect caretaker in just a few clicks.",
    features: ["Quick Posting", "Smart Matching", "Fast Hiring"]
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Safe and transparent payment system with clear pricing, secure transactions, and satisfaction guarantees.",
    features: ["Transparent Pricing", "Secure Transactions", "Money Back Guarantee"]
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support with complaint handling, dispute resolution, and AI-powered assistance.",
    features: ["24/7 Available", "Complaint System", "AI Chat Support"]
  },
  {
    icon: MapPin,
    title: "Location Based",
    description: "Find caretakers in your exact area with precise location matching and local area expertise.",
    features: ["GPS Matching", "Local Expertise", "Area Knowledge"]
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Choose from various engagement types - full-time, part-time, or temporary caretaker services.",
    features: ["Full-time Options", "Part-time Available", "Temporary Service"]
  }
];

const ServiceHighlights = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 bg-gradient-service">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-foreground mb-4">
            Why Choose CareTaker Pro?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide a comprehensive platform connecting property owners with verified, 
            professional caretakers while ensuring security, transparency, and peace of mind.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-8 bg-white shadow-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-0">
              <div className="text-primary mb-6">
                <service.icon className="h-12 w-12" />
              </div>
              
              <h3 className="text-card-title font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-12 shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied property owners who trust CareTaker Pro 
            for their property management needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => navigate("/caretakers")}
            >
              Find Caretakers Now
            </Button>
            <Button 
              variant="professional" 
              size="lg"
              onClick={() => navigate("/signin")}
            >
              Apply as Caretaker
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;