import * as React from "react";

export const CollapseArrowSVG = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M33.447 19.085 17.064 30.557m14.646-1.618c-2.086-2.98-1.434-7.633 1.738-9.854m-9.854-1.737c2.086 2.979 6.682 3.958 9.853 1.737"
      stroke="#9C9C9C"
      strokeWidth={1.5}
      strokeLinecap="square"
    />
  </svg>
);
