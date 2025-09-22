import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CreditCard, Wallet, QrCode } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const Payment = () => {
  const { id } = useParams();
  const [paymentMethod, setPaymentMethod] = useState("card");

  // Mock caretaker data - in real app this would come from API/database
  const caretaker = {
    name: "Rajesh Kumar",
    price: "₹15,000",
    period: "month",
    serviceCharge: "₹500",
    total: "₹15,500"
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Back Button */}
        <Link to={`/caretaker/${id}`}>
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Profile
          </Button>
        </Link>

        <div className="space-y-6">
          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Caretaker: {caretaker.name}</span>
                <span className="font-semibold">{caretaker.price}/{caretaker.period}</span>
              </div>
              <div className="flex justify-between">
                <span>Service Charge</span>
                <span>{caretaker.serviceCharge}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span className="text-primary">{caretaker.total}</span>
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-2 p-4 border rounded-lg">
                  <RadioGroupItem value="card" id="card" />
                  <CreditCard className="h-5 w-5" />
                  <Label htmlFor="card" className="flex-1">Credit/Debit Card</Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg">
                  <RadioGroupItem value="upi" id="upi" />
                  <QrCode className="h-5 w-5" />
                  <Label htmlFor="upi" className="flex-1">UPI Payment</Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg">
                  <RadioGroupItem value="wallet" id="wallet" />
                  <Wallet className="h-5 w-5" />
                  <Label htmlFor="wallet" className="flex-1">Digital Wallet</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Payment Details */}
          {paymentMethod === "card" && (
            <Card>
              <CardHeader>
                <CardTitle>Card Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="cardName">Cardholder Name</Label>
                  <Input id="cardName" placeholder="Full Name" />
                </div>
              </CardContent>
            </Card>
          )}

          {paymentMethod === "upi" && (
            <Card>
              <CardHeader>
                <CardTitle>UPI Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="upiId">UPI ID</Label>
                  <Input id="upiId" placeholder="yourname@upi" />
                </div>
              </CardContent>
            </Card>
          )}

          {paymentMethod === "wallet" && (
            <Card>
              <CardHeader>
                <CardTitle>Select Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="paytm">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paytm" id="paytm" />
                    <Label htmlFor="paytm">Paytm</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phonepe" id="phonepe" />
                    <Label htmlFor="phonepe">PhonePe</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="googlepay" id="googlepay" />
                    <Label htmlFor="googlepay">Google Pay</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col space-y-3">
            <Button 
              size="lg" 
              className="w-full"
              onClick={() => window.location.href = `/payment-confirmation/${id}`}
            >
              Proceed to Payment
            </Button>
            <p className="text-sm text-muted-foreground text-center">
              Your payment is secure and encrypted. Money will be held in escrow until service completion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;