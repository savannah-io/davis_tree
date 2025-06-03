"use client";

import React, { useState } from "react";
import { ColorPicker, TextInput } from "../ui";

interface FooterSectionProps {
  config: any;
  updateConfig: (config: any) => void;
}

export function FooterSection({ config, updateConfig }: FooterSectionProps) {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    styling: true,
    content: false,
    links: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const updateFooterStyle = (field: string, value: any) => {
    const newConfig = {
      ...config,
      footerStyle: {
        ...config.footerStyle,
        [field]: value,
      },
    };
    updateConfig(newConfig);
  };

  const updateFooterField = (field: string, value: any) => {
    const newConfig = {
      ...config,
      [field]: value,
    };
    updateConfig(newConfig);
  };

  const footerStyle = config.footerStyle || {};

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl flex items-center justify-center">
            <span className="text-2xl">👣</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Footer Settings
            </h2>
            <p className="text-gray-600">
              Configure your footer styling, content, and links
            </p>
          </div>
        </div>
      </div>

      {/* Footer Styling */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <button
          onClick={() => toggleSection("styling")}
          className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-slate-50 hover:from-gray-100 hover:to-slate-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎨</span>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800">
                Footer Styling
              </h3>
              <p className="text-sm text-gray-600">
                Colors, gradients, and visual styling
              </p>
            </div>
          </div>
          <div
            className={`transform transition-transform ${
              expandedSections.styling ? "rotate-180" : ""
            }`}
          >
            <svg
              className="w-5 h-5 text-gray-600"
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

        {expandedSections.styling && (
          <div className="p-6 space-y-6">
            {/* Background Colors */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-gray-800 mb-4 flex items-center gap-2">
                🎨 Background Colors
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorPicker
                  label="Background Color"
                  value={footerStyle.backgroundColor || "#ffffff"}
                  onChange={(value: string) =>
                    updateFooterStyle("backgroundColor", value)
                  }
                  description="Main footer background"
                />
                <ColorPicker
                  label="Gradient From"
                  value={footerStyle.gradientFromColor || "#9effcd"}
                  onChange={(value: string) =>
                    updateFooterStyle("gradientFromColor", value)
                  }
                  description="Gradient start color"
                />
                <ColorPicker
                  label="Gradient To"
                  value={footerStyle.gradientToColor || "#ffffff"}
                  onChange={(value: string) =>
                    updateFooterStyle("gradientToColor", value)
                  }
                  description="Gradient end color"
                />
                <ColorPicker
                  label="Divider Color"
                  value={footerStyle.dividerColor || "rgba(253, 201, 201, 0.2)"}
                  onChange={(value: string) =>
                    updateFooterStyle("dividerColor", value)
                  }
                  description="Section divider color"
                />
              </div>
            </div>

            {/* Text Colors */}
            <div className="bg-slate-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-slate-800 mb-4 flex items-center gap-2">
                📝 Text Colors
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorPicker
                  label="Title Color"
                  value={footerStyle.titleColor || "#000000"}
                  onChange={(value: string) =>
                    updateFooterStyle("titleColor", value)
                  }
                  description="Footer titles color"
                />
                <ColorPicker
                  label="Text Color"
                  value={footerStyle.textColor || "#000000"}
                  onChange={(value: string) =>
                    updateFooterStyle("textColor", value)
                  }
                  description="Footer text color"
                />
                <ColorPicker
                  label="Link Color"
                  value={footerStyle.linkColor || "#000000"}
                  onChange={(value: string) =>
                    updateFooterStyle("linkColor", value)
                  }
                  description="Footer links color"
                />
                <ColorPicker
                  label="Link Hover Color"
                  value={footerStyle.linkHoverColor || "#53a584"}
                  onChange={(value: string) =>
                    updateFooterStyle("linkHoverColor", value)
                  }
                  description="Footer links hover color"
                />
                <ColorPicker
                  label="Copyright Text"
                  value={footerStyle.copyrightTextColor || "#6b7280"}
                  onChange={(value: string) =>
                    updateFooterStyle("copyrightTextColor", value)
                  }
                  description="Copyright text color"
                />
                <ColorPicker
                  label="Social Icon Color"
                  value={footerStyle.socialIconColor || "#7dd0ae"}
                  onChange={(value: string) =>
                    updateFooterStyle("socialIconColor", value)
                  }
                  description="Social media icons color"
                />
              </div>
            </div>

            {/* Section Colors */}
            <div className="bg-zinc-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-zinc-800 mb-4 flex items-center gap-2">
                📂 Section Colors
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorPicker
                  label="Quick Links Title"
                  value={footerStyle.quickLinksTitleColor || "#ffffff"}
                  onChange={(value: string) =>
                    updateFooterStyle("quickLinksTitleColor", value)
                  }
                  description="Quick links section title"
                />
                <ColorPicker
                  label="Contact Info Title"
                  value={footerStyle.contactInfoTitleColor || "#ffffff"}
                  onChange={(value: string) =>
                    updateFooterStyle("contactInfoTitleColor", value)
                  }
                  description="Contact info section title"
                />
                <ColorPicker
                  label="Info Title Color"
                  value={footerStyle.infoTitleColor || "#ffffff"}
                  onChange={(value: string) =>
                    updateFooterStyle("infoTitleColor", value)
                  }
                  description="General info section title"
                />
                <ColorPicker
                  label="Policy Link Color"
                  value={footerStyle.policyLinkColor || "#f0f0f0"}
                  onChange={(value: string) =>
                    updateFooterStyle("policyLinkColor", value)
                  }
                  description="Policy links color"
                />
                <ColorPicker
                  label="Policy Link Hover"
                  value={footerStyle.policyLinkHoverColor || "#eebfbf"}
                  onChange={(value: string) =>
                    updateFooterStyle("policyLinkHoverColor", value)
                  }
                  description="Policy links hover color"
                />
              </div>
            </div>

            {/* Join Team Button */}
            <div className="bg-green-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-green-800 mb-4 flex items-center gap-2">
                🔘 Join Team Button
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorPicker
                  label="Button Background"
                  value={footerStyle.joinButtonBgColor || "#387e62"}
                  onChange={(value: string) =>
                    updateFooterStyle("joinButtonBgColor", value)
                  }
                  description="Join team button background"
                />
                <ColorPicker
                  label="Button Text Color"
                  value={footerStyle.joinButtonTextColor || "#030303"}
                  onChange={(value: string) =>
                    updateFooterStyle("joinButtonTextColor", value)
                  }
                  description="Join team button text"
                />
                <ColorPicker
                  label="Button Hover Background"
                  value={footerStyle.joinButtonHoverBgColor || "#7dd0ae"}
                  onChange={(value: string) =>
                    updateFooterStyle("joinButtonHoverBgColor", value)
                  }
                  description="Join team button hover background"
                />
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-blue-800 mb-4 flex items-center gap-2">
                🕒 Hours Card
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorPicker
                  label="Card Background"
                  value={
                    footerStyle.hoursCardBgColor || "rgba(245, 245, 245, 0.04)"
                  }
                  onChange={(value: string) =>
                    updateFooterStyle("hoursCardBgColor", value)
                  }
                  description="Hours card background"
                />
                <ColorPicker
                  label="Card Text Color"
                  value={footerStyle.hoursCardTextColor || "#f5f5f5"}
                  onChange={(value: string) =>
                    updateFooterStyle("hoursCardTextColor", value)
                  }
                  description="Hours card text color"
                />
                <ColorPicker
                  label="Card Value Color"
                  value={footerStyle.hoursCardValueColor || "#ffffff"}
                  onChange={(value: string) =>
                    updateFooterStyle("hoursCardValueColor", value)
                  }
                  description="Hours card value color"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Content */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <button
          onClick={() => toggleSection("content")}
          className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">📝</span>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-blue-800">
                Footer Content
              </h3>
              <p className="text-sm text-blue-600">
                Text content and copyright information
              </p>
            </div>
          </div>
          <div
            className={`transform transition-transform ${
              expandedSections.content ? "rotate-180" : ""
            }`}
          >
            <svg
              className="w-5 h-5 text-blue-600"
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

        {expandedSections.content && (
          <div className="p-6 space-y-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-blue-800 mb-4 flex items-center gap-2">
                📄 Content Settings
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="Copyright Text"
                  value={config.copyright || ""}
                  onChange={(value: string) =>
                    updateFooterField("copyright", value)
                  }
                  placeholder="© 2025 Davis Tree Service. All rights reserved."
                  icon="©️"
                />
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={config.showJoinTeamButton || false}
                    onChange={(e) =>
                      updateFooterField("showJoinTeamButton", e.target.checked)
                    }
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label className="text-sm font-medium text-blue-800">
                    Show Join Team Button
                  </label>
                </div>
                <TextInput
                  label="Join Team Text"
                  value={config.joinTeamText || ""}
                  onChange={(value: string) =>
                    updateFooterField("joinTeamText", value)
                  }
                  placeholder="Join the Team"
                  icon="👥"
                />
                <TextInput
                  label="Join Team Link"
                  value={config.joinTeamLink || ""}
                  onChange={(value: string) =>
                    updateFooterField("joinTeamLink", value)
                  }
                  placeholder="/careers"
                  icon="🔗"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Links */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <button
          onClick={() => toggleSection("links")}
          className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🔗</span>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-green-800">
                Footer Links
              </h3>
              <p className="text-sm text-green-600">
                Navigation and social media links
              </p>
            </div>
          </div>
          <div
            className={`transform transition-transform ${
              expandedSections.links ? "rotate-180" : ""
            }`}
          >
            <svg
              className="w-5 h-5 text-green-600"
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

        {expandedSections.links && (
          <div className="p-6 space-y-6">
            <div className="bg-green-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-green-800 mb-4 flex items-center gap-2">
                🔗 Social Media Links
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="Facebook URL"
                  value={config.socialLinks?.facebook || ""}
                  onChange={(value: string) =>
                    updateFooterField("socialLinks", {
                      ...config.socialLinks,
                      facebook: value,
                    })
                  }
                  placeholder="https://facebook.com/company"
                  icon="📘"
                />
                <TextInput
                  label="Twitter URL"
                  value={config.socialLinks?.twitter || ""}
                  onChange={(value: string) =>
                    updateFooterField("socialLinks", {
                      ...config.socialLinks,
                      twitter: value,
                    })
                  }
                  placeholder="https://twitter.com/company"
                  icon="🐦"
                />
                <TextInput
                  label="LinkedIn URL"
                  value={config.socialLinks?.linkedin || ""}
                  onChange={(value: string) =>
                    updateFooterField("socialLinks", {
                      ...config.socialLinks,
                      linkedin: value,
                    })
                  }
                  placeholder="https://linkedin.com/company/company"
                  icon="💼"
                />
                <TextInput
                  label="Instagram URL"
                  value={config.socialLinks?.instagram || ""}
                  onChange={(value: string) =>
                    updateFooterField("socialLinks", {
                      ...config.socialLinks,
                      instagram: value,
                    })
                  }
                  placeholder="https://instagram.com/company"
                  icon="📸"
                />
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-emerald-800 mb-4 flex items-center gap-2">
                📋 Footer Navigation
              </h4>
              <div className="space-y-3">
                {(config.footerLinks || []).map((link: any, index: number) => (
                  <div key={index} className="grid grid-cols-2 gap-3">
                    <TextInput
                      label={`Link ${index + 1} Label`}
                      value={link.label || ""}
                      onChange={(value: string) => {
                        const links = [...(config.footerLinks || [])];
                        links[index] = { ...links[index], label: value };
                        updateFooterField("footerLinks", links);
                      }}
                      placeholder="Link text"
                      icon="📝"
                    />
                    <TextInput
                      label={`Link ${index + 1} Path`}
                      value={link.path || ""}
                      onChange={(value: string) => {
                        const links = [...(config.footerLinks || [])];
                        links[index] = { ...links[index], path: value };
                        updateFooterField("footerLinks", links);
                      }}
                      placeholder="/page"
                      icon="🔗"
                    />
                  </div>
                ))}
                <p className="text-sm text-emerald-700 italic">
                  Footer links are automatically synced with navigation links
                </p>
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
          <li>• Use consistent colors that match your site's overall theme</li>
          <li>• Ensure good contrast between text and background colors</li>
          <li>• Test social media links to make sure they work correctly</li>
          <li>• Keep copyright information up to date</li>
          <li>• Consider using gradient backgrounds for visual appeal</li>
        </ul>
      </div>
    </div>
  );
}
