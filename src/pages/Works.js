import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function Works() {
  const projects = [
    { category: "Branding", title: "Project Alpha" },
    { category: "Web Design", title: "E-commerce Platform" },
    { category: "Mobile App", title: "Fitness Tracker" },
    { category: "Illustration", title: "Art Collection" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <motion.section
        className="pt-32 px-8 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-6xl font-bold mb-20">Selected Works</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative h-[600px] bg-gray-100 rounded-3xl p-8 hover:bg-gray-200 transition-colors"
            >
              <div className="absolute bottom-8 left-8">
                <span className="text-sm text-gray-500">
                  {project.category}
                </span>
                <h2 className="text-3xl font-bold mt-2">{project.title}</h2>
              </div>
              <ArrowUpRightIcon className="h-6 w-6 absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
