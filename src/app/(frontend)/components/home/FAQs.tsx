
import Image from "next/image"

export function FAQ() {
  const faqs = [
    {
      question: "What are the admission requirements?",
      answer: "Strong academic record, entrance exam, teacher recommendations, and personal interview.",
    },
    {
      question: "When is the application deadline?",
      answer: "Applications for Fall enrollment are due by January 15th each year.",
    },
    {
      question: "Do you offer financial aid?",
      answer: "Yes, we offer need-based financial aid and merit scholarships to qualified students.",
    },
    {
      question: "What is the student-teacher ratio?",
      answer: "We maintain a 10:1 student-teacher ratio to ensure personalized attention.",
    },
  ]

  return (
    <div className="bg-charcoal text-white">
      {/* FAQs Section */}
      <div className="border-b border-gray-700 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/UI/help.png"
            alt=""
            width={80}
            height={80}
            className="absolute top-[10%] left-[5%] opacity-10 rotate-[-15deg]"
          />
          <Image
            src="/UI/help.png"
            alt=""
            width={100}
            height={100}
            className="absolute top-[60%] left-[8%] opacity-10 rotate-[-20deg]"
          />
          <Image
            src="/UI/help.png"
            alt=""
            width={70}
            height={70}
            className="absolute top-[30%] right-[10%] opacity-10 rotate-12deg"
          />
          <Image
            src="/UI/help.png"
            alt=""
            width={90}
            height={90}
            className="absolute top-[75%] right-[6%] opacity-10 rotate-[-18deg]"
          />
          <Image
            src="/UI/help.png"
            alt=""
            width={60}
            height={60}
            className="absolute top-[45%] left-[50%] opacity-10 rotate-[-25deg]"
          />
        </div>
        {/* </CHANGE> */}

        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-primary">FAQs</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-semibold text-primary">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
  )
}