import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import logoImage from "@/assets/product-folks-logo.png";

const About = () => {
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
                className="text-primary font-medium transition-smooth"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-foreground hover:text-primary transition-smooth"
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
                className="block w-full text-left py-2 text-primary font-medium transition-smooth"
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth"
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

      {/* About Section */}
      <section className="pt-32 pb-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-center">
              About Product Folks
            </h1>
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
            <div className="mt-12 text-center">
              <Link to="/contact">
                <Button size="lg" className="h-14 px-8 text-lg font-semibold">
                  Work With Us
                </Button>
              </Link>
            </div>
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

export default About;
