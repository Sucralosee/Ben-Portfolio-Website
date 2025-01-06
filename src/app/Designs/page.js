"use client";
import { useEffect } from "react";
import Header from "@/components/Header/header";

import Menu from "@/components/Menu/menu";

export default function Designs() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="page-content hero-designs min-h-screen">
      {/* <Menu /> */}
      <Header title="Design" />
      
      {/* Container with responsive padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-64">
        {/* Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-100 p-4 rounded-lg">
          {/* Instagram posts */}
          <div className="w-full">
            <blockquote
              className="instagram-media rounded-lg shadow-lg"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/p/DDfl8m5TTdB/?utm_source=ig_embed&amp;utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                margin: 0,
                width: '100%',
                minWidth: '326px',
              }}
            >
              <p>
                <a
                  href="https://www.instagram.com/p/DDfl8m5TTdB/?utm_source=ig_embed&amp;utm_campaign=loading"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View this post on Instagram
                </a>
              </p>
            </blockquote>
          </div>

          <div className="w-full">
            <blockquote
              className="instagram-media rounded-lg shadow-lg"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/p/DDfmLyzz-Rx/?utm_source=ig_embed&amp;utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                margin: 0,
                width: '100%',
                minWidth: '326px',
              }}
            >
              <p>
                <a
                  href="https://www.instagram.com/p/DDfmLyzz-Rx/?utm_source=ig_embed&amp;utm_campaign=loading"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View this post on Instagram
                </a>
              </p>
            </blockquote>
          </div>

          <div className="w-full">
            <blockquote
              className="instagram-media rounded-lg shadow-lg"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/p/DDfmsIFTXQD/?utm_source=ig_embed&amp;utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                margin: 0,
                width: '100%',
                minWidth: '326px',
              }}
            >
              <p>
                <a
                  href="https://www.instagram.com/p/DDfmsIFTXQD/?utm_source=ig_embed&amp;utm_campaign=loading"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View this post on Instagram
                </a>
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}