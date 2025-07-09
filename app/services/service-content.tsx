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
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Send, CheckCircle, Clock, Shield } from "lucide-react";
import Link from "next/link";
import { useMemo, useState, useRef } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { FloatingElements } from "@/components/floating-elements";
import countryList from "react-select-country-list";
import Image from "next/image";
import ServiceSelect from "./service-select";
import { toast } from "sonner";
import Footer from "@/components/footer";
import { Turnstile } from "@marsidev/react-turnstile";
import { useForm, Controller } from "react-hook-form";
import Logo from "@/components/logo";

// Type for response messages
type MessageType = {
  message?: string;
  status?: number;
};

// Type for Turnstile status
type TurnstileStatus = "idle" | "verifying" | "verified" | "error";

// Form data type
type FormDataType = {
  name: string;
  email: string;
  country: string;
  service: string;
  subService: string;
  estimatedCost: string;
  requirements: string;
  extraPage: string;
  turnstileToken: string;
};

export default function ServicesContent() {
  // React Hook Form setup
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<FormDataType>({
    defaultValues: {
      name: "",
      email: "",
      country: "",
      service: "",
      subService: "",
      estimatedCost: "",
      requirements: "",
      extraPage: "",
      turnstileToken: "",
    },
    mode: "onChange",
  });
  const [successMessage, setSuccessMessage] = useState("");

  // Watch only necessary fields to reduce re-renders
  const formData = watch([
    "service",
    "subService",
    "extraPage",
    "estimatedCost",
  ]);

  // Memoized country list
  const options = useMemo(() => countryList().getData(), []);

  // State for response messages
  const [message, setMessage] = useState<MessageType | null>(null);

  // State for Turnstile verification status
  const [turnstileStatus, setTurnstileStatus] =
    useState<TurnstileStatus>("idle");

  // Reference to Turnstile widget
  const turnstileRef = useRef<any>(null);

  // Handle form submission
  const onSubmit = async (data: FormDataType) => {
    // Additional validation for subService
    if (
      (data.service === "Create WordPress Website" ||
        data.service === "ReSkin/Customize Android Source Code" ||
        data.service === "Custom Development") &&
      !data.subService
    ) {
      toast.error(`${data.service} Type Required`);
      return;
    }

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // Reset form
        Object.keys(data).forEach((key) =>
          setValue(key as keyof FormDataType, "")
        );
        turnstileRef.current?.reset();
        setTurnstileStatus("idle");
        toast.success("Service request sent successfully!");
        setSuccessMessage("Service request sent successfully!");
      } else {
        toast.error(result.message || "Failed to send email");
      }
    } catch (error) {
      setMessage({ message: "Failed to send email", status: 500 });
      toast.error("Failed to send email");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary/5">
      {/* Header */}
      <header className="px-4 lg:px-6 h-20 flex items-center border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <Logo />
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
                Get Your Web & App
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
                    Service Details
                  </CardTitle>
                  <CardDescription className="text-base md:text-lg">
                    Please fill out the form below and we'll get back to you
                    within 24 hours with a detailed proposal and next steps.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    {/* Contact Information */}
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
                            <Controller
                              name="name"
                              control={control}
                              rules={{
                                required: "Full Name is required",
                                minLength: {
                                  value: 2,
                                  message: "Name must be at least 2 characters",
                                },
                              }}
                              render={({ field }) => (
                                <Input
                                  id="name"
                                  placeholder="John Doe"
                                  className={`h-12 border-2 border-gray-200 focus:border-primary transition-colors ${
                                    errors.name ? "border-red-500" : ""
                                  }`}
                                  {...field}
                                />
                              )}
                            />
                            {errors.name && (
                              <p className="text-sm text-red-500">
                                {errors.name.message}
                              </p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label
                              htmlFor="email"
                              className="text-sm font-medium"
                            >
                              Email Address *
                            </Label>
                            <Controller
                              name="email"
                              control={control}
                              rules={{
                                required: "Email is required",
                                pattern: {
                                  value:
                                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                  message: "Invalid email address",
                                },
                              }}
                              render={({ field }) => (
                                <Input
                                  id="email"
                                  type="email"
                                  placeholder="john@example.com"
                                  className={`h-12 border-2 border-gray-200 focus:border-primary transition-colors ${
                                    errors.email ? "border-red-500" : ""
                                  }`}
                                  {...field}
                                />
                              )}
                            />
                            {errors.email && (
                              <p className="text-sm text-red-500">
                                {errors.email.message}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="space-y-2 w-full">
                          <Label
                            htmlFor="country"
                            className="text-sm font-medium"
                          >
                            Country
                          </Label>
                          <Controller
                            name="country"
                            control={control}
                            render={({ field }) => (
                              <select
                                id="country"
                                className="w-full px-4 py-3 rounded-md bg-gray-50 border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow shadow-sm hover:shadow-md"
                                {...field}
                              >
                                <option value="">Select a country</option>
                                {options.map((option) => (
                                  <option
                                    key={option.value}
                                    value={option.label}
                                  >
                                    {option.label}
                                  </option>
                                ))}
                              </select>
                            )}
                          />
                        </div>
                      </div>
                    </ScrollReveal>

                    {/* Service Selection */}
                    <ServiceSelect
                      setFormData={(data) => {
                        Object.entries(data).forEach(([key, value]) =>
                          setValue(key as keyof FormDataType, value)
                        );
                      }}
                      formData={watch()}
                      control={control}
                      errors={errors}
                    />

                    {/* Requirements */}
                    <ScrollReveal delay={800}>
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary border-b border-primary/20 pb-2">
                          Requirements
                        </h3>
                        <div className="space-y-2">
                          <Label
                            htmlFor="description"
                            className="text-sm font-medium"
                          >
                            Type your requirements *
                          </Label>
                          <Controller
                            name="requirements"
                            control={control}
                            rules={{
                              required: "Requirements are required",
                              minLength: {
                                value: 10,
                                message:
                                  "Requirements must be at least 10 characters",
                              },
                            }}
                            render={({ field }) => (
                              <Textarea
                                id="description"
                                rows={6}
                                placeholder="Please describe your project requirements in detail:
• What type of website do you need?
• Current website (if any) and what needs to be improved?
• Specific features or functionality required?
• Target audience and business goals?
• Any design preferences or examples?
• Technical requirements or integrations needed?"
                                className={`border-2 border-gray-200 focus:border-primary transition-colors resize-none ${
                                  errors.requirements ? "border-red-500" : ""
                                }`}
                                {...field}
                              />
                            )}
                          />
                          {errors.requirements && (
                            <p className="text-sm text-red-500">
                              {errors.requirements.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </ScrollReveal>

                    {/* Cloudflare Turnstile CAPTCHA */}
                    <ScrollReveal delay={900}>
                      <div className="flex items-center gap-2">
                        <Controller
                          name="turnstileToken"
                          control={control}
                          rules={{ required: "Please complete the CAPTCHA" }}
                          render={({ field }) => (
                            <Turnstile
                              ref={turnstileRef}
                              siteKey={
                                process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!
                              }
                              onSuccess={(token) => {
                                setValue("turnstileToken", token);
                                setTurnstileStatus("verified");
                              }}
                              onError={() => {
                                setValue("turnstileToken", "");
                                setTurnstileStatus("error");
                                toast.error("CAPTCHA verification failed");
                              }}
                              onExpire={() => {
                                setValue("turnstileToken", "");
                                setTurnstileStatus("error");
                                toast.error(
                                  "CAPTCHA expired, please try again"
                                );
                              }}
                              onLoad={() => {
                                setTurnstileStatus("verifying");
                              }}
                              options={{
                                theme: "light",
                                size: "flexible",
                              }}
                            />
                          )}
                        />
                      </div>
                      {errors.turnstileToken && (
                        <p className="text-sm text-red-500">
                          {errors.turnstileToken.message}
                        </p>
                      )}
                    </ScrollReveal>

                    {/* Response Message */}
                    {successMessage && (
                      <p className="text-center font-bold text-primary">
                        {successMessage}
                      </p>
                    )}
                    {!successMessage && message?.status === 500 && (
                      <p className="text-center font-bold text-red-500">
                        Failed to send service request!
                      </p>
                    )}

                    {/* Submit Button */}
                    <ScrollReveal delay={1000}>
                      <Button
                        type="submit"
                        size="lg"
                        disabled={
                          isSubmitting || turnstileStatus !== "verified"
                        }
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
                        <Link
                          className="flex items-center gap-2"
                          href="mailto:contact@wpmethods.com"
                        >
                          <Image
                            className="shrink-0 size-5"
                            width={20}
                            height={20}
                            src="/gmail.png"
                            alt="gmail"
                          />
                          <p>contact@wpmethods.com</p>
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        asChild
                        className="h-12 border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all bg-transparent"
                      >
                        <Link
                          className="flex items-center gap-2"
                          href="https://wa.me/8801797159600"
                        >
                          <Image
                            className="shrink-0 size-5"
                            width={20}
                            height={20}
                            src="/whatsapp.png"
                            alt="whatsapp"
                          />
                          <p>+880 1797159600</p>
                        </Link>
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
      <Footer />
    </div>
  );
}
