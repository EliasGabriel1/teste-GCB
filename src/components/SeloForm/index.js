import React from "react";
import Figure from "./styled";

export default function index() {
    return (
        <Figure>
            <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38 76C58.9868 76 76 58.9868 76 38C76 17.0132 58.9868 0 38 0C17.0132 0 0 17.0132 0 38C0 58.9868 17.0132 76 38 76Z" fill="url(#paint0_linear_103_160)" />
                <path d="M31.1785 56.228L16.2518 41.301L22.392 35.1605L31.1785 43.9419L55.6317 19.489L61.772 25.6295L31.1785 56.228Z" fill="white" />
                <defs>
                    <linearGradient id="paint0_linear_103_160" x1="60.876" y1="78.964" x2="20.9" y2="7.448" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#DBE42C" />
                        <stop offset="1" stopColor="#6AD419" />
                    </linearGradient>
                </defs>
            </svg>
            <p>
                The best services ready
                <br/>
                I serve you
            </p>
        </Figure>
    );
}