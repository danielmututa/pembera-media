import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PortfolioPage() {
  const portfolioItems = [
    {
      title: "Restaurant Menu Design",
      category: "Print Design",
      description: "Complete menu redesign for a local restaurant including flyers and table tents.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Menu Design", "Print", "Branding"],
    },
    {
      title: "Event Banner Campaign",
      category: "Banner Printing",
      description: "Large format banners for a music festival including stage backdrops and promotional banners.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Banners", "Events", "Large Format"],
    },
    {
      title: "Corporate T-Shirt Collection",
      category: "Apparel",
      description: "Custom t-shirt designs for a tech company's team building event and promotional giveaways.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["T-Shirts", "Corporate", "Screen Print"],
    },
    {
      title: "Real Estate Flyer Series",
      category: "Marketing Materials",
      description: "Professional property flyers and marketing materials for a real estate agency.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Flyers", "Real Estate", "Marketing"],
    },
    {
      title: "Wedding Invitation Suite",
      category: "Special Events",
      description: "Elegant wedding invitations with matching RSVP cards and thank you notes.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Invitations", "Wedding", "Luxury Print"],
    },
    {
      title: "Fitness Brand Identity",
      category: "Branding",
      description: "Complete brand identity including logo, business cards, and promotional materials.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Branding", "Logo", "Business Cards"],
    },
    {
      title: "Trade Show Display",
      category: "Exhibition",
      description: "Complete trade show booth graphics including banners, table covers, and promotional materials.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Trade Show", "Display", "Exhibition"],
    },
    {
      title: "School Spirit Wear",
      category: "Apparel",
      description: "Custom school t-shirts, hoodies, and accessories for student organizations.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["School", "Spirit Wear", "Bulk Orders"],
    },
    {
      title: "Product Packaging Design",
      category: "Packaging",
      description: "Custom packaging design and printing for a local artisan food company.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Packaging", "Food", "Artisan"],
    },
  ]

  const categories = [
    "All",
    "Print Design",
    "Banner Printing",
    "Apparel",
    "Marketing Materials",
    "Branding",
    "Special Events",
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/10 text-white border-white/20 mb-6">Our Portfolio</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our <span className="text-yellow-400">Creative</span> Work
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Explore our diverse portfolio of printing and design projects that showcase our expertise and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0 ? "bg-purple-600 hover:bg-purple-700" : "hover:bg-purple-50 hover:text-purple-600"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2 mb-2">
                        <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These numbers represent the trust our clients place in us and the quality we deliver
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "200+", label: "Happy Clients" },
              { number: "50+", label: "Design Awards" },
              { number: "5+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Create Something Amazing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us work together to bring your vision to life. Contact us today to discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
