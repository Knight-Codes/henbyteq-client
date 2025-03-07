import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { coreValuesData } from "../coreValuesData";
import { Card } from "./Card";

const containerStyles = cva(
  "flex flex-col md:flex-row items-center justify-between gap-8 px-[4%]"
);

export const Layout = () => {
  return (
    <div className={containerStyles()}>
      {coreValuesData.map((coreValue, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full"
        >
          <Card
            title={coreValue.title}
            contents={coreValue.contents}
            icon={coreValue.icon}
          />
        </motion.div>
      ))}
    </div>
  );
};
