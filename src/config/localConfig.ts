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

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  /*=============================================
  =                  NAVIGATION BAR                 =
  =============================================*/
  // Nav Bar
  navBar: {
    backgroundColor: "#000000S",
    textColor: "#000000",
    logo: "TC-TITLE.png",
    // Title
    siteTitle: "Davis Tree Service",
    siteTitleGradientFrom: "#84cbaf",
    siteTitleGradientTo: "#3d725d",
    // Schedule Button
    scheduleButtonText: "Schedule Now",
    scheduleButtonColor: "#387e62",
    // Active Tab Color
    activeTabColor: "#66bf9b",
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
      {
        path: "/careers",
        label: "Careers",
      },
    ],
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
      location: "Athens, GA",
      heroLocationColor: "#363636",

      // Subtitle 1
      content: "hongroochen@gmail.com",
      heroContentColor: "#1aaa07",

      // Subtitle 2
      subtitle2: "Family Owned & Operated",
      heroSubtitleColor: "#1aaa07",

      // Hero Image
      heroImage: "davisbg.png",

      // Hero Gradients
      heroGradientTop: "#66bf9b",
      heroGradientBottom: "#1e392e",

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
      heroBox1BgColor: "#1f1f1f",
      heroBox1TextColor: "#ffffff",
      heroBox1BorderColor: "#66bf9b",
      heroBox1IconBgColor: "#7fd1b6",
      heroBox1IconColor: "#000000",

      // Hero Box 2*ENTER_TEXT*
      heroCard2Text: "Licensed",
      heroBox2BgColor: "#1f1f1f",
      heroBox2TextColor: "#ffffff",
      heroBox2BorderColor: "#66bf9b",
      heroBox2IconBgColor: "#7fd1b6",
      heroBox2IconColor: "#000000",

      // Hero Box 3
      heroCard3Text: "Fast Removal",
      heroBox3BgColor: "#1f1f1f",
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

        // Address
        scheduleAddress: "*ENTER_ADDRESS_HERE*",
        scheduleAddressColor: "#2563eb",
        scheduleContent:
          "Book your appointment with our expert technicians. We'll get your vehicle back to its best condition.",
        scheduleContentColor: "#6b7280",

        // Calendar UI Elements
        calendarRippleStartColor: "#e69999",
        calendarRippleEndColor: "#e69999",
        calendarRippleOpacity: 0.15,
        calendarBgColor: "#000000",
        calendarBorderColor: "#e69999",
        calendarAccentColor: "#e69999",

        // Booking Button
        tapToBookText: "Tap to Book",
        tapToBookTextColor: "#ffffff",
        calendlyUrl: "https://calendly.com/[*ENTER_CALENDLY_URL*]",

        // Schedule Section Gradients
        scheduleGradientTop: "#f5d6d6",
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
        // Section Header
        guaranteeTitle: "Our Guarantee",
        guaranteeTitleColor: "#dc7070",
        guaranteeBadgeColor: "#f5d6d636",
        guaranteeBadgeTextColor: "#dc7070",

        // Guarantee Icon 1
        guaranteeIcon1: "access.png",
        guaranteeTitle1: "Lifetime Warranty",
        guaranteeSubtitle1: "On All Services",
        guaranteeIconBgColor1: "#ffffff",
        guaranteeIconBorderColor1: "#e0e7ff",
        guaranteeTitleTextColor1: "#111827",
        guaranteeSubtitleTextColor1: "#6b7280",

        // Guarantee Icon 2
        guaranteeIcon2: "free.png",
        guaranteeTitle2: "Free Estimates",
        guaranteeSubtitle2: "Quick & Accurate",
        guaranteeIconBgColor2: "#ffffff",
        guaranteeIconBorderColor2: "#e0e7ff",
        guaranteeTitleTextColor2: "#111827",
        guaranteeSubtitleTextColor2: "#6b7280",

        // Center Logo
        guaranteeCenterLogo: "PPG.png",
        guaranteeCenterBgColor: "#ffffff",
        guaranteeCenterBorderColor: "#e0e7ff",

        // Guarantee Icon 4
        guaranteeIcon4: "calculator.png",
        guaranteeTitle4: "Insurance Approved",
        guaranteeSubtitle4: "All Major & Minor Companies",
        guaranteeIconBgColor4: "#ffffff",
        guaranteeIconBorderColor4: "#e0e7ff",
        guaranteeTitleTextColor4: "#111827",
        guaranteeSubtitleTextColor4: "#6b7280",

        // Guarantee Icon 5
        guaranteeIcon5: "shipping.png",
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
        servicesBadgeColor: "#f5d6d636",
        servicesBadgeTextColor: "#dc7070",

        servicesTitle: "Expert Auto Body Repair Services",
        servicesHighlightText: "Repair Services",
        servicesTitleColor: "#111827",
        servicesHighlightColor: "#dc7070",
        servicesHighlightUnderlineColor: "#e699995e",

        // Services Description
        servicesDescription:
          "We specialize in comprehensive auto body repair services, from collision repair and dent removal to expert paint matching and structural repairs.",
        servicesDescriptionColor: "#6b7280",

        // Services Button
        servicesButtonText: "Explore Our Services",
        servicesButtonUrl: "/services",
        servicesButtonStartColor: "#e69999",
        servicesButtonEndColor: "#e69999",
        servicesButtonTextColor: "#ffffff",

        // Service Reel Configuration

        serviceReelCardBgColor: "#ffffff",
        serviceReelCardBorderColor: "#f3f4f680",
        serviceReelCardHoverShadowColor: "rgba(0, 0, 0, 0.08)",
        // Service Reel Icon
        serviceReelIconColor: "#dc7070",
        // Service Reel Title
        serviceReelTitleColor: "#111827",
        serviceReelTitleHoverColor: "#dc7070",
        // Service Reel Description
        serviceReelDescriptionColor: "#6b7280",
        serviceReelDescriptionHoverColor: "#374151",
        // Service Reel Mobile Indicator
        serviceReelMobileIndicatorColor: "#dc7070",
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
        reviewsHighlightColor: "#dc7070",
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
        reviewVerifiedColor: "#93c5fd",
        reviewStarColor: "#fbbf24",

        // View All Button
        viewAllButtonText: "View All Reviews",
        viewAllButtonBgColor: "rgba(255, 255, 255, 0.1)",
        viewAllButtonHoverBgColor: "rgba(255, 255, 255, 0.2)",
        viewAllButtonTextColor: "#ffffff",
        viewAllButtonBorderColor: "rgba(255, 255, 255, 0.2)",

        // Reviews Section Background
        reviewsBgStartColor: "#e69999",
        reviewsBgMiddleColor: "#e69999",
        reviewsBgEndColor: "#e69999",

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
      title: "Our Auto Body Services",
      heroTitleColor: "#ffffff",

      //Subtitle
      subtitle:
        "Expert collision repair and auto body services. Quality work guaranteed.",
      heroSubtitleColor: "#ffffff",

      // Badge
      badge: "Certified Auto Body Shop",
      heroBadgeBgColor: "#06ac143a",
      heroBadgeTextColor: "#ffffff",
      heroBadgeIconColor: "#60a5fa",
      heroBadgeCheckmarkColor: "#4ade80",
      heroBadgeMedalIconColor: "#f3b3b3",

      // Hero Statistics Cards
      card1Title: "Years Experience",
      card1Value: "20",
      card2Title: "Trees Removed",
      card2Value: "***",

      heroStatsCardBgColor: "#10500a4f",
      heroStatsCardTextColor: "#ffffff",
      heroStatsCardValueColor: "#ffffff",
      heroStatsCardIconColor: "#60fa7a",

      // Hero Image & Colors
      heroImage: "/images/service-hero.jpg",
      heroBgGradientFrom: "#a7ff03", //Left
      heroBgGradientVia: "#ff0000", //Middle
      heroBgGradientTo: "#00ffddff", //Right
      //Blurred Circle
      heroBlurredCircle1Color: "#fa6060",
      heroBlurredCircle2Color: "#fa6060",
      heroPatternColor: "#fa6060",
      //Light Beam
      heroLightBeam1Color: "#60fa74",
      heroLightBeam2Color: "#fa6060",

      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
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
      serviceCategoriesBgColor: "#66bf9b", // Legacy property maintained for backward compatibility
      serviceCategoriesGradientOpacity: 0.7,
      serviceCategoriesBgColorFrom: "#e0f2eb",
      serviceCategoriesBgColorTo: "#c1e5d7",

      // Card Elements
      serviceCategoryCardTitleColor: "#4e0d0d",
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
          title: "Collision Services",
          titleColor: "#f50000",

          description:
            "Complete collision repair services to restore your vehicle to pre-accident condition",
          descriptionColor: "#0055ff",

          bgImage: "/images/back1.png",
          color: "#ff3030-#0055ff",
          iconColor: "#ca6eff",
          borderColor: "#0055ff",
          icon: "ExclamationTriangleIcon",

          // Services in Category 1
          services: [
            {
              title: "Collision Repair",
              description: "Expert repair of vehicle damage from accidents",
              icon: "WrenchScrewdriverIcon",
              iconColor: "#3b82f6",
              titleColor: "#6c35a0",
              descriptionColor: "#507dd6",
              bgColor: "#416283",
              borderColor: "#000307",
            },
            {
              title: "Frame & Alignment",
              description: "Precise frame straightening and alignment services",
              icon: "CogIcon",
              iconColor: "#3b82f6",
              titleColor: "#111827",
              descriptionColor: "#6b7280",
              bgColor: "#f9fafb",
              borderColor: "#e5e7eb",
            },
            {
              title: "Paint Services",
              description: "Professional auto painting with color matching",
              icon: "PaintBrushIcon",
              iconColor: "#3b82f6",
              titleColor: "#111827",
              descriptionColor: "#6b7280",
              bgColor: "#f9fafb",
              borderColor: "#e5e7eb",
            },
            {
              title: "Dent Removal",
              description: "Skilled dent removal using advanced techniques",
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
          title: "Cosmetic Services",
          description:
            "Premium cosmetic services to enhance and protect your vehicle's appearance",
          bgImage: "/images/back5.png",
          color: "#ffffff-#4f46e5",
          iconColor: "#ffffff",
          titleColor: "#ff0303",
          descriptionColor: "#f3f4f6",
          borderColor: "#e5e7eb",
          icon: "SparklesIcon",

          // Services in Category 2
          services: [
            {
              title: "Auto Detailing",
              description: "Comprehensive interior and exterior detailing",
              icon: "SparklesIcon",
              iconColor: "#3bf63b",
              titleColor: "#111827",
              descriptionColor: "#6b7280",
              bgColor: "#f9fafb",
              borderColor: "#e5e7eb",
            },
            {
              title: "Paint Protection",
              description: "Advanced paint protection and ceramic coating",
              icon: "ShieldCheckIcon",
              iconColor: "#3b82f6",
              titleColor: "#111827",
              descriptionColor: "#d8ee17",
              bgColor: "#f9fafb",
              borderColor: "#e5e7eb",
            },
            {
              title: "Classic Restoration",
              description: "Expert restoration of vintage vehicles",
              icon: "WrenchScrewdriverIcon",
              iconColor: "#3b82f6",
              titleColor: "#111827",
              descriptionColor: "#6b7280",
              bgColor: "#f9fafb",
              borderColor: "#e5e7eb",
            },
            {
              title: "Wheel & Rim Services",
              description: "Professional wheel repair and restoration",
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
          id: "mechanical",
          title: "Mechanical Services",
          description:
            "Essential mechanical services and diagnostics for optimal vehicle performance",
          bgImage: "/images/back4.png",
          color: "#ffffff-#10b981",
          iconColor: "#ffffff",
          titleColor: "#ffffff",
          descriptionColor: "#f3f4f6",
          borderColor: "#e5e7eb",
          icon: "CogIcon",

          // Services in Category 3
          services: [
            {
              title: "Diagnostic Services",
              description: "Comprehensive vehicle diagnostics and assessment",
              icon: "BeakerIcon",
              iconColor: "#3b82f6",
              titleColor: "#111827",
              descriptionColor: "#6b7280",
              bgColor: "#f9fafb",
              borderColor: "#e5e7eb",
            },
            {
              title: "Check Engine Light",
              description: "Professional diagnosis and resolution",
              icon: "ExclamationTriangleIcon",
              iconColor: "#3b82f6",
              titleColor: "#111827",
              descriptionColor: "#6b7280",
              bgColor: "#f9fafb",
              borderColor: "#e5e7eb",
            },
            {
              title: "Fleet Services",
              description: "Specialized fleet maintenance and repair",
              icon: "TruckIcon",
              iconColor: "#3b82f6",
              titleColor: "#e4e4e4",
              descriptionColor: "#6b7280",
              bgColor: "#f9fafb",
              borderColor: "#e5e7eb",
            },
            {
              title: "Custom Fabrication",
              description: "Specialized metal fabrication and repairs",
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
      ctaBgGradientFrom: "#1eaf49", //Top Left
      ctaBgGradientVia: "#00d800", // Middle Center
      ctaBgGradientTo: "#278d3d", //Bottom Right

      // CTA Pattern Color
      ctaBgPatternColor: "#ffffff60", //Pattern Color

      // CTA Card BG
      ctaCardBgColor: "#ffffff2f", //Card Background Color
      ctaCardBorderColor: "#961111S", //Card Border Color

      // CTA Buttons

      // Schedule Button
      scheduleButtonText: "Schedule Now",
      scheduleButtonBgColor: "#ffffff",
      scheduleButtonTextColor: "#3bf64b",
      scheduleButtonHoverBgColor: "#f3f4f6",

      // Call Button
      callButtonText: "Call Us Now",
      callButtonBgColor: "#3b82f6",
      callButtonTextColor: "#ffffff",
      callButtonHoverBgColor: "#eb2599",

      // CTA Content

      // CTA Title
      ctaTitle: "Ready to Get Your Car Back to Perfect?",
      ctaTitleColor: "#ffffff", //Title Color

      // CTA Description
      ctaDescription:
        "Schedule your appointment today and experience the difference expert auto body repair makes.",
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
      heroTitleColor: "#ff0000",

      //Subtitle
      subtitle:
        "We're proud of the work we do and the trust our customers place in us. Here's what they have to say about their experience with our services.",
      heroSubtitleColor: "#cc0000",

      // Badge
      badge: "Verified Google Reviews",
      heroBadgeBgColor: "#ffffff10",
      heroBadgeTextColor: "#b42424",
      heroBadgeIconColor: "#60a5fa",
      heroBadgeCheckmarkColor: "#c3de4a",
      heroBadgeBorderColor: "#d12e2ec9",

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
      heroBgGradientFrom: "#10944c", //Top Left
      heroBgGradientVia: "#10944c", //Middle
      heroBgGradientTo: "#10944c", //Bottom Right

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
      reviewsSectionBgColor: "#f9fafb",

      // Review Cards
      reviewCardBgColor: "#ffffff",
      reviewCardHoverShadow: "lg",
      reviewCardBorderColor: "#e5e7eb",

      reviewCardTextColor: "#4b5563",
      reviewCardAuthorNameColor: "#111827",
      reviewCardSourceColor: "#6b7280",

      reviewCardStarColor: "#facc15",
      reviewCardStarEmptyColor: "#d1d5db",

      reviewCardShowMoreColor: "#2563eb",
      reviewCardShowMoreHoverColor: "#1d4ed8",

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
      shareButtonBgColor: "#25eb3f",
      shareButtonTextColor: "#ffffff",
      shareButtonHoverBgColor: "#1d6ed8",
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

      //Hero Background Colors
      heroBgGradientFrom: "#26126e",
      heroBgGradientVia: "#8c3bf6",
      heroBgGradientTo: "#1f2a69",

      //Blurred Circle Colors
      heroBlurredCircle1Color: "#098633",
      heroBlurredCircle1Opacity: 0.2,
      heroBlurredCircle2Color: "#1caa3a",
      heroBlurredCircle2Opacity: 0.2,

      //Pattern
      heroPatternColor: "#ffffff",
      heroPatternOpacity: 0.3,

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
      formHeaderBgFrom: "#126e40",
      formHeaderBgTo: "#4bf63b",
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
      submitButtonBgTo: "#4bf63b",
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
      heroTitleGradientFrom: "#ff0000", // Left
      heroTitleGradientVia: "#016efc", // Middle
      heroTitleGradientTo: "#030a13", // Right
      heroTitleGlowColor: "#d2dceb", // Glow effect beneath "touch"
      heroTitleGlowOpacity: 0.3,

      //Subtitle
      subtitle:
        "Have questions about our services? Need an estimate? We're here to help.",
      heroSubtitleColor: "#7e7501ee", //
      heroSubtitleHighlightBgColor: "#e61448cc", // Underline Color

      // Badge
      badge: "24/7 Customer Support",
      heroBadgeBgColor: "#ffffff1a", // White at 10% opacity
      heroBadgeTextColor: "#ffffff",
      heroBadgeIconColor: "#fa60fa", // Blue-400
      heroBadgeBorderColor: "#ffffff33", // White at 20% opacity

      // Feature Badges
      featureBadge1Text: "24/7 AI Assistant",
      featureBadge1IconColor: "#8e60fa", // Blue-400
      featureBadge1BgColor: "#ffffff1a", // White at 10% opacity
      featureBadge1BorderColor: "#ffffff33", // White at 20% opacity
      featureBadge1TextColor: "#ffffff",

      featureBadge2Text: "Expert Consultation",
      featureBadge2IconColor: "#60a5fa", // Blue-400
      featureBadge2BgColor: "#ffffff1a", // White at 10% opacity
      featureBadge2BorderColor: "#ffffff33", // White at 20% opacity
      featureBadge2TextColor: "#ffffff",

      // Hero Background Colors
      heroImage: "/images/contact-hero.jpg",
      heroBgGradientFrom: "#126e40", // Left
      heroBgGradientVia: "#4bf63b", // Middle
      heroBgGradientTo: "#0d361a", // Right

      // Background Elements
      heroBlurredCircle1Color: "#098633", // Blue-400
      heroBlurredCircle1Opacity: 0.2,

      heroBlurredCircle2Color: "#1caa3a", // Blue-500
      heroBlurredCircle2Opacity: 0.2,

      heroPatternColor: "#ffffff", // Pattern dots
      heroPatternOpacity: 0.3,

      heroLightBeam1Color: "#065313", // Blue-400
      heroLightBeam1Opacity: 0.2,

      heroLightBeam2Color: "#065313", // Blue-500
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
      contactSectionBgColor: "#49943f2d", // Gray-50

      // Contact Information
      contactInfoTitleText: "Contact Information",
      contactInfoTitleColor: "#911c4d", // TITLE COLOR

      // Contact Card Icons
      contactIconBgColor: "#60a5fa33", // Blue-400 at 20% opacity
      contactIconColor: "#67f63b", // Blue-500
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
      formSubmitBtnBgColor: "#3b82f6", // Blue-500
      formSubmitBtnTextColor: "#ffffff",
      formSubmitBtnHoverBgColor: "#2563eb", // Blue-600
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
      ctaCallButtonBgColor: "#3b82f6", // Blue-500
      ctaCallButtonTextColor: "#ffffff",
      ctaCallButtonHoverBgColor: "#2563eb", // Blue-600

      // CTA Content
      ctaTitle: "Ready to Get Your Car Back to Perfect?",
      ctaTitleColor: "#ffffff",

      ctaDescription:
        "Schedule your appointment today and experience the difference expert auto body repair makes.",
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
    { path: "/careers", label: "Careers" },
  ],

  /*=============================================
  =              SITE INFO AND COPY             =
  =============================================*/
  policies: {
    terms: "Our terms of service text here.",
    privacy: "Our privacy policy text here.",
  },
  description: "*ENTER_DESCRIPTION*",
  contactInfo: {
    address: "*ENTER_ADDRESS_HERE*",
    phone: "(XXX) XXX-XXXX",
    email: "EMAIL@COMPANY_DOMAIN.COM",
  },
  hours: {
    weekday: "8:30 AM - 6:00 PM",
    weekend: "Closed",
  },

  /*=============================================
  =            FOOTER CONFIGURATION             =
  =============================================*/
  // Quick Links displayed in the footer
  footerLinks: [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/reviews", label: "Reviews" },
    { path: "/contact", label: "Contact" },
    { path: "/careers", label: "Careers" },
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
  joinTeamText: "*CALL_TO_ACTION*",
  joinTeamLink: "/careers",

  // Copyright Text
  copyright: "© 2025 Company Name. All rights reserved.",

  // Footer Styling
  footerStyle: {
    // Background Colors
    backgroundColor: "#ffffff",
    gradientFromColor: "rgba(5, 5, 5, 1.00)",
    gradientToColor: "rgba(5, 5, 5, 1.00)",

    // Text Colors
    titleColor: "rgba(238, 191, 191, 1.00)", // Section title colors (Quick Links, Contact Info, etc)
    textColor: "rgba(255, 255, 255, 1.00)", // General text color

    // Link Styling
    linkColor: "rgba(240, 240, 240, 1.00)", // Navigation link color
    linkHoverColor: "rgba(238, 191, 191, 1.00)", // Navigation link hover color

    // Social Media Icons
    socialIconColor: "rgba(238, 191, 191, 1.00)", // Color of social media icons

    // Divider Line
    dividerColor: "rgba(253, 201, 201, 0.20)", // Color of divider lines between sections

    // Section Titles
    quickLinksTitleColor: "rgba(238, 191, 191, 1.00)", // "Quick Links" section title
    contactInfoTitleColor: "rgba(238, 191, 191, 1.00)", // "Contact Info" section title
    infoTitleColor: "rgba(238, 191, 191, 1.00)", // "Info" section title

    // Join Team Button
    joinButtonBgColor: "rgba(238, 191, 191, 1.00)", // Background color
    joinButtonTextColor: "rgba(3, 3, 3, 1.00)", // Text color
    joinButtonHoverBgColor: "rgba(219, 191, 191, 1.00)", // Background hover color

    // Hours Card
    hoursCardBgColor: "rgba(245, 245, 245, 0.04)", // Background of hours display
    hoursCardTextColor: "rgba(245, 245, 245, 1.00)", // Label text color (e.g., "Weekday:")
    hoursCardValueColor: "rgba(238, 191, 191, 1.00)", // Value text color (e.g., "8:30 AM - 6:00 PM")

    // Copyright & Policies
    copyrightTextColor: "#6b7280", // Copyright text color
    policyLinkColor: "rgba(240, 240, 240, 1.00)", // Policy link color (Terms, Privacy)
    policyLinkHoverColor: "rgba(238, 191, 191, 1.00)", // Policy link hover color
  },

  /*=============================================
  =          MISC GLOBAL CONFIGURATION          =
  =============================================*/
  schedulingButtonText: "Schedule Now",
  themeColor: "#f5d6d6",
  _timestamp: "2025-05-13T06:08:37.910Z",
  _lastUpdated: "2025-05-13T06:08:39.227Z",
  themeLink: "",
  companyName: "*ENTER_NAME*",
};

export default localConfig;
