import { useState } from 'react'
// import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Phone, Mail, Facebook, Twitter , Instagram } from 'lucide-react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [inquiryType, setInquiryType] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', { name, email, inquiryType, message })
    setName('')
    setEmail('')
    setInquiryType('')
    setMessage('')
  }

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen flex-col bg-zinc-900 text-zinc-50">
      {/* <header className="sticky top-0 z-40 w-full border-b border-zinc-700 bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60">
        <div className="container flex h-14 items-center">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold text-white">SaasDo</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium text-zinc-300">
            <a href="/">Home</a>
            <a href="/features">Features</a>
            <a href="/pricing">Pricing</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header> */}

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-8 text-center text-white">
              Contact Us
            </h1>
            <p className="max-w-[700px] text-zinc-400 md:text-xl mb-12 text-center mx-auto">
              Have a question or want to learn more? We're here to help. Reach out to us using the form below or through our contact information.
            </p>

            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="bg-zinc-800 border-zinc-700 pt-7">
                <CardHeader>
                  <CardTitle className="text-white">Send us a message</CardTitle>
                  <CardDescription>Fill out the form and we'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4 ">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-white">Name</label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-white">Email</label>
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
                      <label htmlFor="inquiry-type" className="text-white">Inquiry Type</label>
                      <Select value={inquiryType} onValueChange={setInquiryType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sales">Sales</SelectItem>
                          <SelectItem value="support">Support</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-white">Message</label>
                      <Textarea
                        id="message"
                        placeholder="How can we help?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-lime-500 text-black">Send Message</Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle className="text-white">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2 text-white">
                      <MapPin className="h-5 w-5 text-zinc-400" />
                      <span>123 SaaS Street, Tech City, TC 12345</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white">
                      <Phone className="h-5 w-5 text-zinc-400" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white">
                      <Mail className="h-5 w-5 text-zinc-400" />
                      <span>contact@SaasDo.com</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle className="text-white">Connect with us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      <a href="https://facebook.com" className="text-zinc-400 hover:text-white">
                        <Facebook className="h-6 w-6" />
                        <span className="sr-only">Facebook</span>
                      </a>
                      <a href="https://twitter.com" className="text-zinc-400 hover:text-white">
                        <Twitter className="h-6 w-6" />
                        <span className="sr-only">Twitter</span>
                      </a>
                      {/* <a href="https://linkedin.com" className="text-zinc-400 hover:text-white">
                        <LinkedIn className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                      </a> */}
                      <a href="https://instagram.com" className="text-zinc-400 hover:text-white">
                        <Instagram className="h-6 w-6" />
                        <span className="sr-only">Instagram</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle className="text-white">Our Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video w-full">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98658668459375!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629814407973!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-700 bg-zinc-900">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-zinc-400 md:text-left">
              Built by SaasDo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
