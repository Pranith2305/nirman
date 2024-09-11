import Image from 'next/image'

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit.",
    name: "John",
    handle: "@johndoe",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    quote: "Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut tortor et feugiat. Etiam vitae nisi eleifend, blandit ligula quis, sodales neque.",
    name: "Bob",
    handle: "@thisisbob",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    quote: "Vivamus dignissim porta orci, finibus tempus risus consectetur dapibus. Donec quis ornare elit. Curabitur tempor.",
    name: "Micheal",
    handle: "@micheal",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    quote: "Mauris tincidunt porttitor risus, et posuere erat malesuada eu. Praesent volutpat ut ipsum ac congue. Vestibulum nec orci ornare, imperdiet metus vel.",
    name: "Max",
    handle: "@maxcook",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    quote: "Suspendisse a velit elit. Curabitur augue libero, vulputate sed dui id, sodales venenatis sem. Suspendisse dapibus neque eu justo volutpat gravida.",
    name: "Emily",
    handle: "@emilysmith",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    quote: "Nullam non lorem vitae risus volutpat dictum non sed magna. Aliquam in venenatis quam. Morbi feugiat tristique leo, vel ultrices dolor varius non.",
    name: "Linda",
    handle: "@thisislinda",
    avatar: "/placeholder.svg?height=40&width=40"
  }
]

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-gray-50" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-2">TESTIMONIALS</p>
          <h2 id="testimonials-heading" className="text-3xl font-bold text-gray-900 mb-4">What our users say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here's what developers and founders of top companies
            around the internet are saying about us.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <blockquote>
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <footer className="flex items-center">
                  <Image
                    src={testimonial.avatar}
                    alt={`Avatar of ${testimonial.name}`}
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <cite className="font-semibold text-gray-900 not-italic">{testimonial.name}</cite>
                    <p className="text-gray-500 text-sm">{testimonial.handle}</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}