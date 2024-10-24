import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent,  CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, ClockIcon, DownloadIcon } from 'lucide-react';

export default function BlogResourcesPage() {
  const [email, setEmail] = useState('');

  const blogPosts = [
    { id: 1, title: 'Top 10 SaaS Trends for 2024', category: 'Industry Trends', image: '/placeholder.svg?height=200&width=300&text=SaaS+Trends', excerpt: 'Discover the latest trends shaping the SaaS industry in 2024.' },
    { id: 2, title: 'Maximizing Productivity with Our Tools', category: 'Product Updates', image: '/placeholder.svg?height=200&width=300&text=Productivity+Tools', excerpt: 'Learn how to get the most out of our SaaS platform and boost your productivity.' },
    { id: 3, title: 'The Future of Remote Work', category: 'Workplace', image: '/placeholder.svg?height=200&width=300&text=Remote+Work', excerpt: 'Explore how remote work is evolving and its impact on businesses.' },
    { id: 4, title: 'Cybersecurity Best Practices for SaaS', category: 'Security', image: '/placeholder.svg?height=200&width=300&text=Cybersecurity', excerpt: 'Essential cybersecurity practices every SaaS company should implement.' },
    { id: 5, title: 'AI in SaaS: Transforming User Experience', category: 'Technology', image: '/placeholder.svg?height=200&width=300&text=AI+in+SaaS', excerpt: 'Discover how AI is revolutionizing user experience in SaaS applications.' },
    { id: 6, title: 'Scaling Your Startup with SaaS Solutions', category: 'Startups', image: '/placeholder.svg?height=200&width=300&text=Scaling+Startups', excerpt: 'Tips and strategies for scaling your startup using SaaS tools.' },
  ];

  const guides = [
    { id: 1, title: 'The Ultimate Guide to SaaS Metrics', image: '/placeholder.svg?height=150&width=200&text=SaaS+Metrics', description: 'A comprehensive guide to understanding and tracking key SaaS metrics.' },
    { id: 2, title: 'Building a Successful SaaS Marketing Strategy', image: '/placeholder.svg?height=150&width=200&text=SaaS+Marketing', description: 'Learn how to create and implement an effective marketing strategy for your SaaS business.' },
    { id: 3, title: 'The SaaS Founder\'s Handbook', image: '/placeholder.svg?height=150&width=200&text=Founder+Handbook', description: 'Essential knowledge and tips for SaaS founders at every stage of their journey.' },
  ];

  const webinars = [
    { id: 1, title: 'Mastering Customer Retention in SaaS', date: '2024-03-15', time: '2:00 PM EST', status: 'upcoming' },
    { id: 2, title: 'Optimizing Your SaaS Pricing Strategy', date: '2024-02-28', time: '1:00 PM EST', status: 'recorded', recording: 'https://example.com/webinar-recording' },
    { id: 3, title: 'The Role of AI in Modern SaaS Products', date: '2024-04-05', time: '11:00 AM EST', status: 'upcoming' },
  ];

  const handleDownload = (guideId : any) => {
    // In a real application, this would trigger the download
    console.log(`Downloading guide ${guideId}`);
    // You might also want to save the email to your mailing list here
  };

  return (
    <div className="flex justify-center items-center min-h-screen flex-col bg-zinc-900 text-zinc-50">
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
            <a href="/blog-resources">Blog & Resources</a>
          </nav>
        </div>
      </header> */}

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
              Blog & Resources
            </h1>
            <p className="max-w-[700px] text-zinc-400 md:text-xl mb-12 text-center mx-auto">
              Discover insights, tips, and resources to help you succeed in the world of SaaS.
            </p>

            <Tabs defaultValue="blog" className="w-full ">
              <TabsList className="w-full max-w-md mx-auto mb-8 bg-lime-300">
                <TabsTrigger value="blog" className="w-full ">Blog</TabsTrigger>
                <TabsTrigger value="guides" className="w-full">Guides & Ebooks</TabsTrigger>
                <TabsTrigger value="webinars" className="w-full">Webinars</TabsTrigger>
              </TabsList>

              <TabsContent value="blog">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {blogPosts.map((post) => (
                    <Card key={post.id} className="bg-zinc-800 border-zinc-700">
                      <img
                        src={post.image}
                        alt={post.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <CardHeader>
                        <div className="flex justify-between items-center mb-2">
                          <Badge variant="secondary">{post.category}</Badge>
                        </div>
                        <CardTitle className="text-xl text-zinc-100">{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-zinc-400">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="text-black bg-lime-300">
                          <a href={`/blog/${post.id}`}>Read More</a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="guides">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {guides.map((guide) => (
                    <Card key={guide.id} className="bg-zinc-800 border-zinc-700">
                      <img
                        src={guide.image}
                        alt={guide.title}
                        width={200}
                        height={150}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <CardHeader>
                        <CardTitle>{guide.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-zinc-400">{guide.description}</p>
                      </CardContent>
                      <CardFooter className="flex flex-col items-stretch gap-4">
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full"
                        />
                        <Button onClick={() => handleDownload(guide.id)} className="w-full">
                          <DownloadIcon className="mr-2 h-4 w-4" /> Download
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="webinars">
                <div className="space-y-6">
                  {webinars.map((webinar) => (
                    <Card key={webinar.id} className="bg-zinc-800 border-zinc-700">
                      <CardHeader>
                        <div className="flex justify-between items-center mb-2">
                          <Badge variant={webinar.status === 'upcoming' ? 'default' : 'secondary'}>
                            {webinar.status === 'upcoming' ? 'Upcoming' : 'Recorded'}
                          </Badge>
                        </div>
                        <CardTitle>{webinar.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="flex items-center text-zinc-400">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {webinar.date}
                        </p>
                        <p className="flex items-center text-zinc-400">
                          <ClockIcon className="mr-2 h-4 w-4" />
                          {webinar.time}
                        </p>
                      </CardContent>
                      <CardFooter>
                        {webinar.status === 'recorded' && (
                          <Button asChild>
                            <a href={webinar.recording}>Watch Recording</a>
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  );
}
