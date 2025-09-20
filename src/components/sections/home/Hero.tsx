'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, Palette, Award, Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/'); // Scroll to portfolio section
  };
  const handleSecondaryAction = () => {
    router.push('/'); // Contact action
  };
  // ACTION_PLACEHOLDER_END

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 size-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 size-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
              <Award className="size-4 mr-2" />
              Award-Winning Creative Designer
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Crafting Visual Stories
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                That Captivate
              </span>
              & Convert
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              I'm Jane Doe, a freelance designer specializing in brand identity, web design, and
              digital experiences. Let's bring your vision to life with thoughtful, impactful
              design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="group text-base px-8"
                onClick={handlePrimaryAction}
                data-action-type="primary-cta"
              >
                <Eye className="mr-2 size-5" />
                View Portfolio
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group text-base px-8"
                onClick={handleSecondaryAction}
                data-action-type="secondary-cta"
              >
                <Palette className="mr-2 size-5 transition-transform group-hover:rotate-12" />
                Start Project
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground text-2xl">50+</span>
                <span>Projects Completed</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground text-2xl">5</span>
                <span>Years Experience</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground text-2xl">98%</span>
                <span>Client Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-4xl">
              <div className="rounded-2xl border bg-card p-8 shadow-2xl">
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                    <div className="text-center">
                      <Palette className="size-8 text-primary mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground">Branding</p>
                    </div>
                  </div>
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center">
                    <div className="text-center">
                      <div className="size-8 mx-auto mb-2 rounded bg-accent/60" />
                      <p className="text-xs text-muted-foreground">Web Design</p>
                    </div>
                  </div>
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/40 flex items-center justify-center">
                    <div className="text-center">
                      <div className="size-8 mx-auto mb-2 rounded-full bg-secondary/60" />
                      <p className="text-xs text-muted-foreground">Digital</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 size-8 bg-primary rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -right-4 size-6 bg-accent rounded-full animate-pulse delay-1000" />
              <div className="absolute top-1/2 -right-8 size-4 bg-secondary rounded-full animate-pulse delay-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
