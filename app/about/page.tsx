import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Truck, Globe, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-800 to-teal-600 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <nav className="text-sm text-teal-100 mb-8">
              <span>Home</span> <span className="mx-2">{">"}</span> <span>About Us</span>
            </nav>
            <h1 className="text-5xl lg:text-6xl font-bold">About Us</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Leading the way in logistics and transportation solutions worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">
                  <span className="text-orange-500">Providing full range</span>
                  <br />
                  of transportation
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold">
                  Get Started Today
                </Button>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-700 font-medium">24/7 Online Support</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Cargo Ship"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full lg:w-[600px]"
              />
              <div className="absolute -bottom-4 -right-0 bg-orange-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">20+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

   
    

      {/* Industry Competence Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Logistics Operations"
                width={600}
                height={500}
                className="rounded-lg shadow-lg w-full lg:w-[600px]"
              />
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">
                  Our industry-explicit <span className="text-orange-500">competence</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span className="font-medium text-gray-700">Brokerage Services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span className="font-medium text-gray-700">Less Than Truckload</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span className="font-medium text-gray-700">Supply Chain Solutions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span className="font-medium text-gray-700">Air Freight Support</span>
                  </div>
                </div>
              </div>

              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-semibold">
                Get Info Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Transport <span className="text-orange-500">expert team</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some
              advantage from it but who has any right to find fault.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "George Chen", role: "CEO & Founder" },
              { name: "Emily Johnson", role: "Operations Manager" },
              { name: "Sophia Brown", role: "Logistics Coordinator" },
              { name: "Anna Peterson", role: "Customer Relations" },
            ].map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=300&width=250&query=professional business person ${member.name.toLowerCase().replace(" ", "-")}`}
                      alt={member.name}
                      width={250}
                      height={300}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-teal-800 text-white p-4">
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-teal-200 text-sm">{member.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-teal-800 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">
            Ready to Get Started with Our <span className="text-orange-400">Services?</span>
          </h2>
          <p className="text-xl text-teal-100 leading-relaxed">
            Contact us today to learn more about how we can help streamline your logistics and transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-semibold">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-800 px-8 py-3 rounded-md text-lg font-semibold bg-transparent"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
