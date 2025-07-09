import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FloatingElements } from "@/components/floating-elements";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedCounter } from "@/components/animated-counter";

import { services } from "@/lib/services";
import { pricing } from "@/lib/pricing";

import Footer from "@/components/footer";
import Header from "@/components/header";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary/5">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <FloatingElements />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-8 text-center">
              <ScrollReveal>
                <Badge
                  variant="secondary"
                  className="mb-4 px-6 py-2 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  🚀 Professional Web & App Solutions
                </Badge>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none max-w-4xl">
                  We Provide Web Design &
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent block mt-2">
                    Development Service
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-xl/relaxed">
                 At <strong>WP Methods Service</strong>, we specialize in creating custom websites,
        digital experiences, and development solutions that help businesses grow online.
        Based on years of experience in WordPress, Mobile App reskin, and full-stack development,
        we deliver high-quality, performance-driven results for clients around the globe.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link href="/services">
                    <Button
                      size="lg"
                      className="h-14 px-8 bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group"
                    >
                      Start Your Project Today
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="#services">
                    <Button
                      variant="outline"
                      size="lg"
                      className="h-14 px-8 border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all transform hover:scale-105 bg-transparent"
                    >
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/10 animate-pulse-slow" />
        </section>

        {/* Stats Section */}
        <section className="w-full py-16 bg-white border-y">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <AnimatedCounter end={500} suffix="+" />
                  <p className="text-sm text-muted-foreground font-medium">
                    Projects Completed
                  </p>
                </div>
                <div className="space-y-2">
                  <AnimatedCounter end={98} suffix="%" />
                  <p className="text-sm text-muted-foreground font-medium">
                    Client Satisfaction
                  </p>
                </div>
                <div className="space-y-2">
                  <AnimatedCounter end={5} suffix=" Years" />
                  <p className="text-sm text-muted-foreground font-medium">
                    Experience
                  </p>
                </div>
                <div className="space-y-2">
                  <AnimatedCounter end={24} suffix="/7" />
                  <p className="text-sm text-muted-foreground font-medium">
                    Support Available
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="w-full py-20 md:py-32 bg-gradient-to-b from-white to-primary/5"
        >
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-2 text-center mb-12">
                <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                  Our Services
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Comprehensive Web & App Solutions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  You can hire us to develop, customize, android app making, or
                  fix any bugs for your website.
                </p>
              </div>
            </ScrollReveal>

            <div className="mx-auto grid max-w-6xl items-start gap-8 py-5 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <ScrollReveal key={service.delay} delay={service.delay}>
                    <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <CardHeader className="relative">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      {/* <CardContent className="relative">
                    <ul className="space-y-3 text-sm">
                      {[
                        "Custom theme development",
                        "Plugin development & integration",
                        "Responsive & mobile-first design",
                        "Advanced SEO optimization",
                        "Performance optimization",
                        "Security implementation",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center group/item"
                        >
                          <CheckCircle className="h-4 w-4 text-primary mr-3 group-hover/item:scale-110 transition-transform" />
                          <span className="group-hover/item:text-primary transition-colors">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent> */}
                      <CardFooter className="relative">
                        <Link href="/services" className="w-full">
                          <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all group-hover:scale-105">
                            Get Service
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="w-full py-10 md:py-12 bg-gradient-to-b from-primary/5 to-white"
        >
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-6">
                <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                  Pricing Plans
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Choose Your Perfect Plan
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Transparent pricing with no hidden fees. Get exactly what you
                  need for your service.
                </p>
              </div>
            </ScrollReveal>

            <div className="mx-auto grid max-w-6xl items-start gap-8 py-12 lg:grid-cols-3">
              {pricing.map((item) => {
                return (
                  <ScrollReveal key={item.title} delay={item.delay}>
                    <Card
                      className={`relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 ${
                        item.highlight ? "border-primary" : ""
                      }`}
                    >
                      {item.highlight && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-primary text-white px-6 py-2 text-sm font-semibold shadow-lg">
                            🔥 Most Popular
                          </Badge>
                        </div>
                      )}
                      <CardHeader className="text-center">
                        <CardDescription className="text-base">
                          {item.title}
                        </CardDescription>
                        <div className="mt-4">
                          <div className="text-5xl font-bold text-primary">
                            ${item.price}
                          </div>
                          {/* <div className="text-sm text-muted-foreground mt-2">
                            One-time payment
                          </div> */}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 text-sm">
                          {item.features.map((item, index) => (
                            <li key={index} className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-primary mr-3" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Link href="/services" className="w-full">
                          <Button
                            variant="outline"
                            className="w-full border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all bg-transparent"
                          >
                            {item.buttonText}
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] opacity-5" />
          <div className="container grid items-center justify-center gap-6 px-4 text-center md:px-6 relative z-10">
            <ScrollReveal>
              <div className="space-y-6">
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  Ready to Get Started?
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                  Transform Your App or Site Today
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Join hundreds of satisfied clients who have transformed their
                  websites and apps with our expert services.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="flex items-center justify-center">
                <Link href="/services">
                  <Button
                    size="lg"
                    className="h-14 px-8 bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group"
                  >
                    Start Your Project Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
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
