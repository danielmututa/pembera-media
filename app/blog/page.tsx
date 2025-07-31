"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const blogPosts = [
    {
      id: "design-tips-flyers",
      title: "10 Design Tips for Eye-Catching Flyers",
      excerpt: "Learn the essential design principles that make flyers stand out and drive results for your business.",
      image: "/placeholder.svg?height=300&width=500&text=Design+Tips",
      category: "Design Tips",
      author: "Design Team",
      date: "March 15, 2024",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: "paper-guide",
      title: "Choosing the Right Paper for Your Print Project",
      excerpt: "A comprehensive guide to selecting the perfect paper type for different printing projects and budgets.",
      image: "/placeholder.svg?height=300&width=500&text=Paper+Guide",
      category: "Printing Guide",
      author: "Print Expert",
      date: "March 10, 2024",
      readTime: "7 min read",
      featured: false,
    },
    {
      id: "brand-identity",
      title: "Brand Identity: More Than Just a Logo",
      excerpt: "Discover why brand identity encompasses much more than logo design and how to create a cohesive brand.",
      image: "/placeholder.svg?height=300&width=500&text=Brand+Identity",
      category: "Branding",
      author: "Brand Specialist",
      date: "March 5, 2024",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: "tshirt-printing-methods",
      title: "The Ultimate Guide to T-Shirt Printing Methods",
      excerpt: "Compare screen printing, heat transfer, and embroidery to choose the best method for your project.",
      image: "/placeholder.svg?height=300&width=500&text=T-Shirt+Printing",
      category: "Printing Guide",
      author: "Production Team",
      date: "February 28, 2024",
      readTime: "8 min read",
      featured: false,
    },
    {
      id: "color-psychology",
      title: "Color Psychology in Marketing Materials",
      excerpt: "How different colors affect customer behavior and how to use color psychology in your designs.",
      image: "/placeholder.svg?height=300&width=500&text=Color+Psychology",
      category: "Design Tips",
      author: "Design Team",
      date: "February 20, 2024",
      readTime: "4 min read",
      featured: false,
    },
    {
      id: "file-preparation",
      title: "Preparing Files for Professional Printing",
      excerpt: "Essential tips for preparing your design files to ensure the best possible print quality.",
      image: "/placeholder.svg?height=300&width=500&text=File+Preparation",
      category: "Technical",
      author: "Print Expert",
      date: "February 15, 2024",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: "banner-design-tips",
      title: "Creating Effective Banner Designs That Convert",
      excerpt: "Learn the key principles of banner design that grab attention and drive action from your audience.",
      image: "/placeholder.svg?height=300&width=500&text=Banner+Design",
      category: "Design Tips",
      author: "Design Team",
      date: "February 10, 2024",
      readTime: "5 min read",
      featured: false,
    },
    {
      id: "print-quality-guide",
      title: "Understanding Print Quality: DPI, Resolution & More",
      excerpt:
        "A technical guide to understanding print quality specifications and how to achieve professional results.",
      image: "/placeholder.svg?height=300&width=500&text=Print+Quality",
      category: "Technical",
      author: "Technical Team",
      date: "February 5, 2024",
      readTime: "8 min read",
      featured: false,
    },
    {
      id: "brand-consistency",
      title: "Maintaining Brand Consistency Across All Materials",
      excerpt: "How to ensure your brand looks consistent across different print materials and marketing channels.",
      image: "/placeholder.svg?height=300&width=500&text=Brand+Consistency",
      category: "Branding",
      author: "Brand Specialist",
      date: "January 30, 2024",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: "bulk-printing-guide",
      title: "Bulk Printing: Tips for Large Order Success",
      excerpt:
        "Everything you need to know about planning and executing large printing orders efficiently and cost-effectively.",
      image: "/placeholder.svg?height=300&width=500&text=Bulk+Printing",
      category: "Printing Guide",
      author: "Production Manager",
      date: "January 25, 2024",
      readTime: "7 min read",
      featured: false,
    },
  ]

  const categories = ["All", "Design Tips", "Printing Guide", "Branding", "Technical"]

  const filteredPosts =
    activeCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/10 text-white border-white/20 mb-6">Our Blog</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Design & Print <span className="text-yellow-400">Insights</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Stay updated with the latest trends, tips, and insights from the world of printing and design.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={
                  activeCategory === category
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "hover:bg-purple-50 hover:text-purple-600 bg-white"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === "All" && featuredPost && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Article</h2>
              <p className="text-gray-600">Our most popular and recent insights</p>
            </div>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-purple-600 text-white">Featured</Badge>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-2">
                      {featuredPost.category}
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{featuredPost.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">{featuredPost.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Link href={`/blog/${featuredPost.id}`} className="flex items-center">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {activeCategory === "All" ? "Latest Articles" : `${activeCategory} Articles`}
            </h2>
            <p className="text-gray-600">
              {activeCategory === "All"
                ? "Discover more insights and tips"
                : `Explore our ${activeCategory.toLowerCase()} content`}
            </p>
          </div>

          {regularPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-gray-900">{post.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-colors duration-300 bg-transparent"
                      >
                        <Link href={`/blog/${post.id}`}>Read More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found in this category.</p>
              <Button className="mt-4 bg-purple-600 hover:bg-purple-700" onClick={() => setActiveCategory("All")}>
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest design tips, printing insights, and industry news delivered to
            your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-6">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
