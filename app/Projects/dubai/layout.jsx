import React from "react"; 

export const metadata = {
          title: "Dubai Fashion Event | Izmir Fashion Week",
          description: "Dubai Fashion Event etkinliği hakkında detaylar...",
          keywords: "Dubai, Dubai Fashion, İzmir Fashion Week, Moda Etkinliği, Fashion Show",
        };
        
        export default function Layout({ children }) {
          return (
            <div className="container mx-auto p-4">
              {children}
            </div>
          );
        }
        