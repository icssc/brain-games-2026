"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <div className="justify-center flex">
      <div className="pt-32 pb-24 flex w-[80%] flex-col items-center justify-center space-y-8 text-center text-2xl lg:max-w-[60%]">
        <motion.h1
          className="text-7xl font-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What is Brain Games?
        </motion.h1>

        <motion.div
          className="space-y-4 text-gray-300 font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            Brain Games is a fun and social competition consisting of a variety
            of fun and interesting puzzles and games, such as wikiracing and our
            code blocks scavenger hunt! Teams of 2-4 people are challenged to
            use your creativity, logic, and problem-solving skills to solve fun
            challenges and meet new friends!
          </p>
          <p>
            We&apos;ll be providing free lunch, prizes, and exciting games!
            Brain Games is open to individuals of all skill levels, including
            beginners. The event is designed to be inclusive, with games that
            are more about collaboration and enjoyment.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
