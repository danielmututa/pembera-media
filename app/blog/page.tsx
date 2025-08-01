"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Calendar, ArrowRight, Heart, Share2 } from "lucide-react"

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const featuredPosts = [
    {
      id: 1,
      title: "Bloggers & Designers",
      subtitle: "An beautiful wordpress theme for",
      description: "This theme is the perfect solution for content creators",
      image: "/placeholder.svg?height=600&width=1200&text=Modern+Chair+Design",
      category: "FEATURED",
      author: "Design Team",
      date: "March 15, 2024",
    },
    {
      id: 2,
      title: "Creative Workflows",
      subtitle: "Streamline your design process with",
      description: "Discover the latest tools and techniques for modern designers",
      image: "/placeholder.svg?height=600&width=1200&text=Creative+Workspace",
      category: "DESIGN",
      author: "Sarah Johnson",
      date: "March 12, 2024",
    },
    {
      id: 3,
      title: "Brand Identity Trends",
      subtitle: "2024's hottest trends in",
      description: "Stay ahead with the latest branding and identity design trends",
      image: "/placeholder.svg?height=600&width=1200&text=Brand+Identity",
      category: "BRANDING",
      author: "Mike Chen",
      date: "March 10, 2024",
    },
  ]

  const blogPosts = [
    {
      id: 4,
      title: "Love Writing and Sharing",
      excerpt:
        "Dignissimos ducimus qui blanditiis praesentium voluptatum modi tempora incidunt ut labore et dolore deleniti atque corrupti lorem ipsum",
      image: "/placeholder.svg?height=300&width=400&text=Writing+Design",
      category: "TRAVEL",
      author: {
        name: "Danny Dover",
        role: "Photographer",
        avatar: "/placeholder.svg?height=40&width=40&text=DD",
      },
      date: "January 21, 2024",
      readTime: "5 min read",
    },
    {
      id: 5,
      title: "The Ultimate Consumers",
      excerpt:
        "Reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat lorem ipsum sit modi tempora incidunt ut labore et dolore",
      image: "/placeholder.svg?height=300&width=400&text=Consumer+Trends",
      category: "MAGAZINE",
      author: {
        name: "Danny Dover",
        role: "Content Writer",
        avatar: "/placeholder.svg?height=40&width=40&text=DD",
      },
      date: "January 21, 2024",
      readTime: "8 min read",
    },
    {
      id: 6,
      title: "It Is Beyond Blogging",
      excerpt:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium que laudantium sunt in culpa qui officia deserunt mollitia",
      image: "/placeholder.svg?height=300&width=400&text=Beyond+Blogging",
      category: "TECH, TRAVEL",
      author: {
        name: "Danny Dover",
        role: "Photographer",
        avatar: "/placeholder.svg?height=40&width=40&text=DD",
      },
      date: "December 28, 2024",
      readTime: "6 min read",
    },
    {
      id: 7,
      title: "Music Is A Moral Law",
      excerpt:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur quis nostrum exercitationem ullam corporis suscipit laboriosam",
      image: "/placeholder.svg?height=300&width=400&text=Music+Design",
      category: "MUSIC",
      author: {
        name: "Danny Dover",
        role: "Photographer",
        avatar: "/placeholder.svg?height=40&width=40&text=DD",
      },
      date: "December 25, 2024",
      readTime: "4 min read",
    },
    {
      id: 8,
      title: "One Good Thing About Music",
      excerpt:
        "When it hits you, you feel no pain. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      image: "/placeholder.svg?height=300&width=400&text=Music+Therapy",
      category: "TRAVEL",
      author: {
        name: "Helen Smith",
        role: "Editor in Chief",
        avatar: "/placeholder.svg?height=40&width=40&text=HS",
      },
      date: "December 25, 2024",
      readTime: "7 min read",
    },
    {
      id: 9,
      title: "Starbucks Represents Something",
      excerpt:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising socis natoque penatibus et magnis",
      image: "/placeholder.svg?height=300&width=400&text=Coffee+Culture",
      category: "MUSIC",
      author: {
        name: "Helen Smith",
        role: "Editor in Chief",
        avatar: "/placeholder.svg?height=40&width=40&text=HS",
      },
      date: "December 25, 2024",
      readTime: "3 min read",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredPosts.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, )

  const BlogCard = ({ post }: { post: any }) => (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
      <div className="relative overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/90 text-gray-800 font-semibold text-xs">
            {post.category}
          </Badge>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-white/90">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-white/90">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Calendar className="h-4 w-4" />
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
              <AvatarFallback>
                {post.author.name
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-sm">{post.author.name}</p>
              <p className="text-xs text-muted-foreground">{post.author.role}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="group-hover:text-blue-600">
            Read More
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      
      {/* Hero Carousel */}
      <section className="relative h-[600px] overflow-hidden">
        {featuredPosts.map((post, index) => (
          <div
            key={post.id}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
            }`}
          >
            <div className="relative h-full">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                <div className="max-w-4xl px-6">
                  <p className="text-lg mb-2 opacity-90">{post.subtitle}</p>
                  <h1 className="text-6xl font-bold mb-4">{post.title}</h1>
                  <p className="text-xl mb-8 opacity-90">{post.description}</p>
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                    Explore More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {featuredPosts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center">
          <p className="text-sm mb-2 opacity-75">SCROLL DOWN FOR MORE</p>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-white/75 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-lg text-muted-foreground">
              Discover insights, tips, and inspiration from our design experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 border-2 hover:bg-gray-900 hover:text-white transition-colors bg-transparent"
            >
              LOAD MORE ARTICLES
            </Button>
          </div>
        </div>
      </section>

      
    </div>
  )
}
