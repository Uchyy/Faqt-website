export type FaqtItem = {
  id: string;
  position: number;
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
  position: 0,
  question: "",
  answer: "",
  isPublished: true,
};


/**
 * 
 * const publicFaqts = faqts
  .filter((faqt) => faqt.isPublished)
  .sort((a, b) => a.order - b.order);


  faqts.sort((a, b) => a.position - b.position);

    const reorderedFaqts = faqts.map((faqt, index) => ({
      ...faqt,
      position: index,
  }));
 */