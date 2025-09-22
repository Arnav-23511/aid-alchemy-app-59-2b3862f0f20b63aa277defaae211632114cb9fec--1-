import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import PostRequirement from "./pages/PostRequirement";
import CitySelection from "./pages/CitySelection";
import PropertySelection from "./pages/PropertySelection";
import PropertyAddress from "./pages/PropertyAddress";
import PropertySize from "./pages/PropertySize";
import CaretakerList from "./pages/CaretakerList";
import CaretakerProfile from "./pages/CaretakerProfile";
import Payment from "./pages/Payment";
import PaymentConfirmation from "./pages/PaymentConfirmation";
import Chat from "./pages/Chat";
import Services from "./pages/Services";
import About from "./pages/About";
import JobForum from "./pages/JobForum";
import JobApplicationConfirmation from "./pages/JobApplicationConfirmation";
import CaretakerDashboard from "./pages/CaretakerDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/post-requirement" element={<PostRequirement />} />
          <Route path="/select-city" element={<CitySelection />} />
          <Route path="/select-property" element={<PropertySelection />} />
          <Route path="/property-address" element={<PropertyAddress />} />
          <Route path="/property-size" element={<PropertySize />} />
          <Route path="/caretakers" element={<CaretakerList />} />
          <Route path="/caretaker/:id" element={<CaretakerProfile />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="/payment-confirmation/:id" element={<PaymentConfirmation />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/job-forum" element={<JobForum />} />
          <Route path="/job-application-confirmation" element={<JobApplicationConfirmation />} />
          <Route path="/caretaker-dashboard" element={<CaretakerDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
