import React from "react"; 

export const metadata = {
          title: "Cocktails Masterclass | Izmir Fashion Week",
          description: "Coctail Masterclass etkinliği hakkında detaylar...",
          keywords: "Coctail Masterclass, Izmir Fashion Week, İzmir, Etkinlik, Kokteyl Atölyesi",
        };
        
        export default function Layout({ children }) {
          return (
            <div className="container mx-auto p-4">
              {children}
            </div>
          );
        }
        