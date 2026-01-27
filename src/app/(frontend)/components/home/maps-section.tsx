"use client"

import { motion } from "framer-motion"
import { HomePage } from "@/payload/payload-types"

interface MapsSectionProps {
  contactInfo: HomePage['contactUs'] 
}

export function MapsSection({ contactInfo }: MapsSectionProps) {
  const street = contactInfo?.schoolAddress?.street ?? "Nr. Palladium mall, S.G. Highway Road, "
  const city = contactInfo?.schoolAddress?.city ?? "Thaltej, Ahmedabad-380 054."
  const phone = contactInfo?.primaryContact?.phone ?? "9724896330"
  const mapUrl = contactInfo?.locationInfo?.mapEmbedUrl ?? "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3671.026315496377!2d72.52242187!3d23.05949679!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e835519d27f37%3A0xa903dd3f424f9a0f!2sFlorescent%20school!5e0!3m2!1sen!2sin!4v1767620917883!5m2!1sen!2sin"
  const response = contactInfo?.responseTime?.admissionResponse ?? "24-48 Hours"

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Visit Our Campus</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Come explore our state-of-the-art facilities and experience our community firsthand.
            </p>
          </motion.div>

          {/* Map - Using Dynamic URL from Payload */}
          <motion.div
            className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg border border-border"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location Map"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          {/* Info Cards - Using Dynamic Data from Payload */}
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
            {[ 
              {
                title: "Address",
                content: (
                  <>
                    {street}
                    <br />
                    {city}
                  </>
                )
              },
              {
                title: "Phone",
                content: phone
              },
              {
                title: "Response Time",
                content: response
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 bg-card rounded-2xl border border-border hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <div className="text-muted-foreground leading-relaxed">{item.content}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}