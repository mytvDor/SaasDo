import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription,  CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
// import { Badge } from '@/components/ui/badge'
import { SearchIcon,  SendIcon } from 'lucide-react'
import { FaBook, FaQuestionCircle, FaEnvelope, FaUsers } from 'react-icons/fa'

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const knowledgeBaseCategories = [
    { id: 1, name: 'Getting Started', articles: [
      { id: 1, title: 'How to create your first project', views: 1520 },
      { id: 2, title: 'Understanding the dashboard', views: 1350 },
      { id: 3, title: 'Inviting team members', views: 980 },
    ]},
    { id: 2, name: 'Account Management', articles: [
      { id: 4, title: 'Changing your password', views: 2100 },
      { id: 5, title: 'Updating billing information', views: 1800 },
      { id: 6, title: 'Cancelling your subscription', views: 1600 },
    ]},
    { id: 3, name: 'Advanced Features', articles: [
      { id: 7, title: 'Setting up custom integrations', views: 890 },
      { id: 8, title: 'Using the API', views: 1200 },
      { id: 9, title: 'Creating automated workflows', views: 1050 },
    ]},
  ]

  const faqs = [
    { id: 1, question: 'What payment methods do you accept?', answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.' },
    { id: 2, question: 'Can I change my plan later?', answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.' },
    { id: 3, question: 'Is there a free trial available?', answer: 'Yes, we offer a 14-day free trial for all our plans. No credit card required.' },
    { id: 4, question: 'How do I cancel my subscription?', answer: 'You can cancel your subscription at any time from your account settings.' },
    { id: 5, question: 'Do you offer refunds?', answer: 'We offer a 30-day money-back guarantee for all new subscriptions.' },
  ]

  const forumCategories = [
    { id: 1, name: 'General Discussion', threads: 156, posts: 1243 },
    { id: 2, name: 'Feature Requests', threads: 89, posts: 720 },
    { id: 3, name: 'Troubleshooting', threads: 234, posts: 1876 },
    { id: 4, name: 'Tips & Tricks', threads: 112, posts: 945 },
  ]

  const handleSubmit = (e:any) => {
    e.preventDefault()
    console.log('Support request submitted:', { name, email, message })
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen flex-col bg-zinc-900 text-white">
     

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
              Support Center
            </h1>
            <p className="max-w-[700px] text-gray-400 md:text-xl mb-12 text-center mx-auto">
              Find answers, get help, and connect with our community.
            </p>

            <Tabs defaultValue="knowledge-base" className="w-full">
            <TabsList className="w-full bg-zinc-800 max-w-md mx-auto mb-8 flex  ">
  <TabsTrigger value="knowledge-base" className="w-full sm:w-1/4 flex flex-col items-center">
    <FaBook className="h-6 w-6 mb-1" />
    {/* <span className="text-xs sm:text-sm">Knowledge</span> */}
  </TabsTrigger>
  <TabsTrigger value="faqs" className="w-full sm:w-1/4 flex flex-col items-center">
    <FaQuestionCircle className="h-6 w-6 mb-1" />
    {/* <span className="text-xs sm:text-sm">FAQs</span> */}
  </TabsTrigger>
  <TabsTrigger value="contact" className="w-full sm:w-1/4 flex flex-col items-center">
    <FaEnvelope className="h-6 w-6 mb-1" />
    {/* <span className="text-xs sm:text-sm">Contact</span> */}
  </TabsTrigger>
  <TabsTrigger value="community" className="w-full sm:w-1/4 flex flex-col items-center">
    <FaUsers className="h-6 w-6 mb-1" />
    {/* <span className="text-xs sm:text-sm">Community</span> */}
  </TabsTrigger>
</TabsList>




              <TabsContent value="knowledge-base">
                <div className="max-w-3xl mx-auto">
                  <div className="mb-8">
                    <form className="flex w-full max-w-sm items-center space-x-2">
                      <Input
                        type="search"
                        placeholder="Search the knowledge base"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full text-black"
                      />
                      <Button type="submit">
                        <SearchIcon className="h-4 w-4" />
                        <span className="sr-only">Search</span>
                      </Button>
                    </form>
                  </div>
                  {knowledgeBaseCategories.map((category) => (
                    <Card key={category.id} className="mb-6 bg-gray-800 text-white border-gray-700">
                      <CardHeader>
                        <CardTitle>{category.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {category.articles.map((article) => (
                            <li key={article.id}>
                              <a href={`/kb/${article.id}`} className="text-blue-400 hover:underline">
                                {article.title}
                              </a>
                              <span className="text-gray-400 text-sm ml-2">({article.views} views)</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="faqs">
                <div className="max-w-3xl mx-auto">
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq) => (
                      <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>

              <TabsContent value="contact">
                <Card className="max-w-md mx-auto text-white bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle>Contact Support</CardTitle>
                    <CardDescription className='text-gray-400'>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="name">Name</label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email">Email</label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message">Message</label>
                        <Textarea
                          id="message"
                          placeholder="How can we help?"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        <SendIcon className="mr-2 h-4 w-4" /> Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="community">
                <div className="max-w-3xl mx-auto">
                  {forumCategories.map((category) => (
                    <Card key={category.id} className="mb-6 bg-gray-800 text-white border-gray-700">
                      <CardHeader>
                        <CardTitle>{category.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-gray-400">{category.threads} threads, {category.posts} posts</p>
                        <Button asChild>
                          <a href={`/forum/${category.id}`}>View Forum</a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  )
}
