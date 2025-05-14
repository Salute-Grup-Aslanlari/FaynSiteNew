import React from "react"; 

export const metadata = {
          title: "Lara Fayn | Antalya",
          description: "Fayn Coctaails and more Lara hakkında detaylar...",
          keywords: "Fayn Coctaails and more Lara, Lara Plajı, Fayn"
        };
        
        export default function Layout({ children }) {
          return (
            <div className="container mx-auto p-4">
              {children}
            </div>
          );
        }
        