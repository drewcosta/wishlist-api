import { ObjectId } from "mongodb";
import { WishlistItem } from "../models";
import { connectToDB } from "../data/db";

async function findAll(): Promise<WishlistItem[]> {
  console.log('Conectando ao banco de dados para obter todos os itens da wishlist');
  const db = await connectToDB();
  console.log('Conexão com o banco de dados estabelecida');
  const wishlist = await db.collection("wishlist").find({}).toArray();
  console.log('Itens encontrados no banco de dados:', wishlist);
  return wishlist;
}

async function findById(id: string): Promise<WishlistItem> {
  const db = await connectToDB();
  const item = db.collection("wishlist").findOne({ _id: new ObjectId(id) });

  return item;
}

async function createItem(item: WishlistItem): Promise<WishlistItem> {
  const db = await connectToDB();
  const addItem = db.collection("wishlist").insertOne(item);

  return addItem;
}

async function updateItem(id: string, item: Partial<WishlistItem>): Promise<WishlistItem> {
  const db = await connectToDB();
  const updateItem = db.collection("wishlist").updateOne({ _id: new ObjectId(id) }, { $set: item })

  return updateItem;
}

async function deleteItem(id: string): Promise<WishlistItem> {
  const db = await connectToDB();
  const deleteItem = db.collection("wishlist").deleteOne({ _id: new ObjectId(id) });

  return deleteItem;
}

export default {
  findAll,
  findById,
  createItem,
  updateItem,
  deleteItem
}