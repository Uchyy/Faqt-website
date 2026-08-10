import { IndustryId } from "./Industry";

export type BusinessType = {
  value: string;
  label: string;
  industry: IndustryId;
};

export const BUSINESS_TYPES: BusinessType[] = [

  // Agriculture & Farming
  {
    value: "farmer",
    label: "Farmer",
    industry: "agriculture-and-farming",
  },
  {
    value: "farm-shop",
    label: "Farm Shop",
    industry: "agriculture-and-farming",
  },
  {
    value: "agricultural-services",
    label: "Agricultural Services",
    industry: "agriculture-and-farming",
  },
  {
    value: "landscaper",
    label: "Landscaper",
    industry: "agriculture-and-farming",
  },
  {
    value: "garden-centre",
    label: "Garden Centre",
    industry: "agriculture-and-farming",
  },
  {
    value: "florist",
    label: "Florist",
    industry: "agriculture-and-farming",
  },
  {
    value: "other-agriculture",
    label: "Other",
    industry: "agriculture-and-farming",
  },



  // Automotive
  {
    value: "mechanic",
    label: "Mechanic",
    industry: "automotive",
  },
  {
    value: "auto-electrician",
    label: "Auto Electrician",
    industry: "automotive",
  },
  {
    value: "car-detailer",
    label: "Car Detailer",
    industry: "automotive",
  },
  {
    value: "car-valeting",
    label: "Car Valeting",
    industry: "automotive",
  },
  {
    value: "mot-centre",
    label: "MOT Centre",
    industry: "automotive",
  },
  {
    value: "tyre-service",
    label: "Tyre Service",
    industry: "automotive",
  },
  {
    value: "body-shop",
    label: "Body Shop",
    industry: "automotive",
  },
  {
    value: "vehicle-recovery",
    label: "Vehicle Recovery",
    industry: "automotive",
  },
  {
    value: "car-dealer",
    label: "Car Dealer",
    industry: "automotive",
  },
  {
    value: "motorcycle-dealer",
    label: "Motorcycle Dealer",
    industry: "automotive",
  },
  {
    value: "motorcycle-repair",
    label: "Motorcycle Repair",
    industry: "automotive",
  },
  {
    value: "other-automotive",
    label: "Other",
    industry: "automotive",
  },

  

  // Beauty & Personal Care
  {
    value: "hairdresser",
    label: "Hairdresser",
    industry: "beauty-and-personal-care",
  },
  {
    value: "hair-stylist",
    label: "Hair Stylist",
    industry: "beauty-and-personal-care",
  },
  {
    value: "barber",
    label: "Barber",
    industry: "beauty-and-personal-care",
  },
  {
    value: "nail-technician",
    label: "Nail Technician",
    industry: "beauty-and-personal-care",
  },
  {
    value: "makeup-artist",
    label: "Makeup Artist",
    industry: "beauty-and-personal-care",
  },
  {
    value: "beautician",
    label: "Beautician",
    industry: "beauty-and-personal-care",
  },
  {
    value: "lash-technician",
    label: "Lash Technician",
    industry: "beauty-and-personal-care",
  },
  {
    value: "brow-specialist",
    label: "Brow Specialist",
    industry: "beauty-and-personal-care",
  },
  {
    value: "beauty-salon",
    label: "Beauty Salon",
    industry: "beauty-and-personal-care",
  },
  {
    value: "hair-salon",
    label: "Hair Salon",
    industry: "beauty-and-personal-care",
  },
  {
    value: "spa",
    label: "Spa",
    industry: "beauty-and-personal-care",
  },
  {
    value: "aesthetics-practitioner",
    label: "Aesthetics Practitioner",
    industry: "beauty-and-personal-care",
  },
  {
    value: "massage-therapist",
    label: "Massage Therapist",
    industry: "beauty-and-personal-care",
  },
  {
    value: "tattoo-artist",
    label: "Tattoo Artist",
    industry: "beauty-and-personal-care",
  },
  {
    value: "piercing-artist",
    label: "Piercing Artist",
    industry: "beauty-and-personal-care",
  },
  {
    value: "other-beauty",
    label: "Other",
    industry: "beauty-and-personal-care",
  },



  // Construction & Property
  {
    value: "builder",
    label: "Builder",
    industry: "construction-and-property",
  },
  {
    value: "building-contractor",
    label: "Building Contractor",
    industry: "construction-and-property",
  },
  {
    value: "architect",
    label: "Architect",
    industry: "construction-and-property",
  },
  {
    value: "property-developer",
    label: "Property Developer",
    industry: "construction-and-property",
  },
  {
    value: "estate-agent",
    label: "Estate Agent",
    industry: "construction-and-property",
  },
  {
    value: "letting-agent",
    label: "Letting Agent",
    industry: "construction-and-property",
  },
  {
    value: "property-manager",
    label: "Property Manager",
    industry: "construction-and-property",
  },
  {
    value: "plumber",
    label: "Plumber",
    industry: "construction-and-property",
  },
  {
    value: "electrician",
    label: "Electrician",
    industry: "construction-and-property",
  },
  {
    value: "carpenter",
    label: "Carpenter",
    industry: "construction-and-property",
  },
  {
    value: "joiner",
    label: "Joiner",
    industry: "construction-and-property",
  },
  {
    value: "roofer",
    label: "Roofer",
    industry: "construction-and-property",
  },
  {
    value: "bricklayer",
    label: "Bricklayer",
    industry: "construction-and-property",
  },
  {
    value: "plasterer",
    label: "Plasterer",
    industry: "construction-and-property",
  },
  {
    value: "tiler",
    label: "Tiler",
    industry: "construction-and-property",
  },
  {
    value: "painter-and-decorator",
    label: "Painter & Decorator",
    industry: "construction-and-property",
  },
  {
    value: "heating-engineer",
    label: "Heating Engineer",
    industry: "construction-and-property",
  },
  {
    value: "locksmith",
    label: "Locksmith",
    industry: "construction-and-property",
  },
  {
    value: "handyman",
    label: "Handyman",
    industry: "construction-and-property",
  },
  {
    value: "cleaner",
    label: "Cleaner",
    industry: "construction-and-property",
  },
  {
    value: "pest-control",
    label: "Pest Control",
    industry: "construction-and-property",
  },
  {
    value: "other-construction-property",
    label: "Other",
    industry: "construction-and-property",
  },



  // Creative & Media
  {
    value: "content-creator",
    label: "Content Creator",
    industry: "creative-and-media",
  },
  {
    value: "influencer",
    label: "Influencer",
    industry: "creative-and-media",
  },
  {
    value: "graphic-designer",
    label: "Graphic Designer",
    industry: "creative-and-media",
  },
  {
    value: "web-designer",
    label: "Web Designer",
    industry: "creative-and-media",
  },
  {
    value: "ux-ui-designer",
    label: "UX/UI Designer",
    industry: "creative-and-media",
  },
  {
    value: "photographer",
    label: "Photographer",
    industry: "creative-and-media",
  },
  {
    value: "videographer",
    label: "Videographer",
    industry: "creative-and-media",
  },
  {
    value: "filmmaker",
    label: "Filmmaker",
    industry: "creative-and-media",
  },
  {
    value: "video-editor",
    label: "Video Editor",
    industry: "creative-and-media",
  },
  {
    value: "illustrator",
    label: "Illustrator",
    industry: "creative-and-media",
  },
  {
    value: "artist",
    label: "Artist",
    industry: "creative-and-media",
  },
  {
    value: "animator",
    label: "Animator",
    industry: "creative-and-media",
  },
  {
    value: "writer",
    label: "Writer",
    industry: "creative-and-media",
  },
  {
    value: "author",
    label: "Author",
    industry: "creative-and-media",
  },
  {
    value: "copywriter",
    label: "Copywriter",
    industry: "creative-and-media",
  },
  {
    value: "musician",
    label: "Musician",
    industry: "creative-and-media",
  },
  {
    value: "dj",
    label: "DJ",
    industry: "creative-and-media",
  },
  {
    value: "podcaster",
    label: "Podcaster",
    industry: "creative-and-media",
  },
  {
    value: "creative-studio",
    label: "Creative Studio",
    industry: "creative-and-media",
  },
  {
    value: "production-company",
    label: "Production Company",
    industry: "creative-and-media",
  },
  {
    value: "other-creative",
    label: "Other",
    industry: "creative-and-media",
  },





  // Education & Training
  {
    value: "tutor",
    label: "Tutor",
    industry: "education-and-training",
  },
  {
    value: "teacher",
    label: "Teacher",
    industry: "education-and-training",
  },
  {
    value: "private-tutor",
    label: "Private Tutor",
    industry: "education-and-training",
  },
  {
    value: "training-provider",
    label: "Training Provider",
    industry: "education-and-training",
  },
  {
    value: "coach",
    label: "Coach",
    industry: "education-and-training",
  },
  {
    value: "online-course-provider",
    label: "Online Course Provider",
    industry: "education-and-training",
  },
  {
    value: "language-school",
    label: "Language School",
    industry: "education-and-training",
  },
  {
    value: "driving-instructor",
    label: "Driving Instructor",
    industry: "education-and-training",
  },
  {
    value: "music-teacher",
    label: "Music Teacher",
    industry: "education-and-training",
  },
  {
    value: "dance-teacher",
    label: "Dance Teacher",
    industry: "education-and-training",
  },
  {
    value: "other-education",
    label: "Other",
    industry: "education-and-training",
  },




  // Events & Entertainment
  {
    value: "event-planner",
    label: "Event Planner",
    industry: "events-and-entertainment",
  },
  {
    value: "event-decorator",
    label: "Event Decorator",
    industry: "events-and-entertainment",
  },
  {
    value: "wedding-planner",
    label: "Wedding Planner",
    industry: "events-and-entertainment",
  },
  {
    value: "party-planner",
    label: "Party Planner",
    industry: "events-and-entertainment",
  },
  {
    value: "entertainer",
    label: "Entertainer",
    industry: "events-and-entertainment",
  },
  {
    value: "performer",
    label: "Performer",
    industry: "events-and-entertainment",
  },
  {
    value: "venue",
    label: "Event Venue",
    industry: "events-and-entertainment",
  },
  {
    value: "dj-entertainment",
    label: "DJ & Entertainment",
    industry: "events-and-entertainment",
  },
  {
    value: "other-events",
    label: "Other",
    industry: "events-and-entertainment",
  },







  // Finance & Insurance
  {
    value: "accountant",
    label: "Accountant",
    industry: "finance-and-insurance",
  },
  {
    value: "bookkeeper",
    label: "Bookkeeper",
    industry: "finance-and-insurance",
  },
  {
    value: "financial-advisor",
    label: "Financial Advisor",
    industry: "finance-and-insurance",
  },
  {
    value: "mortgage-advisor",
    label: "Mortgage Advisor",
    industry: "finance-and-insurance",
  },
  {
    value: "insurance-broker",
    label: "Insurance Broker",
    industry: "finance-and-insurance",
  },
  {
    value: "tax-advisor",
    label: "Tax Advisor",
    industry: "finance-and-insurance",
  },
  {
    value: "other-finance",
    label: "Other",
    industry: "finance-and-insurance",
  },




  // Fitness & Sports
  {
    value: "personal-trainer",
    label: "Personal Trainer",
    industry: "fitness-and-sports",
  },
  {
    value: "fitness-instructor",
    label: "Fitness Instructor",
    industry: "fitness-and-sports",
  },
  {
    value: "gym",
    label: "Gym",
    industry: "fitness-and-sports",
  },
  {
    value: "fitness-studio",
    label: "Fitness Studio",
    industry: "fitness-and-sports",
  },
  {
    value: "yoga-instructor",
    label: "Yoga Instructor",
    industry: "fitness-and-sports",
  },
  {
    value: "pilates-instructor",
    label: "Pilates Instructor",
    industry: "fitness-and-sports",
  },
  {
    value: "sports-coach",
    label: "Sports Coach",
    industry: "fitness-and-sports",
  },
  {
    value: "sports-club",
    label: "Sports Club",
    industry: "fitness-and-sports",
  },
  {
    value: "martial-arts-school",
    label: "Martial Arts School",
    industry: "fitness-and-sports",
  },
  {
    value: "other-fitness",
    label: "Other",
    industry: "fitness-and-sports",
  },

  
  
  // Food & Beverage
  {
    value: "restaurant",
    label: "Restaurant",
    industry: "food-and-beverage",
  },
  {
    value: "cafe",
    label: "Café",
    industry: "food-and-beverage",
  },
  {
    value: "coffee-shop",
    label: "Coffee Shop",
    industry: "food-and-beverage",
  },
  {
    value: "bakery",
    label: "Bakery",
    industry: "food-and-beverage",
  },
  {
    value: "caterer",
    label: "Caterer",
    industry: "food-and-beverage",
  },
  {
    value: "food-truck",
    label: "Food Truck",
    industry: "food-and-beverage",
  },
  {
    value: "takeaway",
    label: "Takeaway",
    industry: "food-and-beverage",
  },
  {
    value: "bar",
    label: "Bar",
    industry: "food-and-beverage",
  },
  {
    value: "pub",
    label: "Pub",
    industry: "food-and-beverage",
  },
  {
    value: "dessert-shop",
    label: "Dessert Shop",
    industry: "food-and-beverage",
  },
  {
    value: "food-producer",
    label: "Food Producer",
    industry: "food-and-beverage",
  },
  {
    value: "other-food-beverage",
    label: "Other",
    industry: "food-and-beverage",
  },

  // Healthcare & Social Care
  {
    value: "doctor",
    label: "Doctor",
    industry: "healthcare-and-social-care",
  },
  {
    value: "dentist",
    label: "Dentist",
    industry: "healthcare-and-social-care",
  },
  {
    value: "nurse",
    label: "Nurse",
    industry: "healthcare-and-social-care",
  },
  {
    value: "therapist",
    label: "Therapist",
    industry: "healthcare-and-social-care",
  },
  {
    value: "physiotherapist",
    label: "Physiotherapist",
    industry: "healthcare-and-social-care",
  },
  {
    value: "occupational-therapist",
    label: "Occupational Therapist",
    industry: "healthcare-and-social-care",
  },
  {
    value: "counsellor",
    label: "Counsellor",
    industry: "healthcare-and-social-care",
  },
  {
    value: "psychologist",
    label: "Psychologist",
    industry: "healthcare-and-social-care",
  },
  {
    value: "nutritionist",
    label: "Nutritionist",
    industry: "healthcare-and-social-care",
  },
  {
    value: "dietitian",
    label: "Dietitian",
    industry: "healthcare-and-social-care",
  },
  {
    value: "chiropractor",
    label: "Chiropractor",
    industry: "healthcare-and-social-care",
  },
  {
    value: "osteopath",
    label: "Osteopath",
    industry: "healthcare-and-social-care",
  },
  {
    value: "optician",
    label: "Optician",
    industry: "healthcare-and-social-care",
  },
  {
    value: "care-provider",
    label: "Care Provider",
    industry: "healthcare-and-social-care",
  },
  {
    value: "home-care-provider",
    label: "Home Care Provider",
    industry: "healthcare-and-social-care",
  },
  {
    value: "veterinary-practice",
    label: "Veterinary Practice",
    industry: "healthcare-and-social-care",
  },
  {
    value: "other-healthcare",
    label: "Other",
    industry: "healthcare-and-social-care",
  },

  // Hospitality & Accommodation
  {
    value: "hotel",
    label: "Hotel",
    industry: "hospitality-and-accommodation",
  },
  {
    value: "bed-and-breakfast",
    label: "Bed & Breakfast",
    industry: "hospitality-and-accommodation",
  },
  {
    value: "guest-house",
    label: "Guest House",
    industry: "hospitality-and-accommodation",
  },
  {
    value: "holiday-let",
    label: "Holiday Let",
    industry: "hospitality-and-accommodation",
  },
  {
    value: "hostel",
    label: "Hostel",
    industry: "hospitality-and-accommodation",
  },
  {
    value: "self-catering-accommodation",
    label: "Self-Catering Accommodation",
    industry: "hospitality-and-accommodation",
  },
  {
    value: "other-hospitality",
    label: "Other",
    industry: "hospitality-and-accommodation",
  },

  // Legal & Consulting
  {
    value: "solicitor",
    label: "Solicitor",
    industry: "legal-and-consulting",
  },
  {
    value: "barrister",
    label: "Barrister",
    industry: "legal-and-consulting",
  },
  {
    value: "law-firm",
    label: "Law Firm",
    industry: "legal-and-consulting",
  },
  {
    value: "legal-consultant",
    label: "Legal Consultant",
    industry: "legal-and-consulting",
  },
  {
    value: "business-consultant",
    label: "Business Consultant",
    industry: "legal-and-consulting",
  },
  {
    value: "management-consultant",
    label: "Management Consultant",
    industry: "legal-and-consulting",
  },
  {
    value: "hr-consultant",
    label: "HR Consultant",
    industry: "legal-and-consulting",
  },
  {
    value: "recruitment-consultant",
    label: "Recruitment Consultant",
    industry: "legal-and-consulting",
  },
  {
    value: "other-legal-consulting",
    label: "Other",
    industry: "legal-and-consulting",
  },

  // Manufacturing
  {
    value: "manufacturer",
    label: "Manufacturer",
    industry: "manufacturing",
  },
  {
    value: "food-manufacturer",
    label: "Food Manufacturer",
    industry: "manufacturing",
  },
  {
    value: "clothing-manufacturer",
    label: "Clothing Manufacturer",
    industry: "manufacturing",
  },
  {
    value: "furniture-maker",
    label: "Furniture Maker",
    industry: "manufacturing",
  },
  {
    value: "product-manufacturer",
    label: "Product Manufacturer",
    industry: "manufacturing",
  },
  {
    value: "craft-manufacturer",
    label: "Craft Manufacturer",
    industry: "manufacturing",
  },
  {
    value: "other-manufacturing",
    label: "Other",
    industry: "manufacturing",
  },

  // Marketing & Advertising
  {
    value: "marketing-agency",
    label: "Marketing Agency",
    industry: "marketing-and-advertising",
  },
  {
    value: "digital-marketing-agency",
    label: "Digital Marketing Agency",
    industry: "marketing-and-advertising",
  },
  {
    value: "social-media-manager",
    label: "Social Media Manager",
    industry: "marketing-and-advertising",
  },
  {
    value: "social-media-agency",
    label: "Social Media Agency",
    industry: "marketing-and-advertising",
  },
  {
    value: "seo-consultant",
    label: "SEO Consultant",
    industry: "marketing-and-advertising",
  },
  {
    value: "advertising-agency",
    label: "Advertising Agency",
    industry: "marketing-and-advertising",
  },
  {
    value: "branding-agency",
    label: "Branding Agency",
    industry: "marketing-and-advertising",
  },
  {
    value: "public-relations",
    label: "Public Relations",
    industry: "marketing-and-advertising",
  },
  {
    value: "other-marketing",
    label: "Other",
    industry: "marketing-and-advertising",
  },

  // Non-profit & Community
  {
    value: "charity",
    label: "Charity",
    industry: "non-profit-and-community",
  },
  {
    value: "community-organisation",
    label: "Community Organisation",
    industry: "non-profit-and-community",
  },
  {
    value: "social-enterprise",
    label: "Social Enterprise",
    industry: "non-profit-and-community",
  },
  {
    value: "community-group",
    label: "Community Group",
    industry: "non-profit-and-community",
  },
  {
    value: "religious-organisation",
    label: "Religious Organisation",
    industry: "non-profit-and-community",
  },
  {
    value: "other-non-profit",
    label: "Other",
    industry: "non-profit-and-community",
  },

  // Professional Services
  {
    value: "consultant",
    label: "Consultant",
    industry: "professional-services",
  },
  {
    value: "freelancer",
    label: "Freelancer",
    industry: "professional-services",
  },
  {
    value: "virtual-assistant",
    label: "Virtual Assistant",
    industry: "professional-services",
  },
  {
    value: "translator",
    label: "Translator",
    industry: "professional-services",
  },
  {
    value: "interpreter",
    label: "Interpreter",
    industry: "professional-services",
  },
  {
    value: "researcher",
    label: "Researcher",
    industry: "professional-services",
  },
  {
    value: "business-advisor",
    label: "Business Advisor",
    industry: "professional-services",
  },
  {
    value: "professional-coach",
    label: "Professional Coach",
    industry: "professional-services",
  },
  {
    value: "other-professional-services",
    label: "Other",
    industry: "professional-services",
  },

  // Retail & Shopping
  {
    value: "clothing-store",
    label: "Clothing Store",
    industry: "retail-and-shopping",
  },
  {
    value: "fashion-brand",
    label: "Fashion Brand",
    industry: "retail-and-shopping",
  },
  {
    value: "jewellery-store",
    label: "Jewellery Store",
    industry: "retail-and-shopping",
  },
  {
    value: "gift-shop",
    label: "Gift Shop",
    industry: "retail-and-shopping",
  },
  {
    value: "homeware-store",
    label: "Homeware Store",
    industry: "retail-and-shopping",
  },
  {
    value: "furniture-store",
    label: "Furniture Store",
    industry: "retail-and-shopping",
  },
  {
    value: "electronics-store",
    label: "Electronics Store",
    industry: "retail-and-shopping",
  },
  {
    value: "convenience-store",
    label: "Convenience Store",
    industry: "retail-and-shopping",
  },
  {
    value: "supermarket",
    label: "Supermarket",
    industry: "retail-and-shopping",
  },
  {
    value: "online-store",
    label: "Online Store",
    industry: "retail-and-shopping",
  },
  {
    value: "ecommerce-brand",
    label: "E-commerce Brand",
    industry: "retail-and-shopping",
  },
  {
    value: "market-stall",
    label: "Market Stall",
    industry: "retail-and-shopping",
  },
  {
    value: "other-retail",
    label: "Other",
    industry: "retail-and-shopping",
  },

  // Technology & Digital
  {
    value: "software-developer",
    label: "Software Developer",
    industry: "technology-and-digital",
  },
  {
    value: "web-developer",
    label: "Web Developer",
    industry: "technology-and-digital",
  },
  {
    value: "app-developer",
    label: "App Developer",
    industry: "technology-and-digital",
  },
  {
    value: "frontend-developer",
    label: "Frontend Developer",
    industry: "technology-and-digital",
  },
  {
    value: "backend-developer",
    label: "Backend Developer",
    industry: "technology-and-digital",
  },
  {
    value: "full-stack-developer",
    label: "Full-Stack Developer",
    industry: "technology-and-digital",
  },
  {
    value: "mobile-developer",
    label: "Mobile Developer",
    industry: "technology-and-digital",
  },
  {
    value: "ai-developer",
    label: "AI Developer",
    industry: "technology-and-digital",
  },
  {
    value: "ai-consultant",
    label: "AI Consultant",
    industry: "technology-and-digital",
  },
  {
    value: "software-company",
    label: "Software Company",
    industry: "technology-and-digital",
  },
  {
    value: "saas-company",
    label: "SaaS Company",
    industry: "technology-and-digital",
  },
  {
    value: "it-consultant",
    label: "IT Consultant",
    industry: "technology-and-digital",
  },
  {
    value: "cybersecurity",
    label: "Cybersecurity",
    industry: "technology-and-digital",
  },
  {
    value: "data-services",
    label: "Data Services",
    industry: "technology-and-digital",
  },
  {
    value: "cloud-services",
    label: "Cloud Services",
    industry: "technology-and-digital",
  },
  {
    value: "technical-support",
    label: "Technical Support",
    industry: "technology-and-digital",
  },
  {
    value: "other-technology",
    label: "Other",
    industry: "technology-and-digital",
  },

  // Transport & Logistics
  {
    value: "taxi-driver",
    label: "Taxi Driver",
    industry: "transport-and-logistics",
  },
  {
    value: "private-hire-driver",
    label: "Private Hire Driver",
    industry: "transport-and-logistics",
  },
  {
    value: "delivery-driver",
    label: "Delivery Driver",
    industry: "transport-and-logistics",
  },
  {
    value: "courier",
    label: "Courier",
    industry: "transport-and-logistics",
  },
  {
    value: "removal-company",
    label: "Removal Company",
    industry: "transport-and-logistics",
  },
  {
    value: "haulage-company",
    label: "Haulage Company",
    industry: "transport-and-logistics",
  },
  {
    value: "logistics-company",
    label: "Logistics Company",
    industry: "transport-and-logistics",
  },
  {
    value: "transport-company",
    label: "Transport Company",
    industry: "transport-and-logistics",
  },
  {
    value: "other-transport",
    label: "Other",
    industry: "transport-and-logistics",
  },

  // Travel & Tourism
  {
    value: "travel-agent",
    label: "Travel Agent",
    industry: "travel-and-tourism",
  },
  {
    value: "tour-operator",
    label: "Tour Operator",
    industry: "travel-and-tourism",
  },
  {
    value: "tour-guide",
    label: "Tour Guide",
    industry: "travel-and-tourism",
  },
  {
    value: "travel-consultant",
    label: "Travel Consultant",
    industry: "travel-and-tourism",
  },
  {
    value: "tourism-business",
    label: "Tourism Business",
    industry: "travel-and-tourism",
  },
  {
    value: "other-travel",
    label: "Other",
    industry: "travel-and-tourism",
  },

  // Other
  {
    value: "other-business",
    label: "Other",
    industry: "other",
  },
];