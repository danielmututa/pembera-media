// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { ArrowRight, Star, Users, Award, Clock } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"

// export default function HomePage() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 lg:py-20">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="space-y-4">
//                 <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/20">
//                   Professional Design & Printing
//                 </Badge>
//                 <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
//                   Bring Your Ideas to <span className="text-yellow-400">Life</span>
//                 </h1>
//                 <p className="text-xl text-gray-200 leading-relaxed">
//                   From eye-catching flyers to premium t-shirts, we deliver exceptional printing and design services that
//                   make your brand stand out.
//                 </p>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
//                   <Link href="/portfolio" className="flex items-center">
//                     View Our Work <ArrowRight className="ml-2 h-5 w-5" />
//                   </Link>
//                 </Button>
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-white text-white hover:bg-white hover:text-black bg-transparent"
//                 >
//                   <Link href="/contact">Get Quote</Link>
//                 </Button>
//               </div>
//               <div className="flex items-center gap-8 pt-4">
//                 <div className="flex items-center gap-2">
//                   <Users className="h-5 w-5 text-yellow-400" />
//                   <span className="text-sm">500+ Happy Clients</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Award className="h-5 w-5 text-yellow-400" />
//                   <span className="text-sm">5+ Years Experience</span>
//                 </div>
//               </div>
//             </div>
//             <div className="relative">
//               <Image
//                 src="/Professional-printing-and-design-work.jpg?height=400&width=500"
//                 alt="Professional printing and design work"
//                 width={500}
//                 height={300}
//                 className="rounded-2xl shadow-2xl object-cover h-[450px]"
//               />
//               {/* <img 
//                className="rounded-2xl shadow-2xl h-[450px] object-cover w-full" src="/Professional-printing-and-design-work.jpg" alt="Professional printing and design work"
//                 /> */}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Overview */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               We offer a complete range of printing and design services to meet all your business needs
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Flyer Design & Printing",
//                 description: "Eye-catching flyers that grab attention and drive results",
//                 image: "/flyer.jpeg?height=200&width=300",
//                 features: ["Custom Design", "High-Quality Print", "Fast Turnaround"],
//               },
//               {
//                 title: "Banner Printing",
//                 description: "Large format banners for events, promotions, and advertising",
//                 image: "/Cafe Banner.jpeg?height=200&width=300",
//                 features: ["Weather Resistant", "Various Sizes", "Vibrant Colors"],
//               },
//               {
//                 title: "T-Shirt Printing",
//                 description: "Custom t-shirts with your designs, logos, or messages",
//                 image: "/T-shirt.jpeg?height=200&width=300",
//                 features: ["Screen Printing", "Heat Transfer", "Embroidery"],
//               },
//               {
//                 title: "Cutting Services",
//                 description: "Precision cutting for vinyl, paper, and specialty materials",
//                 image: "/vly.jpeg?height=200&width=300",
//                 features: ["Vinyl Cutting", "Die Cutting", "Custom Shapes"],
//               },
//               {
//                 title: "Brand Identity",
//                 description: "Complete branding solutions from logos to business cards",
//                 image: "/brandidentty.jpeg?height=200&width=300",
//                 features: ["Logo Design", "Business Cards", "Brand Guidelines"],
//               },
//               {
//                 title: "Digital Printing",
//                 description: "High-quality digital printing for all your document needs",
//                 image: "/digital-printing.jpeg?height=200&width=300",
//                 features: ["Quick Turnaround", "Variable Data", "Small to Large Runs"],
//               },
//             ].map((service, index) => (
//               <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
//                 <CardHeader className="p-0">
//                   <div className="relative overflow-hidden rounded-t-lg">
//                     <Image
//                       src={service.image || "/placeholder.svg"}
//                       alt={service.title}
//                       width={300}
//                       height={200}
//                       className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>
//                 </CardHeader>
//                 <CardContent className="p-6">
//                   <CardTitle className="text-xl mb-2 text-gray-900">{service.title}</CardTitle>
//                   <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
//                   <div className="space-y-2">
//                     {service.features.map((feature, idx) => (
//                       <div key={idx} className="flex items-center gap-2">
//                         <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
//                         <span className="text-sm text-gray-700">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//           <div className="text-center mt-12">
//             <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
//               <Link href="/services" className="flex items-center">
//                 View All Services <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Portfolio Preview */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Recent Work</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Check out some of our latest projects and see the quality we deliver
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               "/marketing.jpeg?height=300&width=300",
//               "/latest-banner.jpeg?height=300&width=300",
//               "/Wedding Backdrop Design.jpeg?height=300&width=300",
//               "/brandingone.jpeg?height=300&width=300",
//             ].map((image, index) => (
//               <div
//                 key={index}
//                 className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
//               >
//                 <Image
//                   src={image || "/placeholder.svg"}
//                   alt={`Portfolio item ${index + 1}`}
//                   width={300}
//                   height={300}
//                   className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div className="absolute bottom-4 left-4 text-white">
//                     <p className="font-semibold">Project {index + 1}</p>
//                     <p className="text-sm opacity-90">View Details</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-12">
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent"
//             >
//               <Link href="/portfolio" className="flex items-center">
//                 View Full Portfolio <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-20 bg-gray-900 text-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Us?</h2>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//               We are committed to delivering exceptional quality and service that exceeds your expectations
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <Clock className="h-8 w-8" />,
//                 title: "Fast Turnaround",
//                 description: "Quick delivery without compromising on quality",
//               },
//               {
//                 icon: <Award className="h-8 w-8" />,
//                 title: "Premium Quality",
//                 description: "Using the best materials and latest technology",
//               },
//               {
//                 icon: <Users className="h-8 w-8" />,
//                 title: "Expert Team",
//                 description: "Experienced designers and printing professionals",
//               },
//               {
//                 icon: <Star className="h-8 w-8" />,
//                 title: "Customer Satisfaction",
//                 description: "100% satisfaction guarantee on all our work",
//               },
//             ].map((item, index) => (
//               <div key={index} className="text-center group">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 text-black rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//                 <p className="text-gray-300">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             Get in touch with us today for a free consultation and quote. Let us bring your ideas to life!
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
//               <Link href="/contact">Get Free Quote</Link>
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
//             >
//               <Link href="/about">Learn More About Us</Link>
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
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowUpRight, Users } from "lucide-react"

export default function HomePage() {
  // const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: "Strategy and Planning Building Idea",
      category: "Consulting",
      image: "/flyer.jpeg?height=300&width=400&text=Strategy+Planning",
      description: "Comprehensive business strategy development",
    },
    {
      title: "Corporate Finance for height-class Workers",
      category: "Consulting",
      image: "/Cafe Banner.jpeg?height=300&width=400&text=Corporate+Finance",
      description: "Advanced financial consulting solutions",
    },
    {
      title: "Consulting for business Organizations",
      category: "Consulting",
      image: "/latest-banner.jpeg?height=300&width=400&text=Business+Consulting",
      description: "Organizational transformation consulting",
    },
  ]

  const services = [
    {
      number: "1",
      title: "Idea Generate",
      subtitle: "Appropriately enhance data superior content",
      description: "Interactively procrastinate high-payoff content without backward-compatible data.",
    },
    {
      number: "2",
      title: "System Design",
      subtitle: "Appropriately enhance data superior content",
      description: "Interactively procrastinate high-payoff content without backward-compatible data.",
    },
    {
      number: "3",
      title: "24/7 Support",
      subtitle: "Appropriately enhance data superior content",
      description: "Interactively procrastinate high-payoff content without backward-compatible data.",
    },
    {
      number: "4",
      title: "Sales Generate",
      subtitle: "Appropriately enhance data superior content",
      description: "Interactively procrastinate high-payoff content without backward-compatible data.",
    },
  ]

  const brands = ["TECHNOLOGY", "DIGITAL", "CONNECT", "ZETRA", "TECHNOLOGY DIGITAL"]

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      

      {/* Hero Section */}
      <section className="relative px-6 py-12">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-gray-700 rounded-full"></div>
          <div className="absolute top-1/2 right-20 w-4 h-4 bg-orange-500 rounded-full"></div>
          <div className="absolute bottom-32 left-20 w-2 h-2 bg-white rounded-full"></div>
          {/* Decorative dots pattern */}
          <div className="absolute bottom-40 left-40 grid grid-cols-6 gap-1">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Your Business
              <span className="text-orange-500 block">Success</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Continually generate 2.0 communities and client-focused products. In synergize strategic manufactured
              products whereas levera.
            </p>

            <div className="mb-8">
              <p className="text-orange-400 font-semibold mb-4">We are Since 2007 to Present In SanDiego, USA</p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
                  Continually generate open source
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
                  Distinctively innovate data superior content
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
                  Professionally foster open source
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-4 rounded-full">
              Start Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="relative">
            {/* Team Images */}
            <div className="relative">
              <div className="absolute top-0 left-0 w-64 h-48 rounded-3xl overflow-hidden border-4 border-orange-500/30">
                <Image
                  src="/Business Bifold Brochure Template V1 Corporate Identity.jpeg?height=200&width=300&text=Team+Meeting"
                  alt="Team collaboration"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-20 right-0 w-64 h-48 rounded-3xl overflow-hidden border-4 border-orange-500/30">
                <Image
                  src="/carte de visite professionnelle.jpeg?height=200&width=300&text=Business+Discussion"
                  alt="Business discussion"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-500/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto mt-20 relative z-10">
          <div className="text-center mb-8">
            <p className="text-gray-400">Consen Finished this Achievement in 7 Years</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">1,139</div>
              <div className="text-gray-400">Project Finished</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">19+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">32+</div>
              <div className="text-gray-400">Awards Received</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">1,139+</div>
              <div className="text-gray-400">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
        <div className="absolute inset-0 bg-white"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                What Say Our CEO, About
                <span className="text-orange-500 block">Consen Customers</span>
              </h2>
              <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed font-medium">
                We Help Our Clients to Renew Their Business Function to Create Brandable Organizations
              </blockquote>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Appropriately enhance principle-centered innovation rather than high standards in platforms. Credibly
                orchestrate functional markets through multidisciplinary services. Uniquely strategize transparent
                technology and user friendly ideas. Professionally generate extensive process improvements for
                process-centric niche markets.
              </p>
              <div className="mb-8">
                <p className="font-bold text-gray-900 text-lg">Philip Antrophy</p>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="relative">
                <Image
                  src="/A man in a suit with his arms crossed _ Premium AI-generated image.jpeg?height=600&width=500&text=CEO+Portrait"
                  alt="CEO Philip Antrophy"
                  width={500}
                  height={600}
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-orange-500 p-6 rounded-2xl">
                  <div className="text-white text-4xl font-bold"></div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-20 bg-slate-900">
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

        {/* Decorative Elements */}
        <div className="absolute top-40 left-10 grid grid-cols-4 gap-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
          ))}
        </div>
        <div className="absolute bottom-40 right-20 w-32 h-32 border border-gray-700 rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                We Serve the Best Works
                <span className="text-orange-500 block">View Case Studies</span>
              </h2>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 rounded-full px-6">
              All Projects <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-800 border-slate-700 overflow-hidden group hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 text-white rounded-full px-3 py-1">{project.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
        <div className="absolute inset-0 bg-white"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                The Fastest Way To Achieve
                <span className="text-orange-500 block">Technology Consulting</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">For Choose Consen Before know who we are?</p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate
                resource-leveling customer service for state of the art customer service. Objectively innovate empowered
                manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures
                for reliable supply chains.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">
                More About <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="p-6 border-2 hover:border-orange-500 transition-all duration-300 group">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                      {service.number}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{service.subtitle}</p>
                    <p className="text-sm text-gray-500">{service.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gray-400">More Than 50+ Brands with work Consen</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {brands.map((brand, index) => (
              <div key={index} className="text-center opacity-60 hover:opacity-100 transition-opacity">
                <div className="text-lg font-bold text-gray-400">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="relative py-20 bg-slate-900">
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Join the Community to learn
                <span className="text-orange-500 block">About our Company</span>
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Collaboratively generate B2C communities and client-focused products. In synergize strategic
                manufactured products whereas levera.
              </p>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">Business Strategy</span>
                    <span className="text-orange-500 font-bold">95%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">Technology Consulting</span>
                    <span className="text-orange-500 font-bold">80%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <Image
                  src="/Business Meeting Photos - Download Free High-Quality Pictures _ Freepik.jpeg?height=400&width=600&text=Community+Team"
                  alt="Community team collaboration"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute top-6 right-6 bg-orange-500 p-4 rounded-full">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}
