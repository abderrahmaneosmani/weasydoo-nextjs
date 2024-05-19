import { RatingType } from "../rating/Rating";

export type ProductType = {
  id: number;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: RatingType;
};
