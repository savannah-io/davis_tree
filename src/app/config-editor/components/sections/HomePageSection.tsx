"use client";

import React, { useState } from "react";
import { ColorPicker, TextInput } from "../ui";

interface HomePageSectionProps {
  config: any;
  updateConfig: (config: any) => void;
}

export function HomePageSection({
  config,
  updateConfig,
}: HomePageSectionProps) {
  const [activeTab, setActiveTab] = useState("hero");

  const updateHomePage = (field: string, value: any) => {
    const newConfig = {
      ...config,
      pages: {
        ...config.pages,
        Home: {
          ...config.pages?.Home,
          [field]: value,
        },
      },
    };
    updateConfig(newConfig);
  };

  const updateScheduleSection = (field: string, value: any) => {
    const newConfig = {
      ...config,
      pages: {
        ...config.pages,
        Home: {
          ...config.pages?.Home,
          scheduleSection: {
            ...config.pages?.Home?.scheduleSection,
            [field]: value,
          },
        },
      },
    };
    updateConfig(newConfig);
  };

  const updateGuaranteeSection = (field: string, value: any) => {
    const newConfig = {
      ...config,
      pages: {
        ...config.pages,
        Home: {
          ...config.pages?.Home,
          guaranteeSection: {
            ...config.pages?.Home?.guaranteeSection,
            [field]: value,
          },
        },
      },
    };
    updateConfig(newConfig);
  };

  const updateServicesSection = (field: string, value: any) => {
    const newConfig = {
      ...config,
      pages: {
        ...config.pages,
        Home: {
          ...config.pages?.Home,
          servicesSection: {
            ...config.pages?.Home?.servicesSection,
            [field]: value,
          },
        },
      },
    };
    updateConfig(newConfig);
  };

  const updateReviewsSection = (field: string, value: any) => {
    const newConfig = {
      ...config,
      pages: {
        ...config.pages,
        Home: {
          ...config.pages?.Home,
          reviewsSection: {
            ...config.pages?.Home?.reviewsSection,
            [field]: value,
          },
        },
      },
    };
    updateConfig(newConfig);
  };

  const homePage = config.pages?.Home || {};

  const tabs = [
    { id: "hero", name: "Hero Section", icon: "🦸" },
    { id: "schedule", name: "Schedule Section", icon: "📅" },
    { id: "guarantee", name: "Guarantee Section", icon: "✅" },
    { id: "services", name: "Services Section", icon: "🔧" },
    { id: "reviews", name: "Reviews Section", icon: "⭐" },
  ];

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="border-b border-indigo-200 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center">
            <span className="text-2xl">🏠</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Home Page Settings
            </h2>
            <p className="text-gray-600">
              Configure your homepage hero, schedule, guarantee, and other
              sections
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-indigo-100 text-indigo-700 border-b-2 border-indigo-500"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "hero" && (
          <div className="space-y-6">
            {/* Hero Basic Settings */}
            <div className="bg-indigo-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-indigo-800 mb-4 flex items-center gap-2">
                🦸 Hero Section
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="Badge Text"
                  value={homePage.badge || ""}
                  onChange={(value: string) => updateHomePage("badge", value)}
                  placeholder="Tree Removal Service"
                  icon="🏷️"
                />
                <ColorPicker
                  label="Badge Background"
                  value={homePage.heroBadgeColor || "#f5d6d61e"}
                  onChange={(value: string) =>
                    updateHomePage("heroBadgeColor", value)
                  }
                  description="Badge background color"
                />
                <div className="md:col-span-2">
                  <TextInput
                    label="Main Title"
                    value={homePage.title || ""}
                    onChange={(value: string) => updateHomePage("title", value)}
                    placeholder="Welcome to Davis Tree Removal"
                    icon="📝"
                  />
                </div>
                <ColorPicker
                  label="Title Color"
                  value={homePage.heroTitleColor || "#000000"}
                  onChange={(value: string) =>
                    updateHomePage("heroTitleColor", value)
                  }
                  description="Main title color"
                />
                <ColorPicker
                  label="Badge Title Color"
                  value={homePage.heroBadgeTitleColor || "#000000"}
                  onChange={(value: string) =>
                    updateHomePage("heroBadgeTitleColor", value)
                  }
                  description="Badge text color"
                />
                <TextInput
                  label="Subtitle"
                  value={homePage.subtitle2 || ""}
                  onChange={(value: string) =>
                    updateHomePage("subtitle2", value)
                  }
                  placeholder="Quality service description"
                  icon="📄"
                />
                <ColorPicker
                  label="Subtitle Color"
                  value={homePage.heroSubtitleColor || "#ffffff"}
                  onChange={(value: string) =>
                    updateHomePage("heroSubtitleColor", value)
                  }
                  description="Subtitle text color"
                />
              </div>
            </div>

            {/* Hero Background Gradients */}
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                🎨 Hero Background Gradients
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorPicker
                  label="Gradient Top Color"
                  value={homePage.heroGradientTop || "#66bf9b"}
                  onChange={(value: string) =>
                    updateHomePage("heroGradientTop", value)
                  }
                  description="Top gradient color"
                />
                <ColorPicker
                  label="Gradient Bottom Color"
                  value={homePage.heroGradientBottom || "#66bf9b"}
                  onChange={(value: string) =>
                    updateHomePage("heroGradientBottom", value)
                  }
                  description="Bottom gradient color"
                />
                <TextInput
                  label="Hero Image"
                  value={homePage.heroImage || ""}
                  onChange={(value: string) =>
                    updateHomePage("heroImage", value)
                  }
                  placeholder="auto1.png"
                  icon="🖼️"
                />
              </div>
            </div>

            {/* Hero Buttons */}
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                🔘 Hero Buttons
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="Schedule Button Text"
                  value={homePage.scheduleButtonText || "Schedule Now"}
                  onChange={(value: string) =>
                    updateHomePage("scheduleButtonText", value)
                  }
                  placeholder="Schedule Now"
                  icon="📅"
                />
                <ColorPicker
                  label="Schedule Button Color"
                  value={homePage.heroScheduleButtonColor || "#3d725d"}
                  onChange={(value: string) =>
                    updateHomePage("heroScheduleButtonColor", value)
                  }
                  description="Schedule button background"
                />
                <ColorPicker
                  label="Schedule Button Text"
                  value={homePage.heroScheduleButtonTextColor || "#000000"}
                  onChange={(value: string) =>
                    updateHomePage("heroScheduleButtonTextColor", value)
                  }
                  description="Schedule button text color"
                />
                <ColorPicker
                  label="Schedule Button Hover"
                  value={homePage.heroScheduleButtonHoverColor || "#2d5a47"}
                  onChange={(value: string) =>
                    updateHomePage("heroScheduleButtonHoverColor", value)
                  }
                  description="Schedule button hover background"
                />
                <TextInput
                  label="Contact Button Text"
                  value={homePage.contactButtonText || "Contact Us"}
                  onChange={(value: string) =>
                    updateHomePage("contactButtonText", value)
                  }
                  placeholder="Contact Us"
                  icon="📞"
                />
                <ColorPicker
                  label="Contact Button Color"
                  value={homePage.heroContactButtonColor || "#ff000000"}
                  onChange={(value: string) =>
                    updateHomePage("heroContactButtonColor", value)
                  }
                  description="Contact button background"
                />
                <ColorPicker
                  label="Contact Button Text"
                  value={homePage.heroContactButtonTextColor || "#ffffff"}
                  onChange={(value: string) =>
                    updateHomePage("heroContactButtonTextColor", value)
                  }
                  description="Contact button text color"
                />
                <ColorPicker
                  label="Contact Button Border"
                  value={homePage.heroContactButtonBorderColor || "#ffffff"}
                  onChange={(value: string) =>
                    updateHomePage("heroContactButtonBorderColor", value)
                  }
                  description="Contact button border color"
                />
                <ColorPicker
                  label="Contact Button Hover Color"
                  value={homePage.heroContactButtonHoverColor || "#ffffff20"}
                  onChange={(value: string) =>
                    updateHomePage("heroContactButtonHoverColor", value)
                  }
                  description="Contact button hover background"
                />
                <ColorPicker
                  label="Contact Button Hover Text"
                  value={homePage.heroContactButtonHoverTextColor || "#000000"}
                  onChange={(value: string) =>
                    updateHomePage("heroContactButtonHoverTextColor", value)
                  }
                  description="Contact button hover text color"
                />
                <ColorPicker
                  label="Contact Button Hover Border"
                  value={
                    homePage.heroContactButtonHoverBorderColor || "#000000"
                  }
                  onChange={(value: string) =>
                    updateHomePage("heroContactButtonHoverBorderColor", value)
                  }
                  description="Contact button hover border color"
                />
              </div>
            </div>

            {/* Hero Cards/Boxes */}
            <div className="bg-yellow-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center gap-2">
                🎴 Hero Feature Cards
              </h3>

              {/* Card 1 */}
              <div className="mb-6 p-4 bg-white rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-700 mb-3">
                  Card 1 Settings
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <TextInput
                    label="Card 1 Text"
                    value={homePage.heroCard1Text || "*Free Estimates"}
                    onChange={(value: string) =>
                      updateHomePage("heroCard1Text", value)
                    }
                    placeholder="*Free Estimates"
                    icon="💬"
                  />
                  <ColorPicker
                    label="Background"
                    value={homePage.heroBox1BgColor || "#66bf9b1f"}
                    onChange={(value: string) =>
                      updateHomePage("heroBox1BgColor", value)
                    }
                    description="Card 1 background"
                  />
                  <ColorPicker
                    label="Text Color"
                    value={homePage.heroBox1TextColor || "#ffffff"}
                    onChange={(value: string) =>
                      updateHomePage("heroBox1TextColor", value)
                    }
                    description="Card 1 text color"
                  />
                  <ColorPicker
                    label="Border Color"
                    value={homePage.heroBox1BorderColor || "#66bf9b"}
                    onChange={(value: string) =>
                      updateHomePage("heroBox1BorderColor", value)
                    }
                    description="Card 1 border"
                  />
                  <ColorPicker
                    label="Icon Background"
                    value={homePage.heroBox1IconBgColor || "#7fd1b6"}
                    onChange={(value: string) =>
                      updateHomePage("heroBox1IconBgColor", value)
                    }
                    description="Icon background"
                  />
                  <ColorPicker
                    label="Icon Color"
                    value={homePage.heroBox1IconColor || "#000000"}
                    onChange={(value: string) =>
                      updateHomePage("heroBox1IconColor", value)
                    }
                    description="Icon color"
                  />
                </div>
              </div>

              {/* Card 2 */}
              <div className="mb-6 p-4 bg-white rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-700 mb-3">
                  Card 2 Settings
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <TextInput
                    label="Card 2 Text"
                    value={homePage.heroCard2Text || "Licensed"}
                    onChange={(value: string) =>
                      updateHomePage("heroCard2Text", value)
                    }
                    placeholder="Licensed"
                    icon="💬"
                  />
                  <ColorPicker
                    label="Background"
                    value={homePage.heroBox2BgColor || "#66bf9b1f"}
                    onChange={(value: string) =>
                      updateHomePage("heroBox2BgColor", value)
                    }
                    description="Card 2 background"
                  />
                  <ColorPicker
                    label="Text Color"
                    value={homePage.heroBox2TextColor || "#ffffff"}
                    onChange={(value: string) =>
                      updateHomePage("heroBox2TextColor", value)
                    }
                    description="Card 2 text color"
                  />
                  <ColorPicker
                    label="Border Color"
                    value={homePage.heroBox2BorderColor || "#66bf9b"}
                    onChange={(value: string) =>
                      updateHomePage("heroBox2BorderColor", value)
                    }
                    description="Card 2 border"
                  />
                  <ColorPicker
                    label="Icon Background"
                    value={homePage.heroBox2IconBgColor || "#7fd1b6"}
                    onChange={(value: string) =>
                      updateHomePage("heroBox2IconBgColor", value)
                    }
                    description="Icon background"
                  />
                  <ColorPicker
                    label="Icon Color"
                    value={homePage.heroBox2IconColor || "#000000"}
                    onChange={(value: string) =>
                      updateHomePage("heroBox2IconColor", value)
                    }
                    description="Icon color"
                  />
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-4 bg-white rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-700 mb-3">
                  Card 3 Settings
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <TextInput
                    label="Card 3 Text"
                    value={homePage.heroCard3Text || "Fast Removal"}
                    onChange={(value: string) =>
                      updateHomePage("heroCard3Text", value)
                    }
                    placeholder="Fast Removal"
                    icon="💬"
                  />
                  <ColorPicker
                    label="Background"
                    value={homePage.heroBox3BgColor || "#66bf9b1f"}
                    onChange={(value: string) =>
                      updateHomePage("heroBox3BgColor", value)
                    }
                    description="Card 3 background"
                  />
                  <ColorPicker
                    label="Text Color"
                    value={homePage.heroBox3TextColor || "#ffffff"}
                    onChange={(value: string) =>
                      updateHomePage("heroBox3TextColor", value)
                    }
                    description="Card 3 text color"
                  />
                  <ColorPicker
                    label="Border Color"
                    value={homePage.heroBox3BorderColor || "#66bf9b"}
                    onChange={(value: string) =>
                      updateHomePage("heroBox3BorderColor", value)
                    }
                    description="Card 3 border"
                  />
                  <ColorPicker
                    label="Icon Background"
                    value={homePage.heroBox3IconBgColor || "#7fd1b6"}
                    onChange={(value: string) =>
                      updateHomePage("heroBox3IconBgColor", value)
                    }
                    description="Icon background"
                  />
                  <ColorPicker
                    label="Icon Color"
                    value={homePage.heroBox3IconColor || "#000000"}
                    onChange={(value: string) =>
                      updateHomePage("heroBox3IconColor", value)
                    }
                    description="Icon color"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "schedule" && (
          <div className="space-y-6">
            {/* Schedule Section Basic */}
            <div className="bg-orange-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-4 flex items-center gap-2">
                📅 Schedule Section
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <TextInput
                    label="Section Title"
                    value={homePage.scheduleSection?.scheduleSectionTitle || ""}
                    onChange={(value: string) =>
                      updateScheduleSection("scheduleSectionTitle", value)
                    }
                    placeholder="REQUEST A FREE ESTIMATE BELOW"
                    icon="📋"
                  />
                </div>
                <ColorPicker
                  label="Title Color"
                  value={
                    homePage.scheduleSection?.scheduleSectionTitleColor ||
                    "#53a584"
                  }
                  onChange={(value: string) =>
                    updateScheduleSection("scheduleSectionTitleColor", value)
                  }
                  description="Section title color"
                />
                <TextInput
                  label="Calendly URL"
                  value={homePage.scheduleSection?.calendlyUrl || ""}
                  onChange={(value: string) =>
                    updateScheduleSection("calendlyUrl", value)
                  }
                  placeholder="https://calendly.com/your-link"
                  icon="🔗"
                />
              </div>
            </div>

            {/* Calendar Settings */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                🗓️ Calendar Settings
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorPicker
                  label="Calendar Background"
                  value={homePage.scheduleSection?.calendarBgColor || "#ffffff"}
                  onChange={(value: string) =>
                    updateScheduleSection("calendarBgColor", value)
                  }
                  description="Calendar background color"
                />
                <ColorPicker
                  label="Calendar Border"
                  value={
                    homePage.scheduleSection?.calendarBorderColor || "#99dac0"
                  }
                  onChange={(value: string) =>
                    updateScheduleSection("calendarBorderColor", value)
                  }
                  description="Calendar border color"
                />
                <ColorPicker
                  label="Calendar Accent"
                  value={
                    homePage.scheduleSection?.calendarAccentColor || "#7dae99"
                  }
                  onChange={(value: string) =>
                    updateScheduleSection("calendarAccentColor", value)
                  }
                  description="Calendar accent color"
                />
                <ColorPicker
                  label="Ripple Start Color"
                  value={
                    homePage.scheduleSection?.calendarRippleStartColor ||
                    "#9ddac0"
                  }
                  onChange={(value: string) =>
                    updateScheduleSection("calendarRippleStartColor", value)
                  }
                  description="Calendar ripple start color"
                />
                <ColorPicker
                  label="Ripple End Color"
                  value={
                    homePage.scheduleSection?.calendarRippleEndColor ||
                    "#a3d8c3"
                  }
                  onChange={(value: string) =>
                    updateScheduleSection("calendarRippleEndColor", value)
                  }
                  description="Calendar ripple end color"
                />
                <TextInput
                  label="Calendar Month"
                  value={homePage.scheduleSection?.calendarMonth || ""}
                  onChange={(value: string) =>
                    updateScheduleSection("calendarMonth", value)
                  }
                  placeholder="AUGUST"
                  icon="📅"
                />
                <TextInput
                  label="Calendar Year"
                  value={homePage.scheduleSection?.calendarYear || ""}
                  onChange={(value: string) =>
                    updateScheduleSection("calendarYear", value)
                  }
                  placeholder="2024"
                  icon="📅"
                />
              </div>
            </div>

            {/* Schedule Background Gradients */}
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                🎨 Schedule Background Gradients
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorPicker
                  label="Gradient Top Color"
                  value={
                    homePage.scheduleSection?.scheduleGradientTop || "#ceffec"
                  }
                  onChange={(value: string) =>
                    updateScheduleSection("scheduleGradientTop", value)
                  }
                  description="Schedule section gradient top"
                />
                <ColorPicker
                  label="Gradient Bottom Color"
                  value={
                    homePage.scheduleSection?.scheduleGradientBottom ||
                    "#ffffff"
                  }
                  onChange={(value: string) =>
                    updateScheduleSection("scheduleGradientBottom", value)
                  }
                  description="Schedule section gradient bottom"
                />
                <ColorPicker
                  label="Section Badge Background"
                  value={
                    homePage.scheduleSection?.scheduleSectionBadgeColor ||
                    "#f5d6d636"
                  }
                  onChange={(value: string) =>
                    updateScheduleSection("scheduleSectionBadgeColor", value)
                  }
                  description="Badge background color"
                />
                <ColorPicker
                  label="Section Badge Text"
                  value={
                    homePage.scheduleSection?.scheduleSectionBadgeTextColor ||
                    "#387e62"
                  }
                  onChange={(value: string) =>
                    updateScheduleSection(
                      "scheduleSectionBadgeTextColor",
                      value
                    )
                  }
                  description="Badge text color"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "guarantee" && (
          <div className="space-y-6">
            {/* Guarantee Section */}
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                ✅ Guarantee Section
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="Section Title"
                  value={homePage.guaranteeSection?.guaranteeTitle || ""}
                  onChange={(value: string) =>
                    updateGuaranteeSection("guaranteeTitle", value)
                  }
                  placeholder="Our Guarantee"
                  icon="🏆"
                />
                <ColorPicker
                  label="Badge Color"
                  value={
                    homePage.guaranteeSection?.guaranteeBadgeColor ||
                    "#c9f5c9ec"
                  }
                  onChange={(value: string) =>
                    updateGuaranteeSection("guaranteeBadgeColor", value)
                  }
                  description="Badge background color"
                />
              </div>
            </div>

            {/* Guarantee Background Gradients */}
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                🎨 Guarantee Background Gradients
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorPicker
                  label="Background Gradient Top"
                  value={
                    homePage.guaranteeSection?.guaranteeBgGradientTop ||
                    "#ffffff"
                  }
                  onChange={(value: string) =>
                    updateGuaranteeSection("guaranteeBgGradientTop", value)
                  }
                  description="Guarantee section gradient top"
                />
                <ColorPicker
                  label="Background Gradient Bottom"
                  value={
                    homePage.guaranteeSection?.guaranteeBgGradientBottom ||
                    "#f0f9ff"
                  }
                  onChange={(value: string) =>
                    updateGuaranteeSection("guaranteeBgGradientBottom", value)
                  }
                  description="Guarantee section gradient bottom"
                />
                <ColorPicker
                  label="Badge Text Color"
                  value={
                    homePage.guaranteeSection?.guaranteeBadgeTextColor ||
                    "#000000"
                  }
                  onChange={(value: string) =>
                    updateGuaranteeSection("guaranteeBadgeTextColor", value)
                  }
                  description="Badge text color"
                />
              </div>
            </div>

            {/* Guarantee Items */}
            <div className="bg-emerald-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-emerald-800 mb-4 flex items-center gap-2">
                🎯 Guarantee Items
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-emerald-700">Item 1</h4>
                  <TextInput
                    label="Title"
                    value={homePage.guaranteeSection?.guaranteeTitle1 || ""}
                    onChange={(value: string) =>
                      updateGuaranteeSection("guaranteeTitle1", value)
                    }
                    placeholder="Lifetime Warranty"
                    icon="1️⃣"
                  />
                  <TextInput
                    label="Subtitle"
                    value={homePage.guaranteeSection?.guaranteeSubtitle1 || ""}
                    onChange={(value: string) =>
                      updateGuaranteeSection("guaranteeSubtitle1", value)
                    }
                    placeholder="On All Services"
                    icon="📝"
                  />
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-emerald-700">Item 2</h4>
                  <TextInput
                    label="Title"
                    value={homePage.guaranteeSection?.guaranteeTitle2 || ""}
                    onChange={(value: string) =>
                      updateGuaranteeSection("guaranteeTitle2", value)
                    }
                    placeholder="Free Estimates"
                    icon="2️⃣"
                  />
                  <TextInput
                    label="Subtitle"
                    value={homePage.guaranteeSection?.guaranteeSubtitle2 || ""}
                    onChange={(value: string) =>
                      updateGuaranteeSection("guaranteeSubtitle2", value)
                    }
                    placeholder="Quick & Accurate"
                    icon="📝"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "services" && (
          <div className="space-y-6">
            {/* Services Section */}
            <div className="bg-cyan-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-cyan-800 mb-4 flex items-center gap-2">
                🔧 Services Section
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="Badge Text"
                  value={homePage.servicesSection?.servicesBadgeText || ""}
                  onChange={(value: string) =>
                    updateServicesSection("servicesBadgeText", value)
                  }
                  placeholder="Our Expertise"
                  icon="🏷️"
                />
                <TextInput
                  label="Section Title"
                  value={homePage.servicesSection?.servicesTitle || ""}
                  onChange={(value: string) =>
                    updateServicesSection("servicesTitle", value)
                  }
                  placeholder="Comprehensive Tree"
                  icon="📋"
                />
                <TextInput
                  label="Highlight Text"
                  value={homePage.servicesSection?.servicesHighlightText || ""}
                  onChange={(value: string) =>
                    updateServicesSection("servicesHighlightText", value)
                  }
                  placeholder="Care Services"
                  icon="✨"
                />
                <TextInput
                  label="Button Text"
                  value={homePage.servicesSection?.servicesButtonText || ""}
                  onChange={(value: string) =>
                    updateServicesSection("servicesButtonText", value)
                  }
                  placeholder="Explore Our Services"
                  icon="🔘"
                />
              </div>
            </div>

            {/* Services Button Gradients */}
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                🎨 Services Button Gradients
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorPicker
                  label="Button Start Color"
                  value={
                    homePage.servicesSection?.servicesButtonStartColor ||
                    "#387e62"
                  }
                  onChange={(value: string) =>
                    updateServicesSection("servicesButtonStartColor", value)
                  }
                  description="Button gradient start"
                />
                <ColorPicker
                  label="Button End Color"
                  value={
                    homePage.servicesSection?.servicesButtonEndColor ||
                    "#387e62"
                  }
                  onChange={(value: string) =>
                    updateServicesSection("servicesButtonEndColor", value)
                  }
                  description="Button gradient end"
                />
                <ColorPicker
                  label="Button Hover Start"
                  value={
                    homePage.servicesSection?.servicesButtonHoverStartColor ||
                    "#246043"
                  }
                  onChange={(value: string) =>
                    updateServicesSection(
                      "servicesButtonHoverStartColor",
                      value
                    )
                  }
                  description="Button hover gradient start"
                />
                <ColorPicker
                  label="Button Hover End"
                  value={
                    homePage.servicesSection?.servicesButtonHoverEndColor ||
                    "#246043"
                  }
                  onChange={(value: string) =>
                    updateServicesSection("servicesButtonHoverEndColor", value)
                  }
                  description="Button hover gradient end"
                />
                <ColorPicker
                  label="Gradient From Color"
                  value={
                    homePage.servicesSection?.serviceReelGradientFromColor ||
                    "#ffffff"
                  }
                  onChange={(value: string) =>
                    updateServicesSection("serviceReelGradientFromColor", value)
                  }
                  description="Service reel gradient from"
                />
                <ColorPicker
                  label="Gradient To Color"
                  value={
                    homePage.servicesSection?.serviceReelGradientToColor ||
                    "#ffffff"
                  }
                  onChange={(value: string) =>
                    updateServicesSection("serviceReelGradientToColor", value)
                  }
                  description="Service reel gradient to"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-6">
            {/* Reviews Section */}
            <div className="bg-yellow-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center gap-2">
                ⭐ Reviews Section
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="Badge Text"
                  value={homePage.reviewsSection?.reviewsBadgeText || ""}
                  onChange={(value: string) =>
                    updateReviewsSection("reviewsBadgeText", value)
                  }
                  placeholder="Verified Google Reviews"
                  icon="🏷️"
                />
                <TextInput
                  label="Section Title"
                  value={homePage.reviewsSection?.reviewsTitle || ""}
                  onChange={(value: string) =>
                    updateReviewsSection("reviewsTitle", value)
                  }
                  placeholder="What Our Customers"
                  icon="📋"
                />
                <TextInput
                  label="Highlight Text"
                  value={homePage.reviewsSection?.reviewsHighlight || ""}
                  onChange={(value: string) =>
                    updateReviewsSection("reviewsHighlight", value)
                  }
                  placeholder="Are Saying"
                  icon="✨"
                />
                <TextInput
                  label="Button Text"
                  value={homePage.reviewsSection?.viewAllButtonText || ""}
                  onChange={(value: string) =>
                    updateReviewsSection("viewAllButtonText", value)
                  }
                  placeholder="View All Reviews"
                  icon="🔘"
                />
              </div>
            </div>

            {/* Review Background Gradients */}
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                🎨 Review Background Gradients
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorPicker
                  label="Background Start"
                  value={
                    homePage.reviewsSection?.reviewsBgStartColor || "#7dd0ae"
                  }
                  onChange={(value: string) =>
                    updateReviewsSection("reviewsBgStartColor", value)
                  }
                  description="Gradient start color"
                />
                <ColorPicker
                  label="Background Middle"
                  value={
                    homePage.reviewsSection?.reviewsBgMiddleColor || "#66bf9b"
                  }
                  onChange={(value: string) =>
                    updateReviewsSection("reviewsBgMiddleColor", value)
                  }
                  description="Gradient middle color"
                />
                <ColorPicker
                  label="Background End"
                  value={
                    homePage.reviewsSection?.reviewsBgEndColor || "#53a584"
                  }
                  onChange={(value: string) =>
                    updateReviewsSection("reviewsBgEndColor", value)
                  }
                  description="Gradient end color"
                />
                <ColorPicker
                  label="Title Color"
                  value={
                    homePage.reviewsSection?.reviewsTitleColor || "#ffffff"
                  }
                  onChange={(value: string) =>
                    updateReviewsSection("reviewsTitleColor", value)
                  }
                  description="Title text color"
                />
                <ColorPicker
                  label="Star Color"
                  value={homePage.reviewsSection?.reviewStarColor || "#fbbf24"}
                  onChange={(value: string) =>
                    updateReviewsSection("reviewStarColor", value)
                  }
                  description="Star rating color"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tips */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
        <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
          💡 Pro Tips
        </h4>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• Use consistent brand colors across all homepage sections</li>
          <li>• Keep hero titles concise but compelling</li>
          <li>• Ensure good contrast between text and background colors</li>
          <li>
            • Test your Calendly URL to make sure scheduling works properly
          </li>
          <li>
            • Update guarantee items to reflect your actual business offerings
          </li>
        </ul>
      </div>
    </div>
  );
}
