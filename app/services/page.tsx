"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  ArrowLeft,
  Send,
  CheckCircle,
  Clock,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { FloatingElements } from "@/components/floating-elements";
import countryList from "react-select-country-list";
import Image from "next/image";

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    description: "",
    additionalServices: [] as string[],
  });
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
          to: "asrafulislam0312@gmail.com",
          subject: "test",
          text: "testing the mail",
          html: "<h1>hello world</h1>",
        });

  const changeHandler = (value: string) => {
    setValue(value);
  };
  console.log("value", value);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    alert(
      "🎉 Thank you for your request! We'll get back to you within 24 hours with a detailed proposal."
    );
    setIsSubmitting(false);
  };

  const handleAdditionalServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        additionalServices: [...prev.additionalServices, service],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        additionalServices: prev.additionalServices.filter(
          (s) => s !== service
        ),
      }));
    }
  };

  const handleSendMail = async () => {
    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setMessage(result.message);

      if (response.ok) {
        // Reset form on success
        setData({
          to: "",
          subject: "",
          text: "",
          html: "",
        });
      }
    } catch (error) {
      setMessage("Error sending email");
    } finally {
      setIsLoading(false);
    }
  };

  console.log("message", message);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary/5">
      {/* Header */}
      <header className="px-4 lg:px-6 h-20 flex items-center border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <Link href="/" className="flex items-center justify-center group">
          <Image
            src="/wp-methods-logo.png"
            width={140}
            height={50}
            alt="logo"
            className="max-w-full h-auto"
          />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-primary transition-colors flex items-center group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </nav>
      </header>

      <main className="flex-1 relative overflow-hidden">
        <FloatingElements />

        <button onClick={handleSendMail}>Send mail</button>

        {/* Hero Section */}
        <section className="py-16 md:py-24 relative z-10">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <Badge className="mb-6 px-6 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                🚀 Let's Build Something Amazing
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                Get Your WordPress
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent block">
                  Service Started
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto mb-8">
                Tell us about your project and we'll provide you with a custom
                solution tailored to your specific needs and goals.
              </p>
            </ScrollReveal>

            {/* Trust Indicators */}
            <ScrollReveal delay={600}>
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>24h Response Time</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>100% Satisfaction Guarantee</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Form Section */}
        <section className="pb-16 md:pb-24 relative z-10">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <ScrollReveal>
              <Card className="shadow-2xl border-2 border-primary/10 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl md:text-3xl">
                    Project Details
                  </CardTitle>
                  <CardDescription className="text-base md:text-lg">
                    Please fill out the form below and we'll get back to you
                    within 24 hours with a detailed proposal and next steps.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Information */}
                    <ScrollReveal delay={200}>
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary border-b border-primary/20 pb-2">
                          Contact Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label
                              htmlFor="name"
                              className="text-sm font-medium"
                            >
                              Full Name *
                            </Label>
                            <Input
                              id="name"
                              required
                              value={formData.name}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  name: e.target.value,
                                }))
                              }
                              placeholder="John Doe"
                              className="h-12 border-2 border-gray-200 focus:border-primary transition-colors"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label
                              htmlFor="email"
                              className="text-sm font-medium"
                            >
                              Email Address *
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  email: e.target.value,
                                }))
                              }
                              placeholder="john@example.com"
                              className="h-12 border-2 border-gray-200 focus:border-primary transition-colors"
                            />
                          </div>
                        </div>

                        <div className="space-y-2 w-full">
                          <Label
                            htmlFor="company"
                            className="text-sm font-medium"
                          >
                            Country
                          </Label>
                          <select
                            value={value}
                            onChange={(e) => changeHandler(e.target.value)}
                            className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow shadow-sm hover:shadow-md"
                          >
                            {options.map((option) => (
                              <option value={option.label}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </ScrollReveal>

                    {/* Service Selection */}
                    <ScrollReveal delay={400}>
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary border-b border-primary/20 pb-2">
                          Service Requirements
                        </h3>
                        <div className="space-y-2">
                          <Label
                            htmlFor="service"
                            className="text-sm font-medium"
                          >
                            Primary Service Needed *
                          </Label>
                          <Select
                            required
                            onValueChange={(value) =>
                              setFormData((prev) => ({
                                ...prev,
                                service: value,
                              }))
                            }
                          >
                            <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-primary">
                              <SelectValue placeholder="Select your primary service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="development">
                                🌐 WordPress Development
                              </SelectItem>
                              <SelectItem value="maintenance">
                                🛡️ WordPress Maintenance
                              </SelectItem>
                              <SelectItem value="optimization">
                                ⚡ Speed Optimization
                              </SelectItem>
                              <SelectItem value="migration">
                                🔄 Site Migration
                              </SelectItem>
                              <SelectItem value="security">
                                🔒 Security Audit
                              </SelectItem>
                              <SelectItem value="custom">
                                🎯 Custom Solution
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Additional Services */}
                        <div className="space-y-3">
                          <Label className="text-sm font-medium">
                            Additional Services (Optional)
                          </Label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                            {[
                              "SEO Optimization",
                              "Content Migration",
                              "E-commerce Setup",
                              "Custom Plugin Development",
                              "Theme Customization",
                              "Performance Monitoring",
                            ].map((service) => (
                              <div
                                key={service}
                                className="flex items-center space-x-3"
                              >
                                <Checkbox
                                  id={service}
                                  onCheckedChange={(checked) =>
                                    handleAdditionalServiceChange(
                                      service,
                                      checked as boolean
                                    )
                                  }
                                  className="border-2 border-primary/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                                />
                                <Label
                                  htmlFor={service}
                                  className="text-sm font-normal cursor-pointer"
                                >
                                  {service}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>

                    {/* Budget and Timeline */}
                    <ScrollReveal delay={600}>
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary border-b border-primary/20 pb-2">
                          Project Scope
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label
                              htmlFor="budget"
                              className="text-sm font-medium"
                            >
                              Budget Range
                            </Label>
                            <Select
                              onValueChange={(value) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  budget: value,
                                }))
                              }
                            >
                              <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-primary">
                                <SelectValue placeholder="Select your budget range" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="under-500">
                                  💰 Under $500
                                </SelectItem>
                                <SelectItem value="500-1000">
                                  💰 $500 - $1,000
                                </SelectItem>
                                <SelectItem value="1000-2500">
                                  💰 $1,000 - $2,500
                                </SelectItem>
                                <SelectItem value="2500-5000">
                                  💰 $2,500 - $5,000
                                </SelectItem>
                                <SelectItem value="over-5000">
                                  💰 Over $5,000
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label
                              htmlFor="timeline"
                              className="text-sm font-medium"
                            >
                              Project Timeline
                            </Label>
                            <Select
                              onValueChange={(value) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  timeline: value,
                                }))
                              }
                            >
                              <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-primary">
                                <SelectValue placeholder="Select your timeline" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="asap">🚀 ASAP</SelectItem>
                                <SelectItem value="1-2-weeks">
                                  📅 1-2 weeks
                                </SelectItem>
                                <SelectItem value="1-month">
                                  📅 Within 1 month
                                </SelectItem>
                                <SelectItem value="2-3-months">
                                  📅 2-3 months
                                </SelectItem>
                                <SelectItem value="flexible">
                                  📅 Flexible
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>

                    {/* Project Description */}
                    <ScrollReveal delay={800}>
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary border-b border-primary/20 pb-2">
                          Project Details
                        </h3>
                        <div className="space-y-2">
                          <Label
                            htmlFor="description"
                            className="text-sm font-medium"
                          >
                            Project Description *
                          </Label>
                          <Textarea
                            id="description"
                            required
                            rows={6}
                            value={formData.description}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                description: e.target.value,
                              }))
                            }
                            placeholder="Please describe your project requirements in detail:
• What type of website do you need?
• Current website (if any) and what needs to be improved?
• Specific features or functionality required?
• Target audience and business goals?
• Any design preferences or examples?
• Technical requirements or integrations needed?"
                            className="border-2 border-gray-200 focus:border-primary transition-colors resize-none"
                          />
                        </div>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal delay={1000}>
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full h-14 bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group text-lg font-semibold"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" />
                            Processing Request...
                          </>
                        ) : (
                          <>
                            Submit Service Request
                            <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </ScrollReveal>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal delay={1200}>
              <div className="mt-16 text-center">
                <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold mb-4 text-primary">
                      Need to discuss your project first?
                    </h3>
                    <p className="text-muted-foreground mb-6 text-lg">
                      Feel free to reach out to us directly for a free
                      consultation and project discussion.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        variant="outline"
                        size="lg"
                        asChild
                        className="h-12 border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all bg-transparent"
                      >
                        <Link href="mailto:hello@wpmethods.com">
                          📧 hello@wpmethods.com
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        asChild
                        className="h-12 border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all bg-transparent"
                      >
                        <Link href="tel:+1234567890">📞 (123) 456-7890</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <Code className="h-8 w-8 text-primary mr-3" />
                <span className="text-2xl font-bold">WP Methods</span>
              </div>
              <p className="text-slate-400 text-sm">
                Professional WordPress solutions that drive results for your
                business.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    WordPress Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    Speed Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>hello@wpmethods.com</li>
                <li>(123) 456-7890</li>
                <li>Mon-Fri 9AM-6PM EST</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} WP Methods. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <Link
                href="#"
                className="text-xs hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-xs hover:text-primary transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
