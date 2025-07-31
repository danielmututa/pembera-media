import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/10 text-white border-white/20 mb-6">Get In Touch</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Let us <span className="text-yellow-400">Create</span> Together
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Ready to bring your ideas to life? Contact us today for a free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we will get back to you within 24 hours.</p>
              </div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <Input placeholder="John" className="h-12" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <Input placeholder="Doe" className="h-12" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <Input type="email" placeholder="john@example.com" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <Input type="tel" placeholder="+1 (555) 123-4567" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                      <select className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option>Select a service</option>
                        <option>Flyer Design & Printing</option>
                        <option>Banner Printing</option>
                        <option>T-Shirt Printing</option>
                        <option>Cutting Services</option>
                        <option>Brand Identity</option>
                        <option>Digital Printing</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                      <Textarea
                        placeholder="Please describe your project, including quantity, timeline, and any specific requirements..."
                        className="min-h-[120px]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                      <select className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option>Select budget range</option>
                        <option>Under $100</option>
                        <option>$100 - $500</option>
                        <option>$500 - $1,000</option>
                        <option>$1,000 - $5,000</option>
                        <option>Over $5,000</option>
                      </select>
                    </div>
                    <Button className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-lg">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                <p className="text-gray-600">
                  We are here to help with all your printing and design needs. Reach out to us through any of these
                  channels.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Visit Our Studio</h3>
                        <p className="text-gray-600">
                          123 Design Street
                          <br />
                          Creative District
                          <br />
                          City, State 12345
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                        <p className="text-gray-600">
                          Main: +1 (555) 123-4567
                          <br />
                          Mobile: +1 (555) 987-6543
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                        <p className="text-gray-600">
                          info@printdesignstudio.com
                          <br />
                          quotes@printdesignstudio.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Clock className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 10:00 AM - 4:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Response Promise */}
              <Card className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Quick Response Guarantee</h3>
                  <p className="text-purple-100">
                    We respond to all inquiries within 2 hours during business hours and within 24 hours on weekends.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-gray-600">Located in the heart of the creative district</p>
          </div>
          <div className="bg-gray-300 h-96 rounded-xl flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg font-medium">Interactive Map</p>
              <p className="text-sm">123 Design Street, Creative District</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What's your typical turnaround time?",
                answer:
                  "Most projects are completed within 3-5 business days. Rush orders can often be accommodated for an additional fee.",
              },
              {
                question: "Do you offer design services?",
                answer:
                  "Yes! We have an experienced design team that can create custom designs for all your printing needs.",
              },
              {
                question: "What file formats do you accept?",
                answer:
                  "We accept PDF, AI, EPS, PSD, and high-resolution JPG/PNG files. We can also work with your existing designs.",
              },
              {
                question: "Do you offer bulk pricing?",
                answer: "We offer competitive bulk pricing for large orders. Contact us for a custom quote.",
              },
              {
                question: "Can I see a proof before printing?",
                answer:
                  "Yes, we provide digital proofs for all projects before going to print to ensure everything meets your expectations.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{faq.answer}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
