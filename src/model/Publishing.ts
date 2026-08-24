export type PublishingSection = {
  isPublished: boolean;

  slug: string;
  publicUrl: string;
  qrCodeUrl: string;

  publishedAt?: Date | null;
  updatedAt: Date;
};

