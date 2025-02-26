import { motion } from "framer-motion";
import { UsersIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function Studio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-32 pb-20 px-8 max-w-6xl mx-auto text-center"
      >
        <motion.div
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          className="text-sm text-gray-500 mb-4"
        >
          About our studio
        </motion.div>

        <motion.h1
          className="text-6xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.2 } }}
        >
          Crafting Digital
          <br />
          Excellence
        </motion.h1>

        <motion.div
          className="grid md:grid-cols-3 gap-12 mt-20 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              variants={{ hidden: { y: 20 }, visible: { y: 0 } }}
              className="p-8 hover:bg-gray-50 rounded-xl"
            >
              <SparklesIcon className="h-8 w-8 mb-6 text-purple-600" />
              <h3 className="text-xl font-bold mb-4">Philosophy {item}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <h2 className="text-4xl font-bold mb-12">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                variants={{ hidden: { scale: 0.9 }, visible: { scale: 1 } }}
                className="group relative"
              >
                <div className="h-96 bg-gray-200 rounded-2xl mb-4 overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
                <h3 className="text-lg font-bold">Team Member {item}</h3>
                <p className="text-gray-500">Position</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
