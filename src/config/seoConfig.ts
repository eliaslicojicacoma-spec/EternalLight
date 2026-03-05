import { siteConfig } from "./siteConfig";

export const seoConfig = {
  siteName: siteConfig.name,
  titleTemplate: `%s | ${siteConfig.name}`,
  defaultTitle: siteConfig.title,
  defaultDescription: siteConfig.description,
  twitterHandle: "@",
  image: "/images/og/preview.jpg",
};
