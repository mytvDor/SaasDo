import { useState } from 'react'
// import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs,  TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { CheckIcon, XIcon } from 'lucide-react'

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly')

  const pricingPlans = [
    {
      name: 'Basic',
      monthlyPrice: 9.99,
      annualPrice: 99.99,
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      notIncluded: ['Feature 4', 'Feature 5', 'Feature 6', 'Feature 7']
    },
    {
      name: 'Pro',
      monthlyPrice: 19.99,
      annualPrice: 199.99,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
      notIncluded: ['Feature 6', 'Feature 7']
    },
    {
      name: 'Enterprise',
      monthlyPrice: 49.99,
      annualPrice: 499.99,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5', 'Feature 6', 'Feature 7'],
      notIncluded: []
    }
  ]

  const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.'
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all our plans. No credit card required.'
    },
    {
      question: 'What happens when my trial ends?',
      answer: 'At the end of your trial, you can choose to subscribe to a paid plan or your account will be automatically downgraded to our free plan with limited features.'
    }
  ]

  return (
    <div className="flex justify-center flex-wrap items-center min-h-screen flex-col bg-zinc-900 text-zinc-50">
      {/* <header className="sticky top-0 z-40 w-full border-b border-zinc-700 bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60">
        <div className="container flex h-14 items-center">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold">SaasDo</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a href="/">Home</a>
            <a href="/features">Features</a>
            <a href="/pricing">Pricing</a>
            <a href="/about">About</a>
          </nav>
        </div>
      </header> */}

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-8 text-center">
              Simple, Transparent Pricing
            </h1>
            <p className="max-w-[700px] text-zinc-400 md:text-xl mb-12 text-center mx-auto">
              Choose the plan that's right for your business. All plans come with a 14-day free trial.
            </p>

            <Tabs defaultValue="monthly" className="w-full mb-12 ">
              <TabsList className="w-full bg-lime-300 max-w-md mx-auto">
                <TabsTrigger value="monthly" onClick={() => setBillingPeriod('monthly')} className="w-full">Monthly</TabsTrigger>
                <TabsTrigger value="annual" onClick={() => setBillingPeriod('annual')} className="w-full">Annual</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex flex-wrap items-center justify-center">
              {pricingPlans.map((plan) => (
                <Card key={plan.name} className="bg-zinc-800 text-white min-w-48 m-5  border-zinc-700">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">{plan.name}</CardTitle>
                    <CardDescription>
                      {billingPeriod === 'monthly' ? (
                        <span className="text-3xl text-white font-bold">${plan.monthlyPrice}/mo</span>
                      ) : (
                        <>
                          <span className="text-3xl text-white font-bold">${plan.annualPrice}/yr</span>
                          <span className=" text-white ml-2">Save {Math.round((1 - plan.annualPrice / (plan.monthlyPrice * 12)) * 100)}%</span>
                        </>
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center text-zinc-50">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                      {plan.notIncluded.map((feature) => (
                        <li key={feature} className="flex items-center text-zinc-400">
                          <XIcon className="mr-2 h-4 w-4 text-red-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-zinc-950">Choose {plan.name}</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-[700px] mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Still have questions?</h2>
              <p className="max-w-[600px] text-zinc-400 md:text-xl">
                Check out our video FAQs for quick answers to common questions.
              </p>
              <div className="aspect-video w-full max-w-3xl mt-8">
                <iframe
                  src="/placeholder.svg?height=400&width=600&text=Video+FAQ"
                  className="w-full h-full rounded-lg"
                  title="Video FAQ"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to get started?</h2>
              <p className="max-w-[600px] text-zinc-400 md:text-xl">
                Join thousands of satisfied customers and take your business to the next level with SaasDo.
              </p>
              <Button size="lg" asChild>
                <a href="/signup">Start Your Free Trial</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-700 bg-zinc-900">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-0">
            <span className="text-sm text-zinc-400">© {new Date().getFullYear()} SaasDo. All rights reserved.</span>
          </div>
          <nav className="flex items-center space-x-4 text-sm font-medium">
            <a href="/terms" className="text-zinc-400 hover:text-zinc-300">Terms of Service</a>
            <a href="/privacy" className="text-zinc-400 hover:text-zinc-300">Privacy Policy</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
