import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CountingAnimation } from "@/components/modules/CountingAnimation";

export const Card = ({
  value,
  symbol,
  label,
}: {
  value: number;
  symbol: string;
  label: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center gap-4 h-[200px] sm:min-w-[200px]"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 className="text-3xl font-cinzel text-white">
        <CountingAnimation value={value} />
        <span>{symbol}</span>
      </h2>
      <p className="text-lg font-manrope text-[#9C9C9C] tracking-wider">
        {label}
      </p>
    </motion.div>
  );
};
