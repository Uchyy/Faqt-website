export type FaqtItem = {
  id: string;

  question: string;
  answer: string;

  // Display / management
  isPublished: boolean;

  // Metadata
  createdAt?: Date;
  updatedAt?: Date;
};

export const emptyFaqtItem: FaqtItem = {
  id: "",
  question: "",
  answer: "",
  isPublished: true,
};


/**
 * 
 * const publicFaqts = faqts
  .filter((faqt) => faqt.isPublished)
  .sort((a, b) => a.order - b.order);
 */