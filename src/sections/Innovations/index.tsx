import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ConventionSVG } from "@/assets/svgs";

const products = [
  {
    title: "HENBYTEQ VirtuServe - AI-Powered Virtual Customer Service",
    description:
      "A conversational AI assistant for businesses, capable of handling customer queries, scheduling appointments, and providing personalized recommendations.",
  },
  {
    title: "HENBYTEQ SmartDocs - AI-Based Document Automation",
    description:
      "An intelligent document processing system that auto-generates reports, extracts key insights from PDFs, and organizes data using machine learning.",
  },
  {
    title: "HENBYTEQ AutoFix - Smart Predictive Maintenance System",
    description:
      "An IoT-powered AI system that detects potential failures in industrial machinery, vehicles, and home appliances before they occur.",
  },
  {
    title: "HENBYTEQ GreenNest - Smart Home Sustainability System",
    description:
      "A home automation solution that optimizes lighting, heating, and cooling for maximum energy efficiency.",
  },
];

const cardVariants = cva(
  "sm:h-[300px] flex flex-col justify-end bg-[#262626] border border-[#484848] text-white py-12 sm:py-6 px-4 sm:px-10 rounded-lg"
);

const InnovationsCard = ({
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

export const Innovations = () => {
  return (
    <section id="portfolio">
      <div className="md:px-10 2xl:px-50 bg-[#121212] text-white py-16">
        <div className="p-4 space-y-8">
          <div className="max-w-[250px] py-2 bg-[#262626] border border-[#484848] rounded-3xl flex items-center justify-center gap-2">
            <ConventionSVG className="w-4.5 h-4.5" />
            <p className="font-alegreya text-sm">
              Convention over Configuration
            </p>
          </div>
        </div>

        <div className="space-y-6 px-6 mt-4">
          <p className="font-cinzel text-3xl">Our Innovations in Action</p>
          <p className="font-alegreya text-lg mt-4 max-w-[620px]">
            Explore how HENBYTEQ is transforming industries with AI, IoT, and
            sustainable technology, delivering smart, efficient, and
            future-ready solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 py-6 mt-4">
          {products.map((product, index) => (
            <InnovationsCard
              key={index}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
