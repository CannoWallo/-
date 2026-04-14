export interface Place {
  id: string;
  name: string;
  description: string;
  address: string;
  district: string;
  price: number;
  category: string;
  tags: string[];
  image: string;
  lat: number;
  lng: number;
}
