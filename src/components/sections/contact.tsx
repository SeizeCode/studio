"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "../ui/card";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have questions or ready to enroll? Contact us today!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Card>
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us how we can help..." {...field} rows={6} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          <div className="space-y-8">
            <h3 className="font-headline text-3xl font-bold">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Our Address</h4>
                  <p className="text-muted-foreground">Plot 171, Kosmos Avenue, Grootvlei, Pretoria, 0120</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email Us</h4>
                  <p className="text-muted-foreground">contact@prestigeacademy.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Call Us</h4>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
              </div>
            </div>
             <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14342.98134701449!2d28.216853!3d-25.99266!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956e0231fed26b%3A0xd44be0c1ee1b2f6b!2sPrestige%20College!5e0!3m2!1sen!2sus!4v1721931088556!5m2!1sen!2sus"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Google Maps Location"
                ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
