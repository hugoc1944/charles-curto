import React from "react";

interface CheckIconProps extends React.SVGProps<SVGSVGElement> {}

export function CheckIcon(props: CheckIconProps) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C7A36A"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
