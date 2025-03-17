import React from "react"; 

export const metadata = {
          title: "Miss and Mr Model | Fashion Event",
          description: "Miss and Mr Model etkinliği hakkında detaylar...",
          keywords: "Fashion, Model, Miss and Mr Model, Event, Runway Show",
          author: "Miss and Mr Model",
          openGraph: {
            title: "Miss and Mr Model | Fashion Event",
            description: "Miss and Mr Model etkinliği hakkında detaylar...",
            url: "https://fayn.com.tr/miss-mr-model",
            type: "website",
            images: [
              {
                url: "/assets/beachdetail1.webp",
                width: 1200,
                height: 630,
                alt: "Miss and Mr Model Event",
              },
            ],
          },
          twitter: {
            card: "summary_large_image",
            title: "Miss and Mr Model | Fashion Event",
            description: "Miss and Mr Model etkinliği hakkında detaylar...",
            images: ["/assets/beachdetail1.webp"],
          },
        };
        
        export default function Layout({ children }) {
          return (
            <div className="container mx-auto p-4">
              {children}
            </div>
          );
        }
        