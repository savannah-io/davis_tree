"use client";

import React, { useState } from "react";
import { ColorPicker, TextInput } from "../ui";

interface ReviewsPageSectionProps {
  config: any;
  updateConfig: (config: any) => void;
}

export function ReviewsPageSection({
  config,
  updateConfig,
}: ReviewsPageSectionProps) {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    hero: true,
    reviews: false,
    share: false,
    cta: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const updateReviewsPage = (field: string, value: any) => {
    const newConfig = {
      ...config,
      pages: {
        ...config.pages,
        Reviews: {
          ...config.pages?.Reviews,
          [field]: value,
        },
      },
    };
    updateConfig(newConfig);
  };

  const reviewsPage = config.pages?.Reviews || {};

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="border-b border-blue-200 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
            <span className="text-2xl">⭐</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Reviews Page Settings
            </h2>
            <p className="text-gray-600">
              Configure your reviews page hero, review display, and interactions
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <button
          onClick={() => toggleSection("hero")}
          className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🦸</span>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-blue-800">
                Hero Section
              </h3>
              <p className="text-sm text-blue-600">
                Hero banner, title, and statistics
              </p>
            </div>
          </div>
          <div
            className={`transform transition-transform ${
              expandedSections.hero ? "rotate-180" : ""
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

        {expandedSections.hero && (
          <div className="p-6 space-y-6">
            {/* Hero Content */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-blue-800 mb-4 flex items-center gap-2">
                📝 Hero Content
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="Page Title"
                  value={reviewsPage.title || ""}
                  onChange={(value: string) =>
                    updateReviewsPage("title", value)
                  }
                  placeholder="Community Reviews"
                  icon="📋"
                />
                <ColorPicker
                  label="Title Color"
                  value={reviewsPage.heroTitleColor || "#ffffff"}
                  onChange={(value: string) =>
                    updateReviewsPage("heroTitleColor", value)
                  }
                  description="Hero title color"
                />
                <div className="md:col-span-2">
                  <TextInput
                    label="Subtitle"
                    value={reviewsPage.subtitle || ""}
                    onChange={(value: string) =>
                      updateReviewsPage("subtitle", value)
                    }
                    placeholder="We're proud of the work we do and the trust our customers place in us."
                    icon="💬"
                  />
                </div>
                <ColorPicker
                  label="Subtitle Color"
                  value={reviewsPage.heroSubtitleColor || "#ffffff"}
                  onChange={(value: string) =>
                    updateReviewsPage("heroSubtitleColor", value)
                  }
                  description="Hero subtitle color"
                />
              </div>
            </div>

            {/* Hero Badge */}
            <div className="bg-indigo-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-indigo-800 mb-4 flex items-center gap-2">
                🏷️ Hero Badge
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="Badge Text"
                  value={reviewsPage.badge || ""}
                  onChange={(value: string) =>
                    updateReviewsPage("badge", value)
                  }
                  placeholder="Verified Google Reviews"
                  icon="🏷️"
                />
                <ColorPicker
                  label="Badge Background"
                  value={reviewsPage.heroBadgeBgColor || "#ffffff10"}
                  onChange={(value: string) =>
                    updateReviewsPage("heroBadgeBgColor", value)
                  }
                  description="Badge background color"
                />
                <ColorPicker
                  label="Badge Text Color"
                  value={reviewsPage.heroBadgeTextColor || "#ffffff"}
                  onChange={(value: string) =>
                    updateReviewsPage("heroBadgeTextColor", value)
                  }
                  description="Badge text color"
                />
                <ColorPicker
                  label="Badge Icon Color"
                  value={reviewsPage.heroBadgeIconColor || "#60a5fa"}
                  onChange={(value: string) =>
                    updateReviewsPage("heroBadgeIconColor", value)
                  }
                  description="Badge icon color"
                />
              </div>
            </div>

            {/* Hero Stats */}
            <div className="bg-purple-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-purple-800 mb-4 flex items-center gap-2">
                📊 Hero Statistics Cards
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="Stats Card 1 Title"
                  value={reviewsPage.statsCard1Title || ""}
                  onChange={(value: string) =>
                    updateReviewsPage("statsCard1Title", value)
                  }
                  placeholder="Verified Reviews"
                  icon="1️⃣"
                />
                <ColorPicker
                  label="Stats Card 1 Icon Color"
                  value={reviewsPage.statsCard1IconColor || "#60a5fa"}
                  onChange={(value: string) =>
                    updateReviewsPage("statsCard1IconColor", value)
                  }
                  description="Stats card 1 icon color"
                />
                <TextInput
                  label="Stats Card 2 Title"
                  value={reviewsPage.statsCard2Title || ""}
                  onChange={(value: string) =>
                    updateReviewsPage("statsCard2Title", value)
                  }
                  placeholder="Average Rating"
                  icon="2️⃣"
                />
                <ColorPicker
                  label="Stats Card 2 Icon Color"
                  value={reviewsPage.statsCard2IconColor || "#facc15"}
                  onChange={(value: string) =>
                    updateReviewsPage("statsCard2IconColor", value)
                  }
                  description="Stats card 2 icon color"
                />
              </div>
            </div>

            {/* Hero Background */}
            <div className="bg-cyan-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-cyan-800 mb-4 flex items-center gap-2">
                🎨 Hero Background
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="Hero Image"
                  value={reviewsPage.heroImage || ""}
                  onChange={(value: string) =>
                    updateReviewsPage("heroImage", value)
                  }
                  placeholder="/images/reviews-hero.jpg"
                  icon="🖼️"
                />
                <ColorPicker
                  label="Background Gradient From"
                  value={reviewsPage.heroBgGradientFrom || "#367658"}
                  onChange={(value: string) =>
                    updateReviewsPage("heroBgGradientFrom", value)
                  }
                  description="Background gradient start"
                />
                <ColorPicker
                  label="Background Gradient Via"
                  value={reviewsPage.heroBgGradientVia || "#11492d"}
                  onChange={(value: string) =>
                    updateReviewsPage("heroBgGradientVia", value)
                  }
                  description="Background gradient middle"
                />
                <ColorPicker
                  label="Background Gradient To"
                  value={reviewsPage.heroBgGradientTo || "#0c2217"}
                  onChange={(value: string) =>
                    updateReviewsPage("heroBgGradientTo", value)
                  }
                  description="Background gradient end"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Reviews Display */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <button
          onClick={() => toggleSection("reviews")}
          className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">💬</span>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-yellow-800">
                Reviews Display
              </h3>
              <p className="text-sm text-yellow-600">
                Review cards, colors, and pagination
              </p>
            </div>
          </div>
          <div
            className={`transform transition-transform ${
              expandedSections.reviews ? "rotate-180" : ""
            }`}
          >
            <svg
              className="w-5 h-5 text-yellow-600"
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

        {expandedSections.reviews && (
          <div className="p-6 space-y-6">
            {/* Review Cards */}
            <div className="bg-yellow-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-yellow-800 mb-4 flex items-center gap-2">
                💳 Review Cards
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorPicker
                  label="Card Background"
                  value={reviewsPage.reviewCardBgColor || "#ffffff"}
                  onChange={(value: string) =>
                    updateReviewsPage("reviewCardBgColor", value)
                  }
                  description="Review card background"
                />
                <ColorPicker
                  label="Card Border"
                  value={reviewsPage.reviewCardBorderColor || "#e5e7eb"}
                  onChange={(value: string) =>
                    updateReviewsPage("reviewCardBorderColor", value)
                  }
                  description="Review card border color"
                />
                <ColorPicker
                  label="Card Text Color"
                  value={reviewsPage.reviewCardTextColor || "#4b5563"}
                  onChange={(value: string) =>
                    updateReviewsPage("reviewCardTextColor", value)
                  }
                  description="Review text color"
                />
                <ColorPicker
                  label="Author Name Color"
                  value={reviewsPage.reviewCardAuthorNameColor || "#111827"}
                  onChange={(value: string) =>
                    updateReviewsPage("reviewCardAuthorNameColor", value)
                  }
                  description="Author name color"
                />
                <ColorPicker
                  label="Star Color"
                  value={reviewsPage.reviewCardStarColor || "#facc15"}
                  onChange={(value: string) =>
                    updateReviewsPage("reviewCardStarColor", value)
                  }
                  description="Review star color"
                />
                <ColorPicker
                  label="Star Empty Color"
                  value={reviewsPage.reviewCardStarEmptyColor || "#d1d5db"}
                  onChange={(value: string) =>
                    updateReviewsPage("reviewCardStarEmptyColor", value)
                  }
                  description="Empty star color"
                />
              </div>
            </div>

            {/* Review Avatars */}
            <div className="bg-orange-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-orange-800 mb-4 flex items-center gap-2">
                👤 Review Avatars
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorPicker
                  label="Avatar Text Color"
                  value={reviewsPage.reviewAvatarTextColor || "#ffffff"}
                  onChange={(value: string) =>
                    updateReviewsPage("reviewAvatarTextColor", value)
                  }
                  description="Avatar text color"
                />
                <div className="md:col-span-2">
                  <p className="text-sm text-orange-700 mb-2">
                    Avatar Background Colors (8 colors for variety)
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {(reviewsPage.reviewAvatarColors || []).map(
                      (color: string, index: number) => (
                        <ColorPicker
                          key={index}
                          label={`Color ${index + 1}`}
                          value={color}
                          onChange={(value: string) => {
                            const colors = [
                              ...(reviewsPage.reviewAvatarColors || []),
                            ];
                            colors[index] = value;
                            updateReviewsPage("reviewAvatarColors", colors);
                          }}
                          description={`Avatar color ${index + 1}`}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="bg-red-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-red-800 mb-4 flex items-center gap-2">
                📄 Pagination
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorPicker
                  label="Button Background"
                  value={reviewsPage.paginationButtonBgColor || "#2563eb"}
                  onChange={(value: string) =>
                    updateReviewsPage("paginationButtonBgColor", value)
                  }
                  description="Pagination button background"
                />
                <ColorPicker
                  label="Button Text Color"
                  value={reviewsPage.paginationButtonTextColor || "#ffffff"}
                  onChange={(value: string) =>
                    updateReviewsPage("paginationButtonTextColor", value)
                  }
                  description="Pagination button text color"
                />
                <ColorPicker
                  label="Pagination Text Color"
                  value={reviewsPage.paginationTextColor || "#4b5563"}
                  onChange={(value: string) =>
                    updateReviewsPage("paginationTextColor", value)
                  }
                  description="Pagination info text color"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Share Experience */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <button
          onClick={() => toggleSection("share")}
          className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">📝</span>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-green-800">
                Share Experience
              </h3>
              <p className="text-sm text-green-600">
                Write review section styling
              </p>
            </div>
          </div>
          <div
            className={`transform transition-transform ${
              expandedSections.share ? "rotate-180" : ""
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

        {expandedSections.share && (
          <div className="p-6 space-y-6">
            {/* Share Experience Content */}
            <div className="bg-green-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-green-800 mb-4 flex items-center gap-2">
                📝 Share Content
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="Section Title"
                  value={reviewsPage.shareExperienceTitle || ""}
                  onChange={(value: string) =>
                    updateReviewsPage("shareExperienceTitle", value)
                  }
                  placeholder="Share Your Experience"
                  icon="📋"
                />
                <ColorPicker
                  label="Title Color"
                  value={reviewsPage.shareExperienceTitleColor || "#111827"}
                  onChange={(value: string) =>
                    updateReviewsPage("shareExperienceTitleColor", value)
                  }
                  description="Share section title color"
                />
                <div className="md:col-span-2">
                  <TextInput
                    label="Section Subtitle"
                    value={reviewsPage.shareExperienceSubtitle || ""}
                    onChange={(value: string) =>
                      updateReviewsPage("shareExperienceSubtitle", value)
                    }
                    placeholder="Help others by sharing your experience with us"
                    icon="💬"
                  />
                </div>
                <ColorPicker
                  label="Subtitle Color"
                  value={reviewsPage.shareExperienceSubtitleColor || "#4b5563"}
                  onChange={(value: string) =>
                    updateReviewsPage("shareExperienceSubtitleColor", value)
                  }
                  description="Share section subtitle color"
                />
              </div>
            </div>

            {/* Share Button */}
            <div className="bg-emerald-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-emerald-800 mb-4 flex items-center gap-2">
                🔘 Share Button
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="Button Text"
                  value={reviewsPage.shareButtonText || ""}
                  onChange={(value: string) =>
                    updateReviewsPage("shareButtonText", value)
                  }
                  placeholder="Write a Review on Google"
                  icon="📝"
                />
                <TextInput
                  label="Button Link"
                  value={reviewsPage.shareButtonLink || ""}
                  onChange={(value: string) =>
                    updateReviewsPage("shareButtonLink", value)
                  }
                  placeholder="https://g.co/kgs/NVDcU7f"
                  icon="🔗"
                />
                <ColorPicker
                  label="Button Background"
                  value={reviewsPage.shareButtonBgColor || "#0f3622"}
                  onChange={(value: string) =>
                    updateReviewsPage("shareButtonBgColor", value)
                  }
                  description="Share button background"
                />
                <ColorPicker
                  label="Button Text Color"
                  value={reviewsPage.shareButtonTextColor || "#ffffff"}
                  onChange={(value: string) =>
                    updateReviewsPage("shareButtonTextColor", value)
                  }
                  description="Share button text color"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <button
          onClick={() => toggleSection("cta")}
          className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">📢</span>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-indigo-800">
                Call to Action
              </h3>
              <p className="text-sm text-indigo-600">Bottom CTA section</p>
            </div>
          </div>
          <div
            className={`transform transition-transform ${
              expandedSections.cta ? "rotate-180" : ""
            }`}
          >
            <svg
              className="w-5 h-5 text-indigo-600"
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
            <div className="bg-indigo-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-indigo-800 mb-4 flex items-center gap-2">
                📝 CTA Content
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="CTA Title"
                  value={reviewsPage.ctaTitle || ""}
                  onChange={(value: string) =>
                    updateReviewsPage("ctaTitle", value)
                  }
                  placeholder="Ready to Get Your Car Back to Perfect?"
                  icon="📋"
                />
                <ColorPicker
                  label="Title Color"
                  value={reviewsPage.ctaTitleColor || "#ffffff"}
                  onChange={(value: string) =>
                    updateReviewsPage("ctaTitleColor", value)
                  }
                  description="CTA title color"
                />
                <div className="md:col-span-2">
                  <TextInput
                    label="CTA Description"
                    value={reviewsPage.ctaDescription || ""}
                    onChange={(value: string) =>
                      updateReviewsPage("ctaDescription", value)
                    }
                    placeholder="Schedule your appointment today and experience the difference expert auto body repair makes."
                    icon="💬"
                  />
                </div>
                <ColorPicker
                  label="Description Color"
                  value={reviewsPage.ctaDescriptionColor || "#93c5fd"}
                  onChange={(value: string) =>
                    updateReviewsPage("ctaDescriptionColor", value)
                  }
                  description="CTA description color"
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="bg-purple-50 rounded-xl p-6">
              <h4 className="text-md font-semibold text-purple-800 mb-4 flex items-center gap-2">
                🔘 CTA Buttons
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="Schedule Button Text"
                  value={reviewsPage.ctaScheduleButtonText || ""}
                  onChange={(value: string) =>
                    updateReviewsPage("ctaScheduleButtonText", value)
                  }
                  placeholder="Schedule Now"
                  icon="📅"
                />
                <ColorPicker
                  label="Schedule Button Background"
                  value={reviewsPage.ctaScheduleButtonBgColor || "#ffffff"}
                  onChange={(value: string) =>
                    updateReviewsPage("ctaScheduleButtonBgColor", value)
                  }
                  description="Schedule button background"
                />
                <TextInput
                  label="Call Button Text"
                  value={reviewsPage.ctaCallButtonText || ""}
                  onChange={(value: string) =>
                    updateReviewsPage("ctaCallButtonText", value)
                  }
                  placeholder="Call Us Now"
                  icon="📞"
                />
                <ColorPicker
                  label="Call Button Background"
                  value={reviewsPage.ctaCallButtonBgColor || "#2563eb"}
                  onChange={(value: string) =>
                    updateReviewsPage("ctaCallButtonBgColor", value)
                  }
                  description="Call button background"
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
          <li>
            • Use high contrast colors for review text to ensure readability
          </li>
          <li>• Make star ratings visually prominent with bright colors</li>
          <li>• Ensure avatar colors provide good contrast for initials</li>
          <li>• Test the Google review link to make sure it works correctly</li>
          <li>• Keep pagination buttons easily clickable and visible</li>
        </ul>
      </div>
    </div>
  );
}
