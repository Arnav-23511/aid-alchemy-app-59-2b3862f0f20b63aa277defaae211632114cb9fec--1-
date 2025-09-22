import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, User, Mail, Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const jobApplicationSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(10, "Please enter your complete address"),
  experience: z.string().min(50, "Please describe your experience in at least 50 characters"),
  aadhaarNumber: z.string().min(12, "Please enter a valid 12-digit Aadhaar number").max(12, "Aadhaar number should be 12 digits"),
  resume: z.any().optional(),
  aadhaarPhoto: z.any().optional(),
});

type JobApplicationForm = z.infer<typeof jobApplicationSchema>;

const JobForum = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const form = useForm<JobApplicationForm>({
    resolver: zodResolver(jobApplicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      experience: "",
      aadhaarNumber: "",
    },
  });

  const onSubmit = async (data: JobApplicationForm) => {
    setIsSubmitting(true);
    
    // Simulate form submission and Aadhaar verification
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Navigate to confirmation page
    navigate("/job-application-confirmation", { 
      state: { 
        applicantName: data.fullName,
        applicantEmail: data.email 
      }
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Join Our Caretaker Team
                </h1>
                <p className="text-xl text-muted-foreground">
                  Apply to become a professional property caretaker and help property owners manage their assets
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-6 w-6 text-primary" />
                    Job Application Form
                  </CardTitle>
                  <CardDescription>
                    Please fill out all required information. Your Aadhaar card details will be verified for authenticity.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                        
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="your.email@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="+91 9876543210" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Complete Address</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Enter your complete residential address" 
                                  className="min-h-[80px]"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Professional Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Professional Information</h3>
                        
                        <FormField
                          control={form.control}
                          name="experience"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Experience & Skills</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Describe your relevant experience in property management, maintenance, or related fields..."
                                  className="min-h-[120px]"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Verification Documents */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Verification Documents</h3>
                        
                        <FormField
                          control={form.control}
                          name="aadhaarNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Aadhaar Card Number</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter 12-digit Aadhaar number" 
                                  maxLength={12}
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="resume"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Resume/CV</FormLabel>
                                <FormControl>
                                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                                    <p className="text-sm text-muted-foreground">
                                      Upload your resume (PDF, DOC)
                                    </p>
                                    <Input 
                                      type="file" 
                                      accept=".pdf,.doc,.docx"
                                      className="mt-2"
                                      onChange={(e) => field.onChange(e.target.files?.[0])}
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="aadhaarPhoto"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Aadhaar Card Photo</FormLabel>
                                <FormControl>
                                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                                    <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                                    <p className="text-sm text-muted-foreground">
                                      Upload Aadhaar card image
                                    </p>
                                    <Input 
                                      type="file" 
                                      accept="image/*"
                                      className="mt-2"
                                      onChange={(e) => field.onChange(e.target.files?.[0])}
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      <div className="pt-6">
                        <Button 
                          type="submit" 
                          className="w-full" 
                          size="lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting Application..." : "Submit Application"}
                        </Button>
                      </div>
                    </form>
                  </Form>
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

export default JobForum;