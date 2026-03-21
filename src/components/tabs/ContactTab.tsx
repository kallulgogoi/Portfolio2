"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactTab() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="max-w-2xl">
      <div className="border border-[#30363d] rounded-md bg-[#161b22] overflow-hidden">
        {/* Issue-style header */}
        <div className="bg-[#161b22] border-b border-[#30363d] px-5 py-3">
          <h2 className="text-lg font-semibold text-[#e6edf3]">✉️ New contact message</h2>
          <p className="text-xs text-[#8b949e] mt-1">Fill out the form below to get in touch.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#e6edf3] mb-1.5">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-2 text-sm text-[#e6edf3] placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff]/40 transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#e6edf3] mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-2 text-sm text-[#e6edf3] placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff]/40 transition-all"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#e6edf3] mb-1.5">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              required
              className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-2 text-sm text-[#e6edf3] placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff]/40 transition-all resize-none"
              placeholder="Your message..."
            />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs text-[#8b949e]">Markdown is supported</p>
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#238636] hover:bg-[#2ea043] text-white font-medium text-sm px-4 py-2 rounded-md transition-colors"
            >
              <Send className="w-4 h-4" /> Submit
            </button>
          </div>
        </form>
      </div>

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 border border-[#2ea043] bg-[#2ea04315] rounded-md p-4 text-sm text-[#2ea043]"
        >
          ✅ Message sent successfully! I&apos;ll get back to you soon.
        </motion.div>
      )}
    </div>
  );
}
