import { Hash, Download, Globe, Cpu, LayoutTemplate, Palette } from 'lucide-react'

export default function FeatureSection() {
  const features = [
    {
      icon: <Hash className="w-6 h-6" />,
      title: "Visual builder",
      description: "Edit HTML, Tailwind & React components with a visual builder and see your changes in real-time."
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Code Export",
      description: "Once you're done building, export your project to a fully functional Next.js & Tailwind app."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "No lock-in",
      description: "You own the code. Customize with full flexibility and host it anywhere you want."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Built on modern tech",
      description: "Nirmana works with the most popular frontend technologies like Next.js, Tailwind CSS and Shadcn UI."
    },
    {
      icon: <LayoutTemplate className="w-6 h-6" />,
      title: "Pre-made templates",
      description: "Get started quickly with pre-made templates and sections to build your landing page fast."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "AI Theme Generation",
      description: "Generate beautiful themes and color palettes with AI to match your brand identity and style."
    }
  ]

  return (
    <section className="py-16 bg-white" aria-labelledby="features-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-2">FEATURES</p>
          <h2 id="features-heading" className="text-3xl font-bold text-gray-900 mb-4">Build fast and stay flexible</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nirmana brings the best of two worlds together: the speed of development of
            no-code tools, and the flexibility of code customization.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg mb-4 flex items-center justify-center text-purple-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}