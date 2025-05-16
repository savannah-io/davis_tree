# Custom Cursor Implementation

This document explains how to use and configure the custom cursor in your application.

## Overview

The Custom Cursor replaces the default browser cursor with a custom image that follows the user's mouse movements across the screen.

## Components

1. **CustomCursor.tsx**: The core component that displays and manages the custom cursor.
2. **CursorProvider.tsx**: A wrapper component that configures and applies the custom cursor to your application.

## Implementation

To add the custom cursor to your application:

1. Import the `CursorProvider` in your main layout file:

```tsx
import CursorProvider from "@/components/CursorProvider";
```

2. Wrap your application with the `CursorProvider`:

```tsx
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CursorProvider>
      {/* Your app content */}
      {children}
    </CursorProvider>
  );
}
```

## Configuration

You can customize the cursor by modifying the settings in the `localConfig.ts` file:

```typescript
cursor: {
  enabled: true, // Enable/disable the custom cursor
  cursorImage: "leaf.png", // Filename of the cursor image (placed in public/cursor/ directory)
},
```

## Custom Cursor Images

To use your own cursor images:

1. Place your custom cursor images in the `public/cursor/` directory.
2. Update the `cursorImage` property in the `localConfig.ts` file to reference your image file.
3. Make sure your cursor images are appropriately sized (recommended: 32x32 pixels).

## Troubleshooting

If the custom cursor is not working:

1. Ensure the `CursorProvider` is properly imported and wrapped around your application.
2. Check that the `enabled` property in the cursor settings is set to `true`.
3. Verify that the cursor image file exists in the specified location.
4. Check the browser console for any errors related to loading the image.
5. Ensure there are no conflicting z-index values that might hide the cursor.

## Notes for Mobile Usage

The custom cursor is designed for desktop use with mouse input. On touch devices, the custom cursor will not be visible as it depends on mouse events.
