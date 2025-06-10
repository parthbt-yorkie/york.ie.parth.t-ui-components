import React from "react";

export const Badge: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => {
  return (
    <div
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
};
