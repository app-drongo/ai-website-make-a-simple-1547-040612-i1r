'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

export default function Footer() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleCTA = () => {
    router.push('#portfolio');
  };
  // ACTION_PLACEHOLDER_END

  const handleNewsletterSignup = () => {
    // Handle newsletter subscription
    console.log('Newsletter signup clicked');
  };

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Brand Identity', href: '#services' },
        { name: 'Web Design', href: '#services' },
        { name: 'Print Design', href: '#services' },
        { name: 'UI/UX Design', href: '#services' },
        { name: 'Logo Design', href: '#services' },
        { name: 'Consultation', href: '#contact' },
      ],
    },
    {
      title: 'Portfolio',
      links: [
        { name: 'Recent Work', href: '#portfolio' },
        { name: 'Case Studies', href: '#portfolio' },
        { name: 'Client Stories', href: '#portfolio' },
        { name: 'Design Process', href: '#portfolio' },
        { name: 'Before & After', href: '#portfolio' },
        { name: 'Awards', href: '#portfolio' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Design Blog', href: '/blog' },
        { name: 'Style Guide', href: '/resources' },
        { name: 'Design Tips', href: '/tips' },
        { name: 'Inspiration', href: '/inspiration' },
        { name: 'Free Downloads', href: '/downloads' },
        { name: 'Tutorials', href: '/tutorials' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { name: 'About Jane', href: '#about' },
        { name: 'Contact', href: '#contact' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Collaboration', href: '#contact' },
        { name: 'Speaking', href: '#contact' },
        { name: 'Press Kit', href: '/press' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
  ];

  return (
    <footer className="bg-background border-t border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="#home" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">J</span>
                </div>
                <span className="font-bold text-xl">Jane Doe Design</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Creating distinctive visual identities and memorable brand experiences. Specializing
                in thoughtful design solutions that connect with your audience and elevate your
                brand.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">hello@janedoedesign.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 234-5678</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Creative District, Portland, OR</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Design Insights</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 text-sm border border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3" onClick={handleNewsletterSignup}>
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Monthly design tips and project updates. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Jane Doe Design. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Crafted with <Heart className="size-3 text-red-500 fill-current" /> and creativity
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Follow my work:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border/30">
            <Link
              href="#home"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="#portfolio"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfolio
            </Link>
            <Button
              variant="link"
              size="sm"
              className="text-xs text-muted-foreground hover:text-foreground p-0 h-auto"
              onClick={handleCTA}
            >
              View Portfolio
            </Button>
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
