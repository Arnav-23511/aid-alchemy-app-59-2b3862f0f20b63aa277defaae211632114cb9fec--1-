import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PaymentConfirmation = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock caretaker data - in real app this would come from API/database
  const caretaker = {
    name: "Rajesh Kumar",
    price: "₹15,000",
    period: "month",
    total: "₹15,500"
  };

  // Store payment completion in localStorage for message functionality
  useEffect(() => {
    localStorage.setItem('paymentCompleted', 'true');
    localStorage.setItem('hiredCaretaker', JSON.stringify({ id, ...caretaker }));
  }, [id]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Back Button */}
        <Link to="/caretakers">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Caretakers
          </Button>
        </Link>

        <div className="space-y-6">
          {/* Payment Confirmation */}
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <CardTitle className="text-2xl text-green-600">Payment Confirmed!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Your payment has been successfully processed. You have hired <strong>{caretaker.name}</strong> for your property care needs.
              </p>
              
              <div className="bg-muted p-4 rounded-lg space-y-2">
                <div className="flex justify-between">
                  <span>Caretaker:</span>
                  <span className="font-semibold">{caretaker.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount Paid:</span>
                  <span className="font-semibold text-primary">{caretaker.total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service Period:</span>
                  <span className="font-semibold">1 {caretaker.period}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                Your money is held in escrow and will be released to the caretaker upon service completion.
              </p>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-3">
            <Button 
              size="lg" 
              className="w-full"
              onClick={() => navigate(`/chat/${id}`)}
            >
              Chat with Caretaker
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full"
              onClick={() => navigate('/caretakers')}
            >
              Find More Caretakers
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmation;