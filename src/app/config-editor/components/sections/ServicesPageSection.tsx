"use client";

import React, { useState } from "react";
import { ColorPicker, TextInput } from "../ui";

interface ServicesPageSectionProps {
  config: any;
  updateConfig: (config: any) => void;
}

export function ServicesPageSection({
  config,
  updateConfig,
}: ServicesPageSectionProps) {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    hero: true,
    categories: false,
    cta: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const updateServicesPage = (field: string, value: any) => {
    const newConfig = {
      ...config,
      pages: {
        ...config.pages,
        Services: {
          ...config.pages?.Services,
          [field]: value,
        },
      },
    };
    updateConfig(newConfig);
  };

  const updateServiceCategory = (
    categoryIndex: number,
    field: string,
    value: any
  ) => {
    const categories = [...(config.pages?.Services?.serviceCategories || [])];
    categories[categoryIndex] = {
      ...categories[categoryIndex],
      [field]: value,
    };
    updateServicesPage("serviceCategories", categories);
  };

  const servicesPage = config.pages?.Services || {};

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="border-b border-cyan-200 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
            <span className="text-2xl">🔧</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Services Page Settings
            </h2>
            <p className="text-gray-600">
              Configure your services page hero, categories, and call-to-action
              sections
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <button
          onClick={() => toggleSection("hero")}
          className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-cyan-50 to-blue-50 hover:from-cyan-100 hover:to-blue-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🦸</span>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-cyan-800">
                Hero Section
              </h3>
              <p className="text-sm text-cyan-600">
                Main banner, title, and hero stats
              </p>
            </div>
          </div>
          <div
            className={`transform transition-transform ${
              expandedSections.hero ? "rotate-180" : ""
            }`}
          >
            <svg
              className="w-5 h-5 text-cyan-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </button>

        {expandedSections.hero && (
          <div className="p-6 space-y-6">
            {/* Basic Hero Settings */}
            <div className="bg-cyan-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-cyan-800 mb-4 flex items-center gap-2">
                📝 Hero Content
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="Page Title"
                  value={servicesPage.title || ""}
                  onChange={(value: string) =>
                    updateServicesPage("title", value)
                  }
                  placeholder="Our Services"
                  icon="📋"
                />
                <ColorPicker
                  label="Title Color"
                  value={servicesPage.heroTitleColor || "#ffffff"}
                  onChange={(value: string) =>
                    updateServicesPage("heroTitleColor", value)
                  }
                  description="Hero title text color"
                />
                <div className="md:col-span-2">
                  <TextInput
                    label="Subtitle"
                    value={servicesPage.subtitle || ""}
                    onChange={(value: string) =>
                      updateServicesPage("subtitle", value)
                    }
                    placeholder="Explore our services below and let us help you cultivate a healthier, greener landscape."
                    icon="💬"
                  />
                </div>
                <ColorPicker
                  label="Subtitle Color"
                  value={servicesPage.heroSubtitleColor || "#ffffff"}
                  onChange={(value: string) =>
                    updateServicesPage("heroSubtitleColor", value)
                  }
                  description="Hero subtitle text color"
                />
              </div>
            </div>

            {/* Hero Badge */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-blue-800 mb-4 flex items-center gap-2">
                🏷️ Hero Badge
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="Badge Text"
                  value={servicesPage.badge || ""}
                  onChange={(value: string) =>
                    updateServicesPage("badge", value)
                  }
                  placeholder="Certified Arborists"
                  icon="🏷️"
                />
                <ColorPicker
                  label="Badge Background"
                  value={servicesPage.heroBadgeBgColor || "#06ac143a"}
                  onChange={(value: string) =>
                    updateServicesPage("heroBadgeBgColor", value)
                  }
                  description="Badge background color"
                />
                <ColorPicker
                  label="Badge Text Color"
                  value={servicesPage.heroBadgeTextColor || "#ffffff"}
                  onChange={(value: string) =>
                    updateServicesPage("heroBadgeTextColor", value)
                  }
                  description="Badge text color"
                />
                <ColorPicker
                  label="Badge Icon Color"
                  value={servicesPage.heroBadgeIconColor || "#60a5fa"}
                  onChange={(value: string) =>
                    updateServicesPage("heroBadgeIconColor", value)
                  }
                  description="Badge icon color"
                />
              </div>
            </div>

            {/* Hero Stats */}
            <div className="bg-green-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-green-800 mb-4 flex items-center gap-2">
                📊 Hero Statistics
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="Card 1 Title"
                  value={servicesPage.card1Title || ""}
                  onChange={(value: string) =>
                    updateServicesPage("card1Title", value)
                  }
                  placeholder="Years Experience"
                  icon="1️⃣"
                />
                <TextInput
                  label="Card 1 Value"
                  value={servicesPage.card1Value || ""}
                  onChange={(value: string) =>
                    updateServicesPage("card1Value", value)
                  }
                  placeholder="20"
                  icon="📊"
                />
                <TextInput
                  label="Card 2 Title"
                  value={servicesPage.card2Title || ""}
                  onChange={(value: string) =>
                    updateServicesPage("card2Title", value)
                  }
                  placeholder="Trees Removed"
                  icon="2️⃣"
                />
                <TextInput
                  label="Card 2 Value"
                  value={servicesPage.card2Value || ""}
                  onChange={(value: string) =>
                    updateServicesPage("card2Value", value)
                  }
                  placeholder="400+"
                  icon="📊"
                />
              </div>
            </div>

            {/* Hero Background */}
            <div className="bg-purple-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-purple-800 mb-4 flex items-center gap-2">
                🎨 Hero Background
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="Hero Image"
                  value={servicesPage.heroImage || ""}
                  onChange={(value: string) =>
                    updateServicesPage("heroImage", value)
                  }
                  placeholder="/images/service-hero.jpg"
                  icon="🖼️"
                />
                <ColorPicker
                  label="Gradient From"
                  value={servicesPage.heroBgGradientFrom || "#367658"}
                  onChange={(value: string) =>
                    updateServicesPage("heroBgGradientFrom", value)
                  }
                  description="Background gradient start"
                />
                <ColorPicker
                  label="Gradient Via"
                  value={servicesPage.heroBgGradientVia || "#11492d"}
                  onChange={(value: string) =>
                    updateServicesPage("heroBgGradientVia", value)
                  }
                  description="Background gradient middle"
                />
                <ColorPicker
                  label="Gradient To"
                  value={servicesPage.heroBgGradientTo || "#0c2217"}
                  onChange={(value: string) =>
                    updateServicesPage("heroBgGradientTo", value)
                  }
                  description="Background gradient end"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Service Categories */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <button
          onClick={() => toggleSection("categories")}
          className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-orange-50 to-yellow-50 hover:from-orange-100 hover:to-yellow-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">📂</span>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-orange-800">
                Service Categories
              </h3>
              <p className="text-sm text-orange-600">
                Configure service category cards and styling
              </p>
            </div>
          </div>
          <div
            className={`transform transition-transform ${
              expandedSections.categories ? "rotate-180" : ""
            }`}
          >
            <svg
              className="w-5 h-5 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </button>

        {expandedSections.categories && (
          <div className="p-6 space-y-6">
            {/* Category Styling */}
            <div className="bg-orange-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-orange-800 mb-4 flex items-center gap-2">
                🎨 Category Card Styling
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorPicker
                  label="Card Title Color"
                  value={
                    servicesPage.serviceCategoryCardTitleColor || "#ffffff"
                  }
                  onChange={(value: string) =>
                    updateServicesPage("serviceCategoryCardTitleColor", value)
                  }
                  description="Category card title color"
                />
                <ColorPicker
                  label="Card Description Color"
                  value={
                    servicesPage.serviceCategoryCardDescriptionColor ||
                    "#0342c2"
                  }
                  onChange={(value: string) =>
                    updateServicesPage(
                      "serviceCategoryCardDescriptionColor",
                      value
                    )
                  }
                  description="Category card description color"
                />
                <ColorPicker
                  label="Card Border Color"
                  value={
                    servicesPage.serviceCategoryCardBorderColor || "#e5e7eb"
                  }
                  onChange={(value: string) =>
                    updateServicesPage("serviceCategoryCardBorderColor", value)
                  }
                  description="Category card border color"
                />
                <ColorPicker
                  label="Card Button Background"
                  value={
                    servicesPage.serviceCategoryCardButtonBgColor ||
                    "rgba(255, 255, 255, 0.1)"
                  }
                  onChange={(value: string) =>
                    updateServicesPage(
                      "serviceCategoryCardButtonBgColor",
                      value
                    )
                  }
                  description="Category card button background"
                />
              </div>
            </div>

            {/* Service Categories List */}
            <div className="bg-yellow-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-yellow-800 mb-4 flex items-center gap-2">
                📋 Service Categories
              </h4>
              <div className="space-y-4">
                {servicesPage.serviceCategories?.map(
                  (category: any, index: number) => (
                    <div key={index} className="bg-white rounded-lg p-4 border">
                      <h5 className="font-medium text-gray-800 mb-3">
                        Category {index + 1}
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <TextInput
                          label="Category Title"
                          value={category.title || ""}
                          onChange={(value: string) =>
                            updateServiceCategory(index, "title", value)
                          }
                          placeholder="Emergency and Health Services"
                          icon="📝"
                        />
                        <TextInput
                          label="Background Image"
                          value={category.bgImage || ""}
                          onChange={(value: string) =>
                            updateServiceCategory(index, "bgImage", value)
                          }
                          placeholder="davis2.png"
                          icon="🖼️"
                        />
                        <div className="md:col-span-2">
                          <TextInput
                            label="Description"
                            value={category.description || ""}
                            onChange={(value: string) =>
                              updateServiceCategory(index, "description", value)
                            }
                            placeholder="From storm damage to disease prevention, we're here to protect your trees and property 24/7."
                            icon="💬"
                          />
                        </div>
                      </div>
                    </div>
                  )
                ) || (
                  <p className="text-gray-500 italic">
                    No service categories configured
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <button
          onClick={() => toggleSection("cta")}
          className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">📢</span>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-emerald-800">
                Call to Action Section
              </h3>
              <p className="text-sm text-emerald-600">
                Bottom section with action buttons
              </p>
            </div>
          </div>
          <div
            className={`transform transition-transform ${
              expandedSections.cta ? "rotate-180" : ""
            }`}
          >
            <svg
              className="w-5 h-5 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </button>

        {expandedSections.cta && (
          <div className="p-6 space-y-6">
            {/* CTA Content */}
            <div className="bg-emerald-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-emerald-800 mb-4 flex items-center gap-2">
                📝 CTA Content
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="CTA Title"
                  value={servicesPage.ctaTitle || ""}
                  onChange={(value: string) =>
                    updateServicesPage("ctaTitle", value)
                  }
                  placeholder="Ready to free estimate?"
                  icon="📋"
                />
                <ColorPicker
                  label="Title Color"
                  value={servicesPage.ctaTitleColor || "#ffffff"}
                  onChange={(value: string) =>
                    updateServicesPage("ctaTitleColor", value)
                  }
                  description="CTA title color"
                />
                <div className="md:col-span-2">
                  <TextInput
                    label="CTA Description"
                    value={servicesPage.ctaDescription || ""}
                    onChange={(value: string) =>
                      updateServicesPage("ctaDescription", value)
                    }
                    placeholder="Schedule your estimate today and experience the difference expert tree care makes."
                    icon="💬"
                  />
                </div>
                <ColorPicker
                  label="Description Color"
                  value={servicesPage.ctaDescriptionColor || "#ffffff"}
                  onChange={(value: string) =>
                    updateServicesPage("ctaDescriptionColor", value)
                  }
                  description="CTA description color"
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="bg-green-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-green-800 mb-4 flex items-center gap-2">
                🔘 CTA Buttons
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="Schedule Button Text"
                  value={servicesPage.scheduleButtonText || ""}
                  onChange={(value: string) =>
                    updateServicesPage("scheduleButtonText", value)
                  }
                  placeholder="Schedule Now"
                  icon="📅"
                />
                <ColorPicker
                  label="Schedule Button Background"
                  value={servicesPage.scheduleButtonBgColor || "#7dd0ae"}
                  onChange={(value: string) =>
                    updateServicesPage("scheduleButtonBgColor", value)
                  }
                  description="Schedule button background color"
                />
                <TextInput
                  label="Call Button Text"
                  value={servicesPage.callButtonText || ""}
                  onChange={(value: string) =>
                    updateServicesPage("callButtonText", value)
                  }
                  placeholder="Call Us Now"
                  icon="📞"
                />
                <ColorPicker
                  label="Call Button Background"
                  value={servicesPage.callButtonBgColor || "#ffffff"}
                  onChange={(value: string) =>
                    updateServicesPage("callButtonBgColor", value)
                  }
                  description="Call button background color"
                />
              </div>
            </div>

            {/* CTA Background */}
            <div className="bg-teal-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-teal-800 mb-4 flex items-center gap-2">
                🎨 CTA Background
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorPicker
                  label="Background Gradient From"
                  value={servicesPage.ctaBgGradientFrom || "#7dd0ae"}
                  onChange={(value: string) =>
                    updateServicesPage("ctaBgGradientFrom", value)
                  }
                  description="CTA background gradient start"
                />
                <ColorPicker
                  label="Background Gradient Via"
                  value={servicesPage.ctaBgGradientVia || "#53a584"}
                  onChange={(value: string) =>
                    updateServicesPage("ctaBgGradientVia", value)
                  }
                  description="CTA background gradient middle"
                />
                <ColorPicker
                  label="Background Gradient To"
                  value={servicesPage.ctaBgGradientTo || "#387e62"}
                  onChange={(value: string) =>
                    updateServicesPage("ctaBgGradientTo", value)
                  }
                  description="CTA background gradient end"
                />
                <ColorPicker
                  label="Card Background"
                  value={servicesPage.ctaCardBgColor || "#ffffff2f"}
                  onChange={(value: string) =>
                    updateServicesPage("ctaCardBgColor", value)
                  }
                  description="CTA card background color"
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
          <li>• Use high-quality hero images that showcase your services</li>
          <li>• Keep service category descriptions concise but informative</li>
          <li>• Ensure good contrast between text and background colors</li>
          <li>• Test CTA buttons to ensure they stand out and are clickable</li>
          <li>• Use consistent color schemes that match your brand</li>
        </ul>
      </div>
    </div>
  );
}
