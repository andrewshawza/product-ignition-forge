import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Zap,
  Wrench,
  Laptop,
  Users,
  TrendingUp,
  Menu,
  X,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import logoImage from "@/assets/product-folks-logo.png";

const services = [
  {
    icon: Sparkles,
    title: "AI & GenAI-Focused Consultancy",
    description:
      "Maximize business outcomes by leveraging AI and generative AI technologies with our tailored advisory and implementation expertise.",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description:
      "Lead the charge in transforming your operations, products, and strategy for the digital age, with a special emphasis on real-world AI integration.",
  },
  {
    icon: Wrench,
    title: "Bespoke Development & Solutions",
    description:
      "From discovery through delivery, we help define, build, and launch custom solutions purpose-fit for your business objectives.",
  },
  {
    icon: Laptop,
    title: "IT Product Management Consulting",
    description:
      "Specialized support for IT firms looking to optimize product strategy, execution, and go-to-market success.",
  },
  {
    icon: Users,
    title: "Outsourced Product Management",
    description:
      "Flexible, expert support for your product organization at any level—temporary cover, scale-up, or strategic leadership.",
  },
  {
    icon: TrendingUp,
    title: "Mentoring & Upskilling",
    description:
      "Coaching and practical training for existing product leaders and aspiring professionals to elevate capability and confidence.",
  },
];

const Services = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-custom-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <img 
                src={logoImage} 
                alt="Product Folks Logo" 
                className="h-12 sm:h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/about"
                className="text-foreground hover:text-primary transition-smooth"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-primary font-medium transition-smooth"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-foreground hover:text-primary transition-smooth"
              >
                Contact
              </Link>
              <Link to="/contact">
                <Button>Get Started</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-4 space-y-3">
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth"
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left py-2 text-primary font-medium transition-smooth"
              >
                Services
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth"
              >
                Contact
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Services Section */}
      <section className="pt-32 pb-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive product management solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/contact">
              <Button size="lg" className="h-14 px-8 text-lg font-semibold">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex space-x-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              © 2025 Product Folks. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
