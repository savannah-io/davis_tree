// Define the type for the localConfig object
// Last updated: 2025-05-13T06:08:39.227Z
//supapass:RemovalTreeDavis321!
// Link For Hex Colors: https://www.color-hex.com/

import { SiteConfig } from "./configFixTypes";

// Export the LocalConfig interface as an alias for backward compatibility
export type LocalConfig = SiteConfig;

const localConfig: LocalConfig = {
  /*=============================================
  =                  INFO BAR                   =
  =============================================*/
  // Info Bar
  showLogo: false,
  infoBar: {
    backgroundColor: "#53a584",
    phone: "(706)-296-3318",
    address: "ADDRESS CURRENTLY UNAVAILABLE",
    hours: "Monday - Friday: 9AM - 5PM",
    textColor: "#000000",
    message: "",
  },

  /*=============================================
  =                  NAVIGATION BAR                 =
  =============================================*/
  // Nav Bar
  navBar: {
    backgroundColor: "#000000S",
    textColor: "#000000",
    logo: "dt-logo.png",
    showLogo: true,
    // Title
    siteTitle: "Davis Tree Service",
    siteTitleGradientFrom: "#367658",
    siteTitleGradientTo: "#0c2217",
    // Schedule Button
    scheduleButtonText: "Schedule Now",
    scheduleButtonColor: "#387e62",
    // Active Tab Color
    activeTabColor: "#66bf9b",
    // Mobile Menu Hamburger Icon
    hamburgerIconColor: "#387e62",
    hamburgerIconHoverBgColor: "#66bf9b20",
    mobileMenuBgColor: "#ffffff",
    mobileNavTextColor: "#111827",
    mobileActiveTabBgColor: "#66bf9b20",
    mobileActiveTabTextColor: "#387e62",
    // Nav Links
    navLinks: [
      {
        path: "/",
        label: "Home",
      },
      {
        path: "/services",
        label: "Services",
      },
      {
        path: "/reviews",
        label: "Reviews",
      },
      {
        path: "/contact",
        label: "Contact",
      },
    ],
  },

  /*=============================================
  =                  CURSOR                    =
  =============================================*/
  // Custom Cursor
  cursor: {
    enabled: true, // Explicitly enabled for desktop
    mobileEnabled: false, // Disabled for mobile
    cursorImage: "blkcursor.png", // Cursor for background/non-interactive areas
    elementCursorImage: "blucursor.png", // Cursor for interactive elements (buttons, links, etc.)
  },

  /*=============================================
  =                LOADING SCREEN              =
  =============================================*/
  // Loading screen shown before site is fully loaded
  loadingScreen: {
    enabled: true, // Set to false to disable the loading screen
    backgroundColor: "#FFFFFF", // Background color of loading overlay
    logoImage: "dt-logo.png", // Logo displayed in the loading screen (from /public/images/)
    logoWidth: 280, // Width of the logo in pixels
    logoAlt: "Davis Tree Service", // Alt text for the logo

    // Spinner configuration
    spinner: {
      enabled: true, // Set to false to hide the spinner
      color: "#66bf9b", // Color of the spinner
      size: 60, // Size in pixels
      thickness: 4, // Border thickness in pixels
    },

    // Timing configuration
    timing: {
      minimumDisplayTime: 800, // Minimum time in ms to show the loading screen
      fadeOutDuration: 500, // Duration of the fade out animation in ms
    },
  },

  /*=============================================
  =             BROWSER & FAVICON              =
  =============================================*/
  // Browser tab title and favicon
  browser: {
    title: "Davis Tree Service - Professional Tree Care in Athens, GA",
    shortTitle: "Davis Tree", // Used in smaller browser tabs
    faviconFolder: "favicon", // Folder containing all favicon files (relative to /public)
    themeColor: "#66bf9b", // Browser theme color for mobile devices
  },

  /*=============================================
  =          LEGAL & BUSINESS INFO (Privacy/ Terms)             =
  =============================================*/
  // Business information and legal pages styling
  businessInfo: {
    // Primary business information
    name: "Davis Tree Service", // Used throughout the site
    llcType: "LLC", // Type of business entity (LLC, Inc., etc.)

    // Contact information used in privacy policy/terms
    contactEmail: "Jimmy@DavisTree.com",
    contactPhone: "(706) 296-3318",

    // Legal pages styling
    legalPages: {
      // Privacy Policy settings
      privacyPolicy: {
        headerColor: "#387e62", // Section headers color
        linkColor: "#66bf9b", // Links within privacy policy
        backgroundColor: "#ffffff", // Background color
        textColor: "#1f1f1f", // Text color
        borderColor: "#e5e7eb", // Border color
        iconColor: "#66bf9b", // Icons in the privacy policy
      },

      // Terms of Service settings
      termsOfService: {
        headerColor: "#387e62", // Section headers color
        linkColor: "#66bf9b", // Links within terms
        backgroundColor: "#ffffff", // Background color
        textColor: "#1f1f1f", // Text color
        borderColor: "#e5e7eb", // Border color
        disclaimerBgColor: "#f9fafb", // Background for disclaimer sections
        disclaimerTextColor: "#374151", // Text color for disclaimers
      },
    },
  },

  /*=============================================
  =                    PAGES                    =
  =============================================*/

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  pages: {
    /*=======================================================================================================================================
    =                 HOME PAGE                  =                  HOME PAGE                     =                  HOME PAGE
    =======================================================================================================================================*/
    Home: {
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      /*==========================================================================================
        =                 Hero Section            =                  Hero Section
        ==========================================================================================*/

      // Badge
      badge: "Tree Removal Service",
      heroBadgeColor: "#f5d6d61e",
      heroBadgeTitleColor: "#000000",

      // Title
      title: "Welcome to Davis Tree Removal ",
      heroTitleColor: "#000000",

      // Location
      location: "",
      heroLocationColor: "#363636",

      // Subtitle 1
      content: "",
      heroContentColor: "#ffffff",

      // Subtitle 2
      subtitle2:
        "No job is too big or too small—our team is equipped to handle it all!",
      heroSubtitleColor: "#ffffff",

      // Hero Image
      heroImage: "davis1.png",

      // Hero Gradients
      heroGradientTop: "#66bf9b",
      heroGradientBottom: "#66bf9b",

      // Hero Schedule Button
      scheduleButtonText: "Schedule Now",
      heroScheduleButtonColor: "#3d725d",
      heroScheduleButtonTextColor: "#000000",

      // Hero Contact Button
      contactButtonText: "Contact Us",
      heroContactButtonColor: "#ff000000",
      heroContactButtonTextColor: "#ffffff",
      heroContactButtonBorderColor: "#ffffff",

      // Hero Box 1
      heroCard1Text: "*Free Estimates",
      heroBox1BgColor: "#66bf9b1f",
      heroBox1TextColor: "#ffffff",
      heroBox1BorderColor: "#66bf9b",
      heroBox1IconBgColor: "#7fd1b6",
      heroBox1IconColor: "#000000",

      // Hero Box 2*ENTER_TEXT*
      heroCard2Text: "Licensed",
      heroBox2BgColor: "#66bf9b1f",
      heroBox2TextColor: "#ffffff",
      heroBox2BorderColor: "#66bf9b",
      heroBox2IconBgColor: "#7fd1b6",
      heroBox2IconColor: "#000000",

      // Hero Box 3
      heroCard3Text: "Fast Removal",
      heroBox3BgColor: "#66bf9b1f",
      heroBox3TextColor: "#ffffff",
      heroBox3BorderColor: "#66bf9b",
      heroBox3IconBgColor: "#7fd1b6",
      heroBox3IconColor: "#000000",

      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      /*==========================================================================================
        =                 Schedule Section            =                  Schedule Section
        ==========================================================================================*/

      scheduleSection: {
        // Section Header
        scheduleSectionTitle: "REQUEST A FREE ESTIMATE BELOW",
        scheduleSectionTitleColor: "#53a584",
        scheduleSectionBadgeColor: "#f5d6d636",
        scheduleSectionBadgeTextColor: "#387e62",

        // Title and Content
        bookingTitle: "BOOK YOUR SERVICE",
        bookingTitleColor: "#387e62",
        scheduleTitlePart1: "Get Your ",
        scheduleTitlePart1Color: "#3d725d",
        scheduleTitlePart2: "Free Quote Now",
        scheduleTitlePart2Color: "#3d725d",

        // Icon
        scheduleIconBgColor: "#5bab8b",
        scheduleIconColor: "#ffffff",
        scheduleIconImage: "clock.png", // Custom icon image from the public/images directory

        // Address
        scheduleAddress: "*ENTER_ADDRESS_HERE*",
        scheduleAddressColor: "#ffffff00",
        scheduleContent:
          "Ready to tackle that tree problem? We'll visit your property to assess the job and provide a transparent quote.",
        scheduleContentColor: "#6b7280",

        // Calendar UI Elements
        calendarRippleStartColor: "#9ddac0",
        calendarRippleEndColor: "#a3d8c3",
        calendarRippleOpacity: 0.15,
        calendarBgColor: "#ffffff",
        calendarBorderColor: "#99dac0",
        calendarAccentColor: "#7dae99",

        // Calendar Content Configuration
        calendarMonth: "AUGUST",
        calendarYear: "2024",
        calendarEmptyDays: "3", // Number of empty days before the first day of the month
        calendarDaysInMonth: "31", // Number of days in the displayed month
        calendarSelectedDay: "15", // Which day should be selected/highlighted
        calendarAvailableDays: "5,8,12,15,19,22,26,29", // Comma-separated list of available days
        calendarTimeSlotsText: "3 Time Slots Available", // Text shown in time slot section

        // Booking Button
        tapToBookText: "Tap to Book",
        tapToBookTextColor: "#000000",
        calendlyUrl: "https://calendly.com/[*ENTER_CALENDLY_URL*]",

        // Schedule Section Gradients
        scheduleGradientTop: "#ceffec",
        scheduleGradientBottom: "#ffffff",
      },

      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      /*==========================================================================================
        =                 Guarantee Section            =                  Guarantee Section
        ==========================================================================================*/

      guaranteeSection: {
        // Section Badge
        guaranteeTitle: "Our Guarantee",
        guaranteeBadgeColor: "#c9f5c9ec",
        guaranteeBadgeTextColor: "#000000",

        // Guarantee Icon 1
        guaranteeIcon1: "clock.png",
        guaranteeTitle1: "Lifetime Warranty",
        guaranteeSubtitle1: "On All Services",
        guaranteeIconBgColor1: "#ffffff",
        guaranteeIconBorderColor1: "#e0e7ff",
        guaranteeTitleTextColor1: "#111827",
        guaranteeSubtitleTextColor1: "#6b7280",

        // Guarantee Icon 2
        guaranteeIcon2: "clock.png",
        guaranteeTitle2: "Free Estimates",
        guaranteeSubtitle2: "Quick & Accurate",
        guaranteeIconBgColor2: "#ffffff",
        guaranteeIconBorderColor2: "#e0e7ff",
        guaranteeTitleTextColor2: "#111827",
        guaranteeSubtitleTextColor2: "#6b7280",

        // Center Logo
        guaranteeCenterLogo: "clock.png",
        guaranteeCenterBgColor: "#ffffff",
        guaranteeCenterBorderColor: "#e0e7ff",

        // Guarantee Icon 4
        guaranteeIcon4: "clock.png",
        guaranteeTitle4: "Insurance Approved",
        guaranteeSubtitle4: "All Major & Minor Companies",
        guaranteeIconBgColor4: "#ffffff",
        guaranteeIconBorderColor4: "#e0e7ff",
        guaranteeTitleTextColor4: "#111827",
        guaranteeSubtitleTextColor4: "#6b7280",

        // Guarantee Icon 5
        guaranteeIcon5: "clock.png",
        guaranteeTitle5: "Towing Service",
        guaranteeSubtitle5: "24/7 Available",
        guaranteeIconBgColor5: "#ffffff",
        guaranteeIconBorderColor5: "#e0e7ff",
        guaranteeTitleTextColor5: "#111827",
        guaranteeSubtitleTextColor5: "#6b7280",

        // Default Card Colors (Legacy)
        guaranteeIconBgColor: "#ffffff",
        guaranteeIconBorderColor: "#e0e7ff",
        guaranteeTitleTextColor: "#111827",
        guaranteeSubtitleTextColor: "#6b7280",

        // Guarantee Section Background
        guaranteeBgGradientTop: "#ffffff",
        guaranteeBgGradientBottom: "#f0f9ff",

        // Decorative Elements
        guaranteeDecorativeElements: {
          // Top left gradient circle
          topCircleFromColor: "#c9f5c9ec", // Light blue color
          topCircleToColor: "#99dac0", // Slightly darker blue
          topCircleOpacity: 0.3, // 30% opacity

          // Bottom right gradient circle
          bottomCircleFromColor: "#c9f5c9ec", // Light blue color
          bottomCircleToColor: "#99dac0", // Slightly lighter blue
          bottomCircleOpacity: 0.3, // 30% opacity

          // Center radial gradient
          centerRadialColor: "#ffffff", // White color for the radial gradient
          centerRadialOpacity: 0.8, // 80% opacity

          // Item Background Gradients (these control the background blur effects behind each icon)
          item1BgFromColor: "#c9f5c9", // From color for Lifetime Warranty item background
          item1BgViaColor: "#99dac0", // Via color for Lifetime Warranty item background
          item1BgToColor: "#c9f5c9", // To color for Lifetime Warranty item background

          item2BgFromColor: "#c9f5c9", // From color for Free Estimates item background
          item2BgViaColor: "#99dac0", // Via color for Free Estimates item background
          item2BgToColor: "#c9f5c9", // To color for Free Estimates item background

          centerBgFromColor: "#c9f5c9", // From color for center PPG logo background
          centerBgViaColor: "#99dac0", // Via color for center PPG logo background
          centerBgToColor: "#c9f5c9", // To color for center PPG logo background

          item4BgFromColor: "#c9f5c9", // From color for Insurance Approved item background
          item4BgViaColor: "#99dac0", // Via color for Insurance Approved item background
          item4BgToColor: "#c9f5c9", // To color for Insurance Approved item background

          item5BgFromColor: "#c9f5c9", // From color for Towing Service item background
          item5BgViaColor: "#99dac0", // Via color for Towing Service item background
          item5BgToColor: "#c9f5c9", // To color for Towing Service item background

          // Item Hover Effects (these control the gradient effects that appear on hover)
          itemHoverFromColor: "#c9f5c9", // From color for item hover effect
          itemHoverToColor: "#99dac0", // To color for item hover effect
        },
      },

      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      /*==========================================================================================
        =                 Services Section            =                  Services Section
        ==========================================================================================*/

      servicesSection: {
        // Section Header
        // Badge
        servicesBadgeText: "Our Expertise",
        servicesBadgeColor: "#c1f3c56b",
        servicesBadgeTextColor: "#387e62",

        servicesTitle: "Comprehensive Tree ",
        servicesHighlightText: "Care Services",
        servicesTitleColor: "#111827",
        servicesHighlightColor: "#246043",
        servicesHighlightUnderlineColor: "#66bf9b42",

        // Services Description
        servicesDescription:
          "Davis Tree offers a full range of services to keep your trees healthy and your property safe. Our prices are transparent, and our work is unmatched.",
        servicesDescriptionColor: "#6b7280",

        // Services Button
        servicesButtonText: "Explore Our Services",
        servicesButtonUrl: "/services",
        servicesButtonStartColor: "#387e62",
        servicesButtonEndColor: "#387e62",
        servicesButtonTextColor: "#ffffff",

        // Service Reel Configuration

        serviceReelCardBgColor: "#ffffff",
        serviceReelCardBorderColor: "#f3f4f680",
        serviceReelCardHoverShadowColor: "rgba(0, 0, 0, 0.08)",
        // Service Reel Icon
        serviceReelIconColor: "#387e62",
        // Service Reel Title
        serviceReelTitleColor: "#111827",
        serviceReelTitleHoverColor: "#387e62",
        // Service Reel Description
        serviceReelDescriptionColor: "#6b7280",
        serviceReelDescriptionHoverColor: "#374151",
        // Service Reel Mobile Indicator
        serviceReelMobileIndicatorColor: "#387e62",
        // Service Reel Mobile Inactive Color
        serviceReelMobileInactiveColor: "#e0e0e0",
        // Service Reel Gradient
        serviceReelGradientFromColor: "#ffffff",
        serviceReelGradientToColor: "#ffffff",
      },

      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      /*==========================================================================================
        =                 Reviews Section            =                  Reviews Section
        ==========================================================================================*/
      reviewsSection: {
        // Section Header
        // Badge
        reviewsBadgeText: "Verified Google Reviews",
        reviewsBadgeColor: "rgba(255, 255, 255, 0.1)",
        reviewsBadgeTextColor: "#ffffff",
        // Title
        reviewsTitle: "What Our Customers",
        reviewsHighlight: "Are Saying",
        reviewsTitleColor: "#ffffff",
        reviewsHighlightColor: "#387e62",
        // Subtitle
        reviewsSubtitle:
          "See what our satisfied customers have to say about our service.",
        reviewsSubtitleColor: "#e0f2fe",

        // Reviews Cards
        reviewCardBgColor: "rgba(255, 255, 255, 0.1)",
        reviewCardBorderColor: "rgba(255, 255, 255, 0.2)",
        reviewCardHoverBorderColor: "rgba(255, 255, 255, 0.3)",
        reviewTextColor: "rgba(255, 255, 255, 0.9)",
        reviewAuthorColor: "#ffffff",
        reviewVerifiedColor: "#ffffff",
        reviewStarColor: "#fbbf24",

        // View All Button
        viewAllButtonText: "View All Reviews",
        viewAllButtonBgColor: "rgba(255, 255, 255, 0.1)",
        viewAllButtonHoverBgColor: "rgba(255, 255, 255, 0.2)",
        viewAllButtonTextColor: "#ffffff",
        viewAllButtonBorderColor: "rgba(255, 255, 255, 0.2)",

        // Reviews Section Background
        reviewsBgStartColor: "#7dd0ae",
        reviewsBgMiddleColor: "#66bf9b",
        reviewsBgEndColor: "#53a584",

        // Default Reviews for when no reviews are loaded
        defaultReviews: [
          {
            text: "Absolutely phenomenal work! My car looks even better than before the accident. The attention to detail and craftsmanship is top-notch. I highly recommend their services.",
            author: "Jennifer R.",
            rating: 5,
          },
          {
            text: "Fast, professional service from start to finish. They handled my insurance claim seamlessly and kept me updated throughout the entire repair process. Couldn't be happier with the results!",
            author: "Michael S.",
            rating: 5,
          },
          {
            text: "The team truly went above and beyond my expectations. Not only was my car repaired perfectly, but they also detailed it before returning it to me. Excellent customer service and quality work.",
            author: "David W.",
            rating: 5,
          },
        ],
      },
    },

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    /*=======================================================================================================================================
    =                 Services Page                  =                  Services Page                     =                  Services Page
    =======================================================================================================================================*/
    Services: {
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      /*==========================================================================================
        =                 Title Section            =                  Title Section
        ==========================================================================================*/
      // Content

      //Title
      title: "Our Services",
      heroTitleColor: "#ffffff",

      //Subtitle
      subtitle:
        "Explore our services below and let us help you cultivate a healthier, greener landscape.",
      heroSubtitleColor: "#ffffff",

      // Badge
      badge: "Certified Arborists",
      heroBadgeBgColor: "#06ac143a",
      heroBadgeTextColor: "#ffffff",
      heroBadgeIconColor: "#60a5fa",
      heroBadgeCheckmarkColor: "#4ade80",
      heroBadgeMedalIconColor: "#66bf9b",

      // Hero Statistics Cards
      card1Title: "Years Experience",
      card1Value: "20",
      card2Title: "Trees Removed",
      card2Value: "400+",

      heroStatsCardBgColor: "#10500a4f",
      heroStatsCardTextColor: "#ffffff",
      heroStatsCardValueColor: "#ffffff",
      heroStatsCardIconColor: "#60fa7a",

      // Hero Image & Colors
      heroImage: "/images/service-hero.jpg",
      heroBgGradientFrom: "#367658", //Left
      heroBgGradientVia: "#11492d", //Middle
      heroBgGradientTo: "#0c2217", //Right
      //Blurred Circle
      heroBlurredCircle1Color: "#7dd0ae",
      heroBlurredCircle2Color: "#53a584",
      heroPatternColor: "#ffffff",
      //Light Beam
      heroLightBeam1Color: "#53a584",
      heroLightBeam2Color: "#7dd0ae",

      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      /*==========================================================================================
        =                 Service Categories            =             Service Categories
        ==========================================================================================*/
      // Section Background
      serviceCategoriesBgColor: "#ffffff", // Legacy property maintained for backward compatibility
      serviceCategoriesGradientOpacity: 0.7,
      serviceCategoriesBgColorFrom: "#ffffff",
      serviceCategoriesBgColorTo: "#ffffff",

      // Card Elements
      serviceCategoryCardTitleColor: "#ffffff",
      serviceCategoryCardDescriptionColor: "#0342c2",

      // Card Border
      serviceCategoryCardBorderColor: "#e5e7eb",

      // Card Button
      serviceCategoryCardButtonColor: "#ffffff",
      serviceCategoryCardButtonBgColor: "rgba(255, 255, 255, 0.1)",
      serviceCategoryCardButtonHoverBgColor: "#2ba99f",
      serviceCategoryCardButtonHoverColor: "#ffffff",

      // Service Categories Cards
      serviceCategories: [
        {
          // Exterior Card 1
          id: "collision",
          title: "Emergency and Health Services",
          titleColor: "#ffffff",

          description:
            "From storm damage to disease prevention, we're here to protect your trees and property 24/7.",
          descriptionColor: "#ffffff",

          bgImage: "davis2.png",
          color: "#53a584-#53a584",
          iconColor: "#000000",
          borderColor: "#53a584",
          icon: "ExclamationTriangleIcon",

          // Services in Category 1
          services: [
            {
              title: "Emergency Tree Services",
              description:
                "Immediate response to storm-damaged or fallen trees, including hazardous limbs threatening structures.",
              icon: "WrenchScrewdriverIcon",
              iconColor: "#3b82f6",
              titleColor: "#111827",
              descriptionColor: "#6b7280",
              bgColor: "#f9fafb",
              borderColor: "#e5e7eb",
            },
            {
              title: "Tree Health Assessments & Treatment",
              description:
                "Certified arborists diagnose pests, diseases, or nutrient issues and provide tailored treatments like insect control, fertilization, or soil care to restore tree health.",
              icon: "CogIcon",
              iconColor: "#3b82f6",
              titleColor: "#111827",
              descriptionColor: "#6b7280",
              bgColor: "#f9fafb",
              borderColor: "#e5e7eb",
            },
            {
              title: "Cabling & Bracing",
              description:
                "We install discreet cables and braces to stabilize weak or overextended trees, preventing collapse and extending their lifespan without removal.",
              icon: "PaintBrushIcon",
              iconColor: "#3b82f6",
              titleColor: "#111827",
              descriptionColor: "#6b7280",
              bgColor: "#f9fafb",
              borderColor: "#e5e7eb",
            },
            {
              title: "Tree Risk Assessments",
              description:
                "Proactive inspections to identify potential hazards, such as weak branches or unstable roots, before they become costly problems.",
              icon: "WrenchIcon",
              iconColor: "#3b82f6",
              titleColor: "#111827",
              descriptionColor: "#6b7280",
              bgColor: "#f9fafb",
              borderColor: "#e5e7eb",
            },
          ],
        },
        {
          // Exterior Card 2
          id: "cosmetic",
          title: "Tree Maintenance",
          titleColor: "#ffffff",
          description:
            "Our Tree Maintenance services focus on enhancing the health, safety, and aesthetics of your trees.",
          descriptionColor: "#ffffff",
          bgImage: "davis3.png",
          color: "#53a584-#53a584",
          iconColor: "#000000",
          borderColor: "#53a584",
          icon: "SparklesIcon",

          // Services in Category 2
          services: [
            {
              title: "Tree Trimming & Pruning",
              description:
                "Expert trimming and pruning to shape trees, remove dead or overgrown branches, and promote healthy growth. We tailor our cuts to improve air circulation, sunlight exposure, and structural integrity, enhancing both beauty and safety.",
              icon: "SparklesIcon",
              iconColor: "#3bf63b",
              titleColor: "#111827",
              descriptionColor: "#6b7280",
              bgColor: "#f9fafb",
              borderColor: "#e5e7eb",
            },
            {
              title: "Crown Thinning & Reduction",
              description:
                "Selective removal of inner branches to reduce weight, improve light penetration, and lower wind resistance. This service is ideal for mature trees or those vulnerable to storm damage, preserving their strength and form.",
              icon: "ShieldCheckIcon",
              iconColor: "#3b82f6",
              titleColor: "#111827",
              descriptionColor: "#6b7280",
              bgColor: "#f9fafb",
              borderColor: "#e5e7eb",
            },
            {
              title: "Fruit Tree Pruning",
              description:
                "Specialized pruning for fruit trees to increase yield, improve fruit quality, and maintain manageable sizes. We time our cuts to align with seasonal growth cycles, ensuring your orchard produces abundant, healthy fruit.",
              icon: "WrenchScrewdriverIcon",
              iconColor: "#3b82f6",
              titleColor: "#111827",
              descriptionColor: "#6b7280",
              bgColor: "#f9fafb",
              borderColor: "#e5e7eb",
            },
            {
              title: "Seasonal Tree Care",
              description:
                "Ongoing maintenance to prepare trees for seasonal changes, including winter protection, spring growth encouragement, and fall cleanup. ",
              icon: "CogIcon",
              iconColor: "#3b82f6",
              titleColor: "#111827",
              descriptionColor: "#6b7280",
              bgColor: "#f9fafb",
              borderColor: "#e5e7eb",
            },
          ],
        },
        {
          // Exterior Card 3
          id: "Tree Removal & Cleanup",
          title: "Tree Removal & Cleanup",
          titleColor: "#ffffff",
          description:
            "Our Tree Removal & Cleanup services provide fast, thorough solutions for removing hazardous trees, stumps, or debris.",
          bgImage: "davis4.png",
          color: "#53a584-#53a584",
          iconColor: "#000000",
          borderColor: "#53a584",
          descriptionColor: "#f3f4f6",
          icon: "CogIcon",

          // Services in Category 3
          services: [
            {
              title: "Tree Removal & Cleanup",
              description:
                "Our Tree Removal & Cleanup services tackle unwanted trees, stumps, and debris with precision and care. We ensure your property is left clean and ready for its next use, delivering efficient results without breaking the bank.",
              icon: "BeakerIcon",
              iconColor: "#3b82f6",
              titleColor: "#111827",
              descriptionColor: "#6b7280",
              bgColor: "#f9fafb",
              borderColor: "#e5e7eb",
            },
            {
              title: "Tree Removal",
              description:
                "Safe removal of dead, diseased, or hazardous trees that threaten your property or safety. Using advanced rigging and cutting techniques, we dismantle trees in confined spaces, protecting your home and landscape.",
              icon: "ExclamationTriangleIcon",
              iconColor: "#3b82f6",
              titleColor: "#111827",
              descriptionColor: "#6b7280",
              bgColor: "#f9fafb",
              borderColor: "#e5e7eb",
            },
            {
              title: "Stump Grinding & Removal",
              description: "Specialized fleet maintenance and repair",
              icon: "TruckIcon",
              iconColor: "#3b82f6",
              titleColor: "#000000",
              descriptionColor: "#6b7280",
              bgColor: "#f9fafb",
              borderColor: "#e5e7eb",
            },
            {
              title: "Seasonal Tree Care",
              description:
                "Ongoing maintenance tailored to seasonal needs, including leaf thinning, deadwood removal, and growth monitoring.",
              icon: "WrenchIcon",
              iconColor: "#3b82f6",
              titleColor: "#111827",
              descriptionColor: "#6b7280",
              bgColor: "#f9fafb",
              borderColor: "#e5e7eb",
            },
          ],
        },
      ],

      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      /*==========================================================================================
        =                 Call-to-Action            =             Call-to-Action
        ==========================================================================================*/

      // CTA Background & Colors
      ctaBgGradientFrom: "#7dd0ae", //Top Left
      ctaBgGradientVia: "#53a584", // Middle Center
      ctaBgGradientTo: "#387e62", //Bottom Right

      // CTA Pattern Color
      ctaBgPatternColor: "#ffffff60", //Pattern Color

      // CTA Card BG
      ctaCardBgColor: "#ffffff2f", //Card Background Color
      ctaCardBorderColor: "#961111S", //Card Border Color

      // CTA Buttons

      // Schedule Button
      scheduleButtonText: "Schedule Now",
      scheduleButtonBgColor: "#7dd0ae",
      scheduleButtonTextColor: "#000000",
      scheduleButtonHoverBgColor: "#ffffff", //may not apply

      // Call Button
      callButtonText: "Call Us Now",
      callButtonBgColor: "#ffffff",
      callButtonTextColor: "#387e62",
      callButtonHoverBgColor: "#7dd0ae", //may not apply

      // CTA Content

      // CTA Title
      ctaTitle: "Ready to free estimate?",
      ctaTitleColor: "#ffffff", //Title Color

      // CTA Description
      ctaDescription:
        "Schedule your  today and experience the difference expert tree care makes.",
      ctaDescriptionColor: "#ffffff", //Description Color
    },
    Reviews: {
      /*=======================================================================================================================================
      =                 Reviews Page                  =                  Reviews Page                     =                  Reviews Page
      =======================================================================================================================================*/
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      /*==========================================================================================
        =                 Title Section            =                  Title Section
        ==========================================================================================*/
      // Content

      //Title
      title: "Community Reviews",
      heroTitleColor: "#ffffff",

      //Subtitle
      subtitle:
        "We're proud of the work we do and the trust our customers place in us. Here's what they have to say about their experience with our services.",
      heroSubtitleColor: "#ffffff",

      // Badge
      badge: "Verified Google Reviews",
      heroBadgeBgColor: "#ffffff10",
      heroBadgeTextColor: "#ffffff",
      heroBadgeIconColor: "#60a5fa",
      heroBadgeCheckmarkColor: "#7dd0ae",
      heroBadgeBorderColor: "#7dd0ae",

      // Stats Cards
      statsCard1Title: "Verified Reviews",
      statsCard1IconColor: "#60a5fa",
      statsCard1BlurGradientFrom: "#4f46e5",
      statsCard1BlurGradientTo: "#60a5fa",

      statsCard2Title: "Average Rating",
      statsCard2IconColor: "#facc15",
      statsCard2BlurGradientFrom: "#60a5fa",
      statsCard2BlurGradientTo: "#4f46e5",

      statsCardBgColor: "#ffffff10",
      statsCardTextColor: "#f3f4f6",
      statsCardTitleColor: "#ffffff",
      statsCardBorderColor: "#ffffff20",
      statsCardHoverBorderColor: "#ffffff30",

      // Hero Image & Colors
      heroImage: "/images/reviews-hero.jpg",
      heroBgGradientFrom: "#367658", //Top Left
      heroBgGradientVia: "#11492d", //Middle
      heroBgGradientTo: "#0c2217", //Bottom Right

      //Blurred Circle
      heroBlurredCircle1Color: "#3b82f6",
      heroBlurredCircle2Color: "#60a5fa",
      heroBlurredCircle3Color: "#93c5fd",

      //Light Beam
      heroLightBeam1Color: "#60a5fa",
      heroLightBeam2Color: "#93c5fd",

      //Pattern
      heroPatternColor: "#ffffff",
      heroPatternOpacity: 0.1,

      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      /*==========================================================================================
        =                 Reviews Section            =             Reviews Section
        ==========================================================================================*/

      // Section Background
      reviewsSectionBgColor: "#7dd0ad2a",

      // Review Cards
      reviewCardBgColor: "#ffffff",
      reviewCardHoverShadow: "lg",
      reviewCardBorderColor: "#e5e7eb",

      reviewCardTextColor: "#4b5563",
      reviewCardAuthorNameColor: "#111827",
      reviewCardSourceColor: "#6b7280",

      reviewCardStarColor: "#facc15",
      reviewCardStarEmptyColor: "#d1d5db",

      reviewCardShowMoreColor: "#0f3622",
      reviewCardShowMoreHoverColor: "#367658",

      reviewCardGradientColor: "#0ea5e9",

      // Review Avatar
      reviewAvatarColors: [
        "#3b82f6", // blue
        "#10b981", // green
        "#f59e0b", // yellow
        "#ef4444", // red
        "#8b5cf6", // purple
        "#ec4899", // pink
        "#6366f1", // indigo
        "#14b8a6", // teal
      ],
      reviewAvatarTextColor: "#ffffff", // Avatar Inital Color

      // Pagination
      paginationButtonBgColor: "#2563eb",
      paginationButtonTextColor: "#ffffff",
      paginationButtonDisabledOpacity: 0.5,
      paginationTextColor: "#4b5563",

      // "Share Your Experience" Card
      shareExperienceBgColor: "#ffffff",
      shareExperienceBorderColor: "#e5e7eb",
      shareExperienceShadow: "sm",
      shareExperienceHoverShadow: "md",

      shareExperienceTitleColor: "#111827",
      shareExperienceSubtitleColor: "#4b5563",

      shareExperienceGradientColor: "#288d4a",
      shareExperienceGradientOpacity: 0.5,

      // Share Button
      shareButtonBgColor: "#0f3622",
      shareButtonTextColor: "#ffffff",
      shareButtonHoverBgColor: "#367658",
      shareButtonShadow: "sm",
      shareButtonHoverShadow: "md",

      shareButtonText: "Write a Review on Google",
      shareButtonLink: "https://g.co/kgs/NVDcU7f",
      shareExperienceTitle: "Share Your Experience",
      shareExperienceSubtitle: "Help others by sharing your experience with us",

      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      /*==========================================================================================
        =                 Call-to-Action            =             Call-to-Action
        ==========================================================================================*/

      // NOTE: The CTA section on the Reviews page actually uses the Services page CTA configuration
      // for consistency across the site. The configuration below is not used for the Reviews page.
      // To change the CTA on both pages, modify the CTA section in the Services config.

      // CTA Background & Colors
      ctaBgGradientFrom: "#1e40af", //Top Left
      ctaBgGradientVia: "#3b82f6", //Middle
      ctaBgGradientTo: "#2563eb", //Bottom Right

      // CTA Pattern
      ctaPatternColor: "#ffffff",
      ctaPatternOpacity: 0.05,

      // CTA Card
      ctaCardBgColor: "#ffffff0d",
      ctaCardBlurAmount: "2px",

      // CTA Buttons

      // Schedule Button
      ctaScheduleButtonText: "Schedule Now",
      ctaScheduleButtonBgColor: "#ffffff",
      ctaScheduleButtonTextColor: "#2563eb",
      ctaScheduleButtonHoverBgColor: "#f3f4f6",

      // Call Button
      ctaCallButtonText: "Call Us Now",
      ctaCallButtonBgColor: "#2563eb",
      ctaCallButtonTextColor: "#ffffff",
      ctaCallButtonHoverBgColor: "#1d4ed8",

      // CTA Content
      ctaTitle: "Ready to Get Your Car Back to Perfect?",
      ctaTitleColor: "#ffffff",

      ctaDescription:
        "Schedule your appointment today and experience the difference expert auto body repair makes.",
      ctaDescriptionColor: "#93c5fd",
    },
    Careers: {
      /*=======================================================================================================================================
      =                 Careers Page                  =                  Careers Page                     =                  Careers Page
      =======================================================================================================================================*/
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      /*==========================================================================================
        =                 Hero Section            =                  Hero Section
        ==========================================================================================*/
      // Content

      // Header Position
      heroPaddingTop: "150px", // Controls the top padding of the hero section (use pixel values)

      //Hero Background Colors
      heroBgGradientFrom: "#387e62",
      heroBgGradientVia: "#0c2217",
      heroBgGradientTo: "#246043",

      //Blurred Circle Colors
      heroBlurredCircle1Color: "#098633",
      heroBlurredCircle1Opacity: 0.2,
      heroBlurredCircle2Color: "#1caa3a",
      heroBlurredCircle2Opacity: 0.2,

      //Pattern
      heroPatternColor: "#ffffff",
      heroPatternOpacity: 0.3,

      //Wave Separator
      waveSeparatorColor: "#0c221781", // Color of the wave
      waveSeparatorHeight: "250px", // Height of the wave SVG

      //App Form BG
      applicationSectionBgColor: "#ffffff", // Background color behind the application form
      applicationFormShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)", // Shadow for the application form

      //Badge
      hireBadgeText: "We're hiring passionate professionals",
      hireBadgeBgColor: "#ffffff10",
      hireBadgeBorderColor: "#ffffff20",
      hireBadgeTextColor: "#ffffff",

      //Title
      hireTitle: "Join Our Team",
      hireTitleColor: "#ffffff",
      hireTitleHighlightColor: "#ffffff",
      hireTitleGlowColor: "#ffffff",
      hireTitleGlowOpacity: 0.3,

      //Subtitle
      hireSubtitle:
        "Build your career with Davis Tree Service. We're looking for talented individuals who are passionate about tree care and customer service.",
      hireSubtitleColor: "#ffffff",
      hireSubtitleOpacity: 0.9,

      /*==========================================================================================
        =                 Application Form            =             Application Form
        ==========================================================================================*/

      // Form Header
      formHeaderBgFrom: "#66bf9b",
      formHeaderBgTo: "#387e62",
      formHeaderPatternColor: "#ffffff",
      formHeaderPatternOpacity: 0.15,
      formHeaderPatternSize: "16px",
      formHeaderTitleText: "Application Form",
      formHeaderTitleColor: "#ffffff",
      formHeaderSubtitleText:
        "Fill out the form below to apply for a position with our team",
      formHeaderSubtitleColor: "#ffffff",
      formHeaderSubtitleOpacity: 0.8,

      // Form Sections
      formSectionBgColor: "#f9fafb",
      formSectionBorderColor: "#e5e7eb",
      formSectionTitleColor: "#126e40",
      formSectionHoverShadow: "md",

      // Form Inputs
      formInputBgColor: "#ffffff",
      formInputBorderColor: "#d1d5db",
      formInputTextColor: "#111827",
      formInputFocusRingColor: "#4bf63b",
      formInputFocusBorderColor: "#126e40",
      formInputBorderRadius: "xl",
      formInputPadding: "px-4 py-3",

      // Form Labels
      formLabelColor: "#374151",
      formErrorColor: "#ef4444",

      // Position Options
      positionOptions: [
        "Tree Removal Specialist",
        "Arborist",
        "Groundskeeper",
        "Stump Grinder",
        "Customer Service",
        "Other",
      ],

      // Form Buttons
      addReferenceBtnBgColor: "#126e40",
      addReferenceBtnHoverBgColor: "#0d5730",
      addReferenceBtnTextColor: "#ffffff",

      removeReferenceBtnColor: "#ef4444",
      removeReferenceBtnHoverColor: "#dc2626",

      // Submit Button
      submitButtonBgFrom: "#126e40",
      submitButtonBgTo: "#0c2217",
      submitButtonTextColor: "#ffffff",
      submitButtonHoverShadow: "xl",
      submitButtonBorderRadius: "xl",

      // Success/Error Messages
      successMessageBgColor: "#f0fdf4",
      successMessageBorderColor: "#86efac",
      successMessageTextColor: "#166534",

      errorMessageBgColor: "#fef2f2",
      errorMessageBorderColor: "#fecaca",
      errorMessageTextColor: "#991b1b",

      /*==========================================================================================
        =                 Mobile Overlay            =                Mobile Overlay
        ==========================================================================================*/
      mobileOverlay: {
        // Enable/disable the mobile overlay feature
        enabled: true,

        // Screen width threshold (in pixels) below which the overlay appears
        mobileBreakpoint: 663,

        // Content configuration
        title: "Desktop View Required",
        message:
          "Our job application form requires a larger screen. Please visit this page on a desktop or laptop computer for the best experience.",
        buttonText: "Back to Home Page",
        buttonLink: "/",
        footerText:
          "If you're already on a desktop device, please increase your browser window size.",

        // Visual styling
        backgroundOpacity: 0.9,
        overlayZIndex: 50,

        // Card styling
        cardBackgroundColor: "#ffffff",
        cardBorderRadius: "2xl",
        cardBorderTopWidth: 4,
        cardBoxShadow: "2xl",

        // Icon styling
        iconBackgroundOpacity: 0.3,
        iconWidth: 20,
        iconHeight: 20,

        // Title styling
        titleFontSize: "2xl",
        titleFontWeight: "bold",

        // Message styling
        messageColor: "#4b5563", // gray-600

        // Button styling
        buttonWidth: "full",
        buttonPadding: "py-3 px-4",
        buttonTextColor: "#ffffff",
        buttonFontWeight: "medium",
        buttonBorderRadius: "lg",
        buttonShadow: "md",
        buttonHoverScale: 1.05,
        buttonTapScale: 0.95,

        // Footer styling
        footerMarginTop: 6,
        footerPaddingTop: 6,
        footerBorderColor: "#e5e7eb", // gray-200
        footerTextColor: "#6b7280", // gray-500
        footerTextSize: "sm",
      },
    },
    Contact: {
      /*=======================================================================================================================================
      =                 Contact Page                  =                  Contact Page                     =                  Contact Page
      =======================================================================================================================================*/
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      /*==========================================================================================
        =                 Hero Section            =                  Hero Section
        ==========================================================================================*/
      // Content

      //Title
      title: "Get in Touch",
      heroTitleColor: "#ffffff",
      heroTitleGradientFrom: "#ffffff", // Left
      heroTitleGradientVia: "#ffffff", // Middle
      heroTitleGradientTo: "#ffffff", // Right
      heroTitleGlowColor: "#d2dceb", // Glow effect beneath "touch"
      heroTitleGlowOpacity: 0.3,

      //Subtitle
      subtitle:
        "Have questions about our services? Need an estimate? We're here to help.",
      heroSubtitleColor: "#ffffffff", //
      heroSubtitleHighlightBgColor: "#387e62", // Underline Color

      // Badge
      badge: "24/7 Customer Support",
      heroBadgeBgColor: "#ffffff1a", // White at 10% opacity
      heroBadgeTextColor: "#ffffff",
      heroBadgeIconColor: "#7dd0ae", // Blue-400
      heroBadgeBorderColor: "#ffffff33", // White at 20% opacity

      // Feature Badges
      featureBadge1Text: "24/7 AI Assistant",
      featureBadge1IconColor: "#7dd0ae", // Blue-400
      featureBadge1BgColor: "#ffffff1a", // White at 10% opacity
      featureBadge1BorderColor: "#ffffff33", // White at 20% opacity
      featureBadge1TextColor: "#ffffff",

      featureBadge2Text: "Expert Consultation",
      featureBadge2IconColor: "#7dd0ae", // Blue-400
      featureBadge2BgColor: "#ffffff1a", // White at 10% opacity
      featureBadge2BorderColor: "#ffffff33", // White at 20% opacity
      featureBadge2TextColor: "#ffffff",

      // Hero Background Colors
      heroImage: "/images/contact-hero.jpg",
      heroBgGradientFrom: "#7dd0ae", // Left
      heroBgGradientVia: "#387e62", // Middle
      heroBgGradientTo: "#367658", // Right

      // Background Elements
      heroBlurredCircle1Color: "#098633", // Blue-400
      heroBlurredCircle1Opacity: 0.2,

      heroBlurredCircle2Color: "#1caa3a", // Blue-500
      heroBlurredCircle2Opacity: 0.2,

      heroPatternColor: "#ffffff", // Pattern dots
      heroPatternOpacity: 0.3,

      heroLightBeam1Color: "#387e62", // Blue-400
      heroLightBeam1Opacity: 0.2,

      heroLightBeam2Color: "#387e62", // Blue-500
      heroLightBeam2Opacity: 0.2,

      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      /*==========================================================================================
        =                 Contact Section            =             Contact Section
        ==========================================================================================*/

      // Section Background
      contactSectionBgColor: "#7dd0ad1f", // Gray-50

      // Contact Information
      contactInfoTitleText: "Contact Information",
      contactInfoTitleColor: "#0c2217", // TITLE COLOR

      // Contact Card Icons
      contactIconBgColor: "#7dd0ad42", // Blue-400 at 20% opacity
      contactIconColor: "#0c2217", // Blue-500
      contactLabelColor: "#111827", // Gray-900
      contactTextColor: "#4b5563", // Gray-600
      contactLinkHoverColor: "#2563eb", // Blue-600

      // Contact Icons & Text
      phoneIcon: "PhoneIcon",
      phoneLabel: "Phone",
      phoneNumber: "(770) 495-0050",
      phoneNumberLink: "tel:+17704950050",

      emailIcon: "EnvelopeIcon",
      emailLabel: "Email",
      emailAddress: "support@example.com",
      emailAddressLink: "mailto:support@example.com",

      locationIcon: "MapPinIcon",
      locationLabel: "Location",
      locationAddress: "2785 Buford Hwy Ste 101-C,\nDuluth, GA 30096",

      hoursIcon: "ClockIcon",
      hoursLabel: "Business Hours",
      hoursText:
        "Monday - Friday: 8:30 AM - 6:00 PM\nSaturday - Sunday: Closed",

      // Google Map
      googleMapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.6728431479!2d-83.46847632413687!3d33.891119080637714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f6732844d0854f%3A0x58a2e0e5cc8ccae7!2sDavis%20Tree!5e0!3m2!1sen!2sus!4v1717270133598!5m2!1sen!2sus",
      googleMapHeight: "300px",
      googleMapBorderRadius: "lg", // rounded-lg
      googleMapShadow: "lg", // shadow-lg

      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      /*==========================================================================================
        =                 Contact Form            =             Contact Form
        ==========================================================================================*/

      // Form Title
      formTitleText: "Send Us a Message",
      formTitleColor: "#111827", // Gray-900

      // Form Fields Styling
      formLabelColor: "#374151", // Gray-700
      formInputBgColor: "#ffffff",
      formInputBorderColor: "#d1d5db", // Gray-300
      formInputTextColor: "#111827", // Gray-900
      formInputFocusRingColor: "#3b82f6", // Blue-500
      formInputBorderRadius: "lg", // rounded-lg
      formInputPadding: "px-4 py-3",

      // Form Fields Placeholder Text
      formFieldFullName: "Full Name",
      formFieldEmail: "Email Address",
      formFieldPhone: "Phone Number",
      formFieldService: "Service Needed",
      formFieldMessage: "Message",

      // Service Options
      serviceOptions: [
        "General Inquiry",
        "Tree Removal",
        "Tree Trimming",
        "Stump Grinding",
        "Emergency Services",
        "Lot Clearing",
        "Consultation",
      ],

      // Form Button
      formSubmitBtnText: "Send Message",
      formSubmitBtnBgColor: "#0c2217", // Blue-500
      formSubmitBtnTextColor: "#ffffff",
      formSubmitBtnHoverBgColor: "#367658", // Blue-600
      formSubmitBtnBorderRadius: "lg", // rounded-lg

      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      /*==========================================================================================
        =                 Call-to-Action            =             Call-to-Action
        ==========================================================================================*/

      // NOTE: The CTA section on the Contact page uses the Services page CTA configuration
      // for consistency across the site. The configuration below is used as fallback.
      // To change the CTA on both pages, modify the CTA section in the Services config.

      // CTA Background & Colors
      ctaBgGradientFrom: "#1e40af", // Blue-800
      ctaBgGradientVia: "#3b82f6", // Blue-500
      ctaBgGradientTo: "#2563eb", // Blue-600

      // CTA Pattern
      ctaPatternColor: "#ffffff",
      ctaPatternOpacity: 0.05,

      // CTA Card
      ctaCardBgColor: "#ffffff0d", // White at 5% opacity
      ctaCardBlurAmount: "2px",

      // CTA Buttons

      // Schedule Button
      ctaScheduleButtonText: "Schedule Now",
      ctaScheduleButtonBgColor: "#ffffff",
      ctaScheduleButtonTextColor: "#2563eb", // Blue-600
      ctaScheduleButtonHoverBgColor: "#f3f4f6", // Gray-100

      // Call Button
      ctaCallButtonText: "Call Us Now",
      ctaCallButtonBgColor: "#387e62", // Blue-500
      ctaCallButtonTextColor: "#ffffff",
      ctaCallButtonHoverBgColor: "#387e62", // Blue-600

      // CTA Content
      ctaTitle: "Ready to Get ss Car Back to Perfect?",
      ctaTitleColor: "#ffffff",

      ctaDescription:
        "Schedule your e today and experience the difference expert auto body repair makes.",
      ctaDescriptionColor: "#e0f2fe", // Blue-50
    },
  },
  /*=============================================
  =         THEME AND NAVIGATION CONFIG         =
  =============================================*/
  theme: {
    primary600: "#2563eb",
    primary700: "#1d4ed8",
  },
  navLinks: [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/reviews", label: "Reviews" },
    { path: "/contact", label: "Contact" },
  ],

  /*=============================================
  =              SITE INFO AND COPY             =
  =============================================*/
  policies: {
    terms: "Our terms of service text here.",
    privacy: "Our privacy policy text here.",
  },
  description: "Professional tree removal services in Athens, GA",
  contactInfo: {
    address: "Athens, GA",
    phone: "(706)-296-3318",
    email: "jimmy@davistree.com",
  },
  hours: {
    weekday: "Monday - Friday: 9AM - 5PM",
    weekend: "Closed",
  },

  /*=============================================
  =            FOOTER Section             =
  =============================================*/
  // Quick Links displayed in the footer
  footerLinks: [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/reviews", label: "Reviews" },
    { path: "/contact", label: "Contact" },
  ],

  // Social Media Links
  socialLinks: {
    twitter: "https://twitter.com/company",
    facebook: "https://facebook.com/company",
    linkedin: "https://linkedin.com/company/company",
    instagram: "https://instagram.com/company",
  },

  // Join Team Button Configuration
  showJoinTeamButton: true,
  joinTeamText: "Join the Team",
  joinTeamLink: "/careers",

  // Copyright Text
  copyright: "© 2025 Davis Tree Service. All rights reserved.",

  // Footer Styling
  footerStyle: {
    // Background Colors
    backgroundColor: "#000000",
    gradientFromColor: "#0f3622",
    gradientToColor: "#050505",

    // Text Colors
    titleColor: "#ffffff",
    textColor: "#ffffff",

    // Link Styling
    linkColor: "#f0f0f0",
    linkHoverColor: "#ffffff",

    // Social Media Icons
    socialIconColor: "#7dd0ae",

    // Divider Line
    dividerColor: "rgba(253, 201, 201, 0.2)",

    // Section Titles
    quickLinksTitleColor: "#ffffff",
    contactInfoTitleColor: "#ffffff",
    infoTitleColor: "#ffffff",

    // Join Team Button
    joinButtonBgColor: "#387e62",
    joinButtonTextColor: "#030303",
    joinButtonHoverBgColor: "#7dd0ae",

    // Hours Card
    hoursCardBgColor: "rgba(245, 245, 245, 0.04)",
    hoursCardTextColor: "#f5f5f5",
    hoursCardValueColor: "#ffffff",

    // Copyright & Policies
    copyrightTextColor: "#6b7280",
    policyLinkColor: "#f0f0f0",
    policyLinkHoverColor: "#eebfbf",
  },

  /*=============================================
  =          MISC GLOBAL CONFIGURATION          =
  =============================================*/
  schedulingButtonText: "Schedule Now",
  themeColor: "#f5d6d6",
  _timestamp: "2025-05-13T06:08:37.910Z",
  _lastUpdated: "2025-05-13T06:08:39.227Z",
  themeLink: "",
  companyName: "Davis Tree Service",
};

export default localConfig;
