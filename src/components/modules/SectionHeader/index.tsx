export const SectionHeader = ({
  section,
  title,
}: {
  section: string;
  title: string;
}) => (
  <div className="text-center flex flex-col items-center mb-24">
    <h3 className="text-gray-400 mb-2 tracking-wider text-md font-alegreya">
      {section}
    </h3>
    <h2 className="text-white/80 text-xl sm:text-3xl tracking-wider font-cinzel mt-4 max-w-[800px] px-4">
      {title}
    </h2>
  </div>
);
