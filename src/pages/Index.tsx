import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
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
import heroImage from "@/assets/hero-bg.jpg";
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

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-custom-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src={logoImage} 
                alt="Product Folks Logo" 
                className="h-8 sm:h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-smooth"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-smooth"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-smooth"
              >
                Contact
              </button>
              <Button onClick={() => scrollToSection("contact")}>
                Get Started
              </Button>
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
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Unlock Your Business Potential with{" "}
            <span className="bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
              Expert Product Management
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Empowering organizations to thrive in the era of AI and digital
            transformation.
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="h-14 px-8 text-lg font-semibold shadow-custom-lg hover:shadow-custom-md"
          >
            Contact Us
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              About Product Folks
            </h2>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                Product Folks is a European Product Management consultancy
                dedicated to accelerating digital transformation and AI adoption
                for businesses of all sizes.
              </p>
              <p>
                With years of hands-on experience in product strategy,
                leadership, and delivery, our team partners with you to drive
                growth, improve processes, and cultivate lasting impact.
              </p>
              <p>
                We are passionate about mentoring and upskilling the next
                generation of product leaders—empowering teams to excel in
                today's dynamic, AI-enhanced business landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Our Services
            </h2>
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your next product challenge or digital
              transformation journey? Let's connect.
            </p>
          </div>
          <ContactForm />
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

export default Index;
