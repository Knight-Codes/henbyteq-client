import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

export const Card = ({
  title,
  contents,
  icon: Icon,
}: {
  title: string;
  contents: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}) => {
  return (
    <motion.div
      className="w-full flex flex-col items-start justify-between bg-white/5 min-h-[364px] pt-12 pb-8 px-6 rounded-lg border border-white/5"
      whileHover={{
        scale: 1.03,
        borderColor: "rgba(255, 255, 255, 1)",
        boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.1)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Icon className="w-14 h-14" />
      <h1 className="font-alegreya tracking-wide text-2xl bg-gradient-to-r from-white to-white/60 inline-block text-transparent bg-clip-text mt-4">
        {title}
      </h1>
      <Separator className="w-[120px] bg-white h-[1px]" />
      <p className="text-left font-manrope text-xl font-light leading-8">
        {contents}
      </p>
    </motion.div>
  );
};
