export type IndustryId =
  | "agriculture-and-farming"
  | "automotive"
  | "beauty-and-personal-care"
  | "construction-and-property"
  | "creative-and-media"
  | "education-and-training"
  | "events-and-entertainment"
  | "finance-and-insurance"
  | "fitness-and-sports"
  | "food-and-beverage"
  | "healthcare-and-social-care"
  | "hospitality-and-accommodation"
  | "legal-and-consulting"
  | "manufacturing"
  | "marketing-and-advertising"
  | "non-profit-and-community"
  | "professional-services"
  | "retail-and-shopping"
  | "technology-and-digital"
  | "transport-and-logistics"
  | "travel-and-tourism"
  | "other";

export type Industry = {
  value: IndustryId;
  label: string;
};

export const INDUSTRIES: Industry[] = [
  {
    value: "agriculture-and-farming",
    label: "Agriculture & Farming",
  },
  {
    value: "automotive",
    label: "Automotive",
  },
  {
    value: "beauty-and-personal-care",
    label: "Beauty & Personal Care",
  },
  {
    value: "construction-and-property",
    label: "Construction & Property",
  },
  {
    value: "creative-and-media",
    label: "Creative & Media",
  },
  {
    value: "education-and-training",
    label: "Education & Training",
  },
  {
    value: "events-and-entertainment",
    label: "Events & Entertainment",
  },
  {
    value: "finance-and-insurance",
    label: "Finance & Insurance",
  },
  {
    value: "fitness-and-sports",
    label: "Fitness & Sports",
  },
  {
    value: "food-and-beverage",
    label: "Food & Beverage",
  },
  {
    value: "healthcare-and-social-care",
    label: "Healthcare & Social Care",
  },
  {
    value: "hospitality-and-accommodation",
    label: "Hospitality & Accommodation",
  },
  {
    value: "legal-and-consulting",
    label: "Legal & Consulting",
  },
  {
    value: "manufacturing",
    label: "Manufacturing",
  },
  {
    value: "marketing-and-advertising",
    label: "Marketing & Advertising",
  },
  {
    value: "non-profit-and-community",
    label: "Non-profit & Community",
  },
  {
    value: "professional-services",
    label: "Professional Services",
  },
  {
    value: "retail-and-shopping",
    label: "Retail & Shopping",
  },
  {
    value: "technology-and-digital",
    label: "Technology & Digital",
  },
  {
    value: "transport-and-logistics",
    label: "Transport & Logistics",
  },
  {
    value: "travel-and-tourism",
    label: "Travel & Tourism",
  },
  {
    value: "other",
    label: "Other",
  },
];