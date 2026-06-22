import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiEnvelope, HiPhone, HiMapPin } from 'react-icons/hi2'

const directContact = [
  { icon: HiEnvelope, label: 'Email',    value: 'chistwaqas@gmail.com', href: 'mailto:chistwaqas@gmail.com' },
  { icon: HiPhone,    label: 'Phone',    value: '0303-6310002',         href: 'tel:+923036310002'           },
  { icon: HiMapPin,   label: 'Location', value: 'Faisalabad, Pakistan',    href: null                             },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const fields = [
  { name: 'name',    label: 'Your Name',   placeholder: 'John Doe',             type: 'text'  },
  { name: 'email',   label: 'Your Email',  placeholder: 'john@example.com',     type: 'email' },
  { name: 'topic',   label: 'Your Topic',  placeholder: 'Project discussion...', type: 'text' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', topic: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', topic: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  const inputCls = 'w-full px-4 py-[13px] bg-surface border border-white/10 rounded-lg text-ink text-sm font-[inherit] outline-none transition-colors duration-200 focus:border-ruby'

  return (
    <section id="contact" className="py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="text-[11px] font-semibold tracking-[0.15em] text-ruby uppercase mb-3.5">Communication</p>
          <h2 className="text-[clamp(28px,3.5vw,48px)] font-extrabold tracking-[-0.02em] m-0 text-ink">
            Let's <span className="text-ruby">Connect</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-gray-500 text-[15px] max-w-[540px] mx-auto mt-4 mb-16 leading-[1.7]"
        >
          Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* ── Form ── */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h3 className="text-xl font-bold mb-6 text-ink">Send a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              {fields.map(f => (
                <div key={f.name}>
                  <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.1em] block mb-1.5">
                    {f.label}
                  </label>
                  <input
                    name={f.name} type={f.type} placeholder={f.placeholder}
                    value={form[f.name]} onChange={handleChange} required
                    className={inputCls}
                  />
                </div>
              ))}

              <div>
                <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.1em] block mb-1.5">
                  Your Message
                </label>
                <textarea
                  name="message" placeholder="Tell me about your project..."
                  value={form.message} onChange={handleChange} required rows={5}
                  className={`${inputCls} resize-y min-h-[120px]`}
                />
              </div>

              <button
                type="submit"
                className={`py-[14px] px-8 font-semibold text-sm rounded-lg border-none flex items-center justify-center gap-2 transition-all duration-300 ${sent ? 'bg-green-500 shadow-[0_0_24px_rgba(34,197,94,0.3)]' : 'bg-ruby shadow-[0_0_24px_rgba(250,204,21,0.25)] hover:shadow-[0_0_40px_rgba(250,204,21,0.45)] hover:-translate-y-px'} text-black`}
              >
                {sent ? '✓ Message Sent!' : 'Send Message →'}
              </button>

            </form>
          </motion.div>

          {/* ── Direct Contact ── */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h3 className="text-xl font-bold mb-6 text-ink">Direct Contact</h3>

            <div className="flex flex-col gap-4 mb-10">
              {directContact.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 p-[18px] bg-[rgba(20,20,20,0.8)] border border-white/7 rounded-xl backdrop-blur-md">
                  <div className="w-10 h-10 rounded-[10px] bg-ruby/10 flex items-center justify-center text-ruby text-lg shrink-0">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-600 font-semibold uppercase tracking-[0.08em] m-0 mb-0.5">{label}</p>
                    {href
                      ? <a href={href} className="text-sm text-ink font-medium transition-colors duration-200 hover:text-ruby">{value}</a>
                      : <span className="text-sm text-ink font-medium">{value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
