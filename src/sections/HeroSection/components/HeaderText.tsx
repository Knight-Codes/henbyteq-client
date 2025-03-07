import { cva } from "class-variance-authority";

const styles = cva(
  "font-cinzel text-4xl sm:text-5xl tracking-wider bg-gradient-to-r from-white to-white/60 inline-block text-transparent bg-clip-text uppercase leading-12 mt-4"
);

export const HeaderText = ({ children }: { children: React.ReactNode }) => (
  <h1 className={styles()}>{children}</h1>
);
