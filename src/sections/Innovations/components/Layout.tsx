import { motion } from "framer-motion";
import { Card } from "./Card";
import { innovationsData } from "../innovationsData";

export const Layout = () => (
  <motion.div
    className="flex flex-wrap gap-4 px-6 py-6 mt-4"
    initial="hidden"
    whileInView="visible"
    transition={{ staggerChildren: 0.2 }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {innovationsData.map((innovation, index) => (
      <motion.div
        key={index}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
        className={innovation.width}
      >
        <Card title={innovation.title} description={innovation.description} />
      </motion.div>
    ))}
  </motion.div>
);
