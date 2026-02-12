"use client";

import React from "react";

const Navbar = () => {
    return (
        <nav className="fixed top-[20px] md:top-[30px] left-1/2 -translate-x-1/2 w-[90%] md:w-fit h-[60px] md:h-[70px] flex items-center navbar-glass rounded-[30px] md:rounded-[50px] px-6 md:px-10 z-50">
            <a href="#" className="flex items-center gap-[15px] no-underline">
                <svg
                    className="h-[30px] md:h-[45px] w-auto"
                    viewBox="0 0 2481 3508"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}
                >
                    <g id="Page-1" transform="matrix(4.166667,0,0,4.166667,0,0)">
                        <rect x="0" y="0" width="595.28" height="841.89" style={{ fill: "none" }} />
                        <g id="Calque-1">
                            <g transform="matrix(1,0,0,1,297.64,821.4851)">
                                <path
                                    d="M0,-266.866L-266.866,-266.866C-266.866,-119.48 -147.386,0 0,0L0,-266.866Z"
                                    style={{ fill: "rgb(26,26,26)", fillRule: "nonzero" }}
                                />
                            </g>
                            <g transform="matrix(1,0,0,1,0,-0.482)">
                                <rect x="30.774" y="287.753" width="266.866" height="266.866" style={{ fill: "rgb(0,137,208)" }} />
                            </g>
                            <g transform="matrix(1,0,0,1,297.64,20.4049)">
                                <path
                                    d="M0,266.866L266.866,266.866C266.866,119.48 147.386,0 0,0L0,266.866Z"
                                    style={{ fill: "rgb(253,185,19)", fillRule: "nonzero" }}
                                />
                            </g>
                            <g transform="matrix(1,0,0,1,297.64,20.4049)">
                                <path
                                    d="M0,266.866L-266.866,266.866C-266.866,119.48 -147.386,0 0,0L0,266.866Z"
                                    style={{ fill: "rgb(61,188,199)", fillRule: "nonzero" }}
                                />
                            </g>
                            <g transform="matrix(1,0,0,1,297.64,554.1369)">
                                <path
                                    d="M0,-266.866L266.866,-266.866C266.866,-119.48 147.386,0 0,0L0,-266.866Z"
                                    style={{ fill: "rgb(243,112,33)", fillRule: "nonzero" }}
                                />
                            </g>
                            <g transform="matrix(0,1,1,0,297.4562,177.3139)">
                                <path
                                    d="M109.957,-109.957C170.685,-109.957 219.914,-60.728 219.914,0C219.914,60.728 170.685,109.957 109.957,109.957C49.229,109.957 -0,60.728 -0,0C-0,-60.728 49.229,-109.957 109.957,-109.957"
                                    style={{ fill: "rgb(237,111,37)", fillOpacity: 0.5, fillRule: "nonzero" }}
                                />
                            </g>
                            <g transform="matrix(0,1,1,0,297.4568,194.3879)">
                                <path
                                    d="M92.883,-92.884C144.181,-92.884 185.767,-51.299 185.767,0C185.767,51.298 144.181,92.883 92.883,92.883C41.585,92.883 0,51.298 0,0C0,-51.299 41.585,-92.884 92.883,-92.884"
                                    style={{ fill: "rgb(250,183,24)", fillOpacity: 0.49, fillRule: "nonzero" }}
                                />
                            </g>
                            <g transform="matrix(0,1,1,0,297.4563,212.3504)">
                                <path
                                    d="M74.921,-74.921C116.299,-74.921 149.841,-41.378 149.841,0.001C149.841,41.377 116.299,74.921 74.921,74.921C33.544,74.921 -0.001,41.377 -0.001,0.001C-0.001,-41.378 33.544,-74.921 74.921,-74.921"
                                    style={{ fill: "rgb(64,187,197)", fillOpacity: 0.49, fillRule: "nonzero" }}
                                />
                            </g>
                            <g transform="matrix(0,1,1,0,297.4561,232.0824)">
                                <path
                                    d="M55.188,-55.188C85.668,-55.188 110.377,-30.479 110.377,0.001C110.377,30.48 85.668,55.188 55.188,55.188C24.709,55.188 -0.001,30.48 -0.001,0.001C-0.001,-30.479 24.709,-55.188 55.188,-55.188"
                                    style={{ fill: "rgb(24,135,201)", fillOpacity: 0.51, fillRule: "nonzero" }}
                                />
                            </g>
                            <g transform="matrix(0,1,1,0,297.4562,246.3719)">
                                <path
                                    d="M40.899,-40.899C63.487,-40.899 81.798,-22.588 81.798,0C81.798,22.588 63.487,40.899 40.899,40.899C18.311,40.899 0,22.588 0,0C0,-22.588 18.311,-40.899 40.899,-40.899"
                                    style={{ fill: "rgb(28,26,25)", fillOpacity: 0.5, fillRule: "nonzero" }}
                                />
                            </g>
                        </g>
                    </g>
                </svg>
                <span className="font-quicksand font-bold text-[1rem] md:text-[1.6rem] tracking-[-0.02em] text-[var(--text)] whitespace-nowrap">
                    Picsell Agency
                </span>
            </a>
        </nav>
    );
};

export default Navbar;
