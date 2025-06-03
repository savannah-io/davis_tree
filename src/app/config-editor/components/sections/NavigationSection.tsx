"use client";

import React from "react";
import { ColorPicker, TextInput } from "../ui";

interface NavigationSectionProps {
  config: any;
  updateConfig: (config: any) => void;
}

export function NavigationSection({
  config,
  updateConfig,
}: NavigationSectionProps) {
  const updateNavBar = (field: string, value: any) => {
    const newConfig = {
      ...config,
      navBar: {
        ...config.navBar,
        [field]: value,
      },
    };
    updateConfig(newConfig);
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="border-b border-purple-200 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
            <span className="text-2xl">🧭</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Navigation Settings
            </h2>
            <p className="text-gray-600">
              Configure your main navigation menu, logo, and branding
            </p>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
          👀 Live Preview
        </h3>
        <div
          className="w-full p-4 rounded-lg"
          style={{
            backgroundColor: config.navBar?.backgroundColor || "#000000",
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {config.navBar?.showLogo && (
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs">LOGO</span>
                </div>
              )}
              <span
                className="text-lg font-bold"
                style={{ color: config.navBar?.textColor || "#ffffff" }}
              >
                {config.navBar?.siteTitle || "Your Site Title"}
              </span>
            </div>
            <div className="flex items-center gap-4">
              {config.navBar?.navLinks?.map((link: any, index: number) => (
                <span
                  key={index}
                  className="text-sm"
                  style={{ color: config.navBar?.textColor || "#ffffff" }}
                >
                  {link.label}
                </span>
              ))}
              <button
                className="px-3 py-1 rounded text-sm"
                style={{
                  backgroundColor:
                    config.navBar?.scheduleButtonColor || "#387e62",
                }}
              >
                {config.navBar?.scheduleButtonText || "Schedule"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Branding */}
        <div className="bg-purple-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
            🏷️ Branding
          </h3>
          <div className="space-y-4">
            <TextInput
              label="Site Title"
              value={config.navBar?.siteTitle || ""}
              onChange={(value) => updateNavBar("siteTitle", value)}
              placeholder="Your Business Name"
              icon="🏢"
            />
            <TextInput
              label="Logo Filename"
              value={config.navBar?.logo || ""}
              onChange={(value) => updateNavBar("logo", value)}
              placeholder="logo.png"
              icon="🖼️"
              description="Logo file should be in /public/images/ folder"
            />
            <div className="flex items-center gap-3">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.navBar?.showLogo !== false}
                  onChange={(e) => updateNavBar("showLogo", e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
              <div>
                <p className="font-medium text-gray-800">Show Logo</p>
                <p className="text-sm text-gray-600">
                  Display logo in navigation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Colors */}
        <div className="bg-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
            🎨 Colors
          </h3>
          <div className="space-y-4">
            <ColorPicker
              label="Background Color"
              value={config.navBar?.backgroundColor || "#000000"}
              onChange={(value) => updateNavBar("backgroundColor", value)}
              description="Main navigation background"
            />
            <ColorPicker
              label="Text Color"
              value={config.navBar?.textColor || "#ffffff"}
              onChange={(value) => updateNavBar("textColor", value)}
              description="Navigation text and links"
            />
            <ColorPicker
              label="Active Tab Color"
              value={config.navBar?.activeTabColor || "#66bf9b"}
              onChange={(value) => updateNavBar("activeTabColor", value)}
              description="Highlight color for current page"
            />
            <ColorPicker
              label="Schedule Button Color"
              value={config.navBar?.scheduleButtonColor || "#387e62"}
              onChange={(value) => updateNavBar("scheduleButtonColor", value)}
              description="Call-to-action button color"
            />
          </div>
        </div>
      </div>

      {/* Schedule Button */}
      <div className="bg-green-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
          📞 Schedule Button
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput
            label="Button Text"
            value={config.navBar?.scheduleButtonText || ""}
            onChange={(value) => updateNavBar("scheduleButtonText", value)}
            placeholder="Schedule Now"
            icon="📅"
          />
        </div>
      </div>
    </div>
  );
}
