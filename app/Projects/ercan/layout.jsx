import React from "react"; 

export const metadata = {
          title: "Ercan | Izmir",
          description: "Ercan",
          keywords: "Ercan, İzmir Fashion Week, Moda Etkinliği, Fashion Show",
        };
        
        export default function ercanLayout({ children }) {
          return (
            <div className="container mx-auto p-4">
              {children}
            </div>
          );
        }
        