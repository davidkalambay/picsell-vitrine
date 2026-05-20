import React from "react";

type PicsellLogoProps = {
  /** Hauteur minimale brand : 32px digital */
  height?: number;
  className?: string;
  showWordmark?: boolean;
};

/**
 * Logo officiel Picsell — zone de protection via gap/padding (≈ hauteur du « P »).
 * FR22 — min. 32px hauteur.
 */
export function PicsellLogo({
  height = 45,
  className = "",
  showWordmark = false,
}: PicsellLogoProps) {
  const protection = Math.max(8, Math.round(height * 0.25));

  return (
    <span
      className={`inline-flex items-center ${className}`}
      style={{ gap: protection, padding: protection }}
      aria-label="Picsell Agency"
    >
      <svg
        role="img"
        aria-hidden={showWordmark}
        className="w-auto shrink-0"
        style={{ height }}
        viewBox="0 0 2481 3508"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="matrix(4.166667,0,0,4.166667,0,0)">
          <rect x="0" y="0" width="595.28" height="841.89" fill="none" />
          <g>
            <g transform="matrix(1,0,0,1,297.64,821.4851)">
              <path
                d="M0,-266.866L-266.866,-266.866C-266.866,-119.48 -147.386,0 0,0L0,-266.866Z"
                fill="#1A1A1A"
                fillRule="nonzero"
              />
            </g>
            <g transform="matrix(1,0,0,1,0,-0.482)">
              <rect x="30.774" y="287.753" width="266.866" height="266.866" fill="#0089D0" />
            </g>
            <g transform="matrix(1,0,0,1,297.64,20.4049)">
              <path
                d="M0,266.866L266.866,266.866C266.866,119.48 147.386,0 0,0L0,266.866Z"
                fill="#FDB913"
                fillRule="nonzero"
              />
            </g>
            <g transform="matrix(1,0,0,1,297.64,20.4049)">
              <path
                d="M0,266.866L-266.866,266.866C-266.866,119.48 -147.386,0 0,0L0,266.866Z"
                fill="#3DBCC7"
                fillRule="nonzero"
              />
            </g>
            <g transform="matrix(1,0,0,1,297.64,554.1369)">
              <path
                d="M0,-266.866L266.866,-266.866C266.866,-119.48 147.386,0 0,0L0,-266.866Z"
                fill="#F37021"
                fillRule="nonzero"
              />
            </g>
          </g>
        </g>
      </svg>
      {showWordmark && (
        <span className="font-heading font-bold text-pic-charcoal text-[1.6rem] tracking-[-0.02em]">
          Picsell Agency
        </span>
      )}
    </span>
  );
}
