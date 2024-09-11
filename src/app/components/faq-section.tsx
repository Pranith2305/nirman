'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "How is Nirmana different than tools like Framer or Webflow?",
    answer: "Nirmana focuses on generating clean, customizable code that developers can easily integrate into their existing workflows. Unlike Framer or Webflow, Nirmana produces Next.js and Tailwind CSS code, allowing for greater flexibility and easier collaboration with development teams."
  },
  {
    question: "How long does it take to learn Nirmana?",
    answer: "The learning curve for Nirmana is relatively short, especially for developers familiar with React and Tailwind CSS. Most users can start creating basic layouts within a few hours and become proficient within a week of regular use."
  },
  {
    question: "What does the exported code look like?",
    answer: "Nirmana exports clean, well-structured Next.js components using Tailwind CSS for styling. The code is optimized for readability and maintainability, making it easy for developers to customize and extend."
  },
  {
    question: "Will the exported website look exactly like the preview?",
    answer: "Yes, the exported website will look identical to the preview you see in Nirmana. However, you have the flexibility to further customize the code after export if you wish to make any changes."
  },
  {
    question: "How long does it take to make a landing page with Nirmana?",
    answer: "With Nirmana, you can create a basic landing page in as little as 30 minutes. More complex pages might take a few hours, depending on the level of customization and content required."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-white" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-2">FAQ</p>
          <h2 id="faq-heading" className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            For any other questions, please feel free to contact us.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="p-4 text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}