import React from "react"; 

export const metadata = {
          title: "Izmir Fashion Week | Fashion Event in Izmir",
          description: "Izmir Fashion Week moda etkinliği hakkında detaylar...",
          keywords: "Izmir Fashion Week, Fashion Show, Runway, Fashion Event, Designer Showcase"
        };
        
        export default function Layout({ children }) {
          return (
            <div className="container mx-auto p-4">
              {children}
            </div>
          );
        }
        