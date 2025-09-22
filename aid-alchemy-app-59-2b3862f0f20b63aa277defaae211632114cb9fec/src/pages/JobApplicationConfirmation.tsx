import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Mail, Calendar, Home } from "lucide-react";

const JobApplicationConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { applicantName, applicantEmail } = location.state || {};

  useEffect(() => {
    // Redirect to home if accessed without proper state
    if (!applicantName || !applicantEmail) {
      navigate("/");
    }
  }, [applicantName, applicantEmail, navigate]);

  if (!applicantName || !applicantEmail) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <Card className="text-center">
                <CardHeader className="pb-8">
                  <div className="flex justify-center mb-6">
                    <div className="bg-green-100 p-4 rounded-full">
                      <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-bold text-foreground mb-2">
                    Application Submitted Successfully!
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Thank you for your interest in joining our caretaker team, {applicantName}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                    <div className="flex items-center justify-center gap-3 text-muted-foreground">
                      <Mail className="h-5 w-5" />
                      <span>Application confirmation sent to: {applicantEmail}</span>
                    </div>
                    
                    <div className="flex items-center justify-center gap-3 text-muted-foreground">
                      <Calendar className="h-5 w-5" />
                      <span>Interview date will be sent to your email within 48 hours</span>
                    </div>
                  </div>

                  <div className="space-y-4 text-left">
                    <h3 className="font-semibold text-foreground">What happens next?</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">1.</span>
                        Our team will verify your Aadhaar card details within 24 hours
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">2.</span>
                        You'll receive an email with your interview schedule and video call link
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">3.</span>
                        After a successful interview, you'll be onboarded to our platform
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">4.</span>
                        Start receiving caretaking assignments in your area
                      </li>
                    </ul>
                  </div>

                  <div className="pt-6">
                    <Button 
                      onClick={() => navigate("/")}
                      size="lg"
                      className="w-full"
                    >
                      <Home className="h-4 w-4 mr-2" />
                      Return to Home Page
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JobApplicationConfirmation;