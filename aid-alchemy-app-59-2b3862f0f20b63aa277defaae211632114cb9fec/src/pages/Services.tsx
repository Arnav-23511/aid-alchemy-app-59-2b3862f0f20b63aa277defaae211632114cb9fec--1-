import Header from "@/components/Header";
import ServiceHighlights from "@/components/ServiceHighlights";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive property caretaking services to protect and maintain your valuable assets
            </p>
          </div>
        </div>
        <ServiceHighlights />
      </main>
      <Footer />
    </div>
  );
};

export default Services;