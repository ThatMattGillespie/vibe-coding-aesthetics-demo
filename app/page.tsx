import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge className="mb-4" variant="secondary">
            Tailwind + shadcn/ui Demo
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
            Beyond Vibe Coding
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Professional web design using systematic approaches with Tailwind CSS and shadcn/ui components
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              View Components
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-slate-100">
            Why Use a Design System?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🎨</span>
                  Consistent Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Maintain visual consistency across your entire application with pre-defined spacing, colors, and typography scales.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  Rapid Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Build professional interfaces faster with utility-first CSS and ready-to-use component primitives.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">♿</span>
                  Accessibility Built-in
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  shadcn/ui components follow WAI-ARIA standards, ensuring your site is usable by everyone.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Type Safety
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Full TypeScript support ensures you catch errors early and get intelligent autocomplete.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">📱</span>
                  Responsive By Default
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Mobile-first design with Tailwind's responsive modifiers makes it easy to adapt to any screen size.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🔧</span>
                  Fully Customizable
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Own your components. Copy, modify, and extend them to match your brand perfectly.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-800 dark:to-slate-900 text-white border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl md:text-4xl mb-2">
              Ready to Build Something Beautiful?
            </CardTitle>
            <CardDescription className="text-slate-300 text-lg">
              This entire page was built with Tailwind CSS and shadcn/ui components
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Deploy to Vercel
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent text-white border-white hover:bg-white/10">
              View on GitHub
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-slate-600 dark:text-slate-400">
        <p className="text-sm">
          Built with Next.js, Tailwind CSS, and shadcn/ui • Deployed on Vercel
        </p>
      </footer>
    </div>
  );
}
