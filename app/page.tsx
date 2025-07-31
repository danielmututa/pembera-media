import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, Users, Award, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 lg:py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                  Professional Design & Printing
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Bring Your Ideas to <span className="text-yellow-400">Life</span>
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed">
                  From eye-catching flyers to premium t-shirts, we deliver exceptional printing and design services that
                  make your brand stand out.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  <Link href="/portfolio" className="flex items-center">
                    View Our Work <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm">500+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm">5+ Years Experience</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/Professional-printing-and-design-work.jpg?height=400&width=500"
                alt="Professional printing and design work"
                width={500}
                height={300}
                className="rounded-2xl shadow-2xl object-cover h-[450px]"
              />
              {/* <img 
               className="rounded-2xl shadow-2xl h-[450px] object-cover w-full" src="/Professional-printing-and-design-work.jpg" alt="Professional printing and design work"
                /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a complete range of printing and design services to meet all your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Flyer Design & Printing",
                description: "Eye-catching flyers that grab attention and drive results",
                image: "/flyer.jpeg?height=200&width=300",
                features: ["Custom Design", "High-Quality Print", "Fast Turnaround"],
              },
              {
                title: "Banner Printing",
                description: "Large format banners for events, promotions, and advertising",
                image: "/Cafe Banner.jpeg?height=200&width=300",
                features: ["Weather Resistant", "Various Sizes", "Vibrant Colors"],
              },
              {
                title: "T-Shirt Printing",
                description: "Custom t-shirts with your designs, logos, or messages",
                image: "/T-shirt.jpeg?height=200&width=300",
                features: ["Screen Printing", "Heat Transfer", "Embroidery"],
              },
              {
                title: "Cutting Services",
                description: "Precision cutting for vinyl, paper, and specialty materials",
                image: "/vly.jpeg?height=200&width=300",
                features: ["Vinyl Cutting", "Die Cutting", "Custom Shapes"],
              },
              {
                title: "Brand Identity",
                description: "Complete branding solutions from logos to business cards",
                image: "/brandidentty.jpeg?height=200&width=300",
                features: ["Logo Design", "Business Cards", "Brand Guidelines"],
              },
              {
                title: "Digital Printing",
                description: "High-quality digital printing for all your document needs",
                image: "/digital-printing.jpeg?height=200&width=300",
                features: ["Quick Turnaround", "Variable Data", "Small to Large Runs"],
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2 text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="/services" className="flex items-center">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Recent Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Check out some of our latest projects and see the quality we deliver
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "/marketing.jpeg?height=300&width=300",
              "/latest-banner.jpeg?height=300&width=300",
              "/Wedding Backdrop Design.jpeg?height=300&width=300",
              "/brandingone.jpeg?height=300&width=300",
            ].map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Portfolio item ${index + 1}`}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Project {index + 1}</p>
                    <p className="text-sm opacity-90">View Details</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent"
            >
              <Link href="/portfolio" className="flex items-center">
                View Full Portfolio <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We are committed to delivering exceptional quality and service that exceeds your expectations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Fast Turnaround",
                description: "Quick delivery without compromising on quality",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Premium Quality",
                description: "Using the best materials and latest technology",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Expert Team",
                description: "Experienced designers and printing professionals",
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Customer Satisfaction",
                description: "100% satisfaction guarantee on all our work",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 text-black rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch with us today for a free consultation and quote. Let us bring your ideas to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
