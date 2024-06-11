import { ObjectId } from "mongodb";

export interface WishlistItem {
  _id: ObjectId;
  name: string;
  price: number;
}