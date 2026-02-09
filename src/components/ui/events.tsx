"use client";

import { motion } from "framer-motion";

const EVENTS = [
  "Wikiracing",
  "Code Blocks Scavenger Hunt",
  "Recreation Station",
  "Black Box Testing",
];

export function Events() {
  return (
    <div className="justify-center flex">
      <div className="pt-12 pb-36 flex w-[80%] flex-col items-center justify-center space-y-8 text-center lg:max-w-[60%]">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-7xl font-black">Events</div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {EVENTS.map((event, index) => (
            <motion.div
              key={event}
              className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <div className="text-3xl font-black">{event}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Events;
