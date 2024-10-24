import  { useState } from 'react';
// import { a } from 'react-router-dom'; // Use react-router-dom for routing
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {  CheckIcon } from "@radix-ui/react-icons";

export default function MHome() {
  const [isDarkMode]  = useState(true);

  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  return (
    <div className={`flex justify-center items-center min-h-screen flex-col ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex-1 bg-zinc-900 text-zinc-50">
        {/* <header className="sticky top-0 z-40 w-full border-b border-zinc-700 bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60">
          <div className="container flex h-14 items-center">
            <div className="mr-4 hidden md:flex">
              <a className="mr-6 flex items-center space-x-2" href="/">
                <span className="hidden font-bold sm:inline-block">SaasDo</span>
              </a>
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#about">About</a>
                <a href="#blog">Blog</a>
              </nav>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto" onClick={toggleTheme}>
              <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button className="ml-4">Sign Up</Button>
          </div>
        </header> */}

        <main>
          <section className="w-full  py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl  font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Welcome to SaasDo
                  </h1>
                  <p className="mx-auto  max-w-[700px] text-zinc-400 md:text-xl">
                    Empower your business with our cutting-edge SaaS solution. Streamline workflows, boost productivity, and
                    drive growth.
                  </p>
                </div>
                <div className="space-x-4">
                  <Button asChild>
                    <a href="/signup">Get Started</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/demo">Watch Demo</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {["Automation", "Analytics", "Integration", "Scalability", "Security", "Support"].map((feature) => (
                  <Card key={feature} className="bg-zinc-900 border-zinc-700">
                    <CardHeader>
                      <CardTitle>{feature}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-zinc-400">Experience the power of {feature.toLowerCase()} with our advanced SaaS platform.</p>
                    </CardContent>
                    <CardFooter>
                      <a href={`/features#${feature.toLowerCase()}`} className="text-zinc-300 hover:text-zinc-50">Learn more</a>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pricing Plans</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: "Basic", price: "$9.99", features: ["Feature 1", "Feature 2", "Feature 3"] },
                  { name: "Pro", price: "$19.99", features: ["All Basic features", "Feature 4", "Feature 5"] },
                  { name: "Enterprise", price: "Custom", features: ["All Pro features", "Feature 6", "Feature 7"] },
                ].map((plan) => (
                  <Card key={plan.name} className="bg-zinc-900 border-zinc-700">
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription className="text-zinc-400">{plan.price}/month</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center text-zinc-300">
                            <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Choose Plan</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Testimonials</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: "John Doe", company: "Tech Co", quote: "SaasDo has revolutionized our workflow." },
                  { name: "Jane Smith", company: "Design Inc", quote: "The best SaaS solution we've ever used." },
                  { name: "Bob Johnson", company: "Marketing LLC", quote: "Incredible features and support." },
                ].map((testimonial) => (
                  <Card key={testimonial.name} className="bg-zinc-900 border-zinc-700">
                    <CardHeader>
                      <CardTitle>{testimonial.name}</CardTitle>
                      <CardDescription className="text-zinc-400">{testimonial.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-zinc-300">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="about" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">About Us</h2>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <Card className="bg-zinc-900 border-zinc-700">
                  <CardHeader>
                    <CardTitle>Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-300">At SaasDo, we're on a mission to empower businesses with cutting-edge software solutions. We believe in the power of technology to transform operations and drive growth.</p>
                  </CardContent>
                </Card>
                <Card className="bg-zinc-900 border-zinc-700">
                  <CardHeader>
                    <CardTitle>Our Team</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-300">We're a diverse group of passionate technologists, designers, and problem-solvers. Our team is dedicated to creating innovative solutions that make a real difference for our clients.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-zinc-900 py-4">
          <div className="container text-center text-zinc-400">
            &copy; {new Date().getFullYear()} SaasDo. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
