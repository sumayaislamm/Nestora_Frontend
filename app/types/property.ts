


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

/*
|--------------------------------------------------------------------------
| Property Create Payload
|--------------------------------------------------------------------------
*/

export interface ICreateProperty {
  title: string;
  description: string;
  location: string;
  address: string;
  rent: number;
  bedrooms: number;
  bathrooms: number;
  size?: number;
  availability: TAvailability;
  amenities: string[];
  images: string[];
  categoryId: string;
}