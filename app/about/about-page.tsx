// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { ArrowRight, CheckCircle, Truck, Globe, Award } from "lucide-react"

// export default function Component() {
//   return (
//     <div className="min-h-screen bg-slate-900">
//       {/* Hero Section */}
//       <section className="relative bg-slate-900 text-white py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="space-y-4">
//                 <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
//                   Your Business <span className="text-orange-500">Success</span>
//                 </h1>
//                 <p className="text-xl text-gray-300 leading-relaxed">
//                   Continually generate 2.0 communities and client-focused products. In synergize strategic manufactured
//                   products whereas levera.
//                 </p>
//               </div>

//               <div className="space-y-4">
//                 <h3 className="text-orange-500 text-lg font-semibold">We are Since 2007 to Present In SanDiego, USA</h3>
//                 <ul className="space-y-3">
//                   <li className="flex items-center gap-3">
//                     <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
//                     <span className="text-gray-300">Continually generate open source</span>
//                   </li>
//                   <li className="flex items-center gap-3">
//                     <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
//                     <span className="text-gray-300">Distinctively innovate data superior content</span>
//                   </li>
//                   <li className="flex items-center gap-3">
//                     <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
//                     <span className="text-gray-300">Professionally foster open source</span>
//                   </li>
//                 </ul>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold">
//                   Get Started Today
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Button>
//                 <Button
//                   variant="outline"
//                   className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full text-lg font-semibold bg-transparent"
//                 >
//                   View Our Work
//                 </Button>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
//               <div className="relative grid grid-cols-2 gap-4">
//                 <Card className="bg-slate-800 border-slate-700 transform rotate-3 hover:rotate-0 transition-transform duration-300">
//                   <CardContent className="p-6">
//                     <Image
//                       src="/placeholder.svg?height=200&width=300"
//                       alt="Business Brochure"
//                       width={300}
//                       height={200}
//                       className="rounded-lg"
//                     />
//                   </CardContent>
//                 </Card>
//                 <Card className="bg-slate-800 border-slate-700 transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-8">
//                   <CardContent className="p-6">
//                     <Image
//                       src="/placeholder.svg?height=200&width=300"
//                       alt="Transport Document"
//                       width={300}
//                       height={200}
//                       className="rounded-lg"
//                     />
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

      

//       {/* Features Section */}
      

//       {/* Industry Competence Section */}
//       <section className="py-20 px-4 bg-slate-900 text-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="relative">
//               <Image
//                 src="/placeholder.svg?height=500&width=600"
//                 alt="Logistics Operations"
//                 width={600}
//                 height={500}
//                 className="rounded-lg"
//               />
//             </div>

//             <div className="space-y-8">
//               <div className="space-y-4">
//                 <h2 className="text-4xl font-bold">
//                   Our industry-explicit <span className="text-orange-500">competence</span>
//                 </h2>
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
//                   dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
//                 </p>
//               </div>

//               <div className="grid sm:grid-cols-2 gap-6">
//                 <div className="space-y-3">
//                   <div className="flex items-center gap-2">
//                     <CheckCircle className="h-5 w-5 text-orange-500" />
//                     <span className="font-medium">Brokerage Services</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CheckCircle className="h-5 w-5 text-orange-500" />
//                     <span className="font-medium">Less Than Truckload</span>
//                   </div>
//                 </div>
//                 <div className="space-y-3">
//                   <div className="flex items-center gap-2">
//                     <CheckCircle className="h-5 w-5 text-orange-500" />
//                     <span className="font-medium">Supply Chain Solutions</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CheckCircle className="h-5 w-5 text-orange-500" />
//                     <span className="font-medium">Air Freight Support</span>
//                   </div>
//                 </div>
//               </div>

//               <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold">
//                 Get Info Today
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center space-y-4 mb-16">
//             <h2 className="text-4xl font-bold text-slate-900">
//               Transport <span className="text-orange-500">expert team</span>
//             </h2>
//             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//               To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some
//               advantage from it.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { name: "George Chen", role: "CEO & Founder" },
//               { name: "Emily Johnson", role: "Operations Manager" },
//               { name: "Sophia Brown", role: "Logistics Coordinator" },
//               { name: "Anna Peterson", role: "Customer Relations" },
//             ].map((member, index) => (
//               <Card key={index} className="group hover:shadow-lg transition-all duration-300">
//                 <CardContent className="p-0">
//                   <div className="relative overflow-hidden">
//                     <Image
//                       src={`/placeholder.svg?height=300&width=250&query=professional business person ${member.name.toLowerCase().replace(" ", "-")}`}
//                       alt={member.name}
//                       width={250}
//                       height={300}
//                       className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                     <div className="absolute bottom-0 left-0 right-0 bg-slate-900 text-white p-4">
//                       <h3 className="font-bold text-lg">{member.name}</h3>
//                       <p className="text-orange-500 text-sm">{member.role}</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 bg-slate-900 text-white">
//         <div className="max-w-4xl mx-auto text-center space-y-8">
//           <h2 className="text-4xl font-bold">
//             Ready to Transform Your <span className="text-orange-500">Business?</span>
//           </h2>
//           <p className="text-xl text-gray-300 leading-relaxed">
//             Join thousands of satisfied clients who trust us with their logistics and transportation needs.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold">
//               Get Started Today
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
//             <Button
//               variant="outline"
//               className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full text-lg font-semibold bg-transparent"
//             >
//               View Our Work
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
