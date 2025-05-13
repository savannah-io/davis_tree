// This is a simplified version of configFixTypes.ts
// It just returns the config as-is without any complex normalization

// Define the interfaces directly in this file instead of importing
export interface SiteConfig {
  [key: string]: any;
}

export interface FooterStyle {
  gradientFromColor?: string;
  gradientToColor?: string;
  titleColor?: string;
  textColor?: string;
  linkColor?: string;
  linkHoverColor?: string;
  socialIconColor?: string;
  dividerColor?: string;
  quickLinksTitleColor?: string;
  contactInfoTitleColor?: string;
  infoTitleColor?: string;
  joinButtonBgColor?: string;
  joinButtonTextColor?: string;
  joinButtonHoverBgColor?: string;
  hoursCardBgColor?: string;
  hoursCardTextColor?: string;
  hoursCardValueColor?: string;
  copyrightTextColor?: string;
  policyLinkColor?: string;
  policyLinkHoverColor?: string;
  [key: string]: any;
}

export interface SocialLinks {
  twitter?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  [key: string]: any;
}

/**
 * Normalizes the configuration to ensure it has the complete expected structure
 * This simplified version just returns the config without modification
 */
export function normalizeConfig(config: any): SiteConfig {
  // Simply return the config as-is
  return config as SiteConfig;
}

/**
 * Get social links with proper defaults
 */
export function getSocialLinks(config: any): SocialLinks {
  return config.socialLinks || {};
}

/**
 * Get footer style with proper defaults
 */
export function getFooterStyle(config: any): FooterStyle {
  return config.footerStyle || {};
}