import * as React from "react";

export const LeftArrowSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.25 12h-16m10.34 5.66c0-2.91 2.562-5.66 5.66-5.66m-5.66-5.66c0 2.91 2.562 5.66 5.66 5.66"
      stroke="#121212"
      strokeWidth={1.5}
      strokeLinecap="square"
    />
  </svg>
);
