import React, { useEffect, useState } from "react";

export default function SkillCircle({ label, value, color = "#9333ea", delay = 0 }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const step = () => {
        setProgress((prev) => {
          if (prev >= value) return value;
          return prev + 1;
        });
      };
      const interval = setInterval(step, 15);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  const radius = 40;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center text-center">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{ transition: "stroke-dashoffset 0.5s ease-out" }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="text-sm fill-current text-black dark:text-white"
        >
          {progress}%
        </text>
      </svg>
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{label}</p>
    </div>
  );
}
