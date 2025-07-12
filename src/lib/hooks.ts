import { CONTENT, ALERTS } from "@/lib/constants";

// Custom hook for page content based on page type
export function usePageContent(pageType: "home" | "dashboard") {
  const content = CONTENT[pageType];
  const alert = ALERTS[pageType];

  return {
    headline: content.headline,
    description: content.description,
    illustration: content.illustration,
    listItems: [...content.listItems], // Convert readonly array to mutable array
    alert: {
      title: alert.title,
      description: alert.description,
    },
  };
}
