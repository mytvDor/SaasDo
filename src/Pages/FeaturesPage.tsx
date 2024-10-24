// import a from "next/a";
// import img from "next/img";
import { Button } from "@/components/ui/button";
import { Card, CardContent,  CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FeaturesPage() {
  // const features = [
  //   {
  //     name: "Automation",
  //     description: "Streamline your workflows with powerful automation tools.",
  //     benefits: ["Save time on repetitive tasks", "Reduce human error", "Increase productivity"],
  //     steps: [
  //       "Define your workflow",
  //       "Set up triggers and actions",
  //       "Test and refine your automation",
  //     ],
  //   },
  //   {
  //     name: "Analytics",
  //     description: "Gain deep insights into your business performance.",
  //     benefits: ["Make data-driven decisions", "Identify trends and patterns", "Optimize your strategies"],
  //     steps: [
  //       "Connect your data sources",
  //       "Choose your metrics and KPIs",
  //       "Create custom dashboards and reports",
  //     ],
  //   },
  //   {
  //     name: "Integration",
  //     description: "Seamlessly connect with your favorite tools and platforms.",
  //     benefits: ["Centralize your data and workflows", "Eliminate data silos", "Enhance cross-team collaboration"],
  //     steps: [
  //       "Browse our integration marketplace",
  //       "Authorize connections with third-party apps",
  //       "Configure data flow and syncing options",
  //     ],
  //   },
  // ];

  const useCases = [
    {
      industry: "E-commerce",
      scenario: "Automating order processing and inventory management",
      outcome: "50% reduction in order processing time and real-time inventory tracking",
    },
    {
      industry: "Marketing",
      scenario: "Creating data-driven marketing campaigns",
      outcome: "30% increase in campaign ROI through targeted messaging and optimization",
    },
    {
      industry: "Customer Support",
      scenario: "Implementing an AI-powered chatbot for 24/7 support",
      outcome: "70% of customer queries resolved without human intervention, improving response times",
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center flex-col bg-zinc-900 text-zinc-50">
      {/* <header className="sticky p-3 top-0 z-40 w-full border-b border-zinc-700 bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60">
        <div className="container flex justify-between h-14 items-center">
          <a className="mr-6 ml-5 flex items-center space-x-2" href="/">
            <span className="font-bold">SaasDo</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a href="/">Home</a>
            <a href="#features">Features</a>
            <a href="#use-cases">Use Cases</a>
            <a href="#benefits">Benefits</a>
          </nav>
        </div>
      </header> */}

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-8 text-center">
              Powerful Features to Supercharge Your Business
            </h1>
            <p className="max-w-[700px text-center] text-zinc-400 md:text-xl mb-12 text-center">
              Discover how our cutting-edge features can transform your workflows, boost productivity, and drive growth.
            </p>

            {/* <Tabs defaultValue={features[0].name.toLowerCase()} className="w-auto">
              <TabsList className="w-auto bg-lime-300 justify-start mb-8">
                {features.map((feature) => (
                  <TabsTrigger key={feature.name} value={feature.name.toLowerCase()} className="text-zinc-900">
                    {feature.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {features.map((feature) => (
                <TabsContent key={feature.name} value={feature.name.toLowerCase()}>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <Card className="bg-zinc-800 border-zinc-700">
                      <CardHeader>
                        <CardTitle className="text-zinc-50">{feature.name}</CardTitle>
                        <CardDescription className="text-zinc-400">{feature.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-5">
                        <img
                          src={`/placeholder.svg?height=300&width=400&text=${feature.name}`}
                          alt={`${feature.name} feature demonstration`}
                          width={400}
                          height={300}
                          className="rounded-lg mb-4"
                        />
                        <h3 className="text-lg p-3 font-semibold mb-2 text-zinc-50">How to use {feature.name}:</h3>
                        <ol className="list-decimal p-3  list-inside space-y-1 mb-4 text-zinc-50">
                          {feature.steps.map((step, index) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ol>
                        <h3 className="text-lg p-3  font-semibold mb-2 text-zinc-50">Benefits:</h3>
                        <ul className="list-disc p-3  list-inside space-y-1 text-zinc-50">
                          {feature.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-zinc-800 border-zinc-700">
                      <CardHeader>
                        <CardTitle className="text-zinc-50">Why Choose Our {feature.name} Feature?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-zinc-50">
                          Our {feature.name.toLowerCase()} feature stands out from the competition by offering:
                        </p>
                        <ul className="list-disc list-inside space-y-2 mb-6 text-zinc-50">
                          <li>Advanced AI-powered capabilities</li>
                          <li>Intuitive user interface for easy adoption</li>
                          <li>Robust scalability to grow with your business</li>
                          <li>Seamless integration with your existing tools</li>
                        </ul>
                        <Button className="w-full">Try {feature.name} Now</Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              ))}
            </Tabs> */}
          </div>
        </section>

        <section id="use-cases" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Real-World Applications</h2>
            <p className="max-w-[700px text-center] text-zinc-400 md:text-xl mb-12 text-center">
              See how businesses across various industries are leveraging our SaaS platform to drive success.
            </p>
            <div className="grid gap-6 lg:grid-cols-3">
              {useCases.map((useCase, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-700">
                  <CardHeader>
                    <CardTitle className="text-zinc-50">{useCase.industry}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-zinc-50"><strong>Scenario:</strong> {useCase.scenario}</p>
                    <p className="text-zinc-50"><strong>Outcome:</strong> {useCase.outcome}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-14 text-center">Why Choose SaasDo?</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader>
                  <CardTitle className="text-zinc-50">Our Value Proposition</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-zinc-50">
                    <li>All-in-one solution for your business needs</li>
                    <li>Customizable features to fit your unique workflows</li>
                    <li>Scalable infrastructure to support your growth</li>
                    <li>Dedicated customer support and onboarding</li>
                    <li>Regular updates and new feature releases</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader>
                  <CardTitle className="text-zinc-50">Join Our Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-zinc-50">
                    By choosing SaasDo, you're not just getting a tool; you're joining a community of innovators. 
                    Engage with our forums, attend webinars, and share your success stories with us.
                  </p>
                  <Button className="w-full">Join Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
