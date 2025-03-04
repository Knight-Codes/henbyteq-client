import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "w-[100%] sm:h-[350px] flex flex-col justify-end bg-[#262626] border border-[#484848] text-white py-12 sm:py-6 px-4 sm:px-10 rounded-lg"
);

export const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className={cn(cardVariants())}>
    <div className="space-y-4">
      <h2 className="font-alegreya text-xl text-center font-medium">{title}</h2>
      <p className="font-manrop text-center mt-2 text-gray-300">
        {description}
      </p>
    </div>
  </div>
);
