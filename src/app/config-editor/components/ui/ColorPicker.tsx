"use client";

import React, { useState } from "react";

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  description?: string;
}

export function ColorPicker({
  label,
  value,
  onChange,
  description,
}: ColorPickerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Common color presets for quick selection
  const colorPresets = [
    "#53a584",
    "#66bf9b",
    "#387e62",
    "#246043",
    "#3b82f6",
    "#1d4ed8",
    "#1e40af",
    "#1e3a8a",
    "#ef4444",
    "#dc2626",
    "#b91c1c",
    "#991b1b",
    "#f59e0b",
    "#d97706",
    "#b45309",
    "#92400e",
    "#8b5cf6",
    "#7c3aed",
    "#6d28d9",
    "#5b21b6",
    "#ec4899",
    "#db2777",
    "#be185d",
    "#9d174d",
    "#10b981",
    "#059669",
    "#047857",
    "#065f46",
    "#6b7280",
    "#4b5563",
    "#374151",
    "#1f2937",
    "#ffffff",
    "#f9fafb",
    "#f3f4f6",
    "#e5e7eb",
    "#000000",
    "#111827",
    "#1f2937",
    "#374151",
  ];

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      {/* Color Display & Input */}
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-lg border-2 border-gray-300 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: value }}
          onClick={() => setIsExpanded(!isExpanded)}
        />
        <div className="flex-1">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
            placeholder="#000000"
          />
          {description && (
            <p className="text-xs text-gray-500 mt-1">{description}</p>
          )}
        </div>
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-12 h-12 rounded-lg border-2 border-gray-300 cursor-pointer"
        />
      </div>

      {/* Color Presets */}
      {isExpanded && (
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h4 className="text-sm font-medium text-gray-700 mb-3">
            Quick Colors
          </h4>
          <div className="grid grid-cols-8 gap-2">
            {colorPresets.map((color, index) => (
              <button
                key={index}
                onClick={() => {
                  onChange(color);
                  setIsExpanded(false);
                }}
                className={`w-8 h-8 rounded-md border-2 hover:scale-110 transition-transform ${
                  color === value
                    ? "border-blue-500 ring-2 ring-blue-200"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
