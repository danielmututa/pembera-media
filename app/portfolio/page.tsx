// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { ExternalLink, Eye } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"

// export default function PortfolioPage() {
//   const portfolioItems = [
//     {
//       title: "Restaurant Menu Design",
//       category: "Print Design",
//       description: "Complete menu redesign for a local restaurant including flyers and table tents.",
//       image: "/placeholder.svg?height=400&width=600",
//       tags: ["Menu Design", "Print", "Branding"],
//     },
//     {
//       title: "Event Banner Campaign",
//       category: "Banner Printing",
//       description: "Large format banners for a music festival including stage backdrops and promotional banners.",
//       image: "/placeholder.svg?height=400&width=600",
//       tags: ["Banners", "Events", "Large Format"],
//     },
//     {
//       title: "Corporate T-Shirt Collection",
//       category: "Apparel",
//       description: "Custom t-shirt designs for a tech company's team building event and promotional giveaways.",
//       image: "/placeholder.svg?height=400&width=600",
//       tags: ["T-Shirts", "Corporate", "Screen Print"],
//     },
//     {
//       title: "Real Estate Flyer Series",
//       category: "Marketing Materials",
//       description: "Professional property flyers and marketing materials for a real estate agency.",
//       image: "/placeholder.svg?height=400&width=600",
//       tags: ["Flyers", "Real Estate", "Marketing"],
//     },
//     {
//       title: "Wedding Invitation Suite",
//       category: "Special Events",
//       description: "Elegant wedding invitations with matching RSVP cards and thank you notes.",
//       image: "/placeholder.svg?height=400&width=600",
//       tags: ["Invitations", "Wedding", "Luxury Print"],
//     },
//     {
//       title: "Fitness Brand Identity",
//       category: "Branding",
//       description: "Complete brand identity including logo, business cards, and promotional materials.",
//       image: "/placeholder.svg?height=400&width=600",
//       tags: ["Branding", "Logo", "Business Cards"],
//     },
//     {
//       title: "Trade Show Display",
//       category: "Exhibition",
//       description: "Complete trade show booth graphics including banners, table covers, and promotional materials.",
//       image: "/placeholder.svg?height=400&width=600",
//       tags: ["Trade Show", "Display", "Exhibition"],
//     },
//     {
//       title: "School Spirit Wear",
//       category: "Apparel",
//       description: "Custom school t-shirts, hoodies, and accessories for student organizations.",
//       image: "/placeholder.svg?height=400&width=600",
//       tags: ["School", "Spirit Wear", "Bulk Orders"],
//     },
//     {
//       title: "Product Packaging Design",
//       category: "Packaging",
//       description: "Custom packaging design and printing for a local artisan food company.",
//       image: "/placeholder.svg?height=400&width=600",
//       tags: ["Packaging", "Food", "Artisan"],
//     },
//   ]

//   const categories = [
//     "All",
//     "Print Design",
//     "Banner Printing",
//     "Apparel",
//     "Marketing Materials",
//     "Branding",
//     "Special Events",
//   ]

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <Badge className="bg-white/10 text-white border-white/20 mb-6">Our Portfolio</Badge>
//             <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//               Our <span className="text-yellow-400">Creative</span> Work
//             </h1>
//             <p className="text-xl text-gray-200 leading-relaxed">
//               Explore our diverse portfolio of printing and design projects that showcase our expertise and creativity.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Filter Tabs */}
//       <section className="py-8 bg-gray-50 border-b">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap justify-center gap-4">
//             {categories.map((category, index) => (
//               <Button
//                 key={index}
//                 variant={index === 0 ? "default" : "outline"}
//                 className={
//                   index === 0 ? "bg-purple-600 hover:bg-purple-700" : "hover:bg-purple-50 hover:text-purple-600"
//                 }
//               >
//                 {category}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Portfolio Grid */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {portfolioItems.map((item, index) => (
//               <Card
//                 key={index}
//                 className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg"
//               >
//                 <div className="relative overflow-hidden">
//                   <Image
//                     src={item.image || "/placeholder.svg"}
//                     alt={item.title}
//                     width={600}
//                     height={400}
//                     className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <div className="absolute bottom-4 left-4 right-4">
//                       <div className="flex gap-2 mb-2">
//                         <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
//                           <Eye className="h-4 w-4 mr-1" />
//                           View
//                         </Button>
//                         <Button
//                           size="sm"
//                           variant="outline"
//                           className="bg-white/20 hover:bg-white/30 text-white border-white/30"
//                         >
//                           <ExternalLink className="h-4 w-4" />
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <CardContent className="p-6">
//                   <div className="mb-2">
//                     <Badge variant="secondary" className="text-xs">
//                       {item.category}
//                     </Badge>
//                   </div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
//                   <p className="text-gray-600 mb-4">{item.description}</p>
//                   <div className="flex flex-wrap gap-2">
//                     {item.tags.map((tag, tagIndex) => (
//                       <Badge key={tagIndex} variant="outline" className="text-xs">
//                         {tag}
//                       </Badge>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               These numbers represent the trust our clients place in us and the quality we deliver
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { number: "500+", label: "Projects Completed" },
//               { number: "200+", label: "Happy Clients" },
//               { number: "50+", label: "Design Awards" },
//               { number: "5+", label: "Years Experience" },
//             ].map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">{stat.number}</div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Create Something Amazing?</h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             Let us work together to bring your vision to life. Contact us today to discuss your next project.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
//               <Link href="/contact">Start Your Project</Link>
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
//             >
//               <Link href="/services">View Services</Link>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }







"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Heart, Star, Eye, ShoppingCart, Share2 } from "lucide-react"

export default function PortfolioPage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)

  const products = [
    {
      id: 1,
      name: "Premium Business Cards",
      price: 49.99,
      originalPrice: 69.99,
      image: "/placeholder.svg?height=300&width=300&text=Business+Cards",
      rating: 4.9,
      reviews: 156,
      badge: "Popular",
      category: "Print Design",
      description:
        "Professional business cards with premium finishes. Includes design consultation, unlimited revisions, and high-quality printing on premium cardstock.",
      features: ["Premium cardstock", "Unlimited revisions", "Fast 24hr turnaround", "Free design consultation"],
      deliveryTime: "24-48 hours",
      includes: "Design files, Print-ready files, Source files",
    },
    {
      id: 2,
      name: "Custom Logo Design",
      price: 199.99,
      originalPrice: null,
      image: "/placeholder.svg?height=300&width=300&text=Logo+Design",
      rating: 4.8,
      reviews: 89,
      badge: "New",
      category: "Branding",
      description:
        "Unique logo design tailored to your brand. Professional designer will create multiple concepts with unlimited revisions until you're 100% satisfied.",
      features: ["3 initial concepts", "Unlimited revisions", "Vector files included", "Brand guidelines"],
      deliveryTime: "3-5 business days",
      includes: "AI, EPS, PNG, JPG files, Brand style guide",
    },
    {
      id: 3,
      name: "Large Format Banners",
      price: 89.99,
      originalPrice: 129.99,
      image: "/placeholder.svg?height=300&width=300&text=Banner+Design",
      rating: 4.7,
      reviews: 203,
      badge: "Sale",
      category: "Large Format",
      description:
        "Eye-catching banners for events, trade shows, and promotions. Weather-resistant materials with vibrant colors that grab attention.",
      features: ["Weather resistant", "Vibrant colors", "Custom sizes", "Grommets included"],
      deliveryTime: "2-3 business days",
      includes: "Design, Printing, Finishing, Installation guide",
    },
    {
      id: 4,
      name: "Brand Identity Package",
      price: 499.99,
      originalPrice: null,
      image: "/placeholder.svg?height=300&width=300&text=Brand+Identity",
      rating: 5.0,
      reviews: 67,
      badge: "Premium",
      category: "Branding",
      description:
        "Complete brand identity solution including logo, color palette, typography, and brand guidelines. Perfect for new businesses or rebranding.",
      features: ["Logo design", "Color palette", "Typography selection", "Brand guidelines", "Business card design"],
      deliveryTime: "7-10 business days",
      includes: "Complete brand package, Style guide, Marketing templates",
    },
    {
      id: 5,
      name: "Vinyl Cutting Service",
      price: 29.99,
      originalPrice: 39.99,
      image: "/placeholder.svg?height=300&width=300&text=Vinyl+Cutting",
      rating: 4.6,
      reviews: 134,
      badge: "Hot",
      category: "Cutting",
      description:
        "Precision vinyl cutting for decals, stickers, and signage. High-quality adhesive vinyl in various colors and finishes.",
      features: ["Precision cutting", "Various colors", "Durable adhesive", "Custom shapes"],
      deliveryTime: "1-2 business days",
      includes: "Cut vinyl, Transfer tape, Application instructions",
    },
    {
      id: 6,
      name: "Corporate Stationery",
      price: 149.99,
      originalPrice: null,
      image: "/placeholder.svg?height=300&width=300&text=Stationery+Design",
      rating: 4.8,
      reviews: 98,
      badge: "Professional",
      category: "Print Design",
      description:
        "Professional stationery set including letterheads, envelopes, and business cards. Consistent branding across all materials.",
      features: ["Letterhead design", "Envelope design", "Business cards", "Consistent branding"],
      deliveryTime: "3-4 business days",
      includes: "Print-ready files, Digital templates, Brand consistency guide",
    },
    {
      id: 7,
      name: "Flyer & Poster Design",
      price: 79.99,
      originalPrice: 99.99,
      image: "/placeholder.svg?height=300&width=300&text=Flyer+Design",
      rating: 4.7,
      reviews: 187,
      badge: "Sale",
      category: "Marketing",
      description:
        "Attention-grabbing flyers and posters for events, promotions, and marketing campaigns. Professional design that converts.",
      features: ["Eye-catching design", "Print optimization", "Multiple sizes", "Marketing focused"],
      deliveryTime: "2-3 business days",
      includes: "High-res files, Print specifications, Multiple formats",
    },
    {
      id: 8,
      name: "Social Media Graphics",
      price: 129.99,
      originalPrice: null,
      image: "/placeholder.svg?height=300&width=300&text=Social+Media",
      rating: 4.9,
      reviews: 245,
      badge: "Trending",
      category: "Digital",
      description:
        "Complete social media graphics package for all major platforms. Consistent branding across Instagram, Facebook, Twitter, and LinkedIn.",
      features: ["Multi-platform sizes", "Consistent branding", "Template variations", "Social media optimized"],
      deliveryTime: "2-3 business days",
      includes: "Instagram posts, Stories, Facebook covers, LinkedIn banners",
    },
    {
      id: 9,
      name: "Menu Design Package",
      price: 199.99,
      originalPrice: 249.99,
      image: "/placeholder.svg?height=300&width=300&text=Menu+Design",
      rating: 4.8,
      reviews: 76,
      badge: "Featured",
      category: "Restaurant",
      description:
        "Professional restaurant menu design that enhances customer experience and increases sales. Food photography styling included.",
      features: ["Professional layout", "Food photography tips", "Print optimization", "Multiple formats"],
      deliveryTime: "4-5 business days",
      includes: "Menu design, Table tents, Digital menu, Print files",
    },
    {
      id: 10,
      name: "Wedding Invitations",
      price: 89.99,
      originalPrice: null,
      image: "/placeholder.svg?height=300&width=300&text=Wedding+Invites",
      rating: 5.0,
      reviews: 123,
      badge: "Luxury",
      category: "Events",
      description:
        "Elegant wedding invitation suite including save-the-dates, invitations, RSVP cards, and thank you cards. Luxury finishes available.",
      features: ["Complete suite", "Luxury finishes", "Custom illustrations", "Matching accessories"],
      deliveryTime: "5-7 business days",
      includes: "Invitation suite, Digital files, Print specifications, Envelope addressing",
    },
    {
      id: 11,
      name: "T-Shirt Design",
      price: 59.99,
      originalPrice: 79.99,
      image: "/placeholder.svg?height=300&width=300&text=T-Shirt+Design",
      rating: 4.6,
      reviews: 167,
      badge: "Creative",
      category: "Apparel",
      description:
        "Creative t-shirt designs for events, businesses, or personal use. Print-ready files optimized for various printing methods.",
      features: ["Creative concepts", "Print optimization", "Multiple formats", "Color variations"],
      deliveryTime: "2-3 business days",
      includes: "Vector files, Print files, Color variations, Mockups",
    },
    {
      id: 12,
      name: "Brochure Design",
      price: 119.99,
      originalPrice: null,
      image: "/placeholder.svg?height=300&width=300&text=Brochure+Design",
      rating: 4.7,
      reviews: 145,
      badge: "Professional",
      category: "Marketing",
      description:
        "Professional brochure design for marketing and corporate communications. Tri-fold, bi-fold, or custom formats available.",
      features: ["Multiple formats", "Professional layout", "Print optimization", "Content organization"],
      deliveryTime: "3-4 business days",
      includes: "Print-ready files, Digital version, Multiple formats, Content guide",
    },
  ]

  const openQuickView = (product: any) => {
    setSelectedProduct(product)
    setIsQuickViewOpen(true)
  }

  // const closeQuickView = () => {
  //   setIsQuickViewOpen(false)
  //   setSelectedProduct(null)
  // }

  const ProductCard = ({ product }: { product: any }) => (
    <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
      <div className="relative overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge
            variant={
              product.badge === "Sale"
                ? "destructive"
                : product.badge === "New"
                  ? "default"
                  : product.badge === "Premium"
                    ? "secondary"
                    : "outline"
            }
            className="font-bold text-xs px-3 py-1"
          >
            {product.badge}
          </Badge>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="icon" variant="secondary" className="h-9 w-9 rounded-full bg-white/90 hover:bg-white shadow-lg">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <Button
            size="sm"
            className="rounded-full bg-white text-black hover:bg-gray-100 font-semibold px-6"
            onClick={() => openQuickView(product)}
          >
            <Eye className="h-4 w-4 mr-2" />
            Quick View
          </Button>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground ml-2">({product.reviews})</span>
        </div>

        <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {product.name}
        </h3>

        <Badge variant="outline" className="text-xs mb-4 bg-blue-50 text-blue-700 border-blue-200">
          {product.category}
        </Badge>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold text-2xl text-blue-600">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <>
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Products Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Design Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional design services for all your branding and marketing needs
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="rounded-full px-12 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold"
            >
              Load More Products
            </Button>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <Dialog open={isQuickViewOpen} onOpenChange={setIsQuickViewOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedProduct.name}</DialogTitle>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                {/* Product Image */}
                <div className="relative">
                  <Image
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    width={400}
                    height={400}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant={
                        selectedProduct.badge === "Sale"
                          ? "destructive"
                          : selectedProduct.badge === "New"
                            ? "default"
                            : selectedProduct.badge === "Premium"
                              ? "secondary"
                              : "outline"
                      }
                      className="font-bold text-sm px-3 py-1"
                    >
                      {selectedProduct.badge}
                    </Badge>
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  {/* Rating and Reviews */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < Math.floor(selectedProduct.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-lg font-semibold">{selectedProduct.rating}</span>
                    <span className="text-muted-foreground">({selectedProduct.reviews} reviews)</span>
                  </div>

                  {/* Category */}
                  <Badge variant="outline" className="text-sm bg-blue-50 text-blue-700 border-blue-200 px-3 py-1">
                    {selectedProduct.category}
                  </Badge>

                  {/* Price */}
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-3xl text-blue-600">${selectedProduct.price}</span>
                    {selectedProduct.originalPrice && (
                      <span className="text-xl text-muted-foreground line-through">
                        ${selectedProduct.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">{selectedProduct.description}</p>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3">What is Included:</h4>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Delivery Info */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <span className="font-semibold text-sm">Delivery Time: </span>
                        <span className="text-sm text-muted-foreground">{selectedProduct.deliveryTime}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-sm">Package Includes: </span>
                        <span className="text-sm text-muted-foreground">{selectedProduct.includes}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Get Quote
                    </Button>
                    <Button variant="outline" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
