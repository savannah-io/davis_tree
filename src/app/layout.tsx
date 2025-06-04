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
import ClientStylesApplier from "@/components/ClientStylesApplier";
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

  // Check if loading screen is enabled
  const isLoadingEnabled = loadingConfig.enabled !== false;

  // Define class names for HTML element (without server-side mobile detection)
  const htmlClasses = `${spaceGrotesk.variable} ${montserrat.variable} ${inter.variable} ${outfit.variable} scroll-smooth no-js`;

  return (
    <html lang="en" className={htmlClasses}>
      <head>{/* Minimal head content to avoid hydration issues */}</head>
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
              <ClientStylesApplier
                config={config}
                loadingConfig={loadingConfig}
              />
              {children}
            </CursorProvider>
          </ConfigProvider>
        </div>

        {/* Script for loading overlay and scroll position preservation */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          try {
            if (typeof window !== 'undefined') {
              // Scroll position preservation
              const SCROLL_KEY = 'davis_tree_scroll_position';
              
              // Save scroll position before page unloads
              function saveScrollPosition() {
                const scrollY = window.scrollY || window.pageYOffset;
                const scrollX = window.scrollX || window.pageXOffset;
                localStorage.setItem(SCROLL_KEY, JSON.stringify({ x: scrollX, y: scrollY }));
              }
              
              // Restore scroll position after page loads
              function restoreScrollPosition() {
                try {
                  const savedPosition = localStorage.getItem(SCROLL_KEY);
                  if (savedPosition) {
                    const position = JSON.parse(savedPosition);
                    // Use requestAnimationFrame to ensure DOM is ready
                    requestAnimationFrame(() => {
                      window.scrollTo(position.x, position.y);
                    });
                  }
                } catch (e) {
                  console.warn('Could not restore scroll position:', e);
                }
              }
              
              // Handle the loading overlay
              function hideLoadingOverlay() {
                if (document.readyState === 'complete') {
                  setTimeout(() => {
                    const overlay = document.getElementById('loading-overlay');
                    if (overlay) {
                      overlay.classList.add('hidden');
                      setTimeout(() => {
                        overlay.style.display = 'none';
                        // Restore scroll position after loading is complete
                        restoreScrollPosition();
                      }, 500);
                    } else {
                      // If no loading overlay, restore immediately
                      restoreScrollPosition();
                    }
                  }, 800);
                }
              }
              
              // Save scroll position on page unload
              window.addEventListener('beforeunload', saveScrollPosition);
              
              // Also save periodically while scrolling (debounced)
              let scrollTimeout;
              window.addEventListener('scroll', () => {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(saveScrollPosition, 100);
              });
              
              if (document.readyState === 'complete') {
                hideLoadingOverlay();
              } else {
                window.addEventListener('load', hideLoadingOverlay);
              }
              
              document.title = 'Davis Tree Service';
            }
          } catch (e) {
            console.error('Error in initialization script:', e);
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
