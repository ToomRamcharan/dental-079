"use client"
import { Gem, Stethoscope, Sparkles, Syringe, SmilePlus, Baby, ArrowRight } from "lucide-react"
import Motion from "./Motion"
import { fadeUp, staggerContainer } from "./Motion"

const ICONS = [Gem, Stethoscope, Sparkles, Syringe, SmilePlus, Baby]
const SERVICES = [
  {title:"General Dentistry",desc:"Comprehensive checkups and preventive care."},
  {title:"Root Canal",desc:"Pain-free root canal therapy."},
  {title:"Teeth Whitening",desc:"Professional whitening treatments."},
  {title:"Dental Implants",desc:"Permanent tooth replacement."},
  {title:"Orthodontics",desc:"Braces and clear aligners."},
  {title:"Pediatric Dentistry",desc:"Gentle care for children."},
]

export default function Services({ config }: { config: any }) {
  return (
    <section id="services" className="section-padding bg-bg-dark">
      <div className="section-container">
        <Motion variants={fadeUp} className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mt-3 mb-4">Comprehensive Dental Services</h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">Advanced dental care tailored to your needs</p>
        </Motion>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[i]
            return (
              <Motion key={i} variants={fadeUp} delay={i} className="bg-white border border-border-color rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-all" />
                </div>
                <h3 className="text-lg font-bold font-heading mb-2">{s.title}</h3>
                <p className="text-foreground-muted text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Motion>
            )
          })}
        </div>
      </div>
    </section>
  )
}
