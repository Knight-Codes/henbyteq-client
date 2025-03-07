import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "w-[100%] flex flex-col items-center justify-end bg-[#262626] border border-[#484848] text-white pt-6 pb-4 sm:py-6 px-0 sm:px-6 rounded-lg"
);

export const Card = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => (
  <div className={cn(cardVariants())}>
	<img src={image} alt={title} className="w-[90%] h-[300px] mb-8 object-cover rounded-lg" />
    <div className="space-y-4">
      <h2 className="font-alegreya text-lg text-center font-medium mx-2">{title}</h2>
      <p className="font-manrope text-center mt-2 text-gray-300 mx-2">
        {description}
      </p>
    </div>
  </div>
);
