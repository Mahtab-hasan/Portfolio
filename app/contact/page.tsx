"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen pt-24 px-4 bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white mb-8">Contact Me</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300">
              <Mail size={24} />
              <div>
                <h3 className="font-medium text-white">Email</h3>
                <p>arpon5566@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <Phone size={24} />
              <div>
                <h3 className="font-medium text-white">Phone</h3>
                <p>+8801711192205</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <MapPin size={24} />
              <div>
                <h3 className="font-medium text-white">Location</h3>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
            action="https://formspree.io/f/xyzwkewl"
            method="POST"
          >
            <div>
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
            >
              Send Message <Send size={20} />
            </button>
          </motion.form>
        </div>
      </motion.div>
    </main>
  );
}