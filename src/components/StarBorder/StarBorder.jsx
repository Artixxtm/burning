'use client'

import "./StarBorder.css";

const StarBorder = ({
  as: Component = "div",
  className = "",
  color = "white",
  speed = "7s",
  thickness = 1,
  children,
  ...rest
}) => {
  return (
    <div
      className={`star-border-container ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...rest.style,
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="inner-content bg-white/30 px-6 py-3 rounded-[10px] font-secondary backdrop-blur-lg relative z-1">{children}</div>
    </div>
  );
};

export default StarBorder;
