import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Clock, Heart, Target, Lightbulb } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/10 text-white border-white/20 mb-6">About Our Company</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Crafting Excellence in <span className="text-yellow-400">Print & Design</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              With over 5 years of experience, we have been helping businesses and individuals bring their creative
              visions to life through exceptional printing and design services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                What started as a passion for design and quality printing has grown into a trusted partner for hundreds
                of businesses and individuals. We believe that every project, no matter how big or small, deserves the
                highest level of attention and craftsmanship.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From our humble beginnings with a single printer to our current state-of-the-art facility, we have never
                lost sight of our core mission: delivering exceptional quality and service that exceeds expectations.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">5000+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Our printing facility"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we serve our clients
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8" />,
                title: "Quality First",
                description:
                  "We never compromise on quality. Every project receives our full attention to detail and commitment to excellence.",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Customer Focus",
                description:
                  "Your success is our success. We listen, understand, and deliver solutions that meet your specific needs.",
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Reliability",
                description:
                  "We deliver on time, every time. You can count on us to meet deadlines without sacrificing quality.",
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Innovation",
                description:
                  "We stay ahead of industry trends and continuously invest in the latest technology and techniques.",
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Passion",
                description:
                  "We love what we do, and it shows in every project. Our passion drives us to exceed expectations.",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Results Driven",
                description: "We focus on delivering results that help your business grow and achieve its goals.",
              },
            ].map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures quality results and a smooth experience from start to finish
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We discuss your needs, goals, and vision for the project",
              },
              {
                step: "02",
                title: "Design & Planning",
                description: "Our team creates designs and plans that bring your ideas to life",
              },
              {
                step: "03",
                title: "Production",
                description: "Using state-of-the-art equipment, we produce your project with precision",
              },
              {
                step: "04",
                title: "Delivery",
                description: "We deliver your finished project on time and to your satisfaction",
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us discuss your next project and see how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/contact">Get Started Today</Link>
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
