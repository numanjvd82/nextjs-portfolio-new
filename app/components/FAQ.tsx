"use client";
import { motion, useInView } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRef, useState } from "react";
import { faqData } from "../data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="cursor-auto md:cursor-none py-20 px-4 sm:px-6 lg:px-8 mix-blend-difference">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center text-white mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-6 "
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            How I work!
          </motion.h2>
          <motion.p
            className="text-lg  max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            I believe in a collaborative approach to projects, where ideas are
            shared, refined, and executed with precision. My process is
            transparent, ensuring you&apos;re involved every step of the way.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 group"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-blue-600 transition-colors duration-200">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 group-hover:text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-blue-600" />
                  )}
                </motion.div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4" />
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-gray-600 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className=" mb-6">
            Still have questions? I&apos;d love to hear from you.
          </p>
          <motion.button
            className="bg-gradient-to-r bg-white text-black px-8 py-3 rounded-full font-semibold  transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const email = "numanjaved2001@gmail.com";
              window.location.href = `mailto:${email}?subject=Project Inquiry&body=Hi Numan, I have a question about...`;
            }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
