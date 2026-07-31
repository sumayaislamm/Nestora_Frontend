export type TAvailability = "AVAILABLE" | "RENTED";

export interface ICategory {
  id: string;
  name: string;
}

export interface ILandlord {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  profileImage: string | null;
}

export interface IProperty {
  id: string;
  title: string;
  description: string;
  address: string;
  location: string;
  rent: number;
  bedrooms: number;
  bathrooms: number;
  size?: number | null;

  availability: TAvailability;

  amenities: string[];
  images: string[];

  category?: ICategory;

  landlord?: ILandlord;

  createdAt: string;
  updatedAt: string;
}

interface IPropertyResponse {
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: IProperty[];
}