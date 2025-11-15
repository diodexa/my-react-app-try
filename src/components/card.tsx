import type React from "react";

interface CardProps {
  name: string;
  children: React.ReactNode;
}

function Card({ name, children }: CardProps) {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      border: "1px solid black", 
      padding: "10px",
      borderRadius: "6px",
      marginBottom: "20px"
    }}>
      <h4>Halo aku {name}</h4>
      {children}
    </div>
  );
}

export default Card;