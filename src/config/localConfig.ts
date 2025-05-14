// Define the type for the localConfig object
// Last updated: 2025-05-13T06:08:39.227Z

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
  =                  NAVIGATION                 =
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
    ],
  },
  /*=============================================
  =                    PAGES                    =
  =============================================*/
  pages: {
    /*=============================================
    =                 HOME PAGE                  =
    =============================================*/
    Home: {
      // Hero Section

      // Badge
      badge: "Tree Removal Service",
      heroBadgeColor: "#f5d6d61e",
      heroBadgeTitleColor: "#000000",

      // Title
      title: "Expert Tree Removal",
      heroTitleColor: "#000000",

      // Location
      location: "Athens, GA",
      heroLocationColor: "#363636",

      // Subtitle 1
      content: "Our prices won't stump you!!!",
      heroContentColor: "#1aaa07",

      // Subtitle 2
      subtitle2: "Family Owned & Operated",
      heroSubtitleColor: "#1aaa07",

      // Hero Image
      heroImage: "back12.png",

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
      heroBox1BorderColor: "#f5d6d6",
      heroBox1IconBgColor: "#aadfa3",
      heroBox1IconColor: "#000000",

      // Hero Box 2
      heroCard2Text: "*ENTER_TEXT*",
      heroBox2BgColor: "#1f1f1f",
      heroBox2TextColor: "#ffffff",
      heroBox2BorderColor: "#f5d6d6",
      heroBox2IconBgColor: "#f5d6d6",
      heroBox2IconColor: "#000000",

      // Hero Box 3
      heroCard3Text: "*ENTER_TEXT*",
      heroBox3BgColor: "#1f1f1f",
      heroBox3TextColor: "#ffffff",
      heroBox3BorderColor: "#f5d6d6",
      heroBox3IconBgColor: "#f5d6d6",
      heroBox3IconColor: "#000000",

      /*----------  Schedule Section  ----------*/
      scheduleSection: {
        // Section Header
        scheduleSectionTitle: "SCHEDULE",
        scheduleSectionTitleColor: "#dc7070",
        scheduleSectionBadgeColor: "#f5d6d636",
        scheduleSectionBadgeTextColor: "#dc7070",

        // Title and Content
        bookingTitle: "BOOK YOUR SERVICE",
        bookingTitleColor: "#6b7280",
        scheduleTitlePart1: "Schedule Your",
        scheduleTitlePart1Color: "#333333",
        scheduleTitlePart2: "Auto Estimate",
        scheduleTitlePart2Color: "#e69999",

        // Icon
        scheduleIconBgColor: "#e69999",
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

      /*----------  Guarantee Section  ----------*/
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

      /*----------  Services Section  ----------*/
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

      /*----------  Reviews Section  ----------*/
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
    /*=============================================
    =               OTHER PAGES                   =
    =============================================*/

    /*=============================================
    =              Services Page       =
    =============================================*/
    Services: {
      /*----------  Hero Section  ----------*/
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
      heroBadgeBgColor: "rgba(255, 255, 255, 0.1)",
      heroBadgeTextColor: "#ffffff",
      heroBadgeIconColor: "#60a5fa",

      // Hero Statistics Cards
      card1Title: "Years Experience",
      card1Value: "15+",
      card2Title: "Cars Repaired",
      card2Value: "5000+",

      // Hero Image & Colors
      heroImage: "/images/service-hero.jpg",
      heroBgGradientFrom: "🎨#1e40af",
      heroBgGradientVia: "🎨#3b82f6",
      heroBgGradientTo: "🎨#60a5fa",
      heroBlurredCircle1Color: "rgba(59, 130, 246, 0.2)",
      heroBlurredCircle2Color: "rgba(96, 165, 250, 0.2)",
      heroPatternColor: "rgba(255, 255, 255, 0.15)",
      heroLightBeam1Color: "rgba(59, 130, 246, 0.3)",
      heroLightBeam2Color: "rgba(59, 130, 246, 0.3)",

      heroStatsCardBgColor: "rgba(255, 255, 255, 0.1)",
      heroStatsCardTextColor: "#ffffff",
      heroStatsCardValueColor: "#ffffff",
      heroStatsCardIconColor: "#60a5fa",

      /*----------  Service Categories Section  ----------*/
      // Section Background
      serviceCategoriesBgColor: "from-gray-50 to-gray-100",
      serviceCategoriesGradientOpacity: 0.6,
      serviceCategoriesBgColorFrom: "#ffffff",
      serviceCategoriesBgColorTo: "#f3f4f6",
      serviceCategoryCardGradientFrom: "#1e40af",
      serviceCategoryCardGradientTo: "#3b82f6",

      serviceCategories: [
        {
          // Category 1
          id: "collision",
          title: "Collision Services",
          description:
            "Complete collision repair services to restore your vehicle to pre-accident condition",
          bgImage: "/images/back1.png",
          color: "from-primary-500 to-primary-600",
          iconColor: "#ffffff",
          titleColor: "#ffffff",
          descriptionColor: "#f3f4f6",
          borderColor: "#e5e7eb",
          icon: "ExclamationTriangleIcon",

          // Services in Category 1
          services: [
            {
              title: "Collision Repair",
              description: "Expert repair of vehicle damage from accidents",
              icon: "WrenchScrewdriverIcon",
              iconColor: "#3b82f6",
              titleColor: "#111827",
              descriptionColor: "#6b7280",
              bgColor: "#f9fafb",
              borderColor: "#e5e7eb",
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
          // Category 2
          id: "cosmetic",
          title: "Cosmetic Services",
          description:
            "Premium cosmetic services to enhance and protect your vehicle's appearance",
          bgImage: "/images/back5.png",
          color: "from-primary-500 to-primary-600",
          iconColor: "#ffffff",
          titleColor: "#ffffff",
          descriptionColor: "#f3f4f6",
          borderColor: "#e5e7eb",
          icon: "SparklesIcon",

          // Services in Category 2
          services: [
            {
              title: "Auto Detailing",
              description: "Comprehensive interior and exterior detailing",
              icon: "SparklesIcon",
              iconColor: "#3b82f6",
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
              descriptionColor: "#6b7280",
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
          // Category 3
          id: "mechanical",
          title: "Mechanical Services",
          description:
            "Essential mechanical services and diagnostics for optimal vehicle performance",
          bgImage: "/images/back4.png",
          color: "from-primary-500 to-primary-600",
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
              titleColor: "#111827",
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

      /*----------  Expertise Section  ----------*/
      // Section Colors
      expertiseBgGradientFrom: "#f9fafb",
      expertiseBgGradientVia: "#ffffff",
      expertiseBgGradientTo: "#f9fafb",
      expertiseAnimatedOrbsColor1: "rgba(219, 234, 254, 0.4)",
      expertiseAnimatedOrbsColor2: "rgba(191, 219, 254, 0.3)",
      expertiseAnimatedOrbsColor3: "rgba(147, 197, 253, 0.2)",

      // Section Content
      expertiseTitle: "Why Expert Auto Body Repair Matters",
      expertiseTitleColor: "from-primary-600 to-primary-900",
      expertiseDescription:
        "Modern vehicles are complex machines requiring specialized knowledge and equipment for proper repairs. Choosing the right auto body shop can make all the difference in your vehicle's safety and longevity.",
      expertiseDescriptionColor: "#4b5563",

      // Expertise Feature Cards
      expertiseCardBgColor: "#ffffff",
      expertiseCardShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      expertiseCardHoverShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      expertiseCardHoverGradient: "rgba(219, 234, 254, 0.8)",
      expertiseCardIconBgColor: "#dbeafe",
      expertiseCardIconColor: "#3b82f6",
      expertiseCardTitleColor: "#111827",
      expertiseCardTextColor: "#4b5563",

      expertiseCards: [
        {
          title: "Feature Card 1",
          description:
            "Our team consists of I-CAR Gold Class certified technicians trained to handle all makes and models with precision and care.",
        },
        {
          title: "Feature Card 2",
          description:
            "We utilize state-of-the-art diagnostic equipment and repair technologies to ensure accuracy and quality in every repair.",
        },
        {
          title: "Feature Card 3",
          description:
            "We prioritize OEM parts that match your vehicle's original specifications for safety, fit, and performance.",
        },
        {
          title: "Feature Card 4",
          description:
            "We stand behind our work with a lifetime warranty on all repairs as long as you own your vehicle.",
        },
      ],

      /*----------  Call-to-Action Section  ----------*/
      // CTA Background & Colors
      ctaBgGradientFrom: "#1e40af",
      ctaBgGradientVia: "#3b82f6",
      ctaBgGradientTo: "#60a5fa",
      ctaBgPatternColor: "rgba(255, 255, 255, 0.05)",
      ctaCardBgColor: "rgba(255, 255, 255, 0.05)",
      ctaCardBorderColor: "rgba(255, 255, 255, 0.1)",
      ctaTitleColor: "#ffffff",
      ctaDescriptionColor: "#bfdbfe",

      // CTA Buttons
      scheduleButtonBgColor: "#ffffff",
      scheduleButtonTextColor: "#3b82f6",
      scheduleButtonHoverBgColor: "#f3f4f6",
      callButtonBgColor: "#3b82f6",
      callButtonTextColor: "#ffffff",
      callButtonHoverBgColor: "#2563eb",

      // CTA Content
      ctaTitle: "Ready to Get Your Car Back to Perfect?",
      ctaDescription:
        "Schedule your appointment today and experience the difference expert auto body repair makes.",
      scheduleButtonText: "Schedule Now",
      callButtonText: "Call Us Now",
    },
    Reviews: {
      title: "Customer Reviews",
      content: "See what our customers have to say about us.",
      heroImage: "/images/reviews-hero.jpg",
    },
    Contact: {
      title: "Contact Us",
      content: "Get in touch with us today.",
      scheduleButtonText: "Schedule Now",
      callButtonText: "Call Us Now",
      heroImage: "/images/hero-services.jpg",
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
