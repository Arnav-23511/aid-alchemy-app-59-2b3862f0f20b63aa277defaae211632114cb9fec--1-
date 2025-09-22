import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, MapPin, Users, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                About CareTaker Pro
              </h1>
              <p className="text-xl text-muted-foreground">
                Your trusted partner in remote property management
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We aim to provide professionals that can take care of any issue or work related to your property 
                  that is in a far away location from where you reside. Our caretakers will deal with issues related 
                  to renters, maintaining the property and more for you while giving you live reports.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-card rounded-lg p-8 border shadow-sm">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-foreground">Remote Management</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Manage your properties from anywhere in the world with our professional caretakers on-site.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-8 border shadow-sm">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-foreground">Verified Professionals</h3>
                  </div>
                  <p className="text-muted-foreground">
                    All our caretakers are thoroughly vetted and verified to ensure the highest quality service.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-8 border shadow-sm">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-foreground">Renter Relations</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Handle tenant communications, rent collection, and property inspections seamlessly.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-8 border shadow-sm">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-foreground">Live Reports</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Receive real-time updates and detailed reports on all property activities and maintenance.
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                  Why Choose CareTaker Pro?
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <p className="text-muted-foreground">Round-the-clock availability and monitoring</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <p className="text-muted-foreground">Trusted caretakers across multiple locations</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">99%</div>
                    <p className="text-muted-foreground">Customer satisfaction rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;