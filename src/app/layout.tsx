// app/layout.tsx
import "./main.css";
import type { Metadata } from "next";
import { Space_Grotesk, Montserrat } from "next/font/google";
import { Inter } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "@/context/ConfigContext";
import CursorProvider from "@/components/CursorProvider";
import ClientConfigApplier from "@/components/ClientConfigApplier";
import localConfig from "../config/localConfig";

// Custom cursor styles are now entirely in cursor.css which is imported in globals.css
// This avoids hydration issues with inline styles and quote escaping

// Get loading screen config
const loadingConfig = localConfig.loadingScreen || {
  enabled: true,
  backgroundColor: "#FFFFFF",
  logoImage: "TC-TITLE.png",
  logoWidth: 280,
  logoAlt: "Davis Tree Service",
  spinner: {
    enabled: true,
    color: "#66bf9b",
    size: 60,
    thickness: 4,
  },
  timing: {
    minimumDisplayTime: 800,
    fadeOutDuration: 500,
  },
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// Generate metadata from localConfig
export const generateMetadata = (): Metadata => {
  const browserConfig = localConfig.browser || {};
  const faviconFolder = browserConfig.faviconFolder || "favicon";

  return {
    title: browserConfig.title || "Davis Tree Service",
    description:
      localConfig.description || "Professional tree removal services",
    icons: {
      icon: [
        { url: `/${faviconFolder}/favicon.ico`, type: "image/x-icon" },
        {
          url: `/${faviconFolder}/favicon-32x32.png`,
          type: "image/png",
          sizes: "32x32",
        },
        {
          url: `/${faviconFolder}/favicon-16x16.png`,
          type: "image/png",
          sizes: "16x16",
        },
      ],
      shortcut: [
        { url: `/${faviconFolder}/favicon.ico`, type: "image/x-icon" },
      ],
      apple: [
        { url: `/${faviconFolder}/apple-touch-icon.png`, sizes: "180x180" },
      ],
      other: [{ rel: "manifest", url: `/${faviconFolder}/site.webmanifest` }],
    },
  };
};

// Generate viewport configuration
export const generateViewport = () => {
  const browserConfig = localConfig.browser || {};

  return {
    themeColor: browserConfig.themeColor || localConfig.themeColor || "#66bf9b",
  };
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use the localConfig directly
  const config = localConfig;

  // Extract theme color if available
  const themeColor = config.themeColor || "#a259e6"; // Default to purple
  const themeColorLight = `${themeColor}22`; // 13% opacity for backgrounds

  // Check if loading screen is enabled
  const isLoadingEnabled = loadingConfig.enabled !== false;

  // Define class names for HTML element (without server-side mobile detection)
  const htmlClasses = `${spaceGrotesk.variable} ${montserrat.variable} ${inter.variable} ${outfit.variable} scroll-smooth`;

  return (
    <html lang="en" className={htmlClasses}>
      <head>
        {/* Script for client-side detection to add data attribute */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Client-side mobile detection to update data attribute only
              (function() {
                try {
                  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
                  var isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
                  var isAndroid = /Android/i.test(userAgent);
                  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent) ||
                                (window.innerWidth < 663);
                  
                  if (isIOS || isAndroid || isMobile) {
                    document.documentElement.setAttribute('data-is-mobile', 'true');
                    document.documentElement.classList.add('mobile-device');
                  } else {
                    document.documentElement.setAttribute('data-is-mobile', 'false');
                    document.documentElement.classList.remove('mobile-device');
                  }
                  
                  // Add resize listener to update attribute based on width
                  window.addEventListener('resize', function() {
                    if (window.innerWidth < 663) {
                      document.documentElement.setAttribute('data-is-mobile', 'true');
                      document.documentElement.classList.add('mobile-device');
                    } else if (!isIOS && !isAndroid && !isMobile) {
                      document.documentElement.setAttribute('data-is-mobile', 'false');
                      document.documentElement.classList.remove('mobile-device');
                    }
                  });
                  
                  // Add no-js class to html element
                  document.documentElement.classList.add('no-js');
                } catch (e) {
                  console.error('Error in mobile detection script:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased bg-white font-sans" suppressHydrationWarning>
        {/* Loading overlay */}
        {isLoadingEnabled && (
          <div id="loading-overlay" className="loading-overlay">
            <div className="logo-container">
              <img
                src={`/images/${loadingConfig.logoImage}`}
                alt={loadingConfig.logoAlt}
              />
            </div>
            <div className="spinner"></div>
          </div>
        )}

        {/* Actual site content */}
        <div className="site-content">
          <ConfigProvider>
            <CursorProvider>
              <ClientConfigApplier />
              {children}
            </CursorProvider>
          </ConfigProvider>
        </div>

        {/* Add minimal script to apply theme colors and handle loading */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          try {
            if (typeof window !== 'undefined') {
              // We already added the no-js class in the head script
              // Now we can remove it when JS is available
              document.documentElement.classList.remove('no-js');
              
              // Set loading configuration CSS variables (using default values, will be overridden by React)
              document.documentElement.style.setProperty('--loading-bg-color', '#FFFFFF');
              document.documentElement.style.setProperty('--loading-fade-duration', '500ms');
              document.documentElement.style.setProperty('--spinner-size', '60px');
              document.documentElement.style.setProperty('--spinner-thickness', '4px');
              document.documentElement.style.setProperty('--spinner-color', '#66bf9b');
              document.documentElement.style.setProperty('--spinner-display', 'block');
              document.documentElement.style.setProperty('--logo-width', '280px');
              
              // Add a cursor fix script to ensure all elements have cursor: none on desktop
              function enforceCursorNone() {
                if (window.innerWidth >= 663 && !document.documentElement.classList.contains('mobile-device') && document.documentElement.getAttribute('data-is-mobile') !== 'true') {
                  // Force cursor: none on everything
                  const allElements = document.querySelectorAll('*');
                  allElements.forEach(el => {
                    if (el instanceof HTMLElement) {
                      el.style.setProperty('cursor', 'none', 'important');
                    }
                  });
                }
              }
              
              // Run it immediately
              enforceCursorNone();
              
              // And on periodic intervals to catch any dynamic elements
              setInterval(enforceCursorNone, 1000);
              
              // Handle the loading overlay
              function hideLoadingOverlay() {
                // Make sure DOM is fully loaded
                if (document.readyState === 'complete') {
                  // Wait a bit to ensure styles are applied
                  setTimeout(() => {
                    const overlay = document.getElementById('loading-overlay');
                    if (overlay) {
                      overlay.classList.add('hidden');
                      // Remove it completely after transition
                      setTimeout(() => {
                        overlay.style.display = 'none';
                      }, 500);
                    }
                  }, 800);
                }
              }
              
              // Listen for the load event to hide the overlay
              if (document.readyState === 'complete') {
                hideLoadingOverlay();
              } else {
                window.addEventListener('load', hideLoadingOverlay);
              }
              
              // Apply default theme colors (will be overridden by React components)
              document.documentElement.style.setProperty('--theme-color', '#66bf9b');
              document.documentElement.style.setProperty('--theme-color-light', '#66bf9b22');
              
              // Set default browser title
              document.title = 'Davis Tree Service';
            }
          } catch (e) {
            console.error('Error in initialization script:', e);
            // Hide the overlay even if there's an error
            const overlay = document.getElementById('loading-overlay');
            if (overlay) overlay.classList.add('hidden');
          }
        `,
          }}
        />
      </body>
    </html>
  );
}
