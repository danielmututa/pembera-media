import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  const services = [
    {
      title: "Flyer Design & Printing",
      description: "Professional flyers that capture attention and drive results for your business or event.",
      image: "/flyer.jpeg?height=300&width=400",
      features: [
        "Custom graphic design",
        "High-resolution printing",
        "Various paper options",
        "Fast turnaround time",
        "Bulk pricing available",
        "Design revisions included",
      ],
      pricing: "Starting at $25",
    },
    {
      title: "Banner Printing",
      description: "Large format banners perfect for events, trade shows, and outdoor advertising.",
      image: "/Cafe Banner.jpeg?height=300&width=400",
      features: [
        "Weather-resistant materials",
        "Custom sizes available",
        "Vibrant color printing",
        "Grommets and finishing",
        "Indoor/outdoor options",
        "Mounting hardware included",
      ],
      pricing: "Starting at $45",
    },
    {
      title: "T-Shirt Printing",
      description: "Custom t-shirts with your designs, perfect for teams, events, or promotional purposes.",
      image: "/T-shirt.jpeg?height=300&width=400",
      features: [
        "Screen printing",
        "Heat transfer vinyl",
        "Embroidery services",
        "Multiple shirt styles",
        "Bulk order discounts",
        "Color matching",
      ],
      pricing: "Starting at $12",
    },
    {
      title: "Precision Cutting Services",
      description: "Professional cutting services for vinyl, paper, cardstock, and specialty materials.",
      image: "/vly.jpeg?height=300&width=400",
      features: [
        "Vinyl cutting & weeding",
        "Die cutting services",
        "Custom shapes & sizes",
        "Adhesive vinyl options",
        "Heat transfer vinyl",
        "Specialty materials",
      ],
      pricing: "Starting at $15",
    },
    {
      title: "Brand Identity Design",
      description: "Complete branding solutions from logo design to business card printing.",
      image: "/brandidentty.jpeg?height=300&width=400",
      features: [
        "Logo design & concepts",
        "Business card printing",
        "Letterhead design",
        "Brand guidelines",
        "Color palette creation",
        "Multiple format delivery",
      ],
      pricing: "Starting at $150",
    },
    {
      title: "Digital Printing",
      description: "High-quality digital printing for documents, brochures, and marketing materials.",
      image: "/digital-printing.jpeg?height=300&width=400",
      features: [
        "High-resolution output",
        "Variable data printing",
        "Quick turnaround",
        "Small to large runs",
        "Multiple paper options",
        "Finishing services",
      ],
      pricing: "Starting at $0.10/page",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/10 text-white border-white/20 mb-6">Our Services</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Professional <span className="text-yellow-400">Printing & Design</span> Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From concept to completion, we offer comprehensive printing and design solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-xl text-gray-900 mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-gray-600">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-lg font-semibold text-purple-600">{service.pricing}</div>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        <Link href="/contact" className="flex items-center">
                          Get Quote <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Service Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a proven process to ensure every project meets our high standards
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "We discuss your requirements and provide expert recommendations",
              },
              {
                step: "2",
                title: "Design & Proof",
                description: "Our team creates designs and provides proofs for your approval",
              },
              {
                step: "3",
                title: "Production",
                description: "We use premium materials and equipment for superior results",
              },
              {
                step: "4",
                title: "Quality Check & Delivery",
                description: "Every item is inspected before delivery to ensure perfection",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full text-xl font-bold mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let us discuss how we can help with your next project.
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
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
