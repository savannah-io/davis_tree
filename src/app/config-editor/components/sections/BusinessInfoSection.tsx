"use client";

import React from "react";
import { ColorPicker, TextInput } from "../ui";

interface BusinessInfoSectionProps {
  config: any;
  updateConfig: (config: any) => void;
}

export function BusinessInfoSection({
  config,
  updateConfig,
}: BusinessInfoSectionProps) {
  const updateBusinessInfo = (field: string, value: any) => {
    const newConfig = {
      ...config,
      businessInfo: {
        ...config.businessInfo,
        [field]: value,
      },
    };
    updateConfig(newConfig);
  };

  const updateLegalPage = (page: string, field: string, value: any) => {
    const newConfig = {
      ...config,
      businessInfo: {
        ...config.businessInfo,
        legalPages: {
          ...config.businessInfo?.legalPages,
          [page]: {
            ...config.businessInfo?.legalPages?.[page],
            [field]: value,
          },
        },
      },
    };
    updateConfig(newConfig);
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="border-b border-amber-200 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
            <span className="text-2xl">🏢</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Business Information
            </h2>
            <p className="text-gray-600">
              Configure your company details and legal page styling
            </p>
          </div>
        </div>
      </div>

      {/* Company Details */}
      <div className="bg-amber-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-amber-800 mb-4 flex items-center gap-2">
          🏢 Company Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput
            label="Company Name"
            value={config.businessInfo?.name || ""}
            onChange={(value: string) => updateBusinessInfo("name", value)}
            placeholder="Your Business Name"
            icon="🏢"
          />
          <TextInput
            label="Business Type"
            value={config.businessInfo?.llcType || ""}
            onChange={(value: string) => updateBusinessInfo("llcType", value)}
            placeholder="LLC, Inc, etc."
            icon="📋"
          />
          <TextInput
            label="Contact Email"
            value={config.businessInfo?.contactEmail || ""}
            onChange={(value: string) =>
              updateBusinessInfo("contactEmail", value)
            }
            placeholder="contact@business.com"
            icon="📧"
          />
          <TextInput
            label="Contact Phone"
            value={config.businessInfo?.contactPhone || ""}
            onChange={(value: string) =>
              updateBusinessInfo("contactPhone", value)
            }
            placeholder="(555) 123-4567"
            icon="📞"
          />
        </div>
      </div>

      {/* Privacy Policy Styling */}
      <div className="bg-blue-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
          🔒 Privacy Policy Styling
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ColorPicker
            label="Header Color"
            value={
              config.businessInfo?.legalPages?.privacyPolicy?.headerColor ||
              "#387e62"
            }
            onChange={(value: string) =>
              updateLegalPage("privacyPolicy", "headerColor", value)
            }
            description="Color for page headers"
          />
          <ColorPicker
            label="Link Color"
            value={
              config.businessInfo?.legalPages?.privacyPolicy?.linkColor ||
              "#66bf9b"
            }
            onChange={(value: string) =>
              updateLegalPage("privacyPolicy", "linkColor", value)
            }
            description="Color for clickable links"
          />
          <ColorPicker
            label="Background Color"
            value={
              config.businessInfo?.legalPages?.privacyPolicy?.backgroundColor ||
              "#ffffff"
            }
            onChange={(value: string) =>
              updateLegalPage("privacyPolicy", "backgroundColor", value)
            }
            description="Page background color"
          />
          <ColorPicker
            label="Text Color"
            value={
              config.businessInfo?.legalPages?.privacyPolicy?.textColor ||
              "#1f1f1f"
            }
            onChange={(value: string) =>
              updateLegalPage("privacyPolicy", "textColor", value)
            }
            description="Main text color"
          />
          <ColorPicker
            label="Border Color"
            value={
              config.businessInfo?.legalPages?.privacyPolicy?.borderColor ||
              "#e5e7eb"
            }
            onChange={(value: string) =>
              updateLegalPage("privacyPolicy", "borderColor", value)
            }
            description="Border and divider color"
          />
          <ColorPicker
            label="Icon Color"
            value={
              config.businessInfo?.legalPages?.privacyPolicy?.iconColor ||
              "#66bf9b"
            }
            onChange={(value: string) =>
              updateLegalPage("privacyPolicy", "iconColor", value)
            }
            description="Icon and accent color"
          />
        </div>
      </div>

      {/* Terms of Service Styling */}
      <div className="bg-green-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
          📜 Terms of Service Styling
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ColorPicker
            label="Header Color"
            value={
              config.businessInfo?.legalPages?.termsOfService?.headerColor ||
              "#387e62"
            }
            onChange={(value: string) =>
              updateLegalPage("termsOfService", "headerColor", value)
            }
            description="Color for page headers"
          />
          <ColorPicker
            label="Link Color"
            value={
              config.businessInfo?.legalPages?.termsOfService?.linkColor ||
              "#66bf9b"
            }
            onChange={(value: string) =>
              updateLegalPage("termsOfService", "linkColor", value)
            }
            description="Color for clickable links"
          />
          <ColorPicker
            label="Background Color"
            value={
              config.businessInfo?.legalPages?.termsOfService
                ?.backgroundColor || "#ffffff"
            }
            onChange={(value: string) =>
              updateLegalPage("termsOfService", "backgroundColor", value)
            }
            description="Page background color"
          />
          <ColorPicker
            label="Text Color"
            value={
              config.businessInfo?.legalPages?.termsOfService?.textColor ||
              "#1f1f1f"
            }
            onChange={(value: string) =>
              updateLegalPage("termsOfService", "textColor", value)
            }
            description="Main text color"
          />
          <ColorPicker
            label="Border Color"
            value={
              config.businessInfo?.legalPages?.termsOfService?.borderColor ||
              "#e5e7eb"
            }
            onChange={(value: string) =>
              updateLegalPage("termsOfService", "borderColor", value)
            }
            description="Border and divider color"
          />
          <ColorPicker
            label="Disclaimer Background"
            value={
              config.businessInfo?.legalPages?.termsOfService
                ?.disclaimerBgColor || "#f9fafb"
            }
            onChange={(value: string) =>
              updateLegalPage("termsOfService", "disclaimerBgColor", value)
            }
            description="Background for disclaimer sections"
          />
          <ColorPicker
            label="Disclaimer Text"
            value={
              config.businessInfo?.legalPages?.termsOfService
                ?.disclaimerTextColor || "#374151"
            }
            onChange={(value: string) =>
              updateLegalPage("termsOfService", "disclaimerTextColor", value)
            }
            description="Text color for disclaimers"
          />
        </div>
      </div>

      {/* Tips */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
        <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
          💡 Pro Tips
        </h4>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• Keep company information consistent across all pages</li>
          <li>
            • Use brand colors for legal page styling to maintain consistency
          </li>
          <li>
            • Ensure legal page colors provide good contrast for readability
          </li>
          <li>
            • Contact information should match what's displayed on other pages
          </li>
        </ul>
      </div>
    </div>
  );
}
