import * as React from "react";

export const ExpandArrowSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={50}
    height={50}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={0.5} y={0.5} width={49} height={49} rx={24.5} stroke="#9C9C9C" />
    <path
      d="M35.312 25h-20m12.926 7.075c0-3.637 3.204-7.075 7.075-7.075m-7.075-7.075c0 3.637 3.204 7.075 7.075 7.075"
      stroke="#9C9C9C"
      strokeWidth={1.5}
      strokeLinecap="square"
    />
  </svg>
);
