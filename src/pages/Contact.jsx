import React from 'react'
import Linkes from '../componant/Linkes'

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-20 justify-items-center">
      <div className="mx-auto max-w-5xl px-6">
        <div style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }} className="p-10 rounded-xl border">
          <h2 style={{ color: 'var(--text-primary)' }} className="text-3xl md:text-4xl font-bold text-center mb-6">Contact</h2>
          <p style={{ color: 'var(--text-secondary)' }} className="max-w-3xl mx-auto text-center mb-10">
            I’m open to new opportunities and happy to collaborate. Reach out for development, design, or application support.
          </p>
          <div className="grid gap-6 md:grid-cols-3 text-center">
            <div className=" p-6">
              <p style={{ color: 'var(--accent)' }} className="text-sm uppercase tracking-[0.3em] font-semibold">Email</p>
              <p style={{ color: 'var(--text-primary)' }} className="mt-3 text-lg font-semibold">bemabdevikki@gmail.com</p>
            </div>
            <div className="p-6">
              <p style={{ color: 'var(--accent)' }} className="text-sm uppercase tracking-[0.3em] font-semibold">Phone</p>
              <p style={{ color: 'var(--text-primary)' }} className="mt-3 text-lg font-semibold">+91 9022200820</p>
            </div>
            <div className=" p-6">
              <p style={{ color: 'var(--accent)' }} className="text-sm uppercase tracking-[0.3em] font-semibold">Connect</p>
              <p style={{ color: 'var(--text-secondary)' }} className="mt-3">LinkedIn and GitHub profiles below.</p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Linkes />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact