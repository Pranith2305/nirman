import Image from 'next/image'
import { Button } from './ui/button'

export default function HeroSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-purple-100 text-purple-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Introducing Nirmana →
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
           Build it all with one intelligent platform
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Build at the speed of no-code. Export Next.js &<br />
            Tailwind code. Customize with no limits.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
            <Button size="lg">
              Get Started
            </Button>
          </div>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-purple-200 rounded-lg blur-xl opacity-50 animate-pulse"></div>
          <Image
            src="/goals_table.png"
            alt="Dashboard Preview"
            width={1800}
            height={1200}
            className="relative rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}