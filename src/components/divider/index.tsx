import React from "react";
import "./styles.css";

interface DividerProps {
  width?: string;
  height?: string; 
  marginTop?: string; 
  marginBottom?: string; 
  color?: string; 
}

const DividerComponent: React.FC<DividerProps> = ({
  width = "100%",
  height = "1px",
  marginTop = "16px",
  marginBottom = "16px",
  color = "rgba(229, 229, 229, 1)",
}) => {
  return (
    <div className="component-container-divider">
      <div
        className="divider"
        style={{
          width,
          height,
          marginTop,
          marginBottom,
          backgroundColor: color,
        }}
      />
    </div>
  );
};

export default DividerComponent;
