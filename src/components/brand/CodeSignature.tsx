import React from "react";

type CodeSignatureProps = {
  className?: string;
};

/** FR21 — `</> Precision in every pixel` en Courier New, turquoise #3DBCC7 */
export function CodeSignature({ className = "" }: CodeSignatureProps) {
  return (
    <p
      className={`font-mono text-pic-turquoise text-sm md:text-base m-0 tracking-tight ${className}`}
    >
      <span aria-hidden>{`</>`}</span> Precision in every pixel
    </p>
  );
}
