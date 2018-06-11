import React from "react";

const Github = (props) => (
  <svg data-name="Layer 1" viewBox="0 0 120.78 117.79" {...props}>
    <title>Github</title>
    <path
      d="M60.39 0A60.39 60.39 0 0 0 41.3 117.69c3 .56 4.12-1.31 4.12-2.91 0-1.44-.05-6.19-.08-11.24C28.54 107.19 25 96.42 25 96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67 6.07.43 9.26 6.22 9.26 6.22 5.39 9.23 14.13 6.57 17.57 5 .55-3.9 2.11-6.56 3.84-8.07C36 85.55 21.85 80.37 21.85 57.23A23.35 23.35 0 0 1 28.08 41c-.63-1.52-2.7-7.66.58-16 0 0 5.07-1.62 16.61 6.19a57.36 57.36 0 0 1 30.25 0C87 23.42 92.11 25 92.11 25c3.28 8.32 1.22 14.46.59 16a23.34 23.34 0 0 1 6.21 16.21c0 23.2-14.12 28.3-27.57 29.8 2.16 1.87 4.09 5.55 4.09 11.18 0 8.08-.06 14.59-.06 16.57 0 1.61 1.08 3.49 4.14 2.9A60.39 60.39 0 0 0 60.39 0z"
      fill= {props.color|| "#181616"}
      fillRule="evenodd"
    />
  </svg>
);

const LinkedIn = (props) => (
  <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 155.46 144" {...props}>
    <defs />
    <title>LinkedIn</title>
    <path
      className="cls-1"
      d="M133.34 0H10.63A10.51 10.51 0 0 0 0 10.38v123.23A10.51 10.51 0 0 0 10.63 144h122.71A10.53 10.53 0 0 0 144 133.61V10.38A10.53 10.53 0 0 0 133.34 0zM42.71 122.71H21.35V54h21.36zM32 44.59a12.38 12.38 0 1 1 12.41-12.38A12.38 12.38 0 0 1 32 44.59zm90.68 78.12h-21.32V89.29c0-8-.14-18.22-11.1-18.22-11.11 0-12.81 8.68-12.81 17.64v34H56.11V54h20.48v9.39h.29c2.85-5.41 9.82-11.1 20.21-11.1 21.62 0 25.62 14.23 25.62 32.73zM147.51 119.09h1.16v3.62h.63v-3.62h1.16v-.63h-2.95v.63zM154.56 118.46l-1.24 3.12-1.23-3.12h-.9v4.25h.63v-3.23l1.3 3.23h.41l1.31-3.23v3.23h.62v-4.25h-.9z"
      fill={props.color}
    />
  </svg>
);

const Mail = (props) => (
  <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 408 280" {...props}>
    <defs />
    <title>Mail</title>
    <rect
      x={11.5}
      y={14.5}
      width={382}
      height={251}
      rx={9.5}
      ry={9.5}
      fill="none"
    />
    <path
      d="M384 17a7 7 0 0 1 7 7v232a7 7 0 0 1-7 7H21a7 7 0 0 1-7-7V24a7 7 0 0 1 7-7h363m0-5H21A12 12 0 0 0 9 24v232a12 12 0 0 0 12 12h363a12 12 0 0 0 12-12V24a12 12 0 0 0-12-12z"
      strokeMiterlimit={10}
      stroke={props.color || "#000"}
      strokeWidth={20}
    />
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      stroke={props.color || "#000"}
      strokeWidth={20}
      d="M201.36 141.6L39 37.78 41.5 34l162.36 103.81-2.5 3.79z"
    />
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      stroke={props.color || "#000"}
      strokeWidth={20}
      className="cls-4"
      d="M202.43 141.6l-2.29-3.62L352.71 37l2.29 3.62L202.43 141.6z"
    />
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      stroke={props.color || "#000"}
      strokeWidth={20}
      className="cls-4"
      transform="rotate(-45 119.497 161.503)"
      d="M54.45 159h130.11v5H54.45z"
    />
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      stroke={props.color || "#000"}
      strokeWidth={20}
      className="cls-4"
      transform="rotate(-39.75 285.503 162.997)"
      d="M283 97.32h5v131.37h-5z"
    />
  </svg>
);

export { Github, LinkedIn, Mail }

