"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/data/faq";

export function Faq() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="z-10 w-[80%] space-y-8 mt-16 mb-32">
        <motion.div
          className="flex text-7xl font-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          FAQ
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible>
            {FAQ.map((item) => (
              <AccordionItem value={item.question} key={item.question}>
                <AccordionTrigger className="text-left text-2xl">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-xl">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}

export default Faq;
