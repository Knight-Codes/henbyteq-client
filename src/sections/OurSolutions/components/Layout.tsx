import { Fragment } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { cva } from "class-variance-authority";
import { Separator } from "@/components/ui/separator";
import { ourSolutionsData } from "../ourSolutionsData";
import { Card } from "./Card";

const layoutStyles = cva(
  "flex flex-col items-center justify-between gap-8 px-6 md:px-10 2xl:px-50"
);

export const Layout = () => {
  return (
    <motion.div
      className={layoutStyles()}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {ourSolutionsData.map((solution, index) => (
        <Fragment key={index}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 }}
            viewport={{ once: true }}
            style={{ width: "100%" }}
            className="px-2"
          >
            <Card
              index={index}
              title={solution.title}
              description={solution.description}
              infographics={solution.infographics}
            />
          </motion.div>
          {index < ourSolutionsData.length - 1 && (
            <Separator className="w-full bg-white/40 h-[1px] px-4" />
          )}
        </Fragment>
      ))}
    </motion.div>
  );
};
